import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Artigos = () => {
  const articles = [
    {
      title: "Sistemas de Filtração de Ar: Tecnologias e Aplicações em Controle de Poluição",
      excerpt: "O controle eficiente de material particulado é fundamental para a conformidade ambiental e proteção da saúde ocupacional. Os sistemas de filtração por mangas representam uma das tecnologias mais eficazes para captura de partículas em processos industriais. Com eficiência superior a 99%, esses equipamentos utilizam meios filtrantes especialmente desenvolvidos para diferentes aplicações, desde processos de combustão até operações de jateamento e usinagem. A seleção adequada do tipo de manga, sistema de limpeza e dimensionamento correto são essenciais para garantir performance operacional, vida útil do equipamento e atendimento às legislações ambientais vigentes.",
      date: "15 Mar 2024",
      readTime: "8 min",
      category: "Controle de poluição do ar",
    },
    {
      title: "Ventilação Industrial: Princípios de Projeto e Dimensionamento de Sistemas",
      excerpt: "A ventilação industrial adequada é crucial para manter ambientes de trabalho seguros e produtivos. Um sistema bem projetado deve considerar a caracterização do contaminante, sua concentração, toxicidade e características físico-químicas. O dimensionamento correto envolve o cálculo de vazões necessárias, perdas de carga, seleção de ventiladores e projeto de redes de dutos. Aspectos como velocidade de captura, velocidade de transporte e pontos de captação localizada são fundamentais. A norma ABNT NBR 16401 e diretrizes da ACGIH fornecem parâmetros técnicos essenciais. Sistemas eficientes reduzem consumo energético e custos operacionais, além de garantir a qualidade do ar interno e conformidade com NR-15.",
      date: "08 Mar 2024",
      readTime: "10 min",
      category: "Ventilação industrial",
    },
    {
      title: "Engenharia Ambiental Aplicada: Integração entre Sustentabilidade e Inovação Tecnológica",
      excerpt: "A engenharia ambiental moderna une conhecimento técnico avançado com responsabilidade ecológica. No contexto industrial, isso significa desenvolver soluções que não apenas atendam aos requisitos legais, mas que promovam eficiência de recursos e redução de impactos. Tecnologias como lavadores de gases, sistemas de recuperação de calor e automação de processos permitem que indústrias operem de forma mais limpa e econômica. A aplicação de conceitos de economia circular, análise de ciclo de vida e produção mais limpa (P+L) transformam desafios ambientais em oportunidades de inovação. Investir em engenharia ambiental de qualidade significa garantir competitividade, conformidade legal e contribuir para um futuro industrial sustentável.",
      date: "28 Fev 2024",
      readTime: "9 min",
      category: "Sustentabilidade e tecnologia",
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20" aria-labelledby="artigos-title">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="artigos-title" className="font-bold mb-6">Artigos sobre Sistemas de Exaustão e Ventilação Industrial</h1>
            <p className="text-xl text-primary-foreground/90">
              Conteúdos especializados sobre Sistemas de Exaustão, Ventiladores Centrífugos, Filtros de Mangas e Engenharia de Despoeiramento
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 text-primary">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-primary mb-4">
              Newsletter AtmoUP
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Receba conteúdos técnicos e novidades do setor industrial diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-6 py-3 rounded-lg border border-input bg-background text-foreground flex-1 max-w-md"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Artigos;
