export interface ServicePillarDetail {
  slug: string;
  shortTitle: string;
  seoTitle: string;
  h1: string;
  lead: string;
  intro: string;
  scopeTitle: string;
  scopeItems: { title: string; detail: string }[];
  secondaryTitle: string;
  secondarySubtitle?: string;
  secondaryItems: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

export const servicePillarsDetail: ServicePillarDetail[] = [
  {
    slug: "diagnostico-tecnico",
    shortTitle: "Diagnóstico Técnico",
    seoTitle: "Diagnóstico de Equipamentos Industriais | AtmoUP",
    h1: "Diagnóstico Técnico de Equipamentos Industriais",
    lead: "Identificamos as causas de problemas de desempenho, gargalos e desvios operacionais em equipamentos e sistemas industriais.",
    intro:
      "Nosso diagnóstico combina levantamento de campo, análise documental e medições técnicas para comparar o comportamento real do equipamento com as premissas de projeto e embasar decisões de engenharia e manutenção.",
    scopeTitle: "O que avaliamos no Diagnóstico Técnico",
    scopeItems: [
      { title: "Levantamento de campo e inspeção técnica", detail: "Verificação presencial das condições físicas, operacionais e de instalação do equipamento e dos sistemas associados." },
      { title: "Análise documental", detail: "Revisão de folhas de dados, curvas características, desenhos, memoriais e histórico de intervenções." },
      { title: "Avaliação das condições operacionais e medições", detail: "Coleta de dados reais em operação para mapear o regime efetivo de trabalho da planta." },
      { title: "Vazão, pressão e perda de carga", detail: "Análise aerodinâmica e de escoamento para localizar restrições, vazamentos e desbalanceamentos." },
      { title: "Potência, eficiência e integridade", detail: "Avaliação do consumo energético, rendimento real e integridade mecânica e estrutural dos componentes." },
      { title: "Projeto x operação, gargalos e recomendações", detail: "Comparação objetiva entre o projetado e o operado, com identificação de gargalos e plano de recomendações técnicas." },
    ],
    secondaryTitle: "Quando um diagnóstico técnico é indicado?",
    secondarySubtitle: "Cenários operacionais em que entender a causa raiz evita investimentos inadequados:",
    secondaryItems: [
      "Baixa vazão",
      "Perda de eficiência",
      "Consumo elevado",
      "Vibração",
      "Desgaste prematuro",
      "Falhas recorrentes",
      "Capacidade insuficiente",
      "Alteração de processo",
      "Expansão de produção",
      "Necessidade de adequação",
    ],
    ctaTitle: "Entenda a causa técnica antes de decidir o investimento.",
    ctaDescription: "Converse com a equipe de engenharia da AtmoUP sobre os desvios operacionais da sua planta.",
    ctaLabel: "Solicitar avaliação técnica",
  },
  {
    slug: "engenharia-de-implantacao",
    shortTitle: "Engenharia de Implantação",
    seoTitle: "Engenharia de Implantação de Equipamentos Industriais | AtmoUP",
    h1: "Engenharia de Implantação de Equipamentos Industriais",
    lead: "A AtmoUP atua desde a definição das premissas até a implantação e validação da solução em operação.",
    intro:
      "Estruturamos todas as etapas de engenharia necessárias para que novos equipamentos e sistemas industriais sejam corretamente especificados, dimensionados, integrados à planta e entregues conforme o desempenho esperado.",
    scopeTitle: "Escopo completo da Engenharia de Implantação",
    scopeItems: [
      { title: "Levantamento de requisitos e premissas", detail: "Definição técnica das condições de processo, restrições de planta, metas operacionais e critérios de projeto." },
      { title: "Especificação técnica, dimensionamento e seleção", detail: "Elaboração de folhas de dados, memoriais de cálculo e critérios técnicos para seleção adequada do equipamento." },
      { title: "Integração, layout e interfaces", detail: "Compatibilização física e operacional com dutos, utilidades, estruturas, elétrica, automação e linhas existentes." },
      { title: "Documentação técnica", detail: "Consolidação de desenhos, listas de materiais, memoriais e padrões técnicos para contratação e fabricação." },
      { title: "Acompanhamento de fabricação e montagem", detail: "Verificação técnica durante a fabricação e suporte à montagem em campo para manter aderência ao projeto." },
      { title: "Comissionamento e validação", detail: "Testes operacionais, verificação de parâmetros e validação final do sistema em condição real de trabalho." },
    ],
    secondaryTitle: "Etapas integradas do início à partida",
    secondarySubtitle: "Visão contínua de engenharia para reduzir desvios entre o projeto e a instalação em campo:",
    secondaryItems: [
      "Levantamento de requisitos",
      "Definição de premissas",
      "Especificação técnica",
      "Dimensionamento e seleção",
      "Integração, layout e interfaces",
      "Documentação de engenharia",
      "Acompanhamento de fabricação",
      "Acompanhamento de montagem",
      "Comissionamento",
      "Validação em operação",
    ],
    ctaTitle: "Planejando a implantação ou expansão de um sistema industrial?",
    ctaDescription: "Conte com a engenharia da AtmoUP para estruturar o escopo técnico e reduzir riscos na implantação.",
    ctaLabel: "Falar com a Engenharia",
  },
  {
    slug: "retrofit-e-adequacao",
    shortTitle: "Retrofit e Adequação",
    seoTitle: "Retrofit de Equipamentos Industriais | AtmoUP",
    h1: "Retrofit e Adequação de Equipamentos Industriais",
    lead: "Nem todo problema exige a substituição completa de um equipamento.",
    intro:
      "Com engenharia aplicada, avaliamos o potencial real do ativo instalado para modernizar, corrigir desvios de dimensionamento, ampliar capacidade e estender a vida útil com menor impacto de parada e investimento.",
    scopeTitle: "Frentes de atuação em Retrofit e Adequação",
    scopeItems: [
      { title: "Modernização e aumento de capacidade", detail: "Atualização técnica de ativos existentes para atender novos patamares de produção e exigências operacionais." },
      { title: "Adequação de processo e correção de dimensionamento", detail: "Ajustes de engenharia quando as condições reais de processo divergem do projeto original." },
      { title: "Substituição de componentes e alteração de sistemas", detail: "Redesenho e troca criteriosa de rotores, internos, meios filtrantes, ramais e conjuntos críticos." },
      { title: "Melhoria de eficiência e redução de perdas", detail: "Intervenções voltadas a diminuir perdas de carga, vazamentos e desperdícios operacionais." },
      { title: "Adequação normativa", detail: "Ajustes técnicos para alinhar instalações existentes a requisitos atuais de segurança e operação." },
      { title: "Extensão de vida útil", detail: "Especificação de materiais e soluções construtivas que aumentam a durabilidade e a confiabilidade do ativo." },
    ],
    secondaryTitle: "Exemplos de aplicação",
    secondarySubtitle: "Intervenções de retrofit e adequação conduzidas com base em engenharia:",
    secondaryItems: [
      "Retrofit de ventiladores",
      "Retrofit de filtros de mangas",
      "Adequação de sistemas de exaustão",
      "Adequação de dutos",
      "Adequação de coifas",
      "Modernização de equipamentos",
    ],
    ctaTitle: "Quer saber se o seu equipamento pode ser modernizado em vez de substituído?",
    ctaDescription: "Avalie tecnicamente a viabilidade de retrofit e adequação com a engenharia da AtmoUP.",
    ctaLabel: "Avaliar possibilidade de retrofit",
  },
  {
    slug: "engenharia-de-performance",
    shortTitle: "Engenharia de Performance",
    seoTitle: "Engenharia de Performance de Equipamentos Industriais | AtmoUP",
    h1: "Engenharia de Performance Industrial",
    lead: "Projetar corretamente é apenas o primeiro passo. O equipamento precisa entregar o desempenho esperado em operação.",
    intro:
      "Analisamos as condições reais de operação de equipamentos e sistemas industriais para comparar projeto x operação e identificar oportunidades concretas de melhoria — sempre com base em dados técnicos e sem promessas numéricas sem comprovação.",
    scopeTitle: "Parâmetros analisados em Engenharia de Performance",
    scopeItems: [
      { title: "Desempenho, vazão e pressão", detail: "Verificação do ponto real de operação frente à curva característica do equipamento e do sistema." },
      { title: "Potência, eficiência e consumo energético", detail: "Análise do aproveitamento energético e identificação de desperdícios associados a estrangulamentos ou desvios." },
      { title: "Perda de carga e capacidade", detail: "Mapeamento de resistências excessivas ao escoamento e limitações que restringem a capacidade operacional." },
      { title: "Confiabilidade e condições reais de operação", detail: "Leitura do comportamento do sistema sob variações de carga, temperatura, abrasão e regime contínuo." },
      { title: "Comparação projeto x operação", detail: "Confronto técnico entre o que foi especificado originalmente e o que o sistema efetivamente entrega." },
      { title: "Identificação de oportunidades de melhoria", detail: "Definição de ajustes operacionais, balanceamento e intervenções priorizadas por impacto técnico." },
    ],
    secondaryTitle: "Quais resultados podem ser buscados?",
    secondarySubtitle: "Objetivos técnicos definidos caso a caso conforme os dados levantados em cada instalação:",
    secondaryItems: [
      "Recuperação de capacidade",
      "Redução de perdas",
      "Aumento de eficiência",
      "Melhoria da confiabilidade",
      "Redução de consumo",
      "Adequação à nova condição operacional",
    ],
    ctaTitle: "Seu sistema pode operar com mais estabilidade e eficiência?",
    ctaDescription: "Solicite uma avaliação técnica baseada nas condições reais da sua operação.",
    ctaLabel: "Avaliar desempenho do equipamento",
  },
];