import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, SearchCheck, Compass, Wrench, Gauge } from "lucide-react";
import heroImage from "@/assets/industrial-steel-plant.jpg";
import fieldInspectionImage from "@/assets/industrial-field-inspection.jpg";
import baghouseImage from "@/assets/industrial-baghouse-ducts.jpg";
import { homePillars, homeEquipments, homeSectors } from "@/data/homeContent";
import HomeLowerSections from "@/components/home/HomeLowerSections";
import PageSeo from "@/components/PageSeo";
import { BASE_URL, SITE_NAME } from "@/config/site";

const pillarIcons = [SearchCheck, Compass, Wrench, Gauge];

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description:
      "Engenharia aplicada para elevar o desempenho, a confiabilidade e a eficiência dos equipamentos e sistemas industriais.",
    url: `${BASE_URL}/`,
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pilares de Engenharia Industrial",
      itemListElement: [
        {
          "@type": "Service",
          name: "Diagnóstico Técnico",
          description:
            "Investigação em campo, análise de causa raiz e avaliação técnica de equipamentos industriais",
        },
        {
          "@type": "Service",
          name: "Engenharia de Implantação",
          description:
            "Especificação, engenharia básica e detalhada, acompanhamento e comissionamento",
        },
        {
          "@type": "Service",
          name: "Retrofit e Adequação",
          description:
            "Modernização estrutural, aerodinâmica e operacional de equipamentos e sistemas industriais",
        },
        {
          "@type": "Service",
          name: "Engenharia de Performance",
          description:
            "Avaliação de rendimento, balanceamento de redes e otimização energética",
        },
      ],
    },
  };

  return (
    <main className="flex flex-col">
      <PageSeo
        title="AtmoUP — Engenharia de Equipamentos Industriais"
        description="Engenharia de equipamentos industriais em São Paulo com atendimento nacional. Diagnóstico técnico, engenharia de implantação, retrofit e engenharia de performance."
        path="/"
        schema={homeSchema}
      />
      {/* Seção 1 — Hero */}
      <section className="relative py-24 md:py-36 flex items-center overflow-hidden bg-primary text-primary-foreground" aria-label="Apresentação principal">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Planta industrial com sistemas de exaustão, dutos e filtragem de alta capacidade"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent mb-4">
              AtmoUP · Engenharia de Equipamentos Industriais
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">
              Engenharia para elevar o desempenho industrial.
            </h1>
            <p className="text-lg md:text-xl mb-10 text-primary-foreground/90 leading-relaxed max-w-2xl">
              Diagnóstico técnico, engenharia de implantação, retrofit e avaliação de performance de equipamentos e sistemas industriais.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5">
              <Button asChild size="lg" variant="accent" className="h-12 px-7">
                <Link to="/contato">
                  Solicitar avaliação técnica
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 border-primary-foreground/35 text-primary-foreground bg-primary/30 hover:bg-primary-foreground hover:text-primary">
                <Link to="/engenharia-de-equipamentos">Conhecer nossos serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Problema */}
      <section className="py-24 bg-background border-b border-border/60" aria-labelledby="problema">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 id="problema" className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Seu equipamento está entregando o desempenho esperado?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Equipamentos industriais podem perder desempenho por problemas de dimensionamento, alterações de processo, desgaste, condições operacionais diferentes das previstas em projeto ou falhas de integração entre seus componentes.
              </p>
              <p className="text-base font-medium text-foreground leading-relaxed">
                Antes de substituir um ativo ou investir em uma nova solução, é fundamental entender tecnicamente a causa do problema.
              </p>
              <div className="pt-3">
                <Button asChild variant="outline">
                  <Link to="/diagnostico-tecnico">
                    Conheça nosso diagnóstico técnico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <figure className="overflow-hidden rounded-xl border border-border bg-muted/30">
                <img
                  src={fieldInspectionImage}
                  alt="Engenheiro de campo realizando inspeção e medição de vazão em ventilador centrífugo industrial"
                  className="w-full h-auto object-cover aspect-[3/2]"
                  loading="lazy"
                  width={1344}
                  height={896}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 — O Que Fazemos */}
      <section className="py-24 bg-muted/50" aria-labelledby="o-que-fazemos">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl mb-14">
            <h2 id="o-que-fazemos" className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Engenharia onde o equipamento encontra o processo.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homePillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Compass;
              return (
                <Card key={pillar.slug} className="border-border/80 bg-background hover:border-primary/40 transition-colors shadow-none hover:shadow-sm">
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="bg-muted w-11 h-11 rounded-lg flex items-center justify-center mb-6 border border-border/60">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-primary">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                      {pillar.description}
                    </p>
                    <Link
                      to={`/${pillar.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                    >
                      Saiba mais
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção 4 — Equipamentos e Sistemas */}
      <section className="py-24 bg-background" aria-labelledby="equipamentos-sistemas">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <h2 id="equipamentos-sistemas" className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Engenharia aplicada a equipamentos e sistemas industriais.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Atuamos na avaliação, especificação, dimensionamento, implantação, adequação e retrofit de equipamentos e sistemas industriais.
              </p>
            </div>
            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-xl border border-border bg-muted/30">
                <img
                  src={baghouseImage}
                  alt="Filtro de mangas industrial, ciclones separadores e rede de dutos metálicos"
                  className="w-full h-44 md:h-48 object-cover"
                  loading="lazy"
                  width={1344}
                  height={896}
                />
              </figure>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {homeEquipments.map((item) => (
              <Link
                key={item.slug}
                to={`/equipamentos/${item.slug}`}
                className="p-5 rounded-lg border border-border/80 bg-background hover:border-primary/50 hover:bg-muted/30 transition-colors flex items-center justify-between gap-3"
              >
                <span className="text-sm font-semibold text-primary">{item.name}</span>
                <ArrowRight className="h-4 w-4 text-accent shrink-0" />
              </Link>
            ))}
          </div>

          <Button asChild variant="outline" className="whitespace-normal text-center h-auto py-2.5">
            <Link to="/equipamentos">
              Conheça todos os equipamentos e sistemas
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Seção 5 — Setores */}
      <section className="py-24 bg-muted/50 border-t border-border/60" aria-labelledby="setores">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <h2 id="setores" className="text-3xl md:text-4xl font-bold text-primary max-w-2xl">
              Conhecimento técnico aplicado à realidade de cada indústria.
            </h2>
            <Button asChild variant="outline">
              <Link to="/segmentos">
                Conheça nossos segmentos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeSectors.map((sector) => (
              <Link
                key={sector.slug}
                to={`/segmentos/${sector.slug}`}
                className="p-6 rounded-lg bg-background border border-border/80 hover:border-primary/50 transition-colors flex flex-col"
              >
                <h3 className="text-base font-bold text-primary mb-2">{sector.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{sector.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeLowerSections />
    </main>
  );
};

export default Home;
