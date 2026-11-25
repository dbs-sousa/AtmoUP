export type TechnicalCategory =
  | "Diagnóstico"
  | "Equipamentos"
  | "Retrofit"
  | "Performance"
  | "Exaustão"
  | "Despoeiramento"
  | "Ventilação Industrial"
  | "Engenharia Industrial";

export const technicalCategories: TechnicalCategory[] = [
  "Diagnóstico",
  "Equipamentos",
  "Retrofit",
  "Performance",
  "Exaustão",
  "Despoeiramento",
  "Ventilação Industrial",
  "Engenharia Industrial",
];

export interface TechnicalArticle {
  slug: string;
  title: string;
  category: TechnicalCategory;
  seoDescription: string;
  intro: string;
  sections: {
    heading: string;
    content: string;
    subpoints?: { title: string; text: string }[];
  }[];
  faq: { question: string; answer: string }[];
  relatedLinks: { label: string; to: string }[];
  ctaTitle: string;
  ctaLabel: string;
}

export const technicalArticles: TechnicalArticle[] = [
  {
    slug: "como-identificar-ventilador-industrial-subdimensionado",
    title: "Como identificar se um ventilador industrial está subdimensionado?",
    category: "Ventilação Industrial",
    seoDescription: "Sinais técnicos e parâmetros de campo para avaliar se um ventilador industrial está subdimensionado ou sofrendo perdas na rede.",
    intro:
      "Nem sempre a baixa vazão em uma linha industrial significa que o ventilador foi mal dimensionado. Antes de trocar o equipamento, é preciso separar problemas do próprio ventilador de restrições na rede de dutos, filtros ou condições de processo.",
    sections: [
      {
        heading: "Sinais operacionais que merecem investigação",
        content: "Alguns sintomas aparecem diretamente na operação da planta e indicam que o conjunto não está atendendo à demanda atual.",
        subpoints: [
          { title: "Perda de captação nos pontos de processo", text: "Fuga de fumos, poeira ou calor mesmo com dampers totalmente abertos." },
          { title: "Motor operando próximo ao limite", text: "Corrente elétrica elevada de forma contínua sem entregar a vazão esperada." },
        ],
      },
      {
        heading: "Como confirmar tecnicamente em campo",
        content: "A confirmação exige medir vazão, pressão estática na sucção e na descarga, rotação real e potência consumida, comparando o ponto encontrado com a curva característica do ventilador e a curva de perda de carga do sistema.",
      },
    ],
    faq: [
      {
        question: "Aumentar a rotação do ventilador sempre resolve baixa vazão?",
        answer: "Não. Elevar a rotação aumenta a potência demandada de forma acentuada e pode sobrecarregar o motor, o eixo e os mancais sem corrigir gargalos na rede.",
      },
    ],
    relatedLinks: [
      { label: "Ventiladores Industriais", to: "/equipamentos/ventiladores-industriais" },
      { label: "Diagnóstico Técnico", to: "/diagnostico-tecnico" },
    ],
    ctaTitle: "Suspeita que um ventilador da sua planta está subdimensionado?",
    ctaLabel: "Solicitar avaliação técnica",
  },
  {
    slug: "filtro-de-mangas-alta-perda-de-carga-principais-causas",
    title: "Filtro de mangas com alta perda de carga: principais causas",
    category: "Despoeiramento",
    seoDescription: "Entenda as principais causas de alta perda de carga em filtros de mangas industriais e como diagnosticar o problema.",
    intro:
      "A perda de carga elevada em um filtro de mangas reduz a vazão disponível nos pontos de captação, aumenta o esforço do ventilador e acelera o desgaste dos elementos filtrantes.",
    sections: [
      {
        heading: "Causas mais frequentes em operação",
        content: "A elevação da perda de carga costuma estar ligada a desvios no sistema de limpeza, no meio filtrante ou na carga real do processo.",
        subpoints: [
          { title: "Relação ar/pano sobrecarregada", text: "Aumento de vazão ou conexão de novos ramais acima da área filtrante disponível." },
          { title: "Deficiência na limpeza pulsante", text: "Pressão de ar comprimido inadequada, válvulas com falha ou intervalos de pulso mal ajustados." },
          { title: "Saturação ou umidade no particulado", text: "Formação de torta aderente que impede a regeneração normal das mangas." },
        ],
      },
      {
        heading: "Por que investigar antes de trocar todas as mangas",
        content: "Substituir mangas sem corrigir a causa raiz faz o problema retornar rapidamente. O diagnóstico técnico avalia diferencial de pressão, vazão, limpeza e distribuição interna de fluxo.",
      },
    ],
    faq: [
      {
        question: "Trocar o tipo de manga resolve qualquer perda de carga alta?",
        answer: "Apenas quando o meio filtrante era incompatível com o processo. Se o problema for excesso de vazão ou falha de limpeza, a troca isolada não resolve.",
      },
    ],
    relatedLinks: [
      { label: "Filtros de Mangas", to: "/equipamentos/filtros-de-mangas" },
      { label: "Retrofit e Adequação", to: "/retrofit-e-adequacao" },
    ],
    ctaTitle: "Seu filtro de mangas opera com diferencial de pressão elevado?",
    ctaLabel: "Avaliar filtro de mangas",
  },
  {
    slug: "quando-fazer-retrofit-equipamento-industrial",
    title: "Quando fazer retrofit de um equipamento industrial?",
    category: "Retrofit",
    seoDescription: "Critérios técnicos para avaliar quando o retrofit de um equipamento industrial é a melhor decisão frente à substituição completa.",
    intro:
      "Nem todo equipamento com baixo desempenho precisa ser descartado. Em muitos casos, a estrutura principal pode ser aproveitada por meio de um projeto criterioso de retrofit e adequação.",
    sections: [
      {
        heading: "Cenários favoráveis ao retrofit",
        content: "O retrofit ganha relevância quando a infraestrutura instalada tem integridade aproveitável e o desvio está concentrado em componentes específicos ou mudanças de processo.",
        subpoints: [
          { title: "Alteração de capacidade ou processo", text: "Necessidade de ajustar vazão, pressão ou materiais sem refazer toda a instalação." },
          { title: "Janela reduzida de parada", text: "Intervenções planejadas com engenharia prévia reduzem o tempo de indisponibilidade da linha." },
        ],
      },
      {
        heading: "O que avaliar antes de decidir",
        content: "É fundamental levantar a condição estrutural do ativo, a disponibilidade de documentação ou necessidade de engenharia reversa, e o ganho técnico esperado frente ao investimento.",
      },
    ],
    faq: [
      {
        question: "Todo equipamento antigo pode passar por retrofit?",
        answer: "Não. Quando há comprometimento estrutural severo ou limitação física incompatível com a nova demanda, a substituição pode ser tecnicamente mais adequada.",
      },
    ],
    relatedLinks: [
      { label: "Retrofit e Adequação", to: "/retrofit-e-adequacao" },
      { label: "Diagnóstico Técnico", to: "/diagnostico-tecnico" },
    ],
    ctaTitle: "Quer avaliar se o retrofit é viável para o seu equipamento?",
    ctaLabel: "Avaliar possibilidade de retrofit",
  },
  {
    slug: "como-avaliar-desempenho-sistema-de-exaustao",
    title: "Como avaliar o desempenho de um sistema de exaustão?",
    category: "Exaustão",
    seoDescription: "Passo a passo técnico para avaliar a eficiência de captação, vazão, pressão e perda de carga em sistemas de exaustão industrial.",
    intro:
      "Avaliar um sistema de exaustão vai muito além de verificar se o ventilador está girando. O desempenho real depende da integração entre coifas, rede de dutos, equipamento de controle e exaustor.",
    sections: [
      {
        heading: "Pontos-chave da avaliação técnica",
        content: "Uma análise consistente percorre o sistema da captação até a descarga, comparando os valores medidos com os requisitos do processo.",
        subpoints: [
          { title: "Eficiência de captura nas coifas", text: "Verificação de velocidades de face e posicionamento frente à fonte geradora." },
          { title: "Velocidade de transporte nos dutos", text: "Confirmação de que o escoamento evita deposição sem gerar perda de carga excessiva." },
          { title: "Equilíbrio entre ramais", text: "Identificação de trechos com excesso ou falta de vazão." },
        ],
      },
    ],
    faq: [
      {
        question: "Um sistema de exaustão pode perder desempenho mesmo sem falhas no ventilador?",
        answer: "Sim. Obstruções em dutos, infiltrações de ar falso, filtros saturados ou novos ramais adicionados sem cálculo alteram completamente o ponto de operação.",
      },
    ],
    relatedLinks: [
      { label: "Sistemas de Exaustão", to: "/equipamentos/sistemas-de-exaustao" },
      { label: "Engenharia de Performance", to: "/engenharia-de-performance" },
    ],
    ctaTitle: "Precisa avaliar o desempenho real do seu sistema de exaustão?",
    ctaLabel: "Solicitar avaliação técnica",
  },
  {
    slug: "vazao-e-pressao-como-analisar-sistema-de-exaustao-industrial",
    title: "Vazão e pressão: como analisar um sistema de exaustão industrial?",
    category: "Performance",
    seoDescription: "Entenda a relação entre vazão, pressão estática e curva do sistema na análise de sistemas de exaustão industrial.",
    intro:
      "Vazão e pressão são grandezas inseparáveis em qualquer sistema de movimentação de gases. Analisá-las isoladamente leva a diagnósticos equivocados e especificações incorretas.",
    sections: [
      {
        heading: "Curva do equipamento x curva do sistema",
        content: "O ponto real de operação surge do cruzamento entre a curva do ventilador e a resistência oferecida pela rede de dutos, coifas e filtros. Qualquer aumento na perda de carga desloca esse ponto e reduz a vazão entregue.",
      },
      {
        heading: "Erros comuns na interpretação em campo",
        content: "Medir apenas a corrente do motor ou apenas a pressão em um ponto isolado não mostra onde estão as perdas. O mapeamento por trechos permite localizar exatamente onde a energia está sendo desperdiçada.",
      },
    ],
    faq: [
      {
        question: "Por que a pressão estática alta nem sempre indica boa exaustão?",
        answer: "Pressão elevada próxima ao ventilador pode indicar obstrução ou estrangulamento na rede, resultando em baixa vazão nos pontos de captação.",
      },
    ],
    relatedLinks: [
      { label: "Engenharia de Performance", to: "/engenharia-de-performance" },
      { label: "Dutos e Coifas", to: "/equipamentos/dutos-e-coifas" },
    ],
    ctaTitle: "Quer mapear vazão e pressão no seu sistema industrial?",
    ctaLabel: "Avaliar desempenho do equipamento",
  },
  {
    slug: "como-identificar-gargalos-sistemas-de-exaustao",
    title: "Como identificar gargalos em sistemas de exaustão?",
    category: "Diagnóstico",
    seoDescription: "Saiba como localizar gargalos aerodinâmicos e operacionais em redes de dutos, coifas, filtros e ventiladores.",
    intro:
      "Gargalos em sistemas de exaustão costumam se acumular ao longo dos anos, especialmente após ampliações de linha, adaptações emergenciais e alterações no processo produtivo.",
    sections: [
      {
        heading: "Onde os gargalos costumam se concentrar",
        content: "A inspeção orientada por engenharia busca perdas localizadas e restrições que limitam o conjunto inteiro.",
        subpoints: [
          { title: "Transições e curvas bruscas", text: "Trechos mal desenhados aumentam a turbulência e a perda de carga." },
          { title: "Acúmulo de material em dutos", text: "Reduz a seção útil de passagem e desequilibra os ramais." },
          { title: "Restrições na entrada do ventilador", text: "Conexões inadequadas na sucção derrubam o rendimento aerodinâmico." },
        ],
      },
    ],
    faq: [
      {
        question: "É possível eliminar gargalos sem trocar o ventilador?",
        answer: "Em muitos casos, corrigir trechos críticos de dutos, coifas e balanceamento recupera vazão útil sem substituir o equipamento principal.",
      },
    ],
    relatedLinks: [
      { label: "Diagnóstico Técnico", to: "/diagnostico-tecnico" },
      { label: "Sistemas de Exaustão", to: "/equipamentos/sistemas-de-exaustao" },
    ],
    ctaTitle: "Identifique os gargalos reais antes de investir em novos equipamentos.",
    ctaLabel: "Falar com a Engenharia",
  },
  {
    slug: "dimensionamento-ventiladores-industriais-principais-parametros",
    title: "Dimensionamento de ventiladores industriais: principais parâmetros",
    category: "Equipamentos",
    seoDescription: "Os parâmetros essenciais de processo, vazão, pressão, temperatura e materiais no dimensionamento de ventiladores industriais.",
    intro:
      "Especificar corretamente um ventilador industrial depende de conhecer em detalhe o processo atendido. Premissas incompletas geram equipamentos superdimensionados ou incapazes de atender à operação.",
    sections: [
      {
        heading: "Parâmetros fundamentais de especificação",
        content: "O dimensionamento técnico integra dados aerodinâmicos, térmicos, mecânicos e construtivos.",
        subpoints: [
          { title: "Vazão, pressão e densidade do gás", text: "Temperatura, altitude e composição do gás alteram diretamente a densidade e a potência requerida." },
          { title: "Características do particulado", text: "Abrasividade, aderência e corrosividade definem o perfil do rotor e os materiais construtivos." },
          { title: "Regime de operação e controle", text: "Variações de carga orientam a definição do acionamento e da estratégia de controle." },
        ],
      },
    ],
    faq: [
      {
        question: "Por que a temperatura do gás interfere no dimensionamento?",
        answer: "A temperatura altera a massa específica do gás, impactando a pressão desenvolvida e a potência absorvida tanto a quente quanto na partida a frio.",
      },
    ],
    relatedLinks: [
      { label: "Ventiladores Industriais", to: "/equipamentos/ventiladores-industriais" },
      { label: "Engenharia de Implantação", to: "/engenharia-de-implantacao" },
    ],
    ctaTitle: "Precisa especificar ou dimensionar um ventilador industrial?",
    ctaLabel: "Falar com a Engenharia",
  },
  {
    slug: "retrofit-ou-substituicao-como-decidir",
    title: "Retrofit ou substituição: como decidir?",
    category: "Engenharia Industrial",
    seoDescription: "Análise técnica para gestores de engenharia, manutenção e CAPEX decidirem entre retrofit e substituição de equipamentos industriais.",
    intro:
      "A decisão entre modernizar um ativo existente ou adquirir um equipamento novo deve ser sustentada por critérios técnicos e operacionais — não apenas pelo preço inicial de compra.",
    sections: [
      {
        heading: "Critérios objetivos para a tomada de decisão",
        content: "Uma avaliação estruturada compara integridade, desempenho alcançável, prazo de implantação e impacto na produção.",
        subpoints: [
          { title: "Condição estrutural do equipamento atual", text: "Verifica se carcaça, bases e interfaces suportam a modernização." },
          { title: "Gap entre desempenho atual e meta", text: "Avalia se o retrofit atinge a nova demanda de processo com confiabilidade." },
          { title: "Impacto de parada e infraestrutura", text: "Considera obras civis, elétricas e modificações de layout exigidas por um ativo novo." },
        ],
      },
    ],
    faq: [
      {
        question: "O diagnóstico técnico ajuda a justificar a decisão no CAPEX?",
        answer: "Sim. Ele fornece base técnica documentada comparando riscos, escopo e viabilidade entre adequação e substituição.",
      },
    ],
    relatedLinks: [
      { label: "Retrofit e Adequação", to: "/retrofit-e-adequacao" },
      { label: "Engenharia de Equipamentos", to: "/engenharia-de-equipamentos" },
    ],
    ctaTitle: "Precisa embasar uma decisão entre retrofit e substituição?",
    ctaLabel: "Solicitar avaliação técnica",
  },
  {
    slug: "como-avaliar-equipamento-industrial-antes-de-investir",
    title: "Como avaliar um equipamento industrial antes de investir em uma nova solução?",
    category: "Engenharia Industrial",
    seoDescription: "Como conduzir uma avaliação técnica prévia em equipamentos industriais para evitar investimentos desnecessários.",
    intro:
      "Investir em um equipamento novo sem compreender o comportamento real da instalação atual pode repetir os mesmos problemas operacionais com um custo maior.",
    sections: [
      {
        heading: "Etapas essenciais antes da compra",
        content: "Avaliar o cenário existente protege o orçamento de CAPEX e garante aderência ao processo.",
        subpoints: [
          { title: "Levantar condições reais de operação", text: "Confrontar dados de projeto originais com o regime efetivo da planta hoje." },
          { title: "Mapear interfaces do sistema", text: "Verificar dutos, utilidades, espaço físico e equipamentos a montante e a jusante." },
          { title: "Definir premissas claras de especificação", text: "Transformar a necessidade operacional em requisitos técnicos objetivos para contratação." },
        ],
      },
    ],
    faq: [
      {
        question: "Em que momento envolver a engenharia na decisão de compra?",
        answer: "Antes da cotação com fornecedores. Premissas bem definidas permitem equalizar propostas tecnicamente e evitar desvios na implantação.",
      },
    ],
    relatedLinks: [
      { label: "Engenharia de Implantação", to: "/engenharia-de-implantacao" },
      { label: "Diagnóstico Técnico", to: "/diagnostico-tecnico" },
    ],
    ctaTitle: "Vai investir em um novo equipamento ou adequação na planta?",
    ctaLabel: "Falar com a Engenharia",
  },
];