export const BASE_URL = "https://atmoup-air-solution.lovable.app";

export const SITE_NAME = "ATMOUP — Engenharia de Equipamentos Industriais";

export const CONTACT_CONFIG = {
  // Substituir pelos dados oficiais antes da publicação em produção
  phone: null as string | null, // Ex.: "(11) 0000-0000"
  phoneHref: null as string | null, // Ex.: "tel:+551100000000"
  whatsappNumber: null as string | null, // Ex.: "5511900000000" (somente dígitos com DDI)
  whatsappDefaultMessage:
    "Olá! Gostaria de solicitar uma avaliação técnica com a engenharia da AtmoUP.",
  email: null as string | null, // Ex.: "contato@dominiooficial.com.br"
  linkedinUrl: null as string | null, // Ex.: "https://www.linkedin.com/company/atmoup"
  location: "São Paulo, SP — Atendimento em todo o Brasil",
  businessHours: "Segunda a Sexta, das 8h às 18h",
  // Endpoint real (webhook, API ou backend) para recebimento de leads
  leadEndpoint: (import.meta.env["VITE_LEAD_ENDPOINT"] as string | undefined)?.trim() || null,
};

export const LEAD_NEED_TYPES = [
  "Diagnóstico Técnico",
  "Engenharia de Implantação",
  "Retrofit e Adequação",
  "Engenharia de Performance",
  "Especificação/Dimensionamento",
  "Outro",
] as const;

export type LeadNeedType = (typeof LEAD_NEED_TYPES)[number];