export interface Treatment {
  id: string;
  number: string;
  tag: string;
  category: 'facial' | 'pele' | 'corporal';
  title: string;
  shortDesc: string;
  howItWorks: string;
  indicatedFor: string;
  duration: string;
  benefits: string[];
  anesthesia?: string;
  recovery?: string;
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  procedureTag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    recommendedTreatment: string;
  }[];
}
