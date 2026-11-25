import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Wrench, Activity, CheckCircle, ArrowRight, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";

const ReformaVentiladores = () => {
  const process = [
    {
      icon: ClipboardCheck,
      title: "1. Diagnóstico Técnico",
      description: "Inspeção completa do equipamento, análise de componentes, medição de vibrações e avaliação do estado geral do ventilador."
    },
    {
      icon: Wrench,
      title: "2. Reparo e Substituição",
      description: "Troca de rolamentos, correias, retentores e componentes desgastados. Recuperação ou substituição de rotores e carcaças danificadas."
    },
    {
      icon: Activity,
      title: "3. Balanceamento Dinâmico",
      description: "Balanceamento preciso do rotor em bancada especializada, eliminando vibrações e garantindo operação suave e silenciosa."
    },
    {
      icon: CheckCircle,
      title: "4. Testes de Desempenho",
      description: "Testes operacionais completos, verificação de vazão, pressão e eficiência energética, garantindo performance como novo."
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Economia de até 70% em comparação com a aquisição de equipamento novo, mantendo a mesma qualidade e desempenho."
    },
    {
      icon: Clock,
      title: "Agilidade na Entrega",
      description: "Prazos otimizados de reforma, minimizando o tempo de parada da sua operação industrial."
    },
    {
      icon: TrendingUp,
      title: "Confiabilidade Operacional",
      description: "Equipamentos reformados com garantia técnica, prontos para operação contínua e de longo prazo."
    }
  ];

  const improvements = [
    "Eliminação de vibrações excessivas",
    "Redução significativa de ruído operacional",
    "Aumento da eficiência energética",
    "Prolongamento da vida útil do equipamento",
    "Melhoria na qualidade do ar transportado",
    "Conformidade com normas de segurança"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Reforma e Recondicionamento de Ventiladores Industriais
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
              Recupere desempenho e prolongue a vida útil dos seus equipamentos com qualidade certificada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/contato">
                  Solicitar Avaliação Técnica <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="#processo">Como Funciona</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação do Serviço */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Serviço Especializado de Reforma
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A AtmoUP oferece serviço completo de reforma e recondicionamento de ventiladores industriais, 
              devolvendo a performance original dos equipamentos através de processos técnicos rigorosos e 
              componentes de alta qualidade.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossa equipe técnica especializada realiza inspeção detalhada, balanceamento dinâmico, substituição 
              de componentes e testes de performance, garantindo que o equipamento retorne à operação com máxima eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* Processo da Reforma */}
      <section id="processo" className="py-16 md:py-24 px-4 bg-gradient-tech">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Processo de Reforma em 4 Etapas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Metodologia estruturada para garantir qualidade e performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="hover:shadow-industrial transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Antes e Depois */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Melhorias de Performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados mensuráveis após o processo de reforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {improvements.map((improvement, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-secondary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Reformar com a AtmoUP?
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Vantagens que fazem a diferença na sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">{benefit.title}</h3>
                  <p className="text-white">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Garantia e Qualidade */}
      <section className="py-16 md:py-24 px-4 bg-gradient-tech">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">Garantia de Qualidade</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Todos os ventiladores reformados pela AtmoUP passam por rigoroso controle de qualidade e 
                recebem certificado de balanceamento dinâmico. Oferecemos garantia técnica sobre os serviços 
                executados e componentes substituídos.
              </p>
              <p className="text-lg font-semibold text-primary">
                Documentação técnica completa incluída: relatório de inspeção, laudo de balanceamento e 
                certificado de testes operacionais.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Seu Ventilador Precisa de Reforma?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contato com nossa equipe técnica para avaliação sem compromisso. 
              Enviamos especialistas para análise in loco e elaboração de proposta detalhada.
            </p>
          </div>
          <QuoteForm 
            source="Reforma de Ventiladores"
            title="Solicite uma Avaliação Técnica"
            description="Conte-nos sobre seus equipamentos e necessidades de reforma"
          />
        </div>
      </section>
    </main>
  );
};

export default ReformaVentiladores;
