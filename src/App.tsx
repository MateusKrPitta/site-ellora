import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { AboutDoctor } from './components/AboutDoctor';
import { TreatmentsSection } from './components/TreatmentsSection';
import { TreatmentModal } from './components/TreatmentModal';
import { SkinQuizModal } from './components/SkinQuizModal';
import { ClinicSection } from './components/ClinicSection';
import { MethodComparison } from './components/MethodComparison';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Treatment } from './types';

export const App: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-ellora-cream selection:bg-ellora-peach selection:text-ellora-terracotta">
      {/* Main Navigation Header */}
      <Header onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* Manifesto: Beleza de Origem */}
        <Manifesto />

        {/* Dra. Silvana Leite & Biografia */}
        <AboutDoctor />

        {/* Procedimentos Oficiais */}
        <TreatmentsSection
          onSelectTreatment={(t) => setSelectedTreatment(t)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* A Clínica Física em Nova Andradina */}
        <ClinicSection />

        {/* O Padrão & Método Ellora vs Mercado */}
        <MethodComparison />

        {/* Depoimentos Humanizados */}
        <TestimonialsSection />

        {/* FAQ - Dúvidas Frequentes */}
        <FaqSection />

        {/* Contato & Agendamento */}
        <ContactSection />
      </main>

      {/* Footer Oficial */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Modais Interativos */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />

      <SkinQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </div>
  );
};

export default App;
