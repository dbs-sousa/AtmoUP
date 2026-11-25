export interface EquipmentDetail {
  slug: string;
  name: string;
  category: string;
  summary: string;
  intro: string;
  problems: string[];
  whenToEvaluate: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export const equipmentEngineeringActions = [
  "Diagnóstico técnico",
  "Avaliação de desempenho",
  "Dimensionamento",
  "Especificação",
  "Engenharia de implantação",
  "Retrofit",
  "Adequação",
  "Integração com sistemas existentes",
];

export const equipmentDetails: EquipmentDetail[] = [
  {
    slug: "ventiladores-industriais",
    name: "Ventiladores Industriais",
    category: "Movimentação de Gases",
    summary: "Avaliação de curva operacional, diagnóstico de falhas, dimensionamento e retrofit de ventiladores centrífugos e axiais.",
    intro:
      "Ventiladores industriais são responsáveis pela movimentação de ar e gases em processos de exaustão, despoeiramento, tiragem e ventilação industrial. Em operação, podem apresentar perda de vazão, vibração, desgaste abrasivo, operação fora do ponto de projeto ou consumo energético elevado devido a mudanças no sistema ou falhas de integração.",
    problems: [
      "Vazão ou pressão abaixo do especificado em projeto",
      "Operação fora da região de melhor rendimento da curva característica",
      "Vibração excessiva, desbalanceamento e falhas prematuras em mancais",
      "Desgaste acelerado de rotores e carcaças por abrasão ou corrosão",
      "Consumo elevado de potência elétrica ou sobrecarga do motor",
      "Perdas aerodinâmicas na caixa de entrada ou na descarga",
    ],
    whenToEvaluate: [
      "Quando há perda de captação na linha atendida pelo ventilador",
      "Diante de vibração recorrente ou aumento da frequência de manutenção",
      "Antes de substituir o equipamento ou alterar a rotação e a potência instalada",
      "Após modificações na rede de dutos, filtros ou no regime de produção",
    ],
    ctaTitle: "Seu ventilador não atinge a vazão necessária?",
    ctaText:
      "Analisamos vazão, pressão, curva do equipamento, perda de carga do sistema, potência, rotação e condições reais de operação para identificar possíveis causas de baixo desempenho.",
    ctaButton: "Solicitar avaliação técnica",
  },
  {
    slug: "filtros-de-mangas",
    name: "Filtros de Mangas",
    category: "Controle de Particulados",
    summary: "Diagnóstico de filtragem, perda de carga, relação ar/pano, limpeza pulsante e retrofit de filtros de mangas.",
    intro:
      "Filtros de mangas são essenciais para a separação de particulados sólidos em sistemas de despoeiramento industrial. Quando operam fora das condições adequadas, podem sofrer com alta perda de carga, saturação precoce das mangas, queda na captação dos pontos de processo e aumento no custo de manutenção e energia.",
    problems: [
      "Perda de carga diferencial persistentemente elevada",
      "Baixa vida útil, rasgamento ou entupimento prematuro das mangas filtrantes",
      "Relação ar/pano incompatível com a carga real de particulados",
      "Falhas no sistema de limpeza pulse-jet (válvulas, ar comprimido ou ciclos)",
      "Arraste de poeira na saída limpa ou desgaste abrasivo na entrada do filtro",
      "Subdimensionamento após aumento de produção ou ampliação de ramais",
    ],
    whenToEvaluate: [
      "Quando o filtro opera no limite de perda de carga e restringe a exaustão",
      "Quando a troca de mangas ocorre em intervalos menores do que o esperado",
      "Antes de ampliar a capacidade produtiva ou conectar novos pontos de captação",
      "Quando há emissão visível de particulados ou necessidade de adequação operacional",
    ],
    ctaTitle: "Seu filtro de mangas opera com alta perda de carga?",
    ctaText:
      "Avaliamos relação ar/pano, limpeza pulsante, distribuição de fluxo, perda de carga e condições reais de operação para definir a solução técnica adequada.",
    ctaButton: "Avaliar filtro de mangas",
  },
  {
    slug: "sistemas-de-exaustao",
    name: "Sistemas de Exaustão",
    category: "Captação e Controle",
    summary: "Engenharia integrada de captação, balanceamento de redes, perda de carga e desempenho global de sistemas de exaustão.",
    intro:
      "Sistemas de exaustão industrial integram coifas, dutos, equipamentos de controle e ventiladores para capturar e conduzir gases, fumos e particulados gerados no processo. Problemas de desempenho raramente estão isolados em um único item: geralmente envolvem desbalanceamento da rede, perda de carga excessiva ou desalinhamento entre a captação e o ventilador.",
    problems: [
      "Fuga de fumos, gases ou poeira nos pontos de geração do processo",
      "Desbalanceamento aerodinâmico entre ramais próximos e distantes do ventilador",
      "Perda de carga total acima da capacidade do conjunto exaustor",
      "Interferência de alterações feitas na rede sem revisão de engenharia",
      "Baixa eficiência energética por estrangulamento excessivo em dampers",
    ],
    whenToEvaluate: [
      "Quando pontos críticos da planta perdem captação ao longo da operação",
      "Antes de adicionar novos ramais ou alterar o layout da linha produtiva",
      "Quando o sistema consome muita energia sem entregar a captação necessária",
      "Para embasar projetos de adequação, retrofit ou expansão de capacidade",
    ],
    ctaTitle: "Seu sistema de exaustão não captura como deveria?",
    ctaText:
      "Analisamos o sistema de ponta a ponta — da captação à descarga — para identificar gargalos de vazão, pressão e balanceamento.",
    ctaButton: "Solicitar diagnóstico de exaustão",
  },
  {
    slug: "dutos-e-coifas",
    name: "Dutos e Coifas",
    category: "Captação e Condução",
    summary: "Dimensionamento aerodinâmico, velocidades de transporte, geometria de captação e controle de abrasão em dutos e coifas.",
    intro:
      "Coifas e redes de dutos definem a eficiência inicial de captação e a perda de carga de todo o sistema de exaustão. Geometrias inadequadas, transições bruscas ou velocidades mal dimensionadas provocam deposição de material, desgaste prematuro e desperdício de vazão e energia.",
    problems: [
      "Acúmulo de material e entupimento recorrente em trechos horizontais",
      "Desgaste abrasivo acelerado em curvas, derivações e reduções",
      "Coifas posicionadas ou dimensionadas de forma ineficiente para o processo",
      "Perdas de carga localizadas elevadas por traçado inadequado",
      "Infiltrações de ar falso que reduzem a vazão útil nos pontos de captação",
    ],
    whenToEvaluate: [
      "Quando há entupimentos frequentes ou necessidade constante de limpeza de dutos",
      "Diante de furos recorrentes por abrasão em curvas e transições",
      "Quando a coifa atrapalha a operação ou exige vazão excessiva para capturar",
      "Durante reformas de layout ou substituição de trechos deteriorados",
    ],
    ctaTitle: "Dutos entupindo ou coifas com baixa eficiência de captação?",
    ctaText:
      "Revisamos velocidades de transporte, perda de carga, geometria das coifas e especificação de materiais para corrigir o problema na origem.",
    ctaButton: "Avaliar dutos e coifas",
  },
  {
    slug: "precipitadores-eletrostaticos",
    name: "Precipitadores Eletrostáticos",
    category: "Controle de Emissões",
    summary: "Avaliação de distribuição de fluxo, diagnóstico operacional e engenharia de adequação para precipitadores eletrostáticos.",
    intro:
      "Precipitadores eletrostáticos operam em processos industriais de grande porte e alta exigência térmica para controle de particulados. Desvios na distribuição de gases, alterações nas características do processo ou desgaste estrutural de internos comprometem diretamente a eficiência de coleta e a confiabilidade operacional.",
    problems: [
      "Distribuição irregular do fluxo de gases na entrada das câmaras",
      "Queda na eficiência de coleta sob variações de carga ou temperatura",
      "Desalinhamento ou desgaste estrutural de componentes internos",
      "Infiltração de ar falso afetando o regime térmico e a vazão do equipamento",
      "Restrições mecânicas ou de processo que limitam a disponibilidade",
    ],
    whenToEvaluate: [
      "Quando há perda de eficiência de coleta ou instabilidade operacional",
      "Na preparação de paradas gerais programadas para definição de escopo",
      "Após alterações de combustível, matéria-prima ou carga térmica do processo",
      "Para avaliar viabilidade de adequação e extensão de vida útil do ativo",
    ],
    ctaTitle: "Precisa avaliar a confiabilidade do seu precipitador eletrostático?",
    ctaText:
      "Atuamos no diagnóstico operacional, avaliação de fluxo e definição técnica de adequações para paradas programadas.",
    ctaButton: "Falar com a Engenharia",
  },
  {
    slug: "ciclones-e-separadores",
    name: "Ciclones e Separadores",
    category: "Separação Mecânica",
    summary: "Engenharia de dimensionamento, análise de eficiência de separação e proteção antiabrasiva para ciclones e separadores.",
    intro:
      "Ciclones e separadores mecânicos são aplicados na pré-separação de particulados grossos, alívio de carga para filtros e recuperação de material em processos industriais. Geometria inadequada, vazamento na descarga ou desgaste abrasivo reduzem drasticamente sua eficiência de retenção.",
    problems: [
      "Baixa eficiência de retenção de partículas e sobrecarga no filtro a jusante",
      "Desgaste abrasivo severo na voluta de entrada e no cone de descarga",
      "Entrada de ar falso pela válvula rotativa ou selo de descarga",
      "Perda de carga incompatível com a curva do ventilador do sistema",
      "Entupimento na descarga por características do material coletado",
    ],
    whenToEvaluate: [
      "Quando o ciclone deixa de reter a fração esperada e sobrecarrega o filtro",
      "Quando o desgaste interno exige reparos frequentes na carcaça",
      "Ao revisar a integração entre ciclone, filtro e ventilador existente",
      "Na especificação de pré-separação para sistemas novos ou ampliados",
    ],
    ctaTitle: "Seu ciclone perdeu eficiência ou sofre com abrasão severa?",
    ctaText:
      "Avaliamos geometria, velocidade de entrada, perda de carga, estanqueidade e revestimentos para restaurar o desempenho do separador.",
    ctaButton: "Avaliar ciclone ou separador",
  },
  {
    slug: "lavadores-de-gases",
    name: "Lavadores de Gases",
    category: "Tratamento de Gases",
    summary: "Diagnóstico de processo, seleção de materiais resistentes à corrosão e retrofit de lavadores de gases industriais.",
    intro:
      "Lavadores de gases realizam o tratamento de gases ácidos, vapores químicos e particulados úmidos por meio do contato gás-líquido. Em operação, falhas de seleção de materiais, entupimento de internos, arraste de gotículas e descontrole de vazões comprometem a eficiência de tratamento e a integridade do sistema.",
    problems: [
      "Corrosão acelerada em carcaças, internos, tubulações e exaustores",
      "Arraste de névoa ou gotículas na saída do lavador",
      "Baixa eficiência de absorção ou neutralização química dos gases",
      "Entupimento de bicos aspersores, recheios e eliminadores de névoa",
      "Perda de carga elevada ou vazão de recirculação fora do especificado",
    ],
    whenToEvaluate: [
      "Quando há arraste de gotículas ou corrosão em dutos e ventiladores a jusante",
      "Diante de queda na eficiência de neutralização ou aumento de perda de carga",
      "Antes de reformar internos ou trocar materiais construtivos do equipamento",
      "Ao alterar a composição ou a concentração dos gases do processo",
    ],
    ctaTitle: "Seu lavador de gases apresenta corrosão ou arraste de névoa?",
    ctaText:
      "Analisamos condições de processo, velocidade na coluna, internos, circuito de lavagem e materiais para definir a adequação técnica.",
    ctaButton: "Avaliar lavador de gases",
  },
  {
    slug: "sistemas-de-transporte-pneumatico",
    name: "Sistemas de Transporte Pneumático",
    category: "Movimentação de Sólidos",
    summary: "Engenharia de dimensionamento, eliminação de entupimentos e otimização energética em transporte pneumático.",
    intro:
      "Sistemas de transporte pneumático conduzem pós, grãos e sólidos a granel por meio de fluxo de ar controlado em fase diluída ou densa. Desvios de velocidade, perda de carga mal avaliada ou alimentação irregular resultam em entupimentos, desgaste das linhas, degradação do produto e alto consumo de energia.",
    problems: [
      "Entupimentos recorrentes em linhas de transporte e curvas",
      "Desgaste abrasivo acelerado em tubulações e desviadores",
      "Capacidade de transporte abaixo da demanda da linha produtiva",
      "Consumo elevado de ar e energia por regulagem inadequada",
      "Quebra ou degradação excessiva do material transportado",
    ],
    whenToEvaluate: [
      "Quando entupimentos interrompem a produção com frequência",
      "Ao mudar o tipo de material transportado, granulometria ou distância da linha",
      "Quando é necessário ampliar a taxa de transporte sem trocar todo o sistema",
      "Para reduzir consumo energético e desgaste em linhas existentes",
    ],
    ctaTitle: "Seu sistema de transporte pneumático sofre com entupimentos ou baixa capacidade?",
    ctaText:
      "Avaliamos regime de transporte, velocidades, perda de carga, alimentação e conjunto soprador/ventilador para estabilizar a operação.",
    ctaButton: "Avaliar transporte pneumático",
  },
];