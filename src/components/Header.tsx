import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/contact';

interface HeaderProps {
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Dra. Silvana' },
    { href: '#procedimentos', label: 'Procedimentos' },
    { href: '#clinica', label: 'A Clínica' },
    { href: '#diferenciais', label: 'O Método' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'Dúvidas' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFECE5]/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-ellora-rose/40'
          : 'bg-[#FFECE5]/90 backdrop-blur-sm py-3.5 sm:py-4 border-b border-ellora-rose/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Logo Oficial com respiro à direita */}
        <a
          href="#inicio"
          className="flex items-center group focus:outline-none shrink-0 mr-2 sm:mr-4 lg:mr-8"
          aria-label="Ellora Estética & Saúde - Início"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3GC08d0H9zrkgk-VdWwpHRmk-hhTzG9LbzS_DpRgq-kIz6YGzbA7Zf811LvIzOyZPeSYfFtMtDVNgoSnj5YA3T3-UKTpKScqrGA0t-wXiHwKy_l8jzP9ZtdHPSAfOfXe2PmH1LN8hl43Fs5ngv9BHmlRJUXrODokUZMvG0XOBz9Sna8PpaJBEEioEkvJuxEKCEpYSUHyvwuYR9Wxr9L0ZIKrZRiok3mevUziIsqOvzMGS6BiE-V1kTFbSUDumG9UUrL4"
            alt="Logo Oficial Ellora Estética & Saúde"
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-full border border-ellora-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links sem quebra de linha */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs uppercase tracking-wider font-semibold text-ellora-deep/85">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:text-ellora-terracotta transition-colors py-1 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-ellora-terracotta hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center shrink-0 ml-auto lg:ml-6">
          <a
            href={getWhatsAppUrl('Olá Dra. Silvana, gostaria de agendar uma consulta na Clínica Ellora.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-ellora-terracotta hover:bg-ellora-deep text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-ellora-peach" />
            <span>Agendar Consulta</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-ellora-deep hover:bg-white/60 focus:outline-none transition-colors ml-auto"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8F5] border-b border-ellora-rose/40 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-ellora-deep/90 hover:text-ellora-terracotta py-2 border-b border-ellora-rose/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full py-3 rounded-full border border-ellora-terracotta text-ellora-terracotta text-xs font-bold uppercase tracking-wider text-center bg-white"
            >
              Quiz: Descobrir Protocolo Ideal
            </button>
            <a
              href={getWhatsAppUrl('Olá Dra. Silvana, gostaria de agendar uma consulta na Clínica Ellora.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-ellora-terracotta text-white text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-ellora-peach" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
