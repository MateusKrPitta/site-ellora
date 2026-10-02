import React, { useState } from 'react';
import { X, Sparkles, RotateCcw, MessageCircle, CheckCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/testimonials';

interface SkinQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkinQuizModal: React.FC<SkinQuizModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: { label: string; recommended: string } }>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (option: { label: string; recommendedTreatment: string }) => {
    const updated = {
      ...answers,
      [currentQ.id]: { label: option.label, recommended: option.recommendedTreatment }
    };
    setAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const recommendedProcedures = Object.values(answers).map(a => a.recommended).join(' + ');

  const whatsappMessage = `Olá Dra. Silvana! Realizei o Simulador de Procedimentos no site da Clínica Ellora.\n\nMeu objetivo principal: ${answers[1]?.label || 'Harmonização'}\nHistórico: ${answers[2]?.label || 'Primeira vez'}\nProtocolo recomendado: ${recommendedProcedures}.\n\nGostaria de agendar uma avaliação com você!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ellora-dark/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FFF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-ellora-gold/40 text-ellora-deep"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-ellora-deep/70 hover:text-ellora-deep border border-ellora-rose/40 transition-colors"
          aria-label="Fechar quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ellora-terracotta">
                  <Sparkles className="w-3.5 h-3.5 text-ellora-gold" />
                  Simulador de Beleza de Origem
                </span>
                <span className="text-xs font-semibold text-ellora-deep/60">
                  Etapa {currentStep + 1} de {QUIZ_QUESTIONS.length}
                </span>
              </div>
              <div className="w-full bg-ellora-rose/30 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-ellora-terracotta h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-ellora-deep font-semibold mb-1">
              {currentQ.question}
            </h3>
            <p className="text-xs text-ellora-deep/70 mb-5 font-normal">
              {currentQ.subtitle}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  className="w-full text-left p-4 rounded-2xl bg-white border border-ellora-rose/60 hover:border-ellora-terracotta hover:bg-white/95 hover:shadow-md transition-all group"
                >
                  <p className="text-sm font-semibold text-ellora-deep group-hover:text-ellora-terracotta transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-xs text-ellora-deep/70 mt-1 font-normal">
                    {opt.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="text-center py-3 space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-ellora-peach flex items-center justify-center text-ellora-terracotta border border-ellora-gold/40 shadow-sm">
              <CheckCircle className="w-8 h-8 text-ellora-terracotta" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-luxury font-bold text-ellora-terracotta">
                Diagnóstico Preliminar
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ellora-deep font-semibold mt-1">
                Seu Protocolo Ideal Sugerido
              </h3>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-ellora-gold/50 shadow-sm text-left space-y-3">
              <div className="flex items-center gap-2 text-ellora-terracotta text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-ellora-gold" />
                <span>Recomendação Personalizada:</span>
              </div>
              <p className="font-serif-luxury text-xl text-ellora-deep font-semibold">
                {recommendedProcedures}
              </p>
              <p className="text-xs text-ellora-deep/80 leading-relaxed">
                Este plano prioriza a sutileza, harmonia facial e manutenção da sua beleza autêntica, exatamente como preconiza a Dra. Silvana Leite.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`https://wa.me/5567999999999?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-ellora-terracotta hover:bg-ellora-deep text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-ellora-peach" />
                <span>Enviar Diagnóstico e Agendar no WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 text-xs text-ellora-deep/70 hover:text-ellora-deep py-2 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer o teste</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
