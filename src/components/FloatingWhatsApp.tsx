import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido no WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/5567999999999?text=Ol%C3%A1%20Dra.%20Silvana%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20Ellora."
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
