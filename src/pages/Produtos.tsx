import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ventilatorImage from "@/assets/product-ventilator.jpg";
import filterImage from "@/assets/product-filter.jpg";
import scrubberImage from "@/assets/product-scrubber.jpg";

const Produtos = () => {
  const products = [
    {
      title: "Ventiladores Centrífugos e Sistemas de Ventilação",
      image: ventilatorImage,
      description: "Ventiladores Centrífugos de alto desempenho para Sistemas de Exaustão e movimentação eficiente de grandes volumes de ar em processos industriais. Manutenção de ventiladores industriais disponível.",
      features: [
        "Alta eficiência energética",
        "Construção robusta em aço carbono ou inox",
        "Rotores balanceados dinamicamente",
        "Acionamento direto ou por correias",
        "Vazões de 1.000 a 100.000 m³/h",
      ],
    },
    {
      title: "Lavadores de Gases para Controle de Emissões",
      image: scrubberImage,
      description: "Lavadores de Gases para remoção de contaminantes gasosos através de processo de absorção úmida, integrados aos Sistemas de Exaustão, garantindo conformidade ambiental.",
      features: [
        "Remoção de gases ácidos e compostos orgânicos",
        "Diversos tipos: spray, venturi, torre recheada",
        "Construção em materiais resistentes à corrosão",
        "Sistema de recirculação de água",
        "Monitoramento de pH e vazão",
      ],
    },
    {
      title: "Filtros de Mangas para Despoeiramento Industrial",
      image: filterImage,
      description: "Filtros de Mangas de alta eficiência para Engenharia de Despoeiramento e captura de material particulado industrial com performance superior a 99%.",
      features: [
        "Eficiência de filtragem > 99%",
        "Limpeza automática por ar comprimido",
        "Mangas em diversos materiais (poliéster, nomex, teflon)",
        "Projeto modular e expansível",
        "Baixo custo operacional",
      ],
    },
    {
      title: "Cabines de Pintura",
      image: ventilatorImage,
      description: "Cabines para pintura industrial com controle de particulados e compostos orgânicos voláteis (VOCs) em conformidade com normas.",
      features: [
        "Controle de vazão e pressão",
        "Filtragem de ar de admissão e exaustão",
        "Sistemas de iluminação adequados",
        "Proteção contra explosão (classificação Ex)",
        "Conformidade com normas de segurança",
      ],
    },
    {
      title: "Redes de Dutos para Sistemas de Exaustão",
      image: filterImage,
      description: "Projeto e fabricação de Redes de Dutos para Sistemas de Exaustão, transporte de ar contaminado e Sistemas de Ventilação com dimensionamento técnico preciso.",
      features: [
        "Dimensionamento otimizado",
        "Diversos materiais: aço carbono, inox, PVC, PP",
        "Flanges, dampers e acessórios",
        "Isolamento térmico e acústico",
        "Desenhos e memoriais técnicos",
      ],
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20" aria-labelledby="produtos-title">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="produtos-title" className="font-bold mb-6">Ventiladores Centrífugos, Filtros de Mangas e Sistemas de Exaustão</h1>
            <p className="text-xl text-primary-foreground/90">
              Equipamentos industriais de alta qualidade: Ventiladores Centrífugos, Filtros de Mangas, Lavadores de Gases e Sistemas de Ventilação completos
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.title} - Equipamento industrial para controle de poluição do ar`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contato">Solicitar Orçamento</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary mb-8 leading-relaxed">
              Todos os equipamentos AtmoUP — Ventiladores Centrífugos, Filtros de Mangas, Lavadores de Gases e Sistemas de Exaustão — são projetados com foco em desempenho, durabilidade e eficiência ambiental.
            </h2>
            <Button asChild size="lg" variant="accent">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Produtos;
