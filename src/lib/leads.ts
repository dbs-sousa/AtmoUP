import { z } from "zod";
import { LEAD_NEED_TYPES, CONTACT_CONFIG } from "../config/site";
import { equipmentAreas, industrySegments } from "../data/architecture";

export const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "li_fat_id"] as const;
export const ATTRIBUTION_KEY = "atmoup.lead-attribution";
export const CONVERSION_KEY = "atmoup.pending-conversion";
export const SOURCE_KEY = "atmoup.lead-source";
export type Attribution = Record<(typeof attributionKeys)[number], string>;
const safeText = (max: number) => z.string().trim().max(max).refine((s) => !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(s), "Remova os caracteres inválidos.");
const requiredText = (max: number) => safeText(max).refine((s) => s.length > 0, "Preencha este campo.");
export const leadSchema = z.object({
  name: requiredText(100),
  company: requiredText(150),
  email: z.string().trim().email("Informe um e-mail válido.").max(255),
  phone: z.string().trim().max(30).regex(/^[+\d\s().-]*$/, "Informe um telefone válido."),
  needType: z.enum(LEAD_NEED_TYPES, { errorMap: () => ({ message: "Selecione o tipo de necessidade." }) }),
  message: requiredText(3000),
  role: safeText(100),
  segment: safeText(100).refine((v) => !v || industrySegments.some((s) => s.name === v), "Selecione um segmento válido."),
  equipment: safeText(100).refine((v) => !v || equipmentAreas.some((e) => e.name === v), "Selecione um equipamento válido."),
  privacyConsent: z.literal(true, { errorMap: () => ({ message: "Concorde com a Política de Privacidade para enviar." }) }),
  website: z.literal("", { errorMap: () => ({ message: "Não foi possível enviar a solicitação." }) }),
});

export function captureAttribution(search: string, storage: Pick<Storage, "getItem" | "setItem">): Attribution {
  let saved: Record<string, unknown> = {};
  try { saved = JSON.parse(storage.getItem(ATTRIBUTION_KEY) || "{}"); } catch { /* Storage may be unavailable. */ }
  const params = new URLSearchParams(search);
  const result = Object.fromEntries(attributionKeys.map((key) => {
    const value = params.get(key) ?? (typeof saved?.[key] === "string" ? saved[key] as string : "");
    return [key, value.replace(/[\u0000-\u001f]/g, "").slice(0, 500)];
  })) as Attribution;
  try { storage.setItem(ATTRIBUTION_KEY, JSON.stringify(result)); } catch { /* Submit still works without storage. */ }
  return result;
}

export function getWhatsAppUrl() {
  const number = CONTACT_CONFIG.whatsappNumber;
  return number && /^\d{10,15}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappDefaultMessage)}`
    : null;
}

export function captureSource(search: string, fallback: string, storage: Pick<Storage, "getItem" | "setItem">) {
  let previous: string | null = null;
  try { previous = storage.getItem(SOURCE_KEY); } catch { /* Storage may be blocked. */ }
  const source = (new URLSearchParams(search).get("origem")?.trim() || previous || fallback).replace(/[\u0000-\u001f]/g, "").slice(0, 200);
  try { storage.setItem(SOURCE_KEY, source); } catch { /* Source remains available in memory. */ }
  return source;
}

export function consumeConversion(storage: Pick<Storage, "getItem" | "removeItem">) {
  try {
    const marker = storage.getItem(CONVERSION_KEY);
    if (!marker) return null;
    storage.removeItem(CONVERSION_KEY);
    const value = JSON.parse(marker);
    return typeof value?.id === "string" && typeof value?.createdAt === "number" && Date.now() - value.createdAt < 30 * 60 * 1000
      ? { event: "generate_lead", form_name: "technical_evaluation", event_id: value.id }
      : null;
  } catch { return null; }
}

export function buildLeadPayload(
  data: z.infer<typeof leadSchema>,
  meta: { source: string; pageOrigin: string; attribution: Attribution; accessKey?: string | null; submittedAt?: string },
) {
  const { website: _website, ...fields } = data;
  const web3FormsFields = meta.accessKey
    ? {
        access_key: meta.accessKey,
        subject: "Nova solicitação técnica — Site AtmoUP",
        from_name: "Site AtmoUP",
        botcheck: false,
      }
    : {};
  return {
    ...web3FormsFields,
    ...fields,
    source: meta.source,
    pageOrigin: meta.pageOrigin,
    ...meta.attribution,
    submittedAt: meta.submittedAt ?? new Date().toISOString(),
  };
}

export function isSubmissionAccepted(responseOk: boolean, body: unknown) {
  if (!responseOk) return false;
  if (body && typeof body === "object" && "success" in body && (body as { success?: unknown }).success === false) {
    return false;
  }
  return true;
}