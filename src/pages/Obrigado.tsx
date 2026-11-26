import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import { Button } from "@/components/ui/button";
import { consumeConversion } from "@/lib/leads";

export default function Obrigado() {
  const { state } = useLocation();
  const confirmed = state?.leadConfirmed === true;
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const event = consumeConversion(sessionStorage);
      if (!event) return;
      const target = window as Window & { dataLayer?: Record<string, unknown>[] };
      target.dataLayer = target.dataLayer || [];
      target.dataLayer.push(event);
      window.dispatchEvent(new CustomEvent("atmoup:generate_lead", { detail: event }));
    } catch { /* Analytics must never prevent confirmation. */ }
  }, []);
  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <PageSeo title="Obrigado | AtmoUP" description="Confirmação de solicitação técnica à AtmoUP." path="/obrigado" noindex />
      <CheckCircle2 className="mx-auto h-14 w-14 text-primary mb-6" />
      <h1 className="text-3xl font-bold text-primary mb-4">{confirmed ? "Solicitação recebida" : "Obrigado pelo interesse na AtmoUP"}</h1>
      <p className="text-muted-foreground mb-8">{confirmed ? "Sua demanda técnica foi enviada à AtmoUP." : "Entre em contato com a engenharia para apresentar sua demanda técnica."}</p>
      <Button asChild variant="accent" className="min-h-12"><Link to={confirmed ? "/" : "/contato"}>{confirmed ? "Voltar à página inicial" : "Falar com a Engenharia"}</Link></Button>
    </main>
  );
}