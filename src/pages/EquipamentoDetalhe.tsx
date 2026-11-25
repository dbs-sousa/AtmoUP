import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { equipmentDetails, equipmentEngineeringActions } from "@/data/equipmentDetails";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import NotFound from "./NotFound";

const EquipamentoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const equipment = equipmentDetails.find((item) => item.slug === slug);
  if (!equipment) return <NotFound />;

  return (
    <div className="flex flex-col">
      <PageSeo
        title={`${equipment.name} — Engenharia, Diagnóstico e Retrofit | AtmoUP`}
        description={`${equipment.summary} Engenharia industrial com sede em São Paulo e atendimento em todo o Brasil.`}
        path={`/equipamentos/${equipment.slug}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Equipamentos e Sistemas", path: "/equipamentos" },
          { name: equipment.name, path: `/equipamentos/${equipment.slug}` },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${equipment.name} — Engenharia, Diagnóstico e Retrofit`,
          description: equipment.summary,
          provider: { "@type": "Organization", name: "ATMOUP" },
          areaServed: "Brasil",
        }}
      />
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Link
            to="/equipamentos"
            className="inline-flex items-center text-sm text-secondary hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Equipamentos e Sistemas Industriais
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            {equipment.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            {equipment.name} — Engenharia, Diagnóstico e Retrofit
          </h1>
          <p className="text-lg text-primary-foreground/85 leading-relaxed max-w-3xl">
            {equipment.intro}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-14">
          {/* Como a AtmoUP atua */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Como a AtmoUP atua</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {equipmentEngineeringActions.map((action) => (
                <div key={action} className="p-4 rounded-xl border border-secondary/30 bg-card flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-primary">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Problemas e Quando avaliar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 md:p-8 rounded-xl border border-secondary/30 bg-card">
              <h2 className="text-xl font-bold text-primary mb-4">
                Principais problemas que podemos investigar
              </h2>
              <ul className="space-y-3">
                {equipment.problems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8 rounded-xl border border-secondary/30 bg-secondary/10">
              <h2 className="text-xl font-bold text-primary mb-4">
                Quando avaliar este equipamento?
              </h2>
              <ul className="space-y-3">
                {equipment.whenToEvaluate.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA específico */}
          <div className="p-8 rounded-xl bg-primary text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">{equipment.ctaTitle}</h2>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">{equipment.ctaText}</p>
            </div>
            <Button asChild variant="accent" size="lg" className="shrink-0">
              <Link to="/contato">
                {equipment.ctaButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipamentoDetalhe;