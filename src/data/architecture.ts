export interface EngineeringPillar {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  whenToUse: string;
  deliverables: string[];
  impact: string[];
}

export interface EquipmentArea {
  slug: string;
  name: string;
  category: string;
  summary: string;
  engineeringRole: string;
  typicalChallenges: string[];
  deliverables: string[];
}

export interface IndustrySegment {
  slug: string;
  name: string;
  summary: string;
  operationalContext: string;
  criticalSystems: string[];
  engineeringFocus: string[];
}

export interface TechnicalCase {
  id: string;
  title: string;
  segment: string;
  system: string;
  problem: string;
  diagnosis: string;
  engineering: string;
  solution: string;
  result: string;
}

export const engineeringPillars: EngineeringPillar[] = [
  {
    slug: "diagnostico-tecnico",
    title: "Diagnóstico Técnico",
    shortTitle: "Diagnóstico Técnico",
    subtitle: "Investigação de causa raiz, medições em campo e avaliação estrutural e operacional de equipamentos industriais.",
    description:
      "Levantamento técnico aprofundado para identificar gargalos de vazão, perda de carga excessiva, desgaste prematuro, vibração, subdimensionamento e falhas recorrentes antes de qualquer investimento.",
    whenToUse: "Indicado quando há queda de desempenho, paradas não programadas, alto consumo energético ou necessidade de embasar decisões de CAPEX e manutenção.",
    deliverables: [
      "Inspeção técnica e levantamento de campo em operação",
      "Análise de curvas operacionais, pressão, vazão e temperatura",
      "Identificação de causa raiz de falhas mecânicas e de processo",
      "Relatório técnico com plano de ação priorizado por criticidade",
    ],
    impact: [
      "Decisões de investimento baseadas em dados reais de planta",
      "Redução de intervenções corretivas sem solução definitiva",
      "Visibilidade clara de riscos operacionais e de confiabilidade",
    ],
  },
  {
    slug: "engenharia-de-implantacao",
    title: "Engenharia de Implantação",
    shortTitle: "Engenharia de Implantação",
    subtitle: "Engenharia conceitual, básica, detalhamento e especificação técnica para novos sistemas e expansões industriais.",
    description:
      "Estruturação técnica completa para aquisição, fabricação, montagem e comissionamento de equipamentos e sistemas industriais com aderência ao processo e às normas aplicáveis.",
    whenToUse: "Indicado para novas linhas produtivas, ampliações de capacidade, projetos de CAPEX e contratações técnicas de alta criticidade.",
    deliverables: [
      "Engenharia conceitual, básica e de detalhamento",
      "Folhas de dados, memoriais de cálculo e especificações técnicas",
      "Apoio técnico na equalização de propostas e diligenciamento",
      "Acompanhamento de montagem, testes e comissionamento",
    ],
    impact: [
      "Menor risco de desvios de escopo, prazo e custo na implantação",
      "Integração correta entre equipamento, dutos, utilidades e processo",
      "Partida operacional previsível e dentro dos parâmetros de projeto",
    ],
  },
  {
    slug: "retrofit-e-adequacao",
    title: "Retrofit e Adequação",
    shortTitle: "Retrofit e Adequação",
    subtitle: "Modernização, engenharia reversa e adequação de equipamentos existentes às demandas atuais da operação.",
    description:
      "Projetos de recuperação e atualização tecnológica para ativos já instalados, ampliando vida útil, capacidade operacional e conformidade sem exigir substituição integral desnecessária.",
    whenToUse: "Indicado para ativos antigos, mudanças de processo, obsolescência de componentes ou adequação a novas exigências operacionais e ambientais.",
    deliverables: [
      "Engenharia reversa e atualização de documentação técnica",
      "Redimensionamento de rotores, carcaças, dutos e internos",
      "Especificação de novos materiais resistentes a abrasão e corrosão",
      "Plano de execução compatível com janelas de parada programada",
    ],
    impact: [
      "Aproveitamento inteligente da infraestrutura existente",
      "Menor investimento comparado à substituição completa do sistema",
      "Recuperação de confiabilidade e extensão da vida útil do ativo",
    ],
  },
  {
    slug: "engenharia-de-performance",
    title: "Engenharia de Performance",
    shortTitle: "Engenharia de Performance",
    subtitle: "Otimização de eficiência energética, estabilidade operacional e confiabilidade contínua de sistemas críticos.",
    description:
      "Atuação orientada a resultados mensuráveis em sistemas de movimentação de gases, despoeiramento e processos industriais, reduzindo perdas e elevando a disponibilidade da planta.",
    whenToUse: "Indicado para plantas que buscam reduzir consumo específico de energia, estabilizar captação/exaustão e aumentar a disponibilidade dos ativos.",
    deliverables: [
      "Estudos de eficiência energética e ponto ótimo de operação",
      "Balanceamento aerodinâmico de redes de dutos e ramais",
      "Avaliação de controle de velocidade, dampers e regimes de carga",
      "Indicadores técnicos para acompanhamento contínuo de desempenho",
    ],
    impact: [
      "Redução direta do consumo de energia elétrica em sistemas contínuos",
      "Maior estabilidade operacional e controle de emissões",
      "Menor desgaste de componentes e menor custo total de propriedade",
    ],
  },
];

export const equipmentAreas: EquipmentArea[] = [
  {
    slug: "ventiladores-industriais",
    name: "Ventiladores Industriais",
    category: "Movimentação de Gases",
    summary: "Engenharia aplicada a ventiladores centrífugos e axiais de processo, exaustão e tiragem industrial.",
    engineeringRole: "Diagnóstico de curva operacional, seleção, engenharia reversa, retrofit de rotores e aumento de confiabilidade mecânica e aerodinâmica.",
    typicalChallenges: ["Vibração recorrente e desgaste abrasivo em rotores", "Operação fora do ponto de melhor rendimento", "Consumo energético elevado e restrição de vazão"],
    deliverables: ["Revisão de curva pressão x vazão", "Especificação técnica e folhas de dados", "Projetos de retrofit e adequação mecânica"],
  },
  {
    slug: "filtros-de-mangas",
    name: "Filtros de Mangas",
    category: "Controle de Particulados",
    summary: "Engenharia para sistemas de despoeiramento com foco em relação ar/pano, limpeza pulsante e estabilidade de perda de carga.",
    engineeringRole: "Avaliação de desempenho de filtragem, dimensionamento, adequação de meios filtrantes e modernização de sistemas de limpeza.",
    typicalChallenges: ["Perda de carga elevada e baixa vida útil das mangas", "Arraste de particulados acima dos limites operacionais", "Subdimensionamento frente ao aumento de produção"],
    deliverables: ["Diagnóstico de filtragem e limpeza pulse-jet", "Memorial de cálculo e especificação de adequação", "Projeto de retrofit para ganho de capacidade"],
  },
  {
    slug: "sistemas-de-exaustao",
    name: "Sistemas de Exaustão",
    category: "Captação e Controle",
    summary: "Engenharia integrada de captação, transporte, tratamento e descarga de gases e particulados industriais.",
    engineeringRole: "Concepção, balanceamento e reengenharia de sistemas completos para garantir eficiência de captação com menor perda de carga.",
    typicalChallenges: ["Fuga de fumos e poeira nos pontos de geração", "Desbalanceamento entre ramais de exaustão", "Interferência operacional por baixa velocidade de transporte"],
    deliverables: ["Estudo de captação e balanceamento de rede", "Projeto básico e detalhado do sistema", "Comissionamento e validação de desempenho"],
  },
  {
    slug: "dutos-e-coifas",
    name: "Dutos e Coifas",
    category: "Captação e Condução",
    summary: "Dimensionamento aerodinâmico e estrutural de redes de dutos, coifas e captadores industriais.",
    engineeringRole: "Projeto de geometria de captação, controle de velocidade de transporte, proteção contra abrasão e redução de perdas localizadas.",
    typicalChallenges: ["Acúmulo de material e entupimento em dutos", "Desgaste acelerado em curvas e transições", "Coifas ineficientes que exigem vazão excessiva"],
    deliverables: ["Cálculo de perda de carga e velocidades", "Detalhamento de fabricação e suportação", "Redesenho de coifas para maior eficiência de captura"],
  },
  {
    slug: "precipitadores-eletrostaticos",
    name: "Precipitadores Eletrostáticos",
    category: "Controle de Emissões",
    summary: "Engenharia técnica para avaliação, adequação e confiabilidade de precipitadores em processos de alta demanda.",
    engineeringRole: "Diagnóstico de distribuição de fluxo, inspeção técnica de internos e estudos de modernização para estabilidade de coleta.",
    typicalChallenges: ["Distribuição irregular de gases na entrada", "Queda de eficiência de coleta em regime variável", "Desgaste estrutural e desalinhamento de componentes"],
    deliverables: ["Diagnóstico operacional e estrutural", "Especificação de adequações e melhorias", "Acompanhamento técnico em paradas programadas"],
  },
  {
    slug: "ciclones-e-separadores",
    name: "Ciclones e Separadores",
    category: "Separação Mecânica",
    summary: "Engenharia para pré-separação e coleta de particulados grossos e abrasivos em sistemas industriais.",
    engineeringRole: "Dimensionamento geométrico, análise de eficiência fracionária e especificação de revestimentos antiabrasivos.",
    typicalChallenges: ["Baixa eficiência de retenção de partículas", "Abrasão severa em cones e volutas", "Perda de carga incompatível com o ventilador"],
    deliverables: ["Revisão de dimensionamento e geometria", "Especificação de materiais e revestimentos", "Integração com filtros e sistemas de exaustão"],
  },
  {
    slug: "lavadores-de-gases",
    name: "Lavadores de Gases",
    category: "Tratamento de Gases",
    summary: "Engenharia aplicada à neutralização de gases ácidos, vapores químicos e particulados úmidos.",
    engineeringRole: "Avaliação de transferência de massa, seleção de materiais resistentes à corrosão e otimização do circuito de lavagem.",
    typicalChallenges: ["Corrosão em carcaças, bicos e eliminadores de névoa", "Baixa eficiência de absorção química", "Arraste de gotículas e sobrecarga no exaustor"],
    deliverables: ["Diagnóstico de processo e materiais", "Projeto de adequação e retrofit", "Especificação técnica para implantação"],
  },
  {
    slug: "sistemas-de-transporte-pneumatico",
    name: "Sistemas de Transporte Pneumático",
    category: "Movimentação de Sólidos",
    summary: "Engenharia para transporte pneumático em fase diluída ou densa de pós, grãos e materiais industriais.",
    engineeringRole: "Dimensionamento de linhas, seleção de sopradores/ventiladores e eliminação de gargalos de entupimento e desgaste.",
    typicalChallenges: ["Entupimentos recorrentes em linhas de transporte", "Degradação do material transportado", "Alto consumo energético por má regulagem de ar"],
    deliverables: ["Estudo de regime de transporte e perda de carga", "Projeto básico e detalhado de linhas", "Otimização de consumo e confiabilidade"],
  },
  {
    slug: "outros-equipamentos-industriais",
    name: "Outros Equipamentos Industriais",
    category: "Engenharia Sob Demanda",
    summary: "Aplicação da metodologia de engenharia da AtmoUP a equipamentos rotativos, estáticos e sistemas auxiliares de processo.",
    engineeringRole: "Diagnóstico, engenharia reversa, especificação e projetos de adequação para ativos críticos fora de padrão.",
    typicalChallenges: ["Equipamentos legados sem documentação técnica", "Falhas crônicas sem solução de mercado", "Necessidade de adaptação a novas condições de processo"],
    deliverables: ["Levantamento técnico e engenharia reversa", "Projetos de adequação e melhoria", "Suporte técnico a equipes de engenharia e manutenção"],
  },
];

export const industrySegments: IndustrySegment[] = [
  {
    slug: "siderurgia",
    name: "Siderurgia",
    summary: "Engenharia para sistemas severos de exaustão, despoeiramento, tiragem e movimentação de gases em altas temperaturas.",
    operationalContext: "Operação contínua com cargas térmicas elevadas, particulados abrasivos e alta criticidade de disponibilidade.",
    criticalSystems: ["Sistemas de exaustão de aciaria e fornos", "Filtros de mangas de grande porte", "Ventiladores industriais de alta potência", "Dutos e coifas refrigeradas ou reforçadas"],
    engineeringFocus: ["Confiabilidade em regime severo", "Controle de abrasão e temperatura", "Retrofit em janelas curtas de parada"],
  },
  {
    slug: "metalurgia",
    name: "Metalurgia",
    summary: "Soluções de engenharia para captação de fumos metálicos, despoeiramento e ventilação de processos térmicos.",
    operationalContext: "Processos de fundição, tratamento térmico e acabamento com exigência rigorosa de captação na fonte.",
    criticalSystems: ["Coifas e sistemas de exaustão localizada", "Filtros de mangas e ciclones", "Ventiladores centrífugos de processo"],
    engineeringFocus: ["Eficiência de captura na fonte", "Estabilidade de vazão e pressão", "Adequação técnica de sistemas legados"],
  },
  {
    slug: "agroindustria",
    name: "Agroindústria",
    summary: "Engenharia aplicada a despoeiramento de grãos, transporte pneumático, secagem e ventilação industrial.",
    operationalContext: "Sazonalidade intensa, poeiras orgânicas combustíveis e necessidade de alta disponibilidade durante a safra.",
    criticalSystems: ["Filtros de mangas e ciclones", "Sistemas de transporte pneumático", "Ventiladores de secagem e aeração"],
    engineeringFocus: ["Continuidade operacional na safra", "Segurança e controle de particulados", "Eficiência energética em operação contínua"],
  },
  {
    slug: "mineracao",
    name: "Mineração",
    summary: "Engenharia para controle de poeira em britagem, peneiramento, transferência e beneficiamento mineral.",
    operationalContext: "Ambientes de altíssima abrasividade, poeira mineral fina e operação remota de grande porte.",
    criticalSystems: ["Sistemas de despoeiramento em transferências", "Dutos e coifas antiabrasivas", "Ventiladores e ciclones industriais"],
    engineeringFocus: ["Proteção contra desgaste abrasivo", "Aumento do tempo médio entre falhas", "Redimensionamento para ganho de produção"],
  },
  {
    slug: "cimento",
    name: "Cimento",
    summary: "Engenharia de performance e retrofit para filtros, precipitadores, ventiladores de processo e transporte de pó.",
    operationalContext: "Processos contínuos com alta concentração de particulados, temperaturas elevadas e forte impacto do custo energético.",
    criticalSystems: ["Ventiladores de tiragem e moagem", "Filtros de mangas e precipitadores eletrostáticos", "Sistemas de transporte pneumático"],
    engineeringFocus: ["Redução do consumo específico de energia", "Aumento de vida útil de componentes", "Confiabilidade em operação 24/7"],
  },
  {
    slug: "quimica",
    name: "Química",
    summary: "Engenharia para tratamento de gases corrosivos, exaustão de processos e seleção criteriosa de materiais.",
    operationalContext: "Ambientes corrosivos, gases ácidos e exigências estritas de segurança operacional e controle ambiental.",
    criticalSystems: ["Lavadores de gases", "Ventiladores em ligas especiais ou PP", "Redes de dutos resistentes à corrosão"],
    engineeringFocus: ["Seleção técnica de materiais", "Eficiência de neutralização e exaustão", "Conformidade e segurança de processo"],
  },
  {
    slug: "papel-e-celulose",
    name: "Papel e Celulose",
    summary: "Engenharia para ventilação de processo, controle de emissões, caldeiras e sistemas auxiliares de planta.",
    operationalContext: "Plantas integradas de alta escala com foco em estabilidade térmica, confiabilidade e eficiência energética.",
    criticalSystems: ["Ventiladores industriais de processo", "Precipitadores eletrostáticos e lavadores", "Sistemas de exaustão e transporte pneumático"],
    engineeringFocus: ["Otimização energética", "Diagnóstico de ativos críticos", "Engenharia para paradas gerais programadas"],
  },
  {
    slug: "outros-segmentos-industriais",
    name: "Outros Segmentos Industriais",
    summary: "Engenharia de equipamentos sob medida para alimentos, borracha, vidro, fertilizantes, energia e manufatura pesada.",
    operationalContext: "Demandas específicas onde o domínio de engenharia de processo e equipamentos faz diferença direta no resultado.",
    criticalSystems: ["Sistemas de exaustão e despoeiramento", "Ventiladores e redes de dutos", "Equipamentos industriais dedicados"],
    engineeringFocus: ["Diagnóstico técnico isento", "Projetos sob medida para a realidade da planta", "Suporte técnico de ponta a ponta"],
  },
];

export const technicalCases: TechnicalCase[] = [
  {
    id: "case-ventilador-siderurgia",
    title: "Recuperação de desempenho e confiabilidade em ventilador de exaustão de grande porte",
    segment: "Siderurgia",
    system: "Ventilador Centrífugo e Rede de Exaustão",
    problem: "Paradas recorrentes por vibração elevada, desgaste prematuro do rotor e perda de capacidade de captação na linha de produção.",
    diagnosis: "Medições em campo e análise da curva do sistema revelaram operação fora do ponto de projeto, turbulência na caixa de entrada e material inadequado à abrasão do processo.",
    engineering: "Engenharia reversa do conjunto rotativo, revisão aerodinâmica da entrada de gases e especificação de novo perfil de pás com proteção antiabrasiva.",
    solution: "Projeto de retrofit executado em parada programada, contemplando novo rotor, adequação geométrica do duto de admissão e comissionamento assistido.",
    result: "Estabilização dos níveis de vibração dentro de norma, recuperação integral da vazão de projeto e redução expressiva nas intervenções corretivas.",
  },
  {
    id: "case-filtro-mangas-mineracao",
    title: "Reengenharia de sistema de despoeiramento com ganho de captação e redução de perda de carga",
    segment: "Mineração",
    system: "Filtro de Mangas, Coifas e Dutos",
    problem: "Fuga constante de poeira mineral nos pontos de transferência e saturação precoce das mangas filtrantes, limitando a operação da britagem.",
    diagnosis: "Levantamento aerodinâmico identificou desbalanceamento severo entre ramais, velocidades abaixo da mínima de transporte e relação ar/pano sobrecarregada.",
    engineering: "Redimensionamento da rede de dutos, redesenho das coifas de captação e projeto de adequação do sistema de limpeza pulsante do filtro.",
    solution: "Implantação faseada das novas coifas, readequação de ramais críticos e ajuste dos parâmetros de limpeza e exaustão sem interromper a produção.",
    result: "Aumento consistente da eficiência de captação, maior vida útil das mangas e redução do consumo energético do conjunto exaustor.",
  },
  {
    id: "case-lavador-quimica",
    title: "Adequação de sistema de lavagem de gases para operação contínua em ambiente corrosivo",
    segment: "Química",
    system: "Lavador de Gases e Exaustão Ácida",
    problem: "Corrosão acelerada em componentes internos, arraste de névoa ácida e dificuldade para manter a eficiência de neutralização exigida.",
    diagnosis: "Análise de processo e inspeção estrutural apontaram velocidade excessiva na coluna, falha no eliminador de névoa e incompatibilidade de materiais.",
    engineering: "Revisão do balanço de massa, especificação de materiais resistentes ao ataque químico e projeto de retrofit dos internos e circuito de recirculação.",
    solution: "Modernização do lavador com novos internos, adequação da bomba e bicos aspersores e validação de desempenho após a partida.",
    result: "Eliminação do arraste de gotículas, estabilidade na neutralização de gases e extensão significativa da vida útil do equipamento.",
  },
];

export const technicalContent = {
  artigos: [
    {
      title: "Por que o diagnóstico técnico evita investimentos errados em sistemas de exaustão",
      category: "Diagnóstico Técnico",
      summary: "Como medições em campo e leitura correta da curva do sistema impedem a compra de equipamentos superdimensionados ou ineficientes.",
      readTime: "6 min",
    },
    {
      title: "Retrofit vs. equipamento novo: critérios de engenharia para decidir no CAPEX",
      category: "Retrofit e Adequação",
      summary: "Análise técnica de vida útil remanescente, janela de parada, confiabilidade e retorno operacional para ativos industriais críticos.",
      readTime: "7 min",
    },
    {
      title: "Eficiência energética em ventiladores industriais: onde estão as maiores perdas",
      category: "Engenharia de Performance",
      summary: "O impacto de dampers estrangulados, redes desbalanceadas e operação fora do ponto ótimo no consumo elétrico da planta.",
      readTime: "5 min",
    },
  ],
  estudos: [
    {
      title: "Estudo técnico: relação ar/pano e perda de carga em filtros de mangas industriais",
      summary: "Parâmetros práticos para avaliar sobrecarga de filtragem, ciclos de limpeza pulse-jet e degradação prematura de meios filtrantes.",
    },
    {
      title: "Estudo técnico: velocidades de transporte e prevenção de deposição em redes de dutos",
      summary: "Critérios de engenharia para evitar entupimentos e desgaste abrasivo em sistemas de despoeiramento e transporte pneumático.",
    },
  ],
  guias: [
    {
      title: "Guia de especificação técnica para contratação de ventiladores industriais",
      summary: "Checklist de dados de processo, condições ambientais, curva do sistema e requisitos mecânicos para reduzir riscos na compra.",
    },
    {
      title: "Guia de preparação para paradas programadas de retrofit em sistemas de exaustão",
      summary: "Etapas de levantamento, engenharia reversa, pré-fabricação e comissionamento para executar adequações no prazo.",
    },
  ],
  faqs: [
    {
      question: "A AtmoUP atua apenas com equipamentos novos ou também com sistemas já instalados?",
      answer: "Atuamos em todo o ciclo de vida do sistema: desde engenharia conceitual e implantação de novos projetos até diagnóstico técnico, retrofit e otimização de performance em equipamentos já instalados.",
    },
    {
      question: "A AtmoUP atende indústrias fora do estado de São Paulo?",
      answer: "Sim. Nossa base está em São Paulo, com atendimento técnico, levantamentos em campo e projetos de engenharia em todo o Brasil.",
    },
    {
      question: "Quando vale a pena contratar um diagnóstico técnico antes de reformar ou trocar um equipamento?",
      answer: "Sempre que houver falha recorrente, perda de capacidade, vibração, alto consumo energético ou dúvida sobre a causa raiz do problema. O diagnóstico evita investir no sintoma em vez da causa.",
    },
    {
      question: "A AtmoUP fabrica equipamentos ou atua como empresa de engenharia?",
      answer: "A AtmoUP é uma empresa de engenharia de equipamentos industriais. Nosso foco é a competência técnica para diagnosticar, projetar, especificar, adequar e elevar o desempenho dos equipamentos e sistemas.",
    },
  ],
};