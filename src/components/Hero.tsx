import React from 'react';
import { MessageCircle, Star, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/contact';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative pt-8 pb-16 lg:py-20 overflow-hidden" id="inicio">
      {/* Ambient subtle background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] bg-ellora-peach/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-ellora-rose/25 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Hero Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Headline Oficial da Marca */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[3.65rem] text-ellora-deep font-normal leading-[1.15]">
              Valorizando sua história, <br className="hidden sm:inline" />
              <span className="italic text-ellora-terracotta font-serif">revelando sua beleza</span> com sofisticação.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-ellora-deep/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Procedimentos estéticos faciais, saúde da pele e harmonização pautados no rigor técnico da saúde e na escuta individual. O acolhimento e a segurança que você merece para realçar quem você já é.
            </p>

            {/* CTAs Alinhadas na Mesma Linha */}
            <div className="pt-2 space-y-2.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={getWhatsAppUrl('Olá Dra. Silvana, gostaria de agendar uma consulta na Clínica Ellora.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-ellora-terracotta hover:bg-ellora-deep text-white font-semibold text-xs sm:text-sm tracking-wide text-center transition-all duration-300 shadow-luxury hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-ellora-peach" />
                  <span>Agendar Avaliação no WhatsApp</span>
                </a>

                <button
                  onClick={onOpenQuiz}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border border-ellora-gold hover:border-ellora-terracotta bg-white/80 hover:bg-white text-ellora-terracotta font-semibold text-xs sm:text-sm text-center transition-all duration-300 shadow-sm whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-ellora-gold" />
                  <span>Simulador de Procedimentos</span>
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[11px] text-ellora-terracotta font-medium pt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-ellora-terracotta"></span>
                <span>Vagas limitadas para este mês com atendimento privativo</span>
              </div>
            </div>

            {/* Prova Social Imediata no Hero */}
            <div className="pt-6 border-t border-ellora-rose/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-left">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-ellora-deep">5.0 no Google &amp; Instagram</span>
              </div>

              <div className="h-3 w-px bg-ellora-rose/60 hidden sm:block"></div>

              <div className="text-xs text-ellora-deep font-medium">
                <span className="font-bold text-ellora-terracotta">+500</span> atendimentos humanizados
              </div>

              <div className="h-3 w-px bg-ellora-rose/60 hidden sm:block"></div>

              <div className="text-xs text-ellora-deep/90 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-ellora-gold" />
                <span>Espaço Próprio e Exclusivo</span>
              </div>
            </div>
          </div>

          {/* Hero Media Column: Foto Real da Fachada Oficial */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura dourada decorativa */}
              <div className="absolute -top-3.5 -bottom-3.5 -right-3.5 -left-3.5 rounded-3xl border border-ellora-gold/50 -z-10 hidden sm:block"></div>
              
              <div className="rounded-2xl overflow-hidden shadow-luxury bg-ellora-peach relative border border-white/80 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEKpEmaBo7SSNP6zDHPLi97E_K2V7FRv73HgdobK-87rVYGBDMOAROIeYdXRsHnCJqprL3tvebIlvDIKBLAk8Gb25obEgHzVIJV96acwJP3bfsRajMDAOAIEgjMC7qd7xoNWLWICOoUDUHQ6z7fEcNw4MbEVQ4_dt4KflFHajL8qdjeM_b_UKnRiR0HmXFkbKp78VXz2pq3QinJo402w0fxT7HbMtRKMslkCx4dzPsIm6nwZztl5AVhadgMCTyJpgJygQ"
                  alt="Fachada oficial e moderna da Clínica Ellora Estética e Saúde em Nova Andradina - MS"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Clinic Feature Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-ellora-rose/40 shadow-lg text-ellora-deep">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-ellora-cream flex items-center justify-center text-ellora-terracotta shrink-0 border border-ellora-rose/60">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[11px] uppercase tracking-widest font-bold text-ellora-terracotta">Sede Própria &amp; Privativa</h3>
                      <p className="text-xs text-ellora-deep/90 font-normal">Estrutura imponente e acolhedora em Nova Andradina - MS.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
