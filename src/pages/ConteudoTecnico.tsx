import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  technicalArticles,
  technicalCategories,
  type TechnicalCategory,
} from "@/data/technicalArticles";
import { ArrowRight, FileText } from "lucide-react";
import PageSeo from "@/components/PageSeo";

const ConteudoTecnico = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechnicalCategory | "Todos">("Todos");

  const filteredArticles =
    selectedCategory === "Todos"
      ? technicalArticles
      : technicalArticles.filter((article) => article.category === selectedCategory);

  return (
    <div className="flex flex-col">
      <PageSeo
        title="Conteúdo Técnico em Engenharia Industrial | AtmoUP"
        description="Artigos, estudos técnicos, guias e perguntas frequentes sobre diagnóstico, retrofit, ventiladores industriais, filtros de mangas e sistemas de exaustão."
        path="/conteudo"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Conteúdo Técnico", path: "/conteudo" },
        ]}
      />
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Base de Conhecimento
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">Conteúdo Técnico</h1>
          <p className="text-lg text-primary-foreground/85 leading-relaxed">
            Artigos técnicos organizados por tema para apoiar decisões de engenharia, manutenção, produção e investimentos industriais.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-10">
          {/* Filtro por categorias */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("Todos")}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors border ${
                selectedCategory === "Todos"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-primary border-secondary/30 hover:border-primary/40"
              }`}
            >
              Todos ({technicalArticles.length})
            </button>
            {technicalCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors border ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-primary border-secondary/30 hover:border-primary/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grade de artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.slug} className="border-secondary/30 hover:border-primary/40 transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-3">
                    <FileText className="h-4 w-4" />
                    <span>{article.category}</span>
                  </div>
                  <h2 className="text-lg font-bold text-primary mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                    {article.intro}
                  </p>
                  <Link
                    to={`/conteudo/${article.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Ler artigo técnico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-4 border-t border-secondary/20 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Precisa de uma análise técnica aplicada à sua operação?
            </p>
            <Button asChild variant="accent">
              <Link to="/contato">
                Falar com a Engenharia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConteudoTecnico;