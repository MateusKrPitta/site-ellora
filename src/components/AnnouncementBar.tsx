import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-ellora-dark text-ellora-cream text-[11px] sm:text-xs tracking-luxury uppercase py-2.5 px-4 text-center border-b border-ellora-gold/25 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 font-medium text-ellora-cream">
          <span className="inline-block w-2 h-2 rounded-full bg-ellora-gold animate-pulse"></span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-ellora-gold inline-block" />
            Atendimento Exclusivo e Privativo em Nova Andradina - MS
          </span>
        </div>
        <span className="hidden md:inline text-ellora-rose/40">|</span>
        <span className="hidden md:inline text-ellora-peach/90 font-light flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-ellora-gold/80" />
          Harmonização Facial &amp; Saúde da Pele
        </span>
        <span className="hidden md:inline text-ellora-rose/40">|</span>
        <a
          href="https://instagram.com/clinica_ellora"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ellora-gold hover:text-white transition-colors font-semibold flex items-center gap-1"
        >
          <svg className="w-3 h-3 fill-current inline-block" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          @clinica_ellora
        </a>
      </div>
    </div>
  );
};
