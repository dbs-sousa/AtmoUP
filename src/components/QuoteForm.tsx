import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeadForm from "@/components/LeadForm";

interface QuoteFormProps {
  source: string;
  title?: string;
  description?: string;
}

const QuoteForm = ({
  source,
  title = "Solicitar avaliação técnica",
  description = "Preencha os dados abaixo para discutir sua demanda técnica com a engenharia da AtmoUP.",
}: QuoteFormProps) => (
  <Card className="shadow-industrial min-w-0">
    <CardHeader>
      <CardTitle className="text-2xl text-primary">{title}</CardTitle>
      {description && <p className="text-muted-foreground">{description}</p>}
    </CardHeader>
    <CardContent><LeadForm source={source} /></CardContent>
  </Card>
);

export default QuoteForm;
