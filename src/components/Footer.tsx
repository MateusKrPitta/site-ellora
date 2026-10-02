import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ellora-deep text-ellora-cream pt-16 pb-12 border-t border-ellora-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Logo e Resumo Institucional */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuL2jeFkfvAjTTg_PEkVN0cz6qwXdZCkeS_g5TNrjvc3sBKNExNjUJl-l4F6DnZY57d5bJVfheYDNw_hPPjAInmCQqoXI1M6faaLhjeFL1NeA9_v2thOZM8A-OG6w67cB4iZ5iKUoXkgj7xeHzI3SalgOhPRsyJviFqfJInA6AJJRqBN9NjLiBlLhzROXPs4bZ0qwCkJYylTkyTSxiCH4Q41JGOBB35zxhkyWmkGXmjLB67G22mLBkKH_cVAQw2pnn0Qg"
                alt="Ellora Estética e Saúde - Monograma Oficial"
                className="h-12 w-auto object-contain rounded-full border border-ellora-gold/40"
              />
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-semibold tracking-wider text-white">
                  ELLORA
                </span>
                <span className="text-[9px] tracking-luxury uppercase font-semibold text-ellora-gold -mt-1">
                  ESTÉTICA &amp; SAÚDE
                </span>
              </div>
            </div>
            <p className="text-xs text-ellora-cream/80 font-normal leading-relaxed max-w-sm">
              Especialistas em realçar a beleza feminina através de procedimentos estéticos avançados, seguros e com acabamento sutil em Nova Andradina - MS.
            </p>
            <p className="text-xs text-ellora-gold font-serif italic flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              "Você já era isso antes de chegar aqui."
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-luxury text-ellora-gold font-semibold">
              Navegação Rápida
            </p>
            <ul className="space-y-2 text-xs text-ellora-cream/80">
              <li><a className="hover:text-white transition-colors" href="#inicio">Início</a></li>
              <li><a className="hover:text-white transition-colors" href="#manifesto">Beleza de Origem</a></li>
              <li><a className="hover:text-white transition-colors" href="#sobre">Dra. Silvana Leite</a></li>
              <li><a className="hover:text-white transition-colors" href="#procedimentos">Catálogo de Procedimentos</a></li>
              <li><a className="hover:text-white transition-colors" href="#clinica">A Clínica Física</a></li>
              <li><a className="hover:text-white transition-colors" href="#diferenciais">O Método Ellora</a></li>
              <li><a className="hover:text-white transition-colors" href="#depoimentos">Depoimentos</a></li>
              <li><a className="hover:text-white transition-colors" href="#faq">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Procedimentos Oficiais */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-luxury text-ellora-gold font-semibold">
              Procedimentos Oficiais
            </p>
            <ul className="space-y-2 text-xs text-ellora-cream/80">
              {TREATMENTS.map((t) => (
                <li key={t.id} className="hover:text-white transition-colors">
                  <a href="#procedimentos">
                    {t.number}. {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conexões Oficiais */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-luxury text-ellora-gold font-semibold">
              Canais Oficiais
            </p>
            <div className="flex flex-col space-y-2.5 text-xs text-ellora-cream/80">
              <a
                className="hover:text-white transition-colors flex items-center gap-2"
                href="https://instagram.com/clinica_ellora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 fill-current text-ellora-gold" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@clinica_ellora</span>
              </a>
              <a
                className="hover:text-white transition-colors flex items-center gap-2"
                href="https://linktr.ee/clinica_ellora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Linktree Oficial</span>
              </a>
              <div className="pt-3 border-t border-white/10 text-[11px] text-ellora-cream/60 space-y-1">
                <p className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-ellora-gold inline" />
                  Nova Andradina • MS
                </p>
                <p className="text-ellora-peach/80">Dra. Silvana Leite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright e Ética */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-ellora-cream/60 gap-4">
          <p>© {currentYear} Clínica Ellora • Silvana Leite Estética &amp; Saúde • Todos os direitos reservados.</p>
          <p className="text-center md:text-right">
            Conteúdo informativo em consonância com as normas éticas de conselhos de saúde.
          </p>
        </div>
      </div>
    </footer>
  );
};
