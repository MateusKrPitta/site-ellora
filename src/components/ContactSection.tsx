import React, { useState } from 'react';
import { MapPin, Clock, Phone, Send, CheckCircle2 } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [treatment, setTreatment] = useState(TREATMENTS[0].title);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = whatsapp.replace(/\D/g, '');
    const message = `Olá Dra. Silvana! Meu nome é ${name} (${cleanPhone || whatsapp}). Gostaria de agendar uma consulta na Clínica Ellora para o procedimento: ${treatment}.${notes ? `\n\nObservação: ${notes}` : ''}`;
    
    window.open(`https://wa.me/5567999999999?text=${encodeURIComponent(message)}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFECE5] relative" id="contato">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Informações e Localização */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-ellora-terracotta text-xs tracking-luxury uppercase font-semibold">
                ATENDIMENTO COM HORA MARCADA
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-ellora-deep font-normal mt-2 leading-tight">
                Dê o primeiro passo para ressaltar a sua beleza de origem.
              </h2>
              <p className="text-ellora-deep/80 text-sm sm:text-base font-normal mt-4 leading-relaxed">
                Agende previamente o seu horário para garantirmos total privacidade, conforto e atendimento com dedicação exclusiva na Clínica Ellora em Nova Andradina - MS.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-ellora-terracotta shrink-0 shadow-sm border border-ellora-rose/60">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-ellora-deep">Localização Privativa</p>
                  <p className="text-ellora-deep/75 font-normal mt-0.5">Nova Andradina - MS</p>
                  <p className="text-xs text-ellora-deep/60">Ambiente discreto, seguro e com fácil estacionamento.</p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-ellora-terracotta shrink-0 shadow-sm border border-ellora-rose/60">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-ellora-deep">Horário de Atendimento</p>
                  <p className="text-ellora-deep/75 font-normal mt-0.5">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-xs text-ellora-deep/60">Atendimento exclusivamente com agendamento prévio.</p>
                </div>
              </div>

              {/* WhatsApp Direto */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-ellora-terracotta shrink-0 shadow-sm border border-ellora-rose/60">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-ellora-deep">Central de Agendamento</p>
                  <p className="text-ellora-deep/75 font-normal mt-0.5">Recepção calorosa e suporte prioritário</p>
                  <a
                    href="https://wa.me/5567999999999?text=Ol%C3%A1%20Dra.%20Silvana%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20Ellora."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-ellora-terracotta hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    Iniciar conversa no WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            {/* Card Instagram Oficial */}
            <div className="p-4 rounded-2xl bg-white border border-ellora-rose/70 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-ellora-deep text-white flex items-center justify-center font-bold text-xs">
                  @
                </span>
                <div>
                  <p className="text-xs font-bold text-ellora-deep">Siga a @clinica_ellora</p>
                  <p className="text-[11px] text-ellora-deep/60">Casos clínicos, rotinas e novidades.</p>
                </div>
              </div>
              <a
                href="https://instagram.com/clinica_ellora"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-ellora-terracotta text-ellora-terracotta hover:bg-ellora-terracotta hover:text-white text-xs font-semibold transition-colors"
              >
                Seguir
              </a>
            </div>
          </div>

          {/* Formulário de Conversão Prioritária */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-ellora-rose/80 shadow-luxury">
              <div className="mb-6">
                <h3 className="font-serif-luxury text-2xl font-semibold text-ellora-deep">
                  Solicite sua Consulta
                </h3>
                <p className="text-xs text-ellora-deep/70 mt-1">
                  Preencha seus dados para receber nosso contato prioritário com atenção exclusiva.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sua solicitação foi enviada com sucesso para o WhatsApp!</span>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ellora-deep/70 mb-1" htmlFor="form-name">
                    Nome Completo
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Patrícia Alves"
                    className="w-full rounded-xl border border-ellora-rose/60 bg-[#FFECE5]/30 focus:border-ellora-terracotta focus:ring-1 focus:ring-ellora-terracotta text-sm py-3 px-4 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ellora-deep/70 mb-1" htmlFor="form-whatsapp">
                    WhatsApp com DDD
                  </label>
                  <input
                    id="form-whatsapp"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(67) 99999-9999"
                    className="w-full rounded-xl border border-ellora-rose/60 bg-[#FFECE5]/30 focus:border-ellora-terracotta focus:ring-1 focus:ring-ellora-terracotta text-sm py-3 px-4 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ellora-deep/70 mb-1" htmlFor="form-treatment">
                    Procedimento de Interesse
                  </label>
                  <select
                    id="form-treatment"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full rounded-xl border border-ellora-rose/60 bg-[#FFECE5]/30 focus:border-ellora-terracotta focus:ring-1 focus:ring-ellora-terracotta text-sm py-3 px-4 outline-none transition-colors"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.number}. {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ellora-deep/70 mb-1" htmlFor="form-notes">
                    Mensagem ou Dúvida (Opcional)
                  </label>
                  <textarea
                    id="form-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Conte-nos o que você mais gostaria de cuidar e valorizar no seu rosto ou corpo..."
                    className="w-full rounded-xl border border-ellora-rose/60 bg-[#FFECE5]/30 focus:border-ellora-terracotta focus:ring-1 focus:ring-ellora-terracotta text-sm py-3 px-4 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-ellora-terracotta hover:bg-ellora-deep text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl mt-2 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-ellora-peach" />
                  <span>Enviar Solicitação via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-ellora-deep/60">
                  Seus dados serão tratados com estrito sigilo ético e confidencialidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
