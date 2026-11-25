import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Settings, Zap, Shield, CheckCircle, ArrowRight, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";

const VentiladoresCentrifugos = () => {
  const features = [
    {
      icon: Settings,
      title: "Projeto Sob Medida",
      description: "Ventiladores dimensionados conforme suas necessidades específicas: diâmetro, vazão, pressão e rotação calculados para máxima eficiência."
    },
    {
      icon: Shield,
      title: "Materiais de Qualidade",
      description: "Fabricação em Aço Carbono, Aço Inox 304/316 ou Polipropileno (PP), escolhidos de acordo com as características do processo e ambiente."
    },
    {
      icon: Gauge,
      title: "Alta Performance",
      description: "Equipamentos projetados para operar continuamente em condições severas, garantindo estabilidade operacional e baixo consumo energético."
    },
    {
      icon: Zap,
      title: "Eficiência Energética",
      description: "Design aerodinâmico otimizado que reduz consumo de energia e custos operacionais, mantendo o desempenho exigido pela aplicação."
    }
  ];

  const benefits = [
    "Maior vida útil dos equipamentos",
    "Redução de ruído e vibração",
    "Facilidade de manutenção",
    "Baixo custo operacional",
    "Conformidade com normas técnicas",
    "Suporte técnico especializado"
  ];

  const differentials = [
    {
      title: "Engenharia Própria",
      description: "Equipe técnica interna para desenvolvimento de projetos personalizados e otimização de performance."
    },
    {
      title: "Controle de Qualidade",
      description: "Rigoroso processo de inspeção em todas as etapas de fabricação, garantindo excelência no produto final."
    },
    {
      title: "Suporte Técnico",
      description: "Acompanhamento completo desde o dimensionamento até a instalação e comissionamento do equipamento."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <Wind className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ventiladores Centrífugos Sob Medida
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
              Alta performance, durabilidade e eficiência energética para ambientes industriais exigentes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/contato">
                  Solicitar Orçamento Técnico <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href="#caracteristicas">Ver Características</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação do Produto */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Tecnologia e Precisão em Ventilação Industrial
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Os ventiladores centrífugos AtmoUP são projetados e fabricados para atender às mais rigorosas 
                exigências de processos industriais, oferecendo soluções customizadas para cada aplicação.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Com design robusto e engenharia avançada, nossos equipamentos garantem operação contínua 
                e confiável, mesmo em condições adversas de temperatura, umidade e presença de particulados.
              </p>
              <Button variant="accent" asChild>
                <Link to="/contato">Fale com Nossos Especialistas</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-tech shadow-industrial flex items-center justify-center">
                <Wind className="w-48 h-48 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Principais */}
      <section id="caracteristicas" className="py-16 md:py-24 px-4 bg-gradient-tech">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Características Técnicas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especificações que garantem máxima eficiência e confiabilidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-industrial transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Benefícios para Sua Operação
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-secondary/30 hover:border-primary/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais da AtmoUP */}
      <section className="py-16 md:py-24 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Diferenciais AtmoUP
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              O que nos torna referência em ventilação industrial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3 text-accent">{differential.title}</h3>
                <p className="text-white">{differential.description}</p>
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
              Precisa de um Ventilador Centrífugo Industrial?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa equipe técnica está pronta para desenvolver a solução ideal para sua aplicação. 
              Solicite um orçamento detalhado com especificações técnicas completas.
            </p>
          </div>
          <QuoteForm 
            source="Ventiladores Centrífugos"
            title="Solicite um Orçamento Técnico"
            description="Informe seus requisitos e receba uma proposta detalhada"
          />
        </div>
      </section>
    </main>
  );
};

export default VentiladoresCentrifugos;
