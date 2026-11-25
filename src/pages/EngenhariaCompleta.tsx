import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, FileText, Wrench, RotateCcw, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";

const EngenhariaCompleta = () => {
  const services = [
    {
      icon: Compass,
      title: "Engenharia Conceitual",
      description: "Definição de escopo, estudos de viabilidade técnica e econômica, layout preliminar e análise de alternativas para seu projeto industrial."
    },
    {
      icon: FileText,
      title: "Engenharia Básica",
      description: "Dimensionamento preciso de equipamentos, memorial descritivo detalhado, especificações técnicas e documentação completa para licitações."
    },
    {
      icon: Wrench,
      title: "Engenharia de Detalhamento",
      description: "Desenhos executivos, listas de materiais, integração com fabricação e documentação as-built para execução perfeita do projeto."
    },
    {
      icon: RotateCcw,
      title: "Engenharia Reversa",
      description: "Digitalização de plantas existentes, redesenho técnico, modernização de sistemas legados e adequação às normas atuais."
    }
  ];

  const differentials = [
    "Equipe técnica especializada com mais de 15 anos de experiência",
    "Projetos desenvolvidos conforme normas ABNT e internacionais",
    "Tecnologia CAD/CAE de última geração",
    "Acompanhamento desde o conceito até a entrega final",
    "Redução de custos e prazos através de engenharia eficiente",
    "Suporte técnico continuado pós-entrega"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Soluções Completas em Engenharia Industrial
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
              Da concepção à entrega final — sua planta com eficiência, segurança e desempenho garantido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/contato">
                  Solicitar Proposta Personalizada <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Engenharia Integrada para Sua Indústria
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A AtmoUP oferece soluções completas de engenharia industrial, desde estudos iniciais até a documentação final. 
              Nossa abordagem integrada garante eficiência, qualidade e resultados mensuráveis em todas as etapas do projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 md:py-24 px-4 bg-gradient-tech">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos Serviços de Engenharia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cobertura completa desde a concepção até a execução
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-industrial transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Escolher a AtmoUP?
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Excelência técnica, precisão e comprometimento com resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-white">{differential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="py-16 md:py-24 px-4 bg-gradient-tech">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Pronto para Transformar Seu Projeto Industrial?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa equipe está preparada para desenvolver a solução de engenharia ideal para suas necessidades. 
              Preencha o formulário abaixo e receba uma proposta personalizada.
            </p>
          </div>
          <QuoteForm 
            source="Engenharia Completa"
            title="Solicite uma Proposta Técnica"
            description="Nossa equipe técnica entrará em contato para entender suas necessidades"
          />
        </div>
      </section>
    </main>
  );
};

export default EngenhariaCompleta;
