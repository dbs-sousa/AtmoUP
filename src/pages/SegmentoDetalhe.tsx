import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { segmentDetails, segmentServiceLinks } from "@/data/segmentDetails";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import NotFound from "./NotFound";

const SegmentoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const segment = segmentDetails.find((item) => item.slug === slug);
  if (!segment) return <NotFound />;

  return (
    <div className="flex flex-col">
      <PageSeo
        title={segment.seoTitle}
        description={`Engenharia de equipamentos industriais para ${segment.name}: diagnóstico, implantação, retrofit e performance com atendimento nacional.`}
        path={`/segmentos/${segment.slug}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Segmentos", path: "/segmentos" },
          { name: segment.name, path: `/segmentos/${segment.slug}` },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Engenharia de Equipamentos Industriais para ${segment.name}`,
          description: segment.summary,
          provider: { "@type": "Organization", name: "ATMOUP" },
          areaServed: "Brasil",
        }}
      />
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Link
            to="/segmentos"
            className="inline-flex items-center text-sm text-secondary hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Segmentos
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Engenharia de Equipamentos Industriais para {segment.name}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-3xl">
            Diagnóstico, implantação, retrofit e performance de equipamentos e sistemas industriais.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-14">
          {/* Características do segmento */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-3">Características do segmento</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {segment.characteristics}
            </p>
          </div>

          {/* Desafios e Onde a AtmoUP pode atuar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 md:p-8 rounded-xl border border-secondary/30 bg-card">
              <h2 className="text-xl font-bold text-primary mb-4">
                Principais desafios em equipamentos e sistemas
              </h2>
              <ul className="space-y-3">
                {segment.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8 rounded-xl border border-secondary/30 bg-secondary/10">
              <h2 className="text-xl font-bold text-primary mb-4">Onde a AtmoUP pode atuar</h2>
              <ul className="space-y-3">
                {segment.whereWeAct.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Equipamentos relevantes e Tipos de serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">Equipamentos relevantes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {segment.relevantEquipments.map((eq) => (
                  <Link
                    key={eq.slug}
                    to={`/equipamentos/${eq.slug}`}
                    className="p-3.5 rounded-lg border border-secondary/30 bg-card hover:border-primary/40 transition-colors flex items-center justify-between gap-2 text-sm font-semibold text-primary"
                  >
                    <span>{eq.name}</span>
                    <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-4">Tipos de serviços</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {segmentServiceLinks.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="p-3.5 rounded-lg border border-secondary/30 bg-secondary/10 hover:border-primary/40 transition-colors flex items-center justify-between gap-2 text-sm font-semibold text-primary"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Benefícios da engenharia aplicada */}
          <div className="p-6 md:p-8 rounded-xl border border-secondary/30 bg-card">
            <h2 className="text-xl font-bold text-primary mb-4">Benefícios da engenharia aplicada</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {segment.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-xl bg-primary text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">{segment.ctaTitle}</h2>
              <p className="text-sm text-primary-foreground/80">{segment.ctaDescription}</p>
            </div>
            <Button asChild variant="accent" size="lg" className="shrink-0">
              <Link to="/contato">
                Solicitar avaliação técnica
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SegmentoDetalhe;