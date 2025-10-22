import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flame, Wrench, Droplets, Shield, ArrowRight } from 'lucide-react';
import climatisationImg from '@/assets/service-climatisation.jpg';
import chauffageImg from '@/assets/service-chauffage.jpg';
import plomberieImg from '@/assets/service-plomberie.jpg';
import securiteImg from '@/assets/service-securite.jpg';

interface ServicesSectionProps {
  onNavigate: (section: string) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const services = [
    {
      icon: Wrench,
      title: 'Climatisation',
      description: 'Conception et installation de systèmes de climatisation performants et économiques.',
      features: [
        'Étude thermique complète',
        'Installation multi-splits et VRV',
        'Maintenance préventive',
        'Dépannage d\'urgence 24/7'
      ],
      color: 'text-blue-500',
      image: climatisationImg
    },
    {
      icon: Flame,
      title: 'Chauffage',
      description: 'Solutions de chauffage modernes : pompes à chaleur, chaudières gaz, radiateurs.',
      features: [
        'Pompes à chaleur air/eau',
        'Chaudières haute performance',
        'Plancher chauffant',
        'Régulation intelligente'
      ],
      color: 'text-red-500',
      image: chauffageImg
    },
    {
      icon: Droplets,
      title: 'Plomberie sanitaire',
      description: 'Installation et rénovation complète de vos équipements sanitaires.',
      features: [
        'Création de salles de bains',
        'Réseaux eau chaude/froide',
        'Évacuations et assainissement',
        'Équipements sanitaires haut de gamme'
      ],
      color: 'text-cyan-500',
      image: plomberieImg
    },
    {
      icon: Shield,
      title: 'Sécurité incendie',
      description: 'Systèmes de détection, désenfumage et protection incendie conformes aux normes.',
      features: [
        'Détection incendie adressable',
        'Systèmes de désenfumage',
        'Extinction automatique',
        'Mise en conformité réglementaire'
      ],
      color: 'text-orange-500',
      image: securiteImg
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une expertise complète dans tous les domaines du génie climatique 
            et des installations techniques pour vos projets résidentiels et tertiaires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                    <service.icon className={`h-6 w-6 text-white`} />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Notre processus d'intervention
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De l'étude préliminaire à la maintenance, nous vous accompagnons 
              à chaque étape de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Étude', desc: 'Analyse de vos besoins et étude technique' },
              { step: '02', title: 'Conception', desc: 'Plans détaillés et dimensionnement' },
              { step: '03', title: 'Installation', desc: 'Mise en œuvre par nos équipes qualifiées' },
              { step: '04', title: 'Maintenance', desc: 'Suivi et maintenance préventive' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => onNavigate('contact')}
            className="shadow-elegant"
          >
            Demander un devis gratuit <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}