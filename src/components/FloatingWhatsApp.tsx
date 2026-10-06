import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/contact';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido no WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppUrl('Olá Dra. Silvana, gostaria de agendar uma consulta na Clínica Ellora.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
