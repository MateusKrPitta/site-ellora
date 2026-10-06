import React from 'react';
import { ArrowRight, Lock, Sparkles, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '../data/contact';

export const ClinicSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FFECE5] relative" id="clinica">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-ellora-terracotta text-xs tracking-luxury uppercase font-semibold">
              <span className="w-8 h-px bg-ellora-terracotta"></span>
              <span>O Seu Refúgio de Bem-Estar</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-ellora-deep font-normal leading-tight">
              Espaço Exclusivo, Privativo e Acolhedor em Nova Andradina - MS
            </h2>

            <p className="text-base text-ellora-deep/80 leading-relaxed font-normal">
              A Clínica Ellora foi projetada nos mínimos detalhes para oferecer uma experiência de desaceleração, privacidade total e acolhimento humano. Desde a recepção até a sala de procedimentos, cada ambiente cumpre os mais rigorosos protocolos de biossegurança hospitalar com o conforto e sofisticação de uma clínica boutique.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/90 border border-ellora-rose/60 space-y-1">
                <div className="flex items-center gap-2 text-ellora-terracotta">
                  <Lock className="w-4 h-4" />
                  <p className="text-xs font-bold uppercase tracking-wider">Privacidade Absoluta</p>
                </div>
                <p className="text-xs text-ellora-deep/75">Atendimento individual com hora marcada, garantindo sigilo e discrição total.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-ellora-rose/60 space-y-1">
                <div className="flex items-center gap-2 text-ellora-terracotta">
                  <Sparkles className="w-4 h-4" />
                  <p className="text-xs font-bold uppercase tracking-wider">Tecnologia &amp; Conforto</p>
                </div>
                <p className="text-xs text-ellora-deep/75">Materiais estéreis de padrão ouro internacional e equipamentos certificados pela Anvisa.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Olá Dra. Silvana, gostaria de conhecer a Clínica Ellora e agendar uma visita.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ellora-deep hover:bg-ellora-terracotta text-ellora-cream text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Conhecer o Espaço e Agendar Consulta</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-luxury border-4 border-white bg-white group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHH895KTQ838LTIoZc_a_cQ8Cq6-uQb7rRtTGxW-T6XLjkTgrXEk0qnMb2fCE6yS-FHdB89v2-j97wQNfCnCzUUR8aiBBELOmaYzmBoExcAVRqWpgXzcbN2YvQNHhiGKbeAef9asdj59ZNNFXBkpqkB1qN1ZeG9Lnen7dEwUwMZU4ZT9LVNL39C2d8pRVF1qRIuhT-n4BCqfmxJVgKhhQCCixDZBNoome6t3ICeh8aDVLSw9Jh8RR1ZZoaTpjkYLfWjIk"
                  alt="Fachada elegante e moderna da Clínica Ellora em Nova Andradina - MS"
                  className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-5 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-ellora-rose/60 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-ellora-deep flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-ellora-terracotta inline" />
                    Nova Andradina - MS
                  </p>
                  <p className="text-[11px] text-ellora-terracotta">Atendimento com dedicação e pontualidade</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-ellora-peach text-ellora-terracotta">
                  Estacionamento Fácil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
