import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AboutDoctor: React.FC = () => {
  const pillars = [
    'Rigor Técnico da Saúde & Biossegurança',
    'Olhar Visagista & Harmonia Individual',
    'Sensibilidade Artística Sem Exageros',
    'Acompanhamento Home Care Contínuo',
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-[#FFECE5]" id="sobre">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Mosaico com Fotos Reais da Dra. Silvana Leite */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Grid de 2 fotos reais */}
              <div className="grid grid-cols-12 gap-3 items-end">
                {/* Foto 1: Dra. Silvana elegante em alfaiataria */}
                <div className="col-span-7 rounded-2xl overflow-hidden shadow-luxury border-4 border-white bg-white group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWqmJNWy1ltioJH8N-0JzUj4Uw8C2kKnAJTFzf2GnqxcCBOv_oRfjth04-5G22sZtW_vb9_icHLa8Ix9k5XjpqDdqaHfOfmSYhfMb21WSjvV1Yp8g2vUlr7A1QmxBrAPIlvPc4tUQGLJweRj35sXp_zmUs_qsEVdq1bmeenVlWfGoMjpgoZWiKP3F9gxG0FSshGZAvheN9AnkBj34OHZzGT1mtpnxkBsFKmCT9v8tvEDrMBUuNjo85LDdC9agiGtMMIu8"
                    alt="Dra. Silvana Leite - Fundadora da Clínica Ellora"
                    className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Foto 2: Prática clínica com bioativos */}
                <div className="col-span-5 rounded-2xl overflow-hidden shadow-luxury border-4 border-white bg-white group mb-4">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73lj7C_x76iqUZKyuOwAC00KOLdY60mYPT1uaJNRuLfDITroUK7ephDKrF3TrWiKKcV9tBKX7BGoaJHwcLuw8VqdonJwukwm6kAXtGSztrGjmwK3C7QxrHMC-z5OWYoWUdv_XtdwNecumwlezMyAskcepmJ0sniERUblD2o0JVkdbBYMIZ8s1eYPK6xhdXtL1N8027o9H9nK2VyUlK_H0kqUfFNDcbxb9-hnmWvmRGYT7GEcUHyOzOsSNoC7ss2hSu3E"
                    alt="Dra. Silvana Leite atuando com bioativos injetáveis"
                    className="w-full h-64 sm:h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Card de Credencial Flutuante */}
              <div className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-6 bg-white/95 backdrop-blur-md py-3.5 px-5 rounded-2xl shadow-xl border border-ellora-rose/60 flex items-center gap-3.5 max-w-xs z-10">
                <div className="w-10 h-10 rounded-full bg-ellora-peach flex items-center justify-center text-ellora-terracotta shrink-0 font-serif font-bold text-lg">
                  ✦
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-ellora-deep">Dra. Silvana Leite</p>
                  <p className="text-[11px] text-ellora-terracotta font-medium">Harmonização Facial &amp; Saúde</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biografia e Pilares */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-ellora-terracotta text-xs tracking-luxury uppercase font-semibold">
              <span className="w-8 h-px bg-ellora-terracotta"></span>
              <span>A Especialista por trás da marca</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-ellora-deep font-normal leading-tight">
              "Cuidado que nasce da enfermagem: a escuta atenta antes de qualquer procedimento."
            </h2>

            <div className="space-y-4 text-ellora-deep/85 font-normal leading-relaxed text-base">
              <p>
                À frente da <strong>Clínica Ellora</strong>, a <strong>Dra. Silvana Leite</strong> trilhou uma trajetória sólida com raízes na enfermagem — onde a sensibilidade no trato humano, a biossegurança e a saúde integral do paciente são valores inegociáveis.
              </p>
              <p>
                Especialista pós-graduada em estética facial e harmonização orofacial em Nova Andradina - MS, Silvana combina o olhar visagista à anatomia detalhada. Seu propósito não é transformar rostos em cópias artificiais, mas restaurar volumes perdidos com graciosidade, sutileza e profundo respeito à sua identidade.
              </p>
            </div>

            {/* Pilares Clínicos */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-ellora-rose/60">
                  <CheckCircle2 className="w-4 h-4 text-ellora-terracotta shrink-0" />
                  <span className="font-medium text-xs sm:text-sm text-ellora-deep">{pillar}</span>
                </div>
              ))}
            </div>

            {/* Link de Agendamento */}
            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <a
                href="https://wa.me/5567999999999?text=Ol%C3%A1%20Dra.%20Silvana%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20Ellora."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-ellora-terracotta font-semibold text-sm hover:text-ellora-deep transition-colors group"
              >
                <span>Conversar diretamente com a Dra. Silvana</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
              <span className="font-serif italic text-xl text-ellora-gold font-medium">Silvana Leite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
