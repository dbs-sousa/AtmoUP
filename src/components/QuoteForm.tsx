import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CONTACT_CONFIG } from "@/config/site";

interface QuoteFormProps {
  source: string;
  title?: string;
  description?: string;
}

const QuoteForm = ({
  source,
  title = "Solicitar avaliação técnica",
  description = "Preencha os dados abaixo para discutir sua demanda técnica com a engenharia da AtmoUP.",
}: QuoteFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!CONTACT_CONFIG.leadEndpoint) {
      toast.warning(
        "Formulário preparado para envio. Configure o canal de recebimento antes da publicação."
      );
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(CONTACT_CONFIG.leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          submittedAt: new Date().toISOString(),
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha no envio da solicitação");
      }

      toast.success("Solicitação técnica transmitida com sucesso.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch {
      toast.error(
        "Não foi possível transmitir sua solicitação no momento. Tente novamente mais tarde."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="shadow-industrial">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        {description && <p className="text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" value={source} name="source" />
          
          <div>
            <label htmlFor={`name-${source}`} className="block text-sm font-semibold text-primary mb-2">
              Nome Completo *
            </label>
            <Input
              id={`name-${source}`}
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor={`email-${source}`} className="block text-sm font-semibold text-primary mb-2">
              E-mail *
            </label>
            <Input
              id={`email-${source}`}
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor={`phone-${source}`} className="block text-sm font-semibold text-primary mb-2">
              Telefone
            </label>
            <Input
              id={`phone-${source}`}
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="DDD + número"
            />
          </div>

          <div>
            <label htmlFor={`company-${source}`} className="block text-sm font-semibold text-primary mb-2">
              Empresa
            </label>
            <Input
              id={`company-${source}`}
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Nome da empresa"
            />
          </div>

          <div>
            <label htmlFor={`message-${source}`} className="block text-sm font-semibold text-primary mb-2">
              Mensagem *
            </label>
            <Textarea
              id={`message-${source}`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Descreva sua necessidade ou projeto"
              rows={4}
              required
            />
          </div>

          <Button type="submit" size="lg" variant="accent" className="w-full" disabled={submitting}>
            {submitting ? "Enviando..." : "Solicitar avaliação técnica"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
