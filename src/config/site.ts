export const BASE_URL = "https://www.atmoup.com.br";

export const SITE_NAME = "AtmoUP — Engenharia de Equipamentos Industriais";

export const CONTACT_CONFIG = {
  // Substituir pelos dados oficiais antes da publicação em produção
  phone: null as string | null, // Ex.: "(11) 0000-0000"
  phoneHref: null as string | null, // Ex.: "tel:+551100000000"
  whatsappNumber: "5511993102404", // Official number with DDI (11 99310-2404)
  whatsappDefaultMessage:
    "Olá! Gostaria de solicitar uma avaliação técnica com a engenharia da AtmoUP.",
  email: null as string | null, // Ex.: "contato@dominiooficial.com.br"
  linkedinUrl: null as string | null, // Ex.: "https://www.linkedin.com/company/atmoup"
  location: "São Paulo, SP — Atendimento em todo o Brasil",
  businessHours: "Segunda a Sexta, das 8h às 18h",
  // Endpoint real (webhook, API ou backend) para recebimento de leads
  leadEndpoint:
    (import.meta.env["VITE_LEAD_ENDPOINT"] as string | undefined)?.trim() ||
    "https://api.web3forms.com/submit",
  web3FormsAccessKey:
    (import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] as string | undefined)?.trim() ||
    "153b5c7f-13df-400c-bd85-339a10ed4a91",
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