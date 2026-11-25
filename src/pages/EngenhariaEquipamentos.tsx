import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { engineeringPillars, equipmentAreas } from "@/data/architecture";
import { ArrowRight, CheckCircle2, Compass, Layers, RefreshCw, Gauge } from "lucide-react";
import PageSeo from "@/components/PageSeo";

const pillarIcons = [Compass, Layers, RefreshCw, Gauge];

const EngenhariaEquipamentos = () => {
  return (
    <div className="flex flex-col">
      <PageSeo
        title="Engenharia de Equipamentos Industriais | AtmoUP"
        description="Diagnóstico técnico industrial, engenharia de implantação, retrofit e engenharia de performance para equipamentos e sistemas industriais em todo o Brasil."
        path="/engenharia-de-equipamentos"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Engenharia de Equipamentos", path: "/engenharia-de-equipamentos" },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Engenharia de Equipamentos Industriais",
          provider: { "@type": "Organization", name: "ATMOUP" },
          areaServed: "Brasil",
        }}
      />
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Engenharia de Equipamentos Industriais
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Engenharia aplicada como base para desempenho, confiabilidade e eficiência industrial.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mb-8 leading-relaxed">
            A AtmoUP não vende soluções padronizadas de prateleira. Atuamos com engenharia própria para diagnosticar causas raiz, estruturar implantações, modernizar ativos existentes e otimizar sistemas industriais críticos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="accent" size="lg">
              <Link to="/contato">
                Falar com a Engenharia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-secondary/40 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/cases">Ver Estudos de Caso</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quatro pilares de atuação em engenharia
            </h2>
            <p className="text-muted-foreground text-lg">
              Cada etapa responde a um momento específico do ciclo de vida dos equipamentos e sistemas da sua planta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringPillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Compass;
              return (
                <Card key={pillar.slug} className="border-secondary/30 hover:border-primary/40 transition-all hover:shadow-md">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{pillar.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {pillar.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/${pillar.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                    >
                      Explorar {pillar.shortTitle}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/10 border-y border-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Onde aplicamos nossa engenharia
            </h2>
            <p className="text-muted-foreground">
              Os equipamentos são áreas de aplicação da nossa capacidade técnica — integrados ao processo, à operação e à manutenção da planta.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {equipmentAreas.map((eq) => (
              <Link
                key={eq.slug}
                to={`/equipamentos/${eq.slug}`}
                className="p-4 rounded-lg bg-background border border-secondary/30 hover:border-primary/40 transition-colors flex items-center justify-between gap-3"
              >
                <span className="font-semibold text-primary text-sm">{eq.name}</span>
                <ArrowRight className="h-4 w-4 text-accent shrink-0" />
              </Link>
            ))}
          </div>
          <Button asChild variant="outline">
            <Link to="/equipamentos">Ver todas as áreas de equipamentos e sistemas</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Precisa embasar uma decisão técnica ou resolver um gargalo operacional?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Converse diretamente com nossa equipe de engenharia sobre o cenário da sua planta.
          </p>
          <Button asChild variant="accent" size="lg">
            <Link to="/contato">
              Solicitar Avaliação Técnica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EngenhariaEquipamentos;