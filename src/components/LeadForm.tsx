import { useId, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONTACT_CONFIG, LEAD_NEED_TYPES } from "@/config/site";
import { equipmentAreas, industrySegments } from "@/data/architecture";
import { Attribution, attributionKeys, buildLeadPayload, captureAttribution, captureSource, CONVERSION_KEY, getWhatsAppUrl, isSubmissionAccepted, leadSchema } from "@/lib/leads";

const emptyForm = { name: "", company: "", email: "", phone: "", needType: "", message: "", role: "", segment: "", equipment: "", privacyConsent: false, website: "" };
type Field = keyof typeof emptyForm;

export default function LeadForm({ source }: { source: string }) {
  const id = useId();
  const location = useLocation();
  const navigate = useNavigate();
  const busy = useRef(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sendError, setSendError] = useState("");
  const [leadSource] = useState(() => {
    try { return captureSource(location.search, source, sessionStorage); } catch { return source.trim().slice(0, 200); }
  });
  const [attribution] = useState<Attribution>(() => {
    try { return captureAttribution(location.search, sessionStorage); }
    catch { return Object.fromEntries(attributionKeys.map((key) => [key, ""])) as Attribution; }
  });
  const whatsappUrl = getWhatsAppUrl();
  const update = (key: Field, value: string | boolean) => {
    setForm((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };
  const fieldError = (key: Field) => errors[key] && <p id={`${id}-${key}-error`} className="text-sm text-destructive mt-1" role="alert">{errors[key]}</p>;
  const input = (key: "name" | "company" | "email" | "phone" | "role", label: string, placeholder: string, required = false, maxLength = 100) => (
    <div className="min-w-0">
      <label htmlFor={`${id}-${key}`} className="block text-sm font-semibold text-primary mb-2">{label}{required ? " *" : ""}</label>
      <Input id={`${id}-${key}`} name={key} type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
        autoComplete={key === "name" ? "name" : key === "company" ? "organization" : key === "role" ? "organization-title" : key === "phone" ? "tel" : "email"}
        value={form[key]} onChange={(e) => update(key, e.target.value)} required={required} maxLength={maxLength}
        placeholder={placeholder} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `${id}-${key}-error` : undefined}
        className="h-12 min-w-0 py-3" />
      {fieldError(key)}
    </div>
  );
  const select = (key: "needType" | "segment" | "equipment", label: string, options: readonly string[], required = false) => (
    <div className="min-w-0">
      <label htmlFor={`${id}-${key}`} className="block text-sm font-semibold text-primary mb-2">{label}{required ? " *" : ""}</label>
      <Select name={key} value={form[key]} onValueChange={(value) => update(key, value === "not-informed" ? "" : value)} required={required}>
        <SelectTrigger id={`${id}-${key}`} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `${id}-${key}-error` : undefined}
          className="h-auto min-h-12 gap-2 text-left [&>span]:line-clamp-none [&>span]:whitespace-normal [&>span]:break-words">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent className="max-w-[calc(100vw-2rem)]">
          {!required && <SelectItem value="not-informed">Não informado</SelectItem>}
          {options.map((option) => <SelectItem key={option} value={option} className="whitespace-normal break-words">{option}</SelectItem>)}
        </SelectContent>
      </Select>
      {fieldError(key)}
    </div>
  );

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy.current) return;
    setSendError("");
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((issue) => [issue.path[0], issue.message])));
      if (form.website) setSendError("Não foi possível enviar sua solicitação. Tente novamente.");
      return;
    }
    const endpoint = CONTACT_CONFIG.leadEndpoint;
    if (!endpoint) {
      setSendError(import.meta.env.DEV ? "Configure o canal de recebimento para habilitar o envio." : "Não foi possível enviar sua solicitação no momento. Tente novamente mais tarde.");
      return;
    }
    busy.current = true;
    setSubmitting(true);
    try {
      const target = new URL(endpoint, window.location.origin);
      if (target.protocol !== "https:" && !(import.meta.env.DEV && target.origin === window.location.origin)) throw new Error("Invalid endpoint");
      const response = await fetch(target.href, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify(buildLeadPayload(result.data, {
          source: leadSource,
          pageOrigin: `${window.location.origin}${location.pathname}`,
          attribution,
          accessKey: CONTACT_CONFIG.web3FormsAccessKey,
        })),
      });
      let responseBody: unknown = null;
      try { responseBody = await response.json(); } catch { /* Non-JSON response */ }
      if (!isSubmissionAccepted(response.ok, responseBody)) throw new Error("Submission failed");
      const marker = { id: crypto.randomUUID(), createdAt: Date.now() };
      try { sessionStorage.setItem(CONVERSION_KEY, JSON.stringify(marker)); } catch { /* Navigate even when storage is unavailable. */ }
      navigate("/obrigado", { replace: true, state: { leadConfirmed: true, marker } });
    } catch {
      setSendError("Não foi possível enviar sua solicitação. Seus dados foram mantidos; tente novamente.");
    } finally {
      busy.current = false;
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} noValidate className="space-y-5 min-w-0" aria-label="Solicitar avaliação técnica">
      <input type="hidden" name="source" value={leadSource} />
      <input type="hidden" name="pageOrigin" value={`${window.location.origin}${location.pathname}`} />
      {attributionKeys.map((key) => <input key={key} type="hidden" name={key} value={attribution[key]} />)}
      <div hidden aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {input("name", "Nome", "Seu nome", true)}
        {input("company", "Empresa", "Nome da empresa", true, 150)}
        {input("email", "E-mail corporativo", "seu@empresa.com.br", true, 255)}
        {input("phone", "Telefone/WhatsApp", "DDD + número", false, 30)}
      </div>
      {select("needType", "Tipo de necessidade", LEAD_NEED_TYPES, true)}
      <div>
        <label htmlFor={`${id}-message`} className="block text-sm font-semibold text-primary mb-2">Descrição da demanda *</label>
        <Textarea id={`${id}-message`} name="message" value={form.message} onChange={(e) => update("message", e.target.value)}
          placeholder="Descreva sua demanda técnica" required maxLength={3000} rows={5} className="leading-relaxed min-h-32"
          aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${id}-message-error` : undefined} />
        {fieldError("message")}
      </div>
      <details className="border-t border-border pt-4">
        <summary className="cursor-pointer text-sm font-semibold text-primary">Informações adicionais (opcional)</summary>
        <div className="grid grid-cols-1 gap-4 pt-4">
          {select("segment", "Segmento industrial", industrySegments.map((s) => s.name))}
          {select("equipment", "Equipamento ou sistema", equipmentAreas.map((e) => e.name))}
          {input("role", "Cargo", "Seu cargo")}
        </div>
      </details>
      <div>
        <div className="flex items-start gap-3">
          <Checkbox id={`${id}-privacyConsent`} name="privacyConsent" required checked={form.privacyConsent} onCheckedChange={(value) => update("privacyConsent", value === true)}
            className="mt-1" aria-invalid={Boolean(errors.privacyConsent)} aria-describedby={errors.privacyConsent ? `${id}-privacyConsent-error` : undefined} />
          <label htmlFor={`${id}-privacyConsent`} className="text-sm leading-relaxed">Li e concordo com a <Link to="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Política de Privacidade</Link></label>
        </div>
        {fieldError("privacyConsent")}
      </div>
      {sendError && <div role="alert" className="border border-destructive/30 bg-destructive/5 rounded-md p-4 text-sm space-y-2">
        <p>{sendError}</p>
        {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-primary underline">Falar com a engenharia pelo WhatsApp</a>}
      </div>}
      <Button type="submit" variant="accent" size="lg" disabled={submitting} className="w-full min-h-14 h-auto py-4 whitespace-normal leading-snug hover:scale-100">
        {submitting ? "Enviando..." : "Solicitar avaliação técnica"}
      </Button>
    </form>
  );
}