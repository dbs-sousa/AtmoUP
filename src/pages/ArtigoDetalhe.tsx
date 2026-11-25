import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { technicalArticles } from "@/data/technicalArticles";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import NotFound from "./NotFound";

const ArtigoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = technicalArticles.find((item) => item.slug === slug);
  if (!article) return <NotFound />;

  return (
    <article className="flex flex-col">
      <PageSeo
        title={`${article.title} | AtmoUP`}
        description={article.seoDescription}
        path={`/conteudo/${article.slug}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Conteúdo Técnico", path: "/conteudo" },
          { name: article.title, path: `/conteudo/${article.slug}` },
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.seoDescription,
          author: { "@type": "Organization", name: "ATMOUP" },
          inLanguage: "pt-BR",
        }}
      />

      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link
            to="/conteudo"
            className="inline-flex items-center text-sm text-secondary hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Conteúdo Técnico
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            {article.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">{article.title}</h1>
          <p className="text-lg text-primary-foreground/85 leading-relaxed">{article.intro}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          {article.sections.map((section) => (
            <div key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              {section.subpoints && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {section.subpoints.map((sub) => (
                    <div key={sub.title} className="p-5 rounded-xl border border-secondary/30 bg-card">
                      <h3 className="text-base font-bold text-primary mb-2">{sub.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{sub.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {article.faq.length > 0 && (
            <div className="p-6 md:p-8 rounded-xl border border-secondary/30 bg-secondary/10 space-y-4">
              <h2 className="text-xl font-bold text-primary">Perguntas frequentes</h2>
              {article.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          )}

          <div className="pt-4 border-t border-secondary/20">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
              Páginas relacionadas
            </h2>
            <div className="flex flex-wrap gap-3">
              {article.relatedLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-lg border border-secondary/30 bg-card text-sm font-semibold text-primary hover:border-primary/40 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-xl bg-primary text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h2 className="text-xl md:text-2xl font-bold max-w-xl">{article.ctaTitle}</h2>
            <Button asChild variant="accent" size="lg" className="shrink-0">
              <Link to="/contato">
                {article.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArtigoDetalhe;