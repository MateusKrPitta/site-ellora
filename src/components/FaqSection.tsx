import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/testimonials';
import { getWhatsAppUrl } from '../data/contact';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FFECE5]/60" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-3 mb-12">
          <span className="text-ellora-terracotta text-xs tracking-luxury uppercase font-semibold flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-ellora-gold" />
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-ellora-deep font-normal">
            Esclareça suas dúvidas com transparência
          </h2>
          <p className="text-ellora-deep/75 text-sm max-w-xl mx-auto">
            A saúde e a segurança começam no diálogo e na clareza de cada detalhe do seu tratamento.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-ellora-rose/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-base sm:text-lg font-semibold text-ellora-deep">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-ellora-terracotta shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-ellora-deep/80 leading-relaxed border-t border-ellora-rose/30 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-3xl bg-white/80 border border-ellora-rose/60 text-center space-y-3">
          <p className="text-sm font-semibold text-ellora-deep">
            Ainda tem alguma dúvida específica sobre o seu caso?
          </p>
          <a
            href={getWhatsAppUrl('Olá Dra. Silvana, tenho uma dúvida sobre os procedimentos da Clínica Ellora.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-ellora-terracotta hover:text-ellora-deep transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-ellora-peach fill-current" />
            <span>Falar com nossa equipe no WhatsApp</span> →
          </a>
        </div>
      </div>
    </section>
  );
};
