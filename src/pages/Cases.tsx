import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageSeo from "@/components/PageSeo";

const caseTemplates = [
  {
    id: "modelo-ventilador-exaustao",
    title: "Diagnóstico e retrofit de ventilador industrial em sistema de exaustão",
    segment: { name: "Siderurgia", to: "/segmentos/siderurgia" },
    equipments: [
      { name: "Ventiladores Industriais", to: "/equipamentos/ventiladores-industriais" },
      { name: "Sistemas de Exaustão", to: "/equipamentos/sistemas-de-exaustao" },
    ],
    context: "Estrutura preparada para contextualização da linha produtiva, regime de operação e papel do equipamento no processo.",
    challenge: "Estrutura preparada para registro dos desvios operacionais, limitações de desempenho ou restrições enfrentadas pela planta.",
    diagnosis: "Levantamento em campo, medições de vazão, pressão e potência, e comparação entre condições de projeto e operação real.",
    engineering: "Desenvolvimento de cálculos, revisão aerodinâmica/estrutural, engenharia reversa ou especificação técnica da intervenção.",
    solution: "Escopo técnico proposto ou implantado para adequação, retrofit ou implantação do equipamento no sistema.",
    result: "Espaço reservado para publicação exclusiva de resultados reais validados em campo após a conclusão do projeto.",
  },
  {
    id: "modelo-filtro-mangas",
    title: "Avaliação de desempenho e adequação de sistema de despoeiramento",
    segment: { name: "Agroindústria", to: "/segmentos/agroindustria" },
    equipments: [
      { name: "Filtros de Mangas", to: "/equipamentos/filtros-de-mangas" },
      { name: "Dutos e Coifas", to: "/equipamentos/dutos-e-coifas" },
    ],
    context: "Estrutura preparada para contextualização do processo industrial, características do particulado e demanda de captação.",
    challenge: "Estrutura preparada para descrição de perda de carga elevada, fuga de particulados ou limitação de capacidade operacional.",
    diagnosis: "Análise de relação ar/pano, velocidades de transporte, limpeza pulsante e balanceamento dos ramais da rede.",
    engineering: "Redimensionamento de componentes, revisão de coifas e dutos e definição de parâmetros operacionais de adequação.",
    solution: "Plano técnico de adequação ou retrofit estruturado para execução em parada programada ou entressafra.",
    result: "Espaço reservado para publicação exclusiva de resultados reais validados em campo após a conclusão do projeto.",
  },
];

const Cases = () => {
  return (
    <div className="flex flex-col">
      <PageSeo
        title="Estudos de Caso e Cenários Técnicos | AtmoUP"
        description="Estrutura de estudos de caso e cenários técnicos demonstrativos da AtmoUP: contexto, desafio, diagnóstico, engenharia desenvolvida e solução em equipamentos industriais."
        path="/cases"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Estudos de Caso e Cenários Técnicos", path: "/cases" },
        ]}
      />
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Estudos de Caso e Cenários Técnicos
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">Estudos de Caso e Cenários Técnicos</h1>
          <p className="text-lg text-primary-foreground/85 leading-relaxed">
            Apresentamos abaixo o padrão técnico utilizado pela AtmoUP para estruturar análises de engenharia. Os cenários listados são exemplos técnicos demonstrativos e não representam projetos executados pela AtmoUP.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-10">
          <div className="rounded-lg border border-accent/50 bg-accent/10 p-4 text-sm text-primary">
            <strong>Exemplo técnico demonstrativo.</strong> Cenário conceitual baseado em situações típicas de engenharia. Não representa projeto executado pela AtmoUP.
          </div>

          {caseTemplates.map((item) => (
            <article key={item.id} className="rounded-xl border border-secondary/30 bg-card p-6 md:p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/25 text-primary">
                  Exemplo técnico demonstrativo
                </span>
                <Link
                  to={item.segment.to}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Segmento: {item.segment.name}
                </Link>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">{item.title}</h2>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-semibold text-muted-foreground">Equipamentos envolvidos:</span>
                {item.equipments.map((eq) => (
                  <Link
                    key={eq.to}
                    to={eq.to}
                    className="text-xs font-medium text-primary underline underline-offset-4 hover:text-accent"
                  >
                    {eq.name}
                  </Link>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Contexto", text: item.context },
                  { label: "Desafio", text: item.challenge },
                  { label: "Diagnóstico", text: item.diagnosis },
                  { label: "Engenharia desenvolvida", text: item.engineering },
                  { label: "Solução proposta/implantada", text: item.solution },
                  { label: "Resultado", text: item.result },
                ].map((stage, idx) => (
                  <div
                    key={stage.label}
                    className={`p-4 rounded-lg border ${
                      idx === 5
                        ? "bg-secondary/15 border-accent/40"
                        : "bg-background border-secondary/25"
                    }`}
                  >
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      {stage.label}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{stage.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="text-center pt-4">
            <Button asChild variant="accent" size="lg">
              <Link to="/contato">
                Solicitar avaliação técnica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;