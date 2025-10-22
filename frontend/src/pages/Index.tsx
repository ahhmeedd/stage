import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { RealisationsSection } from '@/components/sections/RealisationsSection';
import { FormationsSection } from '@/components/sections/FormationsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('accueil');

  // Gestion du scroll pour mettre à jour la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'services', 'realisations', 'formations', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Compte pour la navbar fixe
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onSectionChange={handleSectionChange} />
      
      <main>
        <section id="accueil">
          <HeroSection onNavigate={handleSectionChange} />
        </section>
        
        <section id="apropos">
          <AboutSection />
        </section>
        
        <section id="services">
          <ServicesSection onNavigate={handleSectionChange} />
        </section>
        
        <section id="realisations">
          <RealisationsSection />
        </section>
        
        <section id="formations">
          <FormationsSection onNavigate={handleSectionChange} />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer onNavigate={handleSectionChange} />
    </div>
  );
};

export default Index;
