import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, Users, ClipboardCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Servicos = () => {
  const services = [
    {
      icon: Compass,
      title: "Engenharia Ambiental",
      description: "Desenvolvimento completo de projetos conceituais, básicos e detalhados para sistemas de controle de poluição do ar industrial.",
      items: [
        "Projetos conceituais e estudos de viabilidade técnica",
        "Engenharia básica com dimensionamento de sistemas",
        "Projetos executivos detalhados com especificações técnicas",
        "Memoriais de cálculo e desenhos técnicos",
        "Análise de fluxo de ar e modelagem computacional",
      ],
    },
    {
      icon: Users,
      title: "Consultoria Técnica",
      description: "Assessoria especializada para diagnóstico, melhoria contínua e adequação às normas ambientais vigentes.",
      items: [
        "Diagnóstico completo de sistemas existentes",
        "Análise de conformidade com legislação ambiental",
        "Propostas de melhorias e otimização de processos",
        "Redução de custos operacionais e energéticos",
        "Adequação a normas NR, CONAMA e ABNT",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Supervisão e Inspeções",
      description: "Acompanhamento técnico especializado em montagens, comissionamento e medições de performance operacional.",
      items: [
        "Supervisão técnica de montagens industriais",
        "Acompanhamento de start-up e comissionamento",
        "Inspeções periódicas de equipamentos e sistemas",
        "Medições de eficiência e performance",
        "Laudos técnicos e relatórios de conformidade",
      ],
    },
    {
      icon: Wrench,
      title: "Modernizações e Reformas",
      description: "Projetos de modernização e retrofit de sistemas existentes para aumento de eficiência e adequação normativa.",
      items: [
        "Análise técnica de sistemas em operação",
        "Projetos de retrofit e modernização",
        "Substituição e upgrade de componentes",
        "Melhoria de eficiência energética",
        "Adequação a novas normas e legislações",
      ],
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden" aria-labelledby="servicos-title">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-air-flow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-air-flow" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30">
              Soluções Técnicas Especializadas
            </Badge>
            <h1 id="servicos-title" className="font-bold mb-6 animate-fade-in-up">
              Engenharia de Exaustão e Manutenção de Ventiladores Industriais
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Expertise em Engenharia de Despoeiramento, Sistemas de Exaustão e Manutenção de Ventiladores Industriais em São Paulo
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-primary mb-4">Engenharia de Exaustão e Despoeiramento</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Soluções integradas em Sistemas de Exaustão, Engenharia de Despoeiramento e Manutenção de Ventiladores Industriais para controle de emissões atmosféricas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-secondary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                        <span className="text-accent mt-1 text-lg">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold mb-6">Precisa de Sistemas de Exaustão ou Manutenção de Ventiladores?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Nossa equipe está pronta para desenvolver Sistemas de Exaustão, Engenharia de Despoeiramento e realizar Manutenção de Ventiladores Industriais. Solicite um orçamento técnico detalhado.
            </p>
            <Link to="/contato">
              <Button size="lg" variant="accent">
                Falar com Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Servicos;
