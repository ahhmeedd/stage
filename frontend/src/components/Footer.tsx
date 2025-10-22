import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuSections = [
    {
      title: 'Services',
      links: [
        { label: 'Climatisation', action: () => onNavigate('services') },
        { label: 'Chauffage', action: () => onNavigate('services') },
        { label: 'Plomberie sanitaire', action: () => onNavigate('services') },
        { label: 'Sécurité incendie', action: () => onNavigate('services') }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { label: 'À propos', action: () => onNavigate('apropos') },
        { label: 'Nos réalisations', action: () => onNavigate('realisations') },
        { label: 'Formations', action: () => onNavigate('formations') },
        { label: 'Contact', action: () => onNavigate('contact') }
      ]
    },
    {
      title: 'Formations',
      links: [
        { label: 'Climatisation', action: () => onNavigate('formations') },
        { label: 'Pompes à chaleur', action: () => onNavigate('formations') },
        { label: 'Sécurité incendie', action: () => onNavigate('formations') },
        { label: 'Financement', action: () => onNavigate('formations') }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-current rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-current rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-current rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AN</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AeroNova</h3>
                <p className="text-sm opacity-80">Engineering</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Expert en génie climatique depuis 2014. Nous concevons et réalisons 
              des solutions techniques innovantes pour tous vos projets.
            </p>

            {/* Contact rapide */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                N°47 Rue Fathi Zouhir Cité Nkhilette
                2083 Ariana, Tunisie
              </div>
              <div className="flex items-center text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                +216 23 948 792
              </div>
              <div className="flex items-center text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                aeronov.eng@gmail.com
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          {menuSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.action}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-primary-foreground/80 mr-2">Suivez-nous :</span>
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 p-2"
                onClick={() => window.open(social.href, '_blank')}
              >
                <social.icon className="h-4 w-4" />
                <span className="sr-only">{social.label}</span>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-sm text-primary-foreground/80 mb-2">
              © 2024 AeroNova Engineering. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-xs text-primary-foreground/60">
              <button className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </button>
              <button className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </button>
              <button className="hover:text-primary-foreground transition-colors">
                CGV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 rounded-full w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20"
        variant="outline"
        size="sm"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Retour en haut</span>
      </Button>
    </footer>
  );
}