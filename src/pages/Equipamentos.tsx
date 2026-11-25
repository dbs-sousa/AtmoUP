import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { equipmentDetails } from "@/data/equipmentDetails";
import { ArrowRight } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import baghouseImage from "@/assets/industrial-baghouse-ducts.jpg";

const Equipamentos = () => {
  return (
    <div className="flex flex-col">
      <PageSeo
        title="Equipamentos e Sistemas Industriais | AtmoUP"
        description="Engenharia aplicada à avaliação, especificação, implantação, adequação e retrofit de ventiladores industriais, filtros de mangas, sistemas de exaustão, dutos, lavadores e transporte pneumático."
        path="/equipamentos"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Equipamentos e Sistemas", path: "/equipamentos" },
        ]}
      />
      <section className="relative bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={baghouseImage}
            alt="Filtro de mangas industrial e rede de dutos metálicos"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Áreas de Atuação da Engenharia
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5">Equipamentos e Sistemas Industriais</h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Engenharia aplicada à avaliação, especificação, implantação, adequação e retrofit de equipamentos e sistemas industriais.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentDetails.map((item) => (
              <Card key={item.slug} className="border-secondary/30 hover:border-primary/40 transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    {item.category}
                  </span>
                  <h2 className="text-xl font-bold text-primary mb-3">{item.name}</h2>
                  <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                    {item.summary}
                  </p>
                  <Link
                    to={`/equipamentos/${item.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Engenharia, diagnóstico e retrofit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-xl bg-secondary/15 border border-secondary/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-primary mb-2">
                A engenharia vem antes do equipamento.
              </h2>
              <p className="text-sm text-muted-foreground">
                Conheça nossa metodologia de diagnóstico, implantação, retrofit e performance aplicada a esses sistemas.
              </p>
            </div>
            <Button asChild variant="accent">
              <Link to="/engenharia-de-equipamentos">
                Engenharia de Equipamentos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipamentos;