import { describe, expect, test } from "bun:test";
import { attributionKeys, ATTRIBUTION_KEY, buildLeadPayload, captureAttribution, captureSource, CONVERSION_KEY, consumeConversion, getWhatsAppUrl, isSubmissionAccepted, leadSchema } from "./leads";

const valid = { name: "Ana Silva", company: "Indústria Exemplo", email: "ana@example.com", phone: "", needType: "Diagnóstico Técnico", message: "Avaliar o sistema de exaustão.", segment: "", equipment: "", role: "", privacyConsent: true, website: "" };
const storage = () => {
  const values = new Map();
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => { values.set(key, value); }, removeItem: (key) => { values.delete(key); } };
};
describe("Regras dos formulários", () => {
  for (const key of ["name", "company", "email", "needType", "message"]) {
    test(`${key} é obrigatório`, () => { expect(leadSchema.safeParse({ ...valid, [key]: "" }).success).toBe(false); });
  }
  test("campos adicionais e telefone são opcionais", () => { expect(leadSchema.safeParse(valid).success).toBe(true); });
  for (const needType of ["Diagnóstico Técnico", "Engenharia de Implantação", "Retrofit e Adequação", "Engenharia de Performance", "Especificação/Dimensionamento", "Outro"]) {
    test(`aceita ${needType}`, () => { expect(leadSchema.safeParse({ ...valid, needType }).success).toBe(true); });
  }
  test("rejeita necessidade não permitida", () => { expect(leadSchema.safeParse({ ...valid, needType: "Serviço inventado" }).success).toBe(false); });
  test("consentimento é obrigatório", () => { expect(leadSchema.safeParse({ ...valid, privacyConsent: false }).success).toBe(false); });
  test("honeypot preenchido impede envio", () => { expect(leadSchema.safeParse({ ...valid, website: "spam" }).success).toBe(false); });
  test("segmento e equipamento devem ser opções do site", () => {
    expect(leadSchema.safeParse({ ...valid, segment: "Siderurgia", equipment: "Ventiladores Industriais" }).success).toBe(true);
    expect(leadSchema.safeParse({ ...valid, segment: "Inválido" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, equipment: "Inválido" }).success).toBe(false);
  });
  test("e-mail inválido é rejeitado", () => { expect(leadSchema.safeParse({ ...valid, email: "inválido" }).success).toBe(false); });
  test("atribuição persiste após navegar sem parâmetros", () => {
    const session = storage();
    const query = "?utm_source=linkedin&utm_medium=cpc&utm_campaign=retrofit&utm_term=ventilador&utm_content=anuncio&gclid=google123&li_fat_id=linkedin123";
    captureAttribution(query, session);
    const result = captureAttribution("", session);
    expect(result).toEqual({ utm_source: "linkedin", utm_medium: "cpc", utm_campaign: "retrofit", utm_term: "ventilador", utm_content: "anuncio", gclid: "google123", li_fat_id: "linkedin123" });
    expect(Object.keys(JSON.parse(session.getItem(ATTRIBUTION_KEY) || "{}"))).toEqual([...attributionKeys]);
  });
  test("visita direta não dispara conversão", () => { expect(consumeConversion(storage())).toBeNull(); });
  test("origem da URL permanece durante a sessão", () => {
    const session = storage();
    expect(captureSource("?origem=pagina-equipamento", "pagina-contato", session)).toBe("pagina-equipamento");
    expect(captureSource("", "pagina-contato", session)).toBe("pagina-equipamento");
  });
  test("WhatsApp oficial abre a mensagem de avaliação técnica", () => {
    const url = new URL(getWhatsAppUrl());
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/5511993102404");
    expect(decodeURIComponent(url.searchParams.get("text"))).toContain("avaliação técnica");
  });
  test("sucesso dispara uma única conversão sem dados de contato", () => {
    const session = storage();
    session.setItem(CONVERSION_KEY, JSON.stringify({ id: "request-123", createdAt: Date.now() }));
    expect(consumeConversion(session)).toEqual({ event: "generate_lead", form_name: "technical_evaluation", event_id: "request-123" });
    expect(consumeConversion(session)).toBeNull();
  });
  test("payload para Web3Forms inclui access_key, assunto, remetente e botcheck falso", () => {
    const payload = buildLeadPayload(valid, {
      source: "pagina-contato",
      pageOrigin: "https://www.atmoup.com.br/contato",
      attribution: Object.fromEntries(attributionKeys.map((key) => [key, ""])),
      accessKey: "153b5c7f-13df-400c-bd85-339a10ed4a91",
      submittedAt: "2026-11-26T12:00:00.000Z",
    });
    expect(payload.access_key).toBe("153b5c7f-13df-400c-bd85-339a10ed4a91");
    expect(payload.subject).toBe("Nova solicitação técnica — Site AtmoUP");
    expect(payload.from_name).toBe("Site AtmoUP");
    expect(payload.botcheck).toBe(false);
    expect("website" in payload).toBe(false);
  });
  test("resposta do Web3Forms com success false é tratada como falha mesmo em HTTP 200", () => {
    expect(isSubmissionAccepted(true, { success: false, message: "Invalid key" })).toBe(false);
    expect(isSubmissionAccepted(true, { success: true })).toBe(true);
    expect(isSubmissionAccepted(false, { success: true })).toBe(false);
  });
});