import React from 'react';
import { X, Check, Clock, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { Treatment } from '../types';
import { getWhatsAppUrl } from '../data/contact';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({ treatment, onClose }) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ellora-dark/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-ellora-gold/40 text-ellora-deep"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-ellora-deep/70 hover:text-ellora-deep border border-ellora-rose/40 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tag & Number */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-ellora-peach text-ellora-terracotta border border-ellora-rose/50">
            {treatment.number} • {treatment.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-ellora-deep mb-4">
          {treatment.title}
        </h3>

        {/* Details Grid */}
        <div className="space-y-5 text-sm">
          <div className="bg-white/90 p-4 rounded-2xl border border-ellora-rose/40">
            <h4 className="text-xs uppercase tracking-wider font-bold text-ellora-terracotta mb-1">Como Funciona o Procedimento?</h4>
            <p className="text-ellora-deep/80 leading-relaxed">{treatment.howItWorks}</p>
          </div>

          <div className="bg-white/90 p-4 rounded-2xl border border-ellora-rose/40">
            <h4 className="text-xs uppercase tracking-wider font-bold text-ellora-deep mb-1">Para quem é mais indicado?</h4>
            <p className="text-ellora-deep/80 leading-relaxed">{treatment.indicatedFor}</p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-ellora-terracotta mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-ellora-gold" />
              Principais Benefícios &amp; Resultados
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {treatment.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white/60 p-2.5 rounded-xl border border-ellora-rose/30">
                  <Check className="w-4 h-4 text-ellora-terracotta shrink-0 mt-0.5" />
                  <span className="text-xs text-ellora-deep/90">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3 bg-ellora-peach/30 rounded-xl border border-ellora-rose/40 text-xs">
              <Clock className="w-4 h-4 text-ellora-terracotta shrink-0" />
              <div>
                <p className="font-bold text-ellora-deep">Durabilidade Estimada</p>
                <p className="text-ellora-deep/75">{treatment.duration}</p>
              </div>
            </div>

            {treatment.recovery && (
              <div className="flex items-center gap-3 p-3 bg-ellora-peach/30 rounded-xl border border-ellora-rose/40 text-xs">
                <ShieldCheck className="w-4 h-4 text-ellora-terracotta shrink-0" />
                <div>
                  <p className="font-bold text-ellora-deep">Recuperação</p>
                  <p className="text-ellora-deep/75">{treatment.recovery}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal CTA */}
        <div className="mt-7 pt-5 border-t border-ellora-rose/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ellora-deep/60 text-center sm:text-left">
            Avaliação individual com horário privativo na Clínica Ellora.
          </p>
          <a
            href={getWhatsAppUrl(treatment.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ellora-terracotta hover:bg-ellora-deep text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-ellora-peach" />
            <span>Agendar este Procedimento</span>
          </a>
        </div>
      </div>
    </div>
  );
};
