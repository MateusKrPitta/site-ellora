import React from 'react';
import { X, Check } from 'lucide-react';

export const MethodComparison: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFF8F5] relative" id="diferenciais">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-ellora-terracotta text-xs tracking-luxury uppercase font-semibold">
            O PADRÃO ELLORA
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-ellora-deep font-normal">
            Por que a nossa abordagem estética é única?
          </h2>
          <p className="text-ellora-deep/75 text-sm sm:text-base font-normal">
            Entenda a diferença entre a estética massificada de mercado e a harmonização personalizada com base na saúde.
          </p>
        </div>

        {/* Duas Colunas Comparativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Mercado Comum */}
          <div className="p-8 rounded-3xl bg-white/60 border border-ellora-deep/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-bold">
                  <X className="w-4 h-4" />
                </span>
                <h3 className="font-serif-luxury text-xl font-semibold text-gray-700">
                  Estética Padronizada / De Mercado
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-gray-600 font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Protocolos engessados repetidos em todos os pacientes sem análise biológica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Transformação rápida focada em volume e venda de seringas, descaracterizando expressões.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Atendimento impessoal e apressado, sem momento de escuta ou diagnóstico prévio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Ausência de suporte continuado e acompanhamento dermatológico pós-sessão.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-200 text-xs text-gray-500 font-medium">
              Resultado: Rostos padronizados e risco de artificialidade.
            </div>
          </div>

          {/* Método Ellora */}
          <div className="p-8 rounded-3xl bg-white border-2 border-ellora-gold shadow-luxury-hover relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-ellora-gold text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl shadow-sm">
              MÉTODO EXCLUSIVO
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-ellora-peach text-ellora-terracotta flex items-center justify-center text-sm font-bold">
                  <Check className="w-4 h-4" />
                </span>
                <h3 className="font-serif-luxury text-xl font-semibold text-ellora-deep">
                  O Método Ellora
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-ellora-deep/90 font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-ellora-terracotta font-bold">✓</span>
                  <span><strong>A escuta que precede a técnica:</strong> mapeamento anatômico estrutural e individual.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ellora-terracotta font-bold">✓</span>
                  <span><strong>Elegância sem exageros:</strong> técnicas que valorizam os seus traços com naturalidade indiscutível.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ellora-terracotta font-bold">✓</span>
                  <span><strong>Rigor técnico e segurança:</strong> materiais de padrão internacional com rastreabilidade total.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ellora-terracotta font-bold">✓</span>
                  <span><strong>Suporte contínuo:</strong> protocolo Home Care e acompanhamento direto pela Dra. Silvana.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-ellora-rose/50 text-xs text-ellora-terracotta font-semibold">
              Resultado: Rejuvenescimento real com a sua verdadeira identidade.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
