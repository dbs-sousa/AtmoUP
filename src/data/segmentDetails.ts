export interface SegmentDetail {
  slug: string;
  name: string;
  seoTitle: string;
  summary: string;
  characteristics: string;
  challenges: string[];
  whereWeAct: string[];
  relevantEquipments: { name: string; slug: string }[];
  benefits: string[];
  ctaTitle: string;
  ctaDescription: string;
}

export const segmentServiceLinks = [
  { name: "Diagnóstico Técnico", href: "/diagnostico-tecnico" },
  { name: "Engenharia de Implantação", href: "/engenharia-de-implantacao" },
  { name: "Retrofit e Adequação", href: "/retrofit-e-adequacao" },
  { name: "Engenharia de Performance", href: "/engenharia-de-performance" },
];

export const segmentDetails: SegmentDetail[] = [
  {
    slug: "siderurgia",
    name: "Siderurgia",
    seoTitle: "Engenharia de Equipamentos Industriais para Siderurgia | AtmoUP",
    summary: "Exaustão, despoeiramento, captação, ventiladores, filtros, dutos, equipamentos de processo e projetos de adequação e retrofit.",
    characteristics:
      "A operação siderúrgica combina regime contínuo, cargas térmicas severas, alta concentração de particulados abrasivos e forte dependência da disponibilidade dos sistemas de exaustão, despoeiramento e movimentação de gases.",
    challenges: [
      "Desgaste acelerado em dutos, coifas, ventiladores e equipamentos de processo",
      "Perda de capacidade de captação e desbalanceamento em redes de exaustão",
      "Alta perda de carga e sobrecarga operacional em filtros de mangas",
      "Necessidade de adequações e retrofit em janelas curtas de parada programada",
    ],
    whereWeAct: [
      "Diagnóstico técnico de sistemas de exaustão, despoeiramento e captação",
      "Engenharia de adequação e retrofit de ventiladores, filtros e redes de dutos",
      "Especificação, dimensionamento e acompanhamento de implantação de equipamentos de processo",
      "Avaliação de performance operacional para recuperação de vazão e confiabilidade",
    ],
    relevantEquipments: [
      { name: "Sistemas de Exaustão", slug: "sistemas-de-exaustao" },
      { name: "Filtros de Mangas", slug: "filtros-de-mangas" },
      { name: "Ventiladores Industriais", slug: "ventiladores-industriais" },
      { name: "Dutos e Coifas", slug: "dutos-e-coifas" },
      { name: "Precipitadores Eletrostáticos", slug: "precipitadores-eletrostaticos" },
    ],
    benefits: [
      "Decisões técnicas embasadas em medições reais de campo",
      "Redução de riscos em intervenções de parada programada",
      "Maior confiabilidade e estabilidade dos sistemas de captação e despoeiramento",
      "Aproveitamento técnico de ativos existentes por meio de retrofit quando viável",
    ],
    ctaTitle: "Avalie os sistemas críticos da sua planta siderúrgica",
    ctaDescription: "Converse com nossa engenharia sobre diagnóstico, adequação ou retrofit em exaustão, despoeiramento e equipamentos de processo.",
  },
  {
    slug: "metalurgia",
    name: "Metalurgia",
    seoTitle: "Engenharia de Equipamentos Industriais para Metalurgia | AtmoUP",
    summary: "Fundição, captação de fumos e particulados, exaustão, ventilação, filtros e adequações técnicas.",
    characteristics:
      "Processos metalúrgicos e de fundição geram fumos metálicos, calor e particulados finos que exigem captação eficiente na fonte, redes de exaustão bem balanceadas e sistemas de filtragem dimensionados à condição real da operação.",
    challenges: [
      "Fuga de fumos e particulados em operações de fundição e acabamento",
      "Coifas e sistemas de exaustão com baixa eficiência de captura",
      "Desequilíbrio entre ventilação geral, exaustão localizada e filtros",
      "Necessidade de adequações após mudanças de layout ou aumento de produção",
    ],
    whereWeAct: [
      "Diagnóstico de captação de fumos e particulados em linhas de fundição",
      "Dimensionamento e adequação de sistemas de exaustão, ventilação e filtros",
      "Revisão geométrica de coifas e balanceamento aerodinâmico de dutos",
      "Projetos de retrofit e implantação para novas demandas operacionais",
    ],
    relevantEquipments: [
      { name: "Sistemas de Exaustão", slug: "sistemas-de-exaustao" },
      { name: "Dutos e Coifas", slug: "dutos-e-coifas" },
      { name: "Filtros de Mangas", slug: "filtros-de-mangas" },
      { name: "Ventiladores Industriais", slug: "ventiladores-industriais" },
      { name: "Ciclones e Separadores", slug: "ciclones-e-separadores" },
    ],
    benefits: [
      "Captação mais eficiente na fonte com menor desperdício de vazão",
      "Adequação técnica alinhada às condições reais da fundição e do processo",
      "Menor retrabalho em modificações de rede e equipamentos",
      "Melhoria da estabilidade operacional e das condições de trabalho",
    ],
    ctaTitle: "Precisa adequar exaustão, ventilação ou filtros na metalurgia?",
    ctaDescription: "Fale com a equipe de engenharia da AtmoUP para avaliar tecnicamente os pontos críticos da sua instalação.",
  },
  {
    slug: "agroindustria",
    name: "Agroindústria",
    seoTitle: "Engenharia de Equipamentos Industriais para Agroindústria | AtmoUP",
    summary: "Controle de pó e particulados, transporte pneumático, captação, exaustão, filtros, ventiladores e sistemas de processo.",
    characteristics:
      "A agroindústria opera com alto volume de movimentação de grãos, farelos e pós orgânicos, sob forte pressão de disponibilidade nos períodos de safra e exigência constante de controle de particulados e eficiência energética.",
    challenges: [
      "Acúmulo de pó e particulados em pontos de recebimento, transferência e ensaque",
      "Entupimentos, desgaste e perda de capacidade em linhas de transporte pneumático",
      "Filtros de mangas e ciclones operando com alta perda de carga",
      "Ventiladores e sistemas de processo operando fora do ponto ideal de rendimento",
    ],
    whereWeAct: [
      "Diagnóstico técnico de captação, exaustão, filtros e ventiladores",
      "Engenharia e otimização de sistemas de transporte pneumático e sistemas de processo",
      "Projetos de adequação e retrofit planejados para o período de entressafra",
      "Avaliação de performance para aumento de confiabilidade durante a safra",
    ],
    relevantEquipments: [
      { name: "Sistemas de Transporte Pneumático", slug: "sistemas-de-transporte-pneumatico" },
      { name: "Filtros de Mangas", slug: "filtros-de-mangas" },
      { name: "Ciclones e Separadores", slug: "ciclones-e-separadores" },
      { name: "Ventiladores Industriais", slug: "ventiladores-industriais" },
      { name: "Sistemas de Exaustão", slug: "sistemas-de-exaustao" },
    ],
    benefits: [
      "Maior confiabilidade operacional nos períodos críticos de safra",
      "Controle mais consistente de pó e particulados nos pontos de processo",
      "Estabilização de linhas de transporte pneumático e redução de paradas",
      "Planejamento técnico assertivo para investimentos na entressafra",
    ],
    ctaTitle: "Planejando adequações para a próxima safra ou entressafra?",
    ctaDescription: "Converse com a AtmoUP para diagnosticar sistemas de pó, transporte pneumático, exaustão e ventilação.",
  },
  {
    slug: "mineracao",
    name: "Mineração",
    seoTitle: "Engenharia de Equipamentos Industriais para Mineração | AtmoUP",
    summary: "Controle de poeira mineral abrasiva, despoeiramento em transferências e confiabilidade de equipamentos.",
    characteristics:
      "Operações de britagem, peneiramento, transferência e beneficiamento mineral impõem alta abrasividade aos dutos, coifas, ventiladores e equipamentos de despoeiramento, exigindo engenharia voltada à durabilidade e disponibilidade.",
    challenges: [
      "Desgaste abrasivo acelerado em dutos, curvas, ciclones e rotores",
      "Fuga de poeira mineral em chutes e pontos de transferência",
      "Entupimento de redes de dutos por velocidades de transporte inadequadas",
      "Perda de desempenho de filtros e ventiladores após aumento de produção",
    ],
    whereWeAct: [
      "Diagnóstico de sistemas de despoeiramento e captação em pontos de transferência",
      "Revisão de velocidades de transporte e especificação contra abrasão",
      "Engenharia de retrofit e adequação para recuperação de capacidade",
      "Especificação técnica para implantação de novos conjuntos",
    ],
    relevantEquipments: [
      { name: "Filtros de Mangas", slug: "filtros-de-mangas" },
      { name: "Dutos e Coifas", slug: "dutos-e-coifas" },
      { name: "Ventiladores Industriais", slug: "ventiladores-industriais" },
      { name: "Ciclones e Separadores", slug: "ciclones-e-separadores" },
    ],
    benefits: [
      "Redução de falhas recorrentes por desgaste e entupimento",
      "Melhoria da eficiência de captação em pontos críticos",
      "Especificações alinhadas à severidade real do material manuseado",
      "Suporte técnico para decisões de manutenção e CAPEX",
    ],
    ctaTitle: "Avalie o desempenho dos sistemas de despoeiramento na mineração",
    ctaDescription: "Converse com nossa engenharia sobre diagnóstico, adequação e confiabilidade de equipamentos.",
  },
  {
    slug: "cimento",
    name: "Cimento",
    seoTitle: "Engenharia de Equipamentos Industriais para Cimento | AtmoUP",
    summary: "Despoeiramento, ventiladores de processo, transporte pneumático e eficiência operacional em regime contínuo.",
    characteristics:
      "Plantas de cimento operam continuamente com alta carga de particulados, gases quentes e equipamentos de grande porte, onde perdas de carga, infiltrações e desvios de rendimento impactam diretamente o consumo energético e a estabilidade da produção.",
    challenges: [
      "Alto consumo energético em ventiladores de processo e despoeiramento",
      "Perda de carga elevada em filtros de mangas e redes de dutos",
      "Desgaste abrasivo em separadores, dutos e rotores",
      "Desvios entre condições de projeto e regime atual de operação",
    ],
    whereWeAct: [
      "Avaliação de performance e diagnóstico de ventiladores e filtros",
      "Análise de perdas de carga e oportunidades de eficiência operacional",
      "Engenharia de retrofit para ativos existentes em paradas programadas",
      "Apoio técnico em especificações e projetos de adequação",
    ],
    relevantEquipments: [
      { name: "Ventiladores Industriais", slug: "ventiladores-industriais" },
      { name: "Filtros de Mangas", slug: "filtros-de-mangas" },
      { name: "Precipitadores Eletrostáticos", slug: "precipitadores-eletrostaticos" },
      { name: "Sistemas de Transporte Pneumático", slug: "sistemas-de-transporte-pneumatico" },
    ],
    benefits: [
      "Visibilidade técnica sobre perdas operacionais e gargalos",
      "Apoio à redução de consumo específico com base em dados reais",
      "Maior previsibilidade em intervenções de manutenção e retrofit",
      "Integração consistente entre equipamento e processo",
    ],
    ctaTitle: "Buscando maior confiabilidade e eficiência em planta de cimento?",
    ctaDescription: "Solicite uma avaliação técnica com a equipe de engenharia da AtmoUP.",
  },
  {
    slug: "quimica",
    name: "Química",
    seoTitle: "Engenharia de Equipamentos Industriais para Indústria Química | AtmoUP",
    summary: "Tratamento de gases, lavadores, exaustão de processos e especificação criteriosa de materiais.",
    characteristics:
      "A indústria química exige rigor na seleção de materiais, estanqueidade, controle de gases corrosivos e estabilidade operacional dos sistemas de exaustão e lavagem de gases.",
    challenges: [
      "Corrosão em lavadores, dutos, internos e ventiladores de exaustão",
      "Arraste de névoa ou baixa eficiência de neutralização em lavadores de gases",
      "Alterações de processo que modificam a composição ou vazão dos gases",
      "Necessidade de adequação técnica com segurança operacional",
    ],
    whereWeAct: [
      "Diagnóstico técnico de lavadores de gases e sistemas de exaustão",
      "Especificação de materiais e componentes compatíveis com o processo",
      "Projetos de adequação, retrofit e implantação de sistemas de tratamento",
      "Avaliação de desempenho em operação real",
    ],
    relevantEquipments: [
      { name: "Lavadores de Gases", slug: "lavadores-de-gases" },
      { name: "Sistemas de Exaustão", slug: "sistemas-de-exaustao" },
      { name: "Ventiladores Industriais", slug: "ventiladores-industriais" },
      { name: "Dutos e Coifas", slug: "dutos-e-coifas" },
    ],
    benefits: [
      "Seleção técnica criteriosa de materiais e soluções construtivas",
      "Maior estabilidade no tratamento e na exaustão de gases",
      "Redução de falhas precoces por ataque químico ou corrosão",
      "Documentação técnica clara para contratação e implantação",
    ],
    ctaTitle: "Precisa avaliar lavadores de gases ou exaustão em processo químico?",
    ctaDescription: "Fale com a engenharia da AtmoUP para diagnosticar e especificar a solução adequada.",
  },
  {
    slug: "papel-e-celulose",
    name: "Papel e Celulose",
    seoTitle: "Engenharia de Equipamentos Industriais para Papel e Celulose | AtmoUP",
    summary: "Ventilação de processo, controle de emissões, sistemas auxiliares e engenharia para paradas programadas.",
    characteristics:
      "Plantas de papel e celulose operam em alta escala e regime contínuo, demandando confiabilidade elevada em ventiladores de processo, controle de emissões, exaustão e sistemas auxiliares.",
    challenges: [
      "Desvios de rendimento e consumo elevado em ventiladores de operação contínua",
      "Necessidade de diagnóstico prévio para definir escopos de parada geral",
      "Desgaste e perda de desempenho em sistemas de controle de emissões",
      "Integração de adequações sem comprometer a estabilidade da planta",
    ],
    whereWeAct: [
      "Diagnóstico técnico e avaliação de performance de equipamentos críticos",
      "Engenharia de retrofit e adequação planejada para paradas gerais",
      "Especificação e acompanhamento de implantação de novos sistemas",
      "Suporte técnico às equipes de engenharia, manutenção e projetos",
    ],
    relevantEquipments: [
      { name: "Ventiladores Industriais", slug: "ventiladores-industriais" },
      { name: "Precipitadores Eletrostáticos", slug: "precipitadores-eletrostaticos" },
      { name: "Lavadores de Gases", slug: "lavadores-de-gases" },
      { name: "Sistemas de Exaustão", slug: "sistemas-de-exaustao" },
    ],
    benefits: [
      "Escopos técnicos bem definidos antes das paradas programadas",
      "Foco em confiabilidade e eficiência em operação contínua",
      "Decisões de manutenção e investimento baseadas em análise técnica",
      "Integração consistente com sistemas existentes da planta",
    ],
    ctaTitle: "Estruturando escopos de engenharia para sua planta de papel e celulose?",
    ctaDescription: "Converse com a equipe técnica da AtmoUP para avaliar seus equipamentos e sistemas.",
  },
];