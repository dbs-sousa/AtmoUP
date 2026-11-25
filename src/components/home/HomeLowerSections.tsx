import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  homeDifferentials,
  homeMethodology,
  homeDemoCases,
  homeArticles,
} from "@/data/homeContent";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";

const HomeLowerSections = () => {
  return (
    <>
      {/* Seção 6 — Diferencial */}
      <section className="py-24 bg-background border-t border-border/60" aria-labelledby="diferencial">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl mb-14">
            <h2 id="diferencial" className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Antes de propor uma solução, entendemos o problema.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A AtmoUP combina engenharia, análise técnica e conhecimento de campo para compreender as condições reais de operação e desenvolver soluções tecnicamente adequadas às necessidades de cada instalação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeDifferentials.map((item) => (
              <div key={item.title} className="p-6 rounded-lg border border-border/80 bg-background">
                <CheckCircle2 className="h-5 w-5 text-accent mb-4" strokeWidth={1.75} />
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 7 — Metodologia */}
      <section className="py-24 bg-primary text-primary-foreground" aria-labelledby="metodologia">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-2xl mb-14">
            <h2 id="metodologia" className="text-3xl md:text-4xl font-bold mb-3">
              Da análise à solução.
            </h2>
            <p className="text-primary-foreground/80">
              Um processo técnico estruturado para reduzir incertezas e sustentar decisões de engenharia.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-8 right-8 h-px bg-primary-foreground/20" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
              {homeMethodology.map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.04]"
                >
                  <span className="inline-flex items-center justify-center h-7 px-2.5 rounded text-xs font-bold tracking-widest bg-primary text-accent border border-accent/40 mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-primary-foreground/75 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 8 — Cases */}
      <section className="py-24 bg-background" aria-labelledby="cases-home">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div className="max-w-2xl">
              <h2 id="cases-home" className="text-3xl md:text-4xl font-bold text-primary mb-3">
                Estudos de caso e cenários técnicos
              </h2>
              <p className="text-muted-foreground">
                Exemplo técnico demonstrativo. Cenário conceitual baseado em situações típicas de engenharia. Não representa projeto executado pela AtmoUP.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/cases">
                Ver cenários técnicos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {homeDemoCases.map((item) => (
              <Card key={item.title} className="border-border/80 shadow-none">
                <CardContent className="p-6 md:p-8 space-y-5">
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-secondary/20 text-primary mb-3">
                      Exemplo técnico demonstrativo
                    </span>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Problema", text: item.problem },
                      { label: "Diagnóstico", text: item.diagnosis },
                      { label: "Solução", text: item.solution },
                      { label: "Resultado", text: item.result },
                    ].map((stage) => (
                      <div key={stage.label} className="p-3.5 rounded-lg bg-muted/40 border border-secondary/20">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                          {stage.label}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{stage.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 9 — Conteúdo */}
      <section className="py-24 bg-muted/50 border-y border-border/60" aria-labelledby="conteudo-home">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <h2 id="conteudo-home" className="text-3xl md:text-4xl font-bold text-primary mb-3">
                Conhecimento técnico para decisões industriais melhores.
              </h2>
              <p className="text-muted-foreground">
                Artigos e estudos técnicos voltados a equipes de engenharia, manutenção, produção e compras técnicas.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/conteudo">
                Acessar conteúdo técnico
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {homeArticles.map((title) => (
              <Link
                key={title}
                to="/conteudo"
                className="p-5 rounded-lg bg-background border border-border/80 hover:border-primary/50 transition-colors flex items-start gap-3"
              >
                <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="text-sm font-semibold text-primary leading-snug">{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 10 — CTA Final */}
      <section className="py-24 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Tem um equipamento ou sistema com problema de desempenho?
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-8 leading-relaxed">
            Fale com a AtmoUP e avalie tecnicamente o próximo passo para sua instalação.
          </p>
          <Button asChild size="lg" variant="accent" className="h-12 px-7">
            <Link to="/contato">
              Solicitar avaliação técnica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomeLowerSections;