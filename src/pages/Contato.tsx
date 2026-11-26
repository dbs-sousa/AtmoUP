import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import LeadForm from "@/components/LeadForm";
import { CONTACT_CONFIG } from "@/config/site";

const Contato = () => {
  const [searchParams] = useSearchParams();
  const source = searchParams.get("origem")?.trim() || "pagina-contato";
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
  ].filter((info) => info.title !== "Telefone" && info.title !== "E-mail" || Boolean(info.link));

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
              <LeadForm source={source} />
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
