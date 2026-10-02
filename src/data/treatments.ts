import { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'botox',
    number: '01',
    tag: 'PREVENÇÃO & SUAVIZAÇÃO',
    category: 'facial',
    title: 'Toxina Botulínica (Botox)',
    shortDesc: 'Suaviza rugas dinâmicas e previne marcas profundas com expressão descansada e natural.',
    howItWorks: 'Relaxa suavemente a musculatura responsável pelas expressões faciais repetitivas. Suaviza rugas dinâmicas existentes e previne novas marcas profundas, mantendo uma expressão descansada e completamente natural.',
    indicatedFor: 'Prevenção e tratamento de rugas de expressão, linhas na testa, glabela (entre as sobrancelhas) e pés de galinha.',
    duration: '4 a 6 meses',
    benefits: [
      'Expressão facial leve e descansada',
      'Prevenção de linhas e vincos estáticos',
      'Aplicação rápida com agulhas ultrafinas',
      'Retorno imediato às atividades normais'
    ],
    anesthesia: 'Anestésico tópico de alta eficácia',
    recovery: 'Imediata (evitar esforço físico por 24h)',
    whatsappMessage: 'Olá Dra. Silvana! Gostaria de tirar dúvidas e agendar uma sessão de Toxina Botulínica (Botox).'
  },
  {
    id: 'preenchimento',
    number: '02',
    tag: 'ESTRUTURAÇÃO FACIAL',
    category: 'facial',
    title: 'Preenchimento & Harmonização',
    shortDesc: 'Restaura volumes faciais perdidos e redefine contornos com ácido hialurônico de alta pureza.',
    howItWorks: 'Utiliza ácido hialurônico para repor o volume perdido com o tempo, estruturar pontos de suporte da face (malar, mento, mandíbula, lábios) e suavizar sulcos profundos, resgatando a harmonia sem qualquer exagero.',
    indicatedFor: 'Perda de contorno facial, sombras profundas de cansaço, lábios desidratados ou desejo de realçar traços com proporção anatômica.',
    duration: '12 a 18 meses',
    benefits: [
      'Efeito lifting e sustentação imediata',
      'Definição elegante da mandíbula e maçãs do rosto',
      'Lábios hidratados e contornados com sutileza',
      'Substância 100% biocompatível e absorvível'
    ],
    anesthesia: 'Anestésico local / tópico',
    recovery: '1 a 2 dias (pequenos edemas transitórios)',
    whatsappMessage: 'Olá Dra. Silvana! Gostaria de agendar uma avaliação para Preenchimento Facial e Harmonização.'
  },
  {
    id: 'bioestimulador',
    number: '03',
    tag: 'FIRMEZA DÉRMICA',
    category: 'facial',
    title: 'Bioestimulador de Colágeno',
    shortDesc: 'Estimula a produção natural de colágeno, combatendo a flacidez de forma contínua e duradoura.',
    howItWorks: 'Procedimento injetável biocompatível que estimula as células do próprio organismo a produzirem novas fibras de colágeno, devolvendo a densidade, combatendo a flacidez e reestruturando a sustentação cutânea.',
    indicatedFor: 'Mulheres e homens que notaram perda de firmeza e elasticidade, contornos menos definidos e envelhecimento na face, pescoço ou colo.',
    duration: 'Até 24 meses',
    benefits: [
      'Rejuvenescimento progressivo e ultra natural',
      'Melhora expressiva da espessura e textura da pele',
      'Efeito tensor biológico duradouro',
      'Estimula o colágeno tipo 1 de forma comprovada'
    ],
    anesthesia: 'Anestésico tópico e local integrado',
    recovery: 'Normalmente imperceptível',
    whatsappMessage: 'Olá Dra. Silvana! Tenho interesse no tratamento com Bioestimulador de Colágeno.'
  },
  {
    id: 'fios-pdo',
    number: '04',
    tag: 'LIFTING SEM CORTES',
    category: 'facial',
    title: 'Fios de Sustentação (PDO)',
    shortDesc: 'Tração delicada e bioestímulo contínuo com fios 100% absorvíveis para suporte tecidual.',
    howItWorks: 'Fios de polidioxanona (PDO) 100% bioabsorvíveis para ancoragem tecidual imediata e formação contínua de uma densa malha de colágeno nas regiões de perda de sustentação dérmica.',
    indicatedFor: 'Flacidez inicial a média, rugas finas ('+"'código de barras'"+'), queda do terço médio/inferior e papada.',
    duration: '12 a 18 meses (estímulo de colágeno prolongado)',
    benefits: [
      'Efeito lifting não cirúrgico',
      'Melhora global da firmeza e tração tecidual',
      'Material consagrado e seguro em medicina',
      'Resultados visíveis com progressão contínua'
    ],
    anesthesia: 'Anestesia local confortável',
    recovery: '2 a 4 dias de repouso relativo',
    whatsappMessage: 'Olá Dra. Silvana! Gostaria de saber mais sobre a aplicação dos Fios de Sustentação (PDO).'
  },
  {
    id: 'limpeza-pele',
    number: '05',
    tag: 'SAÚDE & HIGIENE CUTÂNEA',
    category: 'pele',
    title: 'Limpeza de Pele Profunda',
    shortDesc: 'Higienização clínica detalhada, desobstrução de poros, hidratação profunda e efeito calmante.',
    howItWorks: 'Protocolo de saúde e renovação cutânea com higienização profunda, esfoliação suave, extração cuidadosa e asséptica de cravos e míliuns, seguida de hidratação intensa com ativos regeneradores e fototerapia calmante.',
    indicatedFor: 'Poros ocluídos, cravos, excesso de oleosidade e pele opaca pelo estresse e poluição diária.',
    duration: 'Renovação imediata (manutenção mensal recomendada)',
    benefits: [
      'Desobstrução e refinamento imediato dos poros',
      'Remoção de impurezas sem machucar a pele',
      'Pele luminosa, viçosa e equilibrada',
      'Prepara o tecido para melhor absorção de dermocosméticos'
    ],
    anesthesia: 'Não necessária (protocolo indolor e relaxante)',
    recovery: 'Imediata com brilho saudável',
    whatsappMessage: 'Olá Dra. Silvana! Gostaria de agendar uma sessão de Limpeza de Pele Profunda na Clínica Ellora.'
  },
  {
    id: 'gerenciamento-pele',
    number: '06',
    tag: 'PROTOCOLO INTEGRADO',
    category: 'pele',
    title: 'Gerenciamento de Pele',
    shortDesc: 'Plano contínuo e sob medida combinando peelings, tecnologias e ativos de alta performance.',
    howItWorks: 'Plano de tratamento contínuo e desenhado sob medida para as características biológicas da sua pele, combinando tecnologias de ponta, peelings químicos e enzimáticos, mesoterapia e controle clínico periódico.',
    indicatedFor: 'Pessoas com manchas, melasma, poros dilatados, perda de viço ou que precisam de um direcionamento clínico consistente.',
    duration: 'Protocolos personalizados por ciclos de tratamento',
    benefits: [
      'Uniformização do tom e clareamento de manchas',
      'Controle efetivo da oleosidade e hidratação celular',
      'Acompanhamento médico e biomédico constante',
      'Resultados sustentáveis e duradouros'
    ],
    anesthesia: 'Não invasivo / indolor',
    recovery: 'Varia conforme o tipo de peeling utilizado',
    whatsappMessage: 'Olá Dra. Silvana! Gostaria de iniciar meu Gerenciamento de Pele Personalizado.'
  },
  {
    id: 'skincare',
    number: '07',
    tag: 'HOME CARE DIRECIONADO',
    category: 'pele',
    title: 'Consultoria de Skincare',
    shortDesc: 'Diagnóstico dos seus produtos de casa e guia exclusivo: o que usar, quando e como, sem desperdício.',
    howItWorks: 'Análise minuciosa da sua rotina atual, diagnóstico dos cosméticos que você já possui em casa e criação de um guia prático personalizado: o que usar, quando usar e em qual ordem, eliminando desperdícios de dinheiro e tempo.',
    indicatedFor: 'Quem se sente confuso diante de tendências da internet ou comprou muitos cosméticos sem alcançar o efeito desejado.',
    duration: 'Guia completo entregue para uso diário contínuo',
    benefits: [
      'Economia inteligente (pare de comprar produtos errados)',
      'Rotina realista adaptada ao seu tempo e estilo de vida',
      'Prescrição precisa com base na sua barreira cutânea',
      'Potencializa os resultados dos procedimentos em consultório'
    ],
    anesthesia: 'Não aplicável (atendimento consultivo)',
    recovery: 'Imediata',
    whatsappMessage: 'Olá Dra. Silvana! Quero agendar minha Consultoria de Skincare Personalizada.'
  },
  {
    id: 'gerenciamento-peso',
    number: '08',
    tag: 'CONTORNO CORPORAL',
    category: 'corporal',
    title: 'Gerenciamento do Peso & Firmeza',
    shortDesc: 'Abordagem integrativa para emagrecimento saudável associada a protocolos de firmeza e tônus.',
    howItWorks: 'Une estratégias integradas para potencializar o emagrecimento saudável e a reeducação metabólica associadas a tratamentos estéticos avançados para cuidar da pele durante todo o processo, blindando contra flacidez.',
    indicatedFor: 'Quem está em processo de perda de peso (ou deseja iniciar) e quer preservar a tonicidade, o contorno corporal e a saúde.',
    duration: 'Acompanhamento modular mensal / trimestral',
    benefits: [
      'Preservação da massa magra e da elasticidade da pele',
      'Protocolos corporais associados para flacidez',
      'Metas personalizadas e monitoramento seguro',
      'Harmonia estética e melhora global da disposição'
    ],
    anesthesia: 'Não invasivo',
    recovery: 'Sem repouso necessário',
    whatsappMessage: 'Olá Dra. Silvana! Gostaria de conhecer o programa de Gerenciamento do Peso e Firmeza.'
  }
];
