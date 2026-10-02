import React, { useState } from 'react';
import { Sparkles, Info } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';
import { Treatment } from '../types';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenQuiz: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onSelectTreatment, onOpenQuiz }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'facial' | 'pele' | 'corporal'>('all');

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos os 8 Procedimentos' },
    { id: 'facial', label: 'Harmonização & Face' },
    { id: 'pele', label: 'Saúde da Pele & Skincare' },
    { id: 'corporal', label: 'Corporal & Firmeza' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-ellora-rose/50" id="procedimentos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-ellora-terracotta text-xs tracking-luxury uppercase font-semibold">
            Portfólio Oficial Ellora
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-ellora-deep font-normal">
            Procedimentos de Alto Valor para sua Expressão e Saúde
          </h2>
          <p className="text-ellora-deep/75 text-sm sm:text-base font-normal">
            Conheça os 8 procedimentos fundamentados no rigor biomédico, na naturalidade e na recuperação da sua beleza de origem.
          </p>
        </div>

        {/* Banner Visual: Toque Clínico e Diagnóstico */}
        <div className="mb-10 rounded-3xl overflow-hidden border border-ellora-rose/50 bg-[#FFECE5] grid grid-cols-1 lg:grid-cols-12 items-center shadow-luxury">
          <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
            <img
              src="/images/procedimento_facial.jpg"
              alt="Avaliação facial e toque clínico delicado na Clínica Ellora"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#FFECE5]/40"></div>
          </div>
          <div className="lg:col-span-7 p-8 lg:p-12 space-y-4">
            <div className="inline-flex items-center gap-2 text-ellora-terracotta text-xs uppercase font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-ellora-terracotta"></span>
              <span>Avaliação Personalizada e Escuta Clínica</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ellora-deep">
              Cada plano de tratamento é desenhado para o seu biotipo
            </h3>
            <p className="text-sm text-ellora-deep/80 leading-relaxed font-normal">
              Na Clínica Ellora, você não recebe receitas pré-fabricadas. Combinamos toxina botulínica, volumização, estímulo dérmico e protocolos integrados para respeitar sua anatomia e manter a sua autenticidade.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ellora-terracotta text-white text-xs uppercase tracking-wider font-semibold hover:bg-ellora-deep transition-colors shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-ellora-peach" />
                <span>Fazer o Quiz de Procedimentos</span>
              </button>
              <a
                href="https://wa.me/5567999999999?text=Ol%C3%A1%20Dra.%20Silvana%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20Ellora."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider font-semibold text-ellora-terracotta hover:text-ellora-deep transition-colors inline-flex items-center gap-1"
              >
                <span>Conversar no WhatsApp</span> →
              </a>
            </div>
          </div>
        </div>

        {/* Categorias / Filtros Interativos (posicionados abaixo do banner) */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-ellora-terracotta text-white shadow-md'
                  : 'bg-[#FFECE5]/70 hover:bg-[#FFECE5] text-ellora-deep/80 border border-ellora-rose/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid com os 8 Procedimentos Oficiais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="group p-6 rounded-2xl bg-ellora-cream/40 border border-ellora-rose/60 hover:border-ellora-terracotta/50 transition-all duration-300 shadow-luxury hover:shadow-luxury-hover flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-ellora-peach text-ellora-terracotta">
                    {treatment.number}. {treatment.tag}
                  </span>
                  <span className="text-xs text-ellora-gold font-serif">✦</span>
                </div>

                <h3 className="font-serif-luxury text-xl font-semibold text-ellora-deep">
                  {treatment.title}
                </h3>

                <div className="space-y-2 text-xs">
                  <p className="text-ellora-terracotta font-semibold uppercase tracking-wide">Como Funciona?</p>
                  <p className="text-ellora-deep/80 leading-relaxed line-clamp-4">
                    {treatment.howItWorks}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-ellora-rose/40 text-xs">
                  <p className="text-ellora-deep font-semibold uppercase tracking-wide">Para quem é indicado?</p>
                  <p className="text-ellora-deep/75 leading-relaxed line-clamp-2">
                    {treatment.indicatedFor}
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-ellora-rose/50 mt-5 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-ellora-deep/70">
                  <span>Duração: {treatment.duration}</span>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="text-xs font-semibold text-ellora-deep/70 hover:text-ellora-terracotta transition-colors inline-flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>

                  <a
                    href={`https://wa.me/5567999999999?text=${encodeURIComponent(treatment.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-ellora-terracotta hover:text-ellora-deep transition-colors inline-flex items-center gap-1"
                  >
                    <span>Agendar</span> →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Dermocosméticos e Conversão Rápida */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-ellora-rose/70 bg-[#FFECE5] grid grid-cols-1 md:grid-cols-12 items-center shadow-luxury">
          <div className="md:col-span-5 h-56 md:h-full relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7rghOg-KTk7raXtGUqL1GcIYcNtjLlpFKGRkQtoRwJklKgwMLRN7dxbVSr6J0n-drjq3T_4aFoxLncsefCUY1ptcXp_rfJP5OdIfnUPjwTDwKyAs6yV8HMV38RylgXT_M2mHJKsg1DJh4fk4A9sj21ZYjNsI7UvPNuF6ODFwG3MT5A-lFerXbl2ycoaLK1164DMG8Tv1vKlZCm8qZkXNCnbpNyYGDBtEws-Q7R-X1rTCdq7DQf8GhLA"
              alt="Bandeja de dermocosméticos refinados e ativos de alta performance da rotina Ellora"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-4 text-center md:text-left">
            <div>
              <h4 className="font-serif-luxury text-2xl font-semibold text-ellora-deep">
                Não sabe qual procedimento é o mais indicado para você?
              </h4>
              <p className="text-sm text-ellora-deep/80 font-normal mt-1">
                Nossa avaliação biométrica identifica exatamente o que sua pele e seu rosto precisam para florescer com saúde e jovialidade.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/5567999999999?text=Ol%C3%A1%20Dra.%20Silvana%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20Ellora."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-ellora-terracotta hover:bg-ellora-deep text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md shrink-0"
              >
                <span>Falar com a Dra. Silvana no WhatsApp</span>
                <Sparkles className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenQuiz}
                className="px-6 py-3.5 rounded-full border border-ellora-terracotta text-ellora-terracotta text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Descobrir no Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
