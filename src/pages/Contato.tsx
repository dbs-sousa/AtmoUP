import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Info } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import { CONTACT_CONFIG, LEAD_NEED_TYPES } from "@/config/site";

const Contato = () => {
  const [searchParams] = useSearchParams();
  const source = searchParams.get("origem")?.trim() || "pagina-contato";
  const [submitting, setSubmitting] = useState(false);
  const [channelNotice, setChannelNotice] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    segment: "",
    equipment: "",
    needType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.company.trim() ||
      !formData.email.trim() ||
      !formData.needType ||
      !formData.message.trim()
    ) {
      toast.error("Por favor, preencha os campos obrigatórios.");
      return;
    }

    if (!CONTACT_CONFIG.leadEndpoint) {
      setChannelNotice(true);
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
        throw new Error("Falha ao enviar demanda");
      }

      toast.success("Demanda técnica transmitida com sucesso.");
      setFormData({
        name: "",
        company: "",
        role: "",
        email: "",
        phone: "",
        segment: "",
        equipment: "",
        needType: "",
        message: "",
      });
    } catch {
      toast.error(
        "Não foi possível transmitir sua demanda no momento. Tente novamente em instantes."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: CONTACT_CONFIG.phone ?? "Canal telefônico a configurar antes da publicação",
      link: CONTACT_CONFIG.phoneHref,
    },
    {
      icon: Mail,
      title: "E-mail",
      content: CONTACT_CONFIG.email ?? "E-mail comercial a configurar antes da publicação",
      link: CONTACT_CONFIG.email ? `mailto:${CONTACT_CONFIG.email}` : null,
    },
    {
      icon: MapPin,
      title: "Atuação",
      content: CONTACT_CONFIG.location,
      link: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: CONTACT_CONFIG.businessHours,
      link: null,
    },
  ];

  return (
    <main className="flex flex-col">
      <PageSeo
        title="Contato — Falar com a Engenharia | AtmoUP"
        description="Solicite avaliação técnica, diagnóstico industrial, retrofit ou engenharia de implantação com a AtmoUP. Sediada em São Paulo, SP, com atendimento nacional."
        path="/contato"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contato", path: "/contato" },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20" aria-labelledby="contato-title">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="contato-title" className="text-3xl md:text-5xl font-bold mb-6">Falar com a Engenharia</h1>
            <p className="text-xl text-primary-foreground/90">
              Envie sua demanda técnica para avaliação de equipamentos e sistemas industriais. Base em São Paulo, SP, com atendimento em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Solicitar avaliação técnica
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="source" value={source} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-primary mb-1.5">
                      Empresa *
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nome da empresa"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-primary mb-1.5">
                      Cargo
                    </label>
                    <Input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Ex.: Gerente de Engenharia"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">
                      E-mail corporativo *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@empresa.com.br"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="DDD + número"
                    />
                  </div>
                  <div>
                    <label htmlFor="segment" className="block text-sm font-semibold text-primary mb-1.5">
                      Segmento industrial
                    </label>
                    <Input
                      id="segment"
                      type="text"
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      placeholder="Ex.: Siderurgia, Metalurgia, Agroindústria"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="equipment" className="block text-sm font-semibold text-primary mb-1.5">
                      Equipamento ou sistema
                    </label>
                    <Input
                      id="equipment"
                      type="text"
                      value={formData.equipment}
                      onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                      placeholder="Ex.: Ventilador industrial, filtro de mangas"
                    />
                  </div>
                  <div>
                    <label htmlFor="needType" className="block text-sm font-semibold text-primary mb-1.5">
                      Tipo de necessidade *
                    </label>
                    <select
                      id="needType"
                      value={formData.needType}
                      onChange={(e) => setFormData({ ...formData, needType: e.target.value })}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Selecione o tipo de necessidade</option>
                      {LEAD_NEED_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">
                    Descrição da demanda *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva brevemente o equipamento, o cenário operacional ou a necessidade técnica"
                    rows={5}
                    required
                  />
                </div>

                {channelNotice && !CONTACT_CONFIG.leadEndpoint && (
                  <div
                    role="status"
                    className="flex items-start gap-2.5 rounded-lg border border-accent/50 bg-accent/10 p-3.5 text-sm text-primary"
                  >
                    <Info className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                    <p>
                      Formulário preparado para envio. Configure o canal de recebimento antes da publicação.
                    </p>
                  </div>
                )}

                <Button type="submit" size="lg" variant="accent" className="w-full" disabled={submitting}>
                  {submitting ? "Enviando..." : "Solicitar avaliação técnica"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-bold text-primary mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary/20 p-3 rounded-lg shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                          {!info.link ? (
                            <p className="text-foreground/70">{info.content}</p>
                          ) : (
                            <a
                              href={info.link}
                              className="text-foreground/70 hover:text-accent transition-colors"
                            >
                              {info.content}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {CONTACT_CONFIG.whatsappNumber && (
                <Card className="bg-primary text-primary-foreground border-primary">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl mb-3">WhatsApp Técnico</h3>
                    <p className="mb-4 text-primary-foreground/85">
                      Converse diretamente com a equipe da AtmoUP sobre sua demanda industrial.
                    </p>
                    <Button asChild variant="accent" className="w-full">
                      <a
                        href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappDefaultMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Falar via WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
