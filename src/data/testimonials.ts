import { Testimonial, FaqItem, QuizQuestion } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana F.',
    role: 'Paciente há 1 ano • Nova Andradina',
    rating: 5,
    content: 'Tinha muito receio de perder minhas feições, mas o carinho e a paciência da Dra. Silvana na consulta me acalmou completamente. O resultado do preenchimento e botox foi tão delicado que minhas amigas me perguntam o que fiz para estar tão descansada e radiante!',
    procedureTag: 'Preenchimento & Botox'
  },
  {
    id: '2',
    name: 'Carla M.',
    role: 'Paciente há 2 anos • Vale do Ivinhema',
    rating: 5,
    content: 'A Clínica Ellora é um verdadeiro refúgio de paz e bom gosto. A precisão técnica da Dra. Silvana com os bioestimuladores de colágeno devolveu a firmeza da minha pele sem mudar quem eu sou. Recomendo de olhos fechados!',
    procedureTag: 'Bioestimulador de Colágeno'
  },
  {
    id: '3',
    name: 'Luciana P.',
    role: 'Paciente de Gerenciamento Facial',
    rating: 5,
    content: 'O atendimento da Dra. Silvana vai muito além da maca. O gerenciamento de pele e a consultoria de skincare personalizada mudaram minha rotina matinal e noturna. Sinto minha autoestima renovada todos os dias diante do espelho.',
    procedureTag: 'Gerenciamento de Pele & Skincare'
  },
  {
    id: '4',
    name: 'Renata B.',
    role: 'Paciente de Fios de Sustentação PDO',
    rating: 5,
    content: 'Fiz a colocação dos fios de sustentação e fiquei impressionada com a naturalidade. A Dra. Silvana tem uma mão levíssima e explicou cada etapa com muita clareza e acolhimento.',
    procedureTag: 'Fios de Sustentação PDO'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Como funciona a primeira avaliação na Clínica Ellora?',
    answer: 'Nossa primeira consulta é dedicada a ouvir suas queixas, desejos e histórico de saúde. Realizamos uma análise biométrica minuciosa do seu formato facial, qualidade de pele e proporções anatômicas. A partir disso, desenhamos um plano de tratamento personalizado, sem pressa e com total clareza sobre etapas e investimentos.'
  },
  {
    question: 'Os procedimentos de harmonização facial deixam o rosto artificial?',
    answer: 'Absolutamente não. A filosofia da Dra. Silvana Leite é a "Beleza de Origem": recuperar volumes perdidos e valorizar seus traços únicos, respeitando a anatomia natural. Não utilizamos padrões massificados; o objetivo é que as pessoas percebam seu aspecto rejuvenescido e descansado, sem identificar onde houve intervenção.'
  },
  {
    question: 'A aplicação dos procedimentos é dolorosa?',
    answer: 'Priorizamos o máximo de conforto para os nossos pacientes. Utilizamos anestésicos tópicos hospitalares de alta potência, agulhas e microcânulas ultrafinas e, quando necessário, bloqueios anestésicos locais suaves. A maioria dos pacientes relata apenas um leve desconforto transitório.'
  },
  {
    question: 'Quanto tempo dura o efeito dos bioestimuladores e preenchedores?',
    answer: 'O ácido hialurônico costuma durar entre 12 a 18 meses, sendo reabsorvido gradualmente pelo organismo. Já os bioestimuladores de colágeno atuam progressivamente com pico entre 60 e 90 dias, mantendo os resultados de firmeza tecidual por até 24 meses.'
  },
  {
    question: 'Como agendar um horário com a Dra. Silvana?',
    answer: 'Você pode solicitar seu agendamento diretamente pelo WhatsApp oficial da clínica ou preenchendo o formulário nesta página. Nosso atendimento é exclusivamente com hora marcada para assegurar total privacidade e dedicação a cada paciente.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é o seu principal objetivo estético no momento?',
    subtitle: 'Selecione a opção que mais reflete o seu desejo atual',
    options: [
      {
        label: 'Suavizar marcas de expressão e rugas na testa ou olhos',
        description: 'Quero um visual mais descansado sem perder a naturalidade ao sorrir.',
        recommendedTreatment: 'Toxina Botulínica (Botox)'
      },
      {
        label: 'Recuperar o contorno facial, maçãs do rosto ou lábios',
        description: 'Sinto perda de volume e sombras de cansaço no rosto.',
        recommendedTreatment: 'Preenchimento & Harmonização'
      },
      {
        label: 'Combater a flacidez e devolver firmeza à pele',
        description: 'Quero estimular colágeno de dentro para fora de forma duradoura.',
        recommendedTreatment: 'Bioestimulador de Colágeno'
      },
      {
        label: 'Renovar o viço, clarear manchas e cuidar da rotina em casa',
        description: 'Preciso de um protocolo de cuidados diários que realmente funcione.',
        recommendedTreatment: 'Gerenciamento de Pele & Skincare'
      }
    ]
  },
  {
    id: 2,
    question: 'Você já realizou procedimentos injetáveis anteriormente?',
    subtitle: 'Isso nos ajuda a calibrar a abordagem inicial',
    options: [
      {
        label: 'Nunca realizei nenhum procedimento injetável',
        description: 'Gostaria de começar com uma abordagem muito sutil e explicativa.',
        recommendedTreatment: 'Avaliação Biométrica & Prevenção'
      },
      {
        label: 'Já fiz Botox ou Limpeza e quero manter a rotina',
        description: 'Busco manutenção regular com excelência técnica.',
        recommendedTreatment: 'Toxina Botulínica & Renovação'
      },
      {
        label: 'Já fiz preenchimentos e busco um olhar visagista refinado',
        description: 'Valorizo discrição e proporção de alto padrão.',
        recommendedTreatment: 'Harmonização & Bioestímulo'
      }
    ]
  }
];
