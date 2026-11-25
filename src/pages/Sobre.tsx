import { Link } from "react-router-dom";
import { ArrowRight, SearchCheck, Compass, Wrench, Gauge, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeo from "@/components/PageSeo";
import { BASE_URL, SITE_NAME } from "@/config/site";

const Sobre = () => {
  const pillars = [
    {
      icon: SearchCheck,
      title: "Diagnóstico Técnico",
      description:
        "Investigação em campo, medições operacionais e análise de causa raiz para compreender o comportamento real de equipamentos e sistemas.",
      to: "/diagnostico-tecnico",
    },
    {
      icon: Compass,
      title: "Engenharia de Implantação",
      description:
        "Especificação técnica, dimensionamento, documentação de engenharia e acompanhamento de implantação e comissionamento.",
      to: "/engenharia-de-implantacao",
    },
    {
      icon: Wrench,
      title: "Retrofit e Adequação",
      description:
        "Modernização estrutural, aerodinâmica e operacional para adequar equipamentos existentes a novas condições de processo.",
      to: "/retrofit-e-adequacao",
    },
    {
      icon: Gauge,
      title: "Engenharia de Performance",
      description:
        "Avaliação de rendimento, perda de carga, consumo energético e confiabilidade operacional de sistemas industriais.",
      to: "/engenharia-de-performance",
    },
  ];

  const principles = [
    "Análise técnica antes da prescrição de escopo ou investimento.",
    "Visão integrada entre equipamento, rede, processo e operação.",
    "Critério de engenharia aplicado a decisões de CAPEX, retrofit e confiabilidade.",
    "Atuação técnica independente, orientada ao desempenho real da planta.",
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${BASE_URL}/sobre`,
    description:
      "Engenharia aplicada para elevar o desempenho, a confiabilidade e a eficiência dos equipamentos e sistemas industriais.",
    areaServed: { "@type": "Country", name: "Brasil" },
  };

  return (
    <main className="flex flex-col">
      <PageSeo
        title="A AtmoUP — Engenharia de Equipamentos Industriais"
        description="Conheça o posicionamento e a atuação da ATMOUP — Engenharia de Equipamentos Industriais: diagnóstico técnico, implantação, retrofit e engenharia de performance."
        path="/sobre"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "A AtmoUP", path: "/sobre" },
        ]}
        schema={organizationSchema}
      />

      <section className="bg-primary text-primary-foreground py-16 md:py-24" aria-labelledby="sobre-title">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            ATMOUP — Engenharia de Equipamentos Industriais
          </p>
          <h1 id="sobre-title" className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Engenharia para elevar o desempenho industrial.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
            A AtmoUP atua com engenharia aplicada para elevar o desempenho, a confiabilidade e a eficiência dos equipamentos e sistemas industriais, com base em São Paulo, SP, e atendimento em todo o Brasil.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Engenharia aplicada a equipamentos e sistemas industriais
          </h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              O trabalho da AtmoUP é voltado a equipes de engenharia, manutenção, produção, compras técnicas e projetos de CAPEX que precisam compreender causas reais de perda de desempenho, especificar corretamente novos sistemas ou adequar equipamentos já instalados.
            </p>
            <p>
              Nossa competência em engenharia abrange ventiladores industriais, filtros de mangas, sistemas de exaustão, dutos e coifas, precipitadores eletrostáticos, ciclones e separadores, lavadores de gases e sistemas de transporte pneumático — aplicando critérios técnicos em frentes como despoeiramento, exaustão industrial e controle de poluição do ar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/40 border-y border-border/60">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Quatro pilares de atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <Link
                key={pillar.to}
                to={pillar.to}
                className="p-6 rounded-xl border border-border/80 bg-background hover:border-primary/50 transition-colors flex flex-col"
              >
                <pillar.icon className="h-6 w-6 text-accent mb-4" strokeWidth={1.75} />
                <h3 className="text-lg font-bold text-primary mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {pillar.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  Conhecer escopo
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Princípios técnicos de trabalho
          </h2>
          <ul className="space-y-3 mb-10">
            {principles.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="accent" size="lg">
            <Link to="/contato?origem=pagina-sobre">
              Falar com a Engenharia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Sobre;