import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { servicePillarsDetail } from "@/data/servicePillars";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import NotFound from "./NotFound";

interface EngenhariaPilarProps {
  slug: string;
}

const EngenhariaPilar = ({ slug }: EngenhariaPilarProps) => {
  const pillar = servicePillarsDetail.find((p) => p.slug === slug);
  if (!pillar) return <NotFound />;

  const otherPillars = servicePillarsDetail.filter((p) => p.slug !== slug);

  return (
    <div className="flex flex-col">
      <PageSeo
        title={pillar.seoTitle}
        description={`${pillar.lead} Atendimento nacional a partir de São Paulo, SP.`}
        path={`/${pillar.slug}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Engenharia de Equipamentos", path: "/engenharia-de-equipamentos" },
          { name: pillar.shortTitle, path: `/${pillar.slug}` },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: pillar.h1,
          description: pillar.lead,
          provider: { "@type": "Organization", name: "ATMOUP" },
          areaServed: "Brasil",
        }}
      />
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Link
            to="/engenharia-de-equipamentos"
            className="inline-flex items-center text-sm text-secondary hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Engenharia de Equipamentos
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">{pillar.h1}</h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-3xl mb-8">
            {pillar.lead}
          </p>
          <Button asChild variant="accent" size="lg">
            <Link to="/contato">
              {pillar.ctaLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-14">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {pillar.intro}
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{pillar.scopeTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pillar.scopeItems.map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-secondary/30 bg-card">
                  <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-xl border border-secondary/30 bg-secondary/10">
            <h2 className="text-2xl font-bold text-primary mb-2">{pillar.secondaryTitle}</h2>
            {pillar.secondarySubtitle && (
              <p className="text-sm text-muted-foreground mb-6">{pillar.secondarySubtitle}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pillar.secondaryItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg bg-background border border-secondary/25">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-xl bg-primary text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">{pillar.ctaTitle}</h2>
              <p className="text-sm text-primary-foreground/80">{pillar.ctaDescription}</p>
            </div>
            <Button asChild variant="accent" size="lg" className="shrink-0">
              <Link to="/contato">
                {pillar.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/10 border-t border-secondary/20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-lg font-bold text-primary mb-4">Outros pilares de engenharia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherPillars.map((other) => (
              <Link
                key={other.slug}
                to={`/${other.slug}`}
                className="p-4 rounded-lg bg-background border border-secondary/30 hover:border-primary/40 transition-colors"
              >
                <span className="font-semibold text-primary text-sm block mb-1">{other.shortTitle}</span>
                <span className="text-xs text-muted-foreground">Ver escopo técnico</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngenhariaPilar;