import React from 'react';
import { Sparkles } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-ellora-deep text-ellora-cream relative overflow-hidden" id="manifesto">
      {/* Linhas decorativas sutis */}
      <div className="absolute inset-0 bg-[radial-gradient(#B9926D_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ellora-gold/40 text-ellora-gold text-xs tracking-luxury uppercase font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONCEITO DA MARCA</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-ellora-cream font-normal leading-tight">
          BELEZA DE ORIGEM
        </h2>

        {/* Citação Marcante */}
        <div className="py-4">
          <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ellora-peach max-w-3xl mx-auto font-normal">
            «"Você já era isso antes de chegar aqui."»
          </blockquote>
        </div>

        {/* Texto Autêntico */}
        <p className="text-base sm:text-lg text-ellora-cream/90 max-w-3xl mx-auto font-light leading-relaxed">
          A maioria das clínicas comunica a beleza como algo a ser conquistado de fora para dentro, um padrão externo que a mulher precisa alcançar. A <strong className="font-semibold text-ellora-gold">Ellora</strong> propõe o caminho inverso: <strong className="text-white font-medium">beleza de origem</strong> é a certeza de que sua melhor versão já existe. Nosso papel é ajudar a recuperar o que já pertence a você, sem impor fórmulas prontas.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs tracking-wider uppercase text-ellora-peach/90 border-t border-ellora-gold/20 max-w-2xl mx-auto">
          <span className="flex items-center gap-2">✦ Sem padrões massificados</span>
          <span className="flex items-center gap-2">✦ Respeito à sua biometria</span>
          <span className="flex items-center gap-2">✦ Naturalidade sofisticada</span>
        </div>
      </div>
    </section>
  );
};
