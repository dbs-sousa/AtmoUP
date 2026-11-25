import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { segmentDetails } from "@/data/segmentDetails";
import { ArrowRight } from "lucide-react";
import PageSeo from "@/components/PageSeo";

const Segmentos = () => {
  return (
    <div className="flex flex-col">
      <PageSeo
        title="Segmentos Industriais Atendidos | AtmoUP"
        description="Engenharia de equipamentos industriais para siderurgia, metalurgia, agroindústria, mineração, cimento, química e papel e celulose em todo o Brasil."
        path="/segmentos"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Segmentos", path: "/segmentos" },
        ]}
      />
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Atuação Industrial
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">Segmentos Industriais</h1>
          <p className="text-lg text-primary-foreground/85 leading-relaxed">
            Engenharia aplicada às particularidades operacionais, térmicas, abrasivas e ambientais de cada cadeia industrial em todo o Brasil.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentDetails.map((segment) => (
              <Card key={segment.slug} className="border-secondary/30 hover:border-primary/40 transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <h2 className="text-xl font-bold text-primary mb-3">{segment.name}</h2>
                  <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                    {segment.summary}
                  </p>
                  <Link
                    to={`/segmentos/${segment.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Ver atuação no segmento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Segmentos;