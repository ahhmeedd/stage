import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import realisation1 from '@/assets/realisation-1.jpg';
import realisation2 from '@/assets/realisation-2.jpg';
import realisation3 from '@/assets/realisation-3.jpg';
import realisation4 from '@/assets/realisation-4.jpg';
import realisation5 from '@/assets/realisation-5.jpg';
import realisation6 from '@/assets/realisation-6.jpg';

export function RealisationsSection() {
  // Projets exemple - en production, ces données viendraient de Firebase
  const projects = [
    {
      id: 1,
      title: 'Hôtel Ibis Sfax ',
      description: "Suivi et contrôle de l'exécution des lots fluides pour un hôtel de plus 120 chambres.",
      category: 'CVC',
      location: 'Sfax',
      date: '2016-2018',
      image: realisation1,
      tags: ['Climatisation', 'Ventilation', 'Tertiaire']
    },
    {
      id: 2,
      title: 'Hôtel Novotel Lac II',
      description: "Suivi et contrôle de l'exécution des lots fluides pour un hôtel de plus 150 chambres",
      category: 'évacuation',
      location: 'Tunis',
      date: '2019-2022',
      image: realisation2,
      tags: ['Chauffage', 'Pompe à chaleur', 'Résidentiel']
    },
    {
      id: 3,
      title: 'Agences BIAT',
      description: "Suivi et contrôle de l'exécution des lots fluides ",
      category: 'Plomberie',
      location: 'Tunis',
      date: '2023-2024',
      image: realisation3,
      tags: ['Plomberie', 'Sécurité incendie', 'Hôtellerie']
    },
    {
      id: 4,
      title: 'Villas Marina Gammarth',
      description: 'Installation de systèmes de désenfumage et détection incendie pour plusieurs villas haut de gamme.',
      category: 'Sécurité incendie',
      location: 'Gammarth',
      date: '2024-2025',
      image: realisation4,
      tags: ['Sécurité incendie', 'Désenfumage', 'Industriel']
    },
    {
      id: 5,
      title: 'Immeuble NADA',
      description: 'Études techniques, suivi et contrôle des systemes de climatisation',
      category: 'Climatisation',
      location: 'Tunis',
      date: '2023',
      image: realisation5,
      tags: ['Climatisation', 'Chauffage', 'Éducation']
    },
    {
      id: 6,
      title: 'Salon de thé ',
      description: 'Installation complète : chauffage, climatisation, plomberie et domotique.',
      category: 'Multi-technique',
      location: 'Borj Cédria',
      date: '2025',
      image: realisation6,
      tags: ['Chauffage', 'Climatisation', 'Plomberie', 'Domotique']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Climatisation': return 'bg-blue-100 text-blue-700';
      case 'Chauffage': return 'bg-red-100 text-red-700';
      case 'Plomberie': return 'bg-cyan-100 text-cyan-700';
      case 'Sécurité incendie': return 'bg-orange-100 text-orange-700';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Réalisations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets récents qui témoignent 
            de notre expertise et de la qualité de nos installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Badge Category */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/80 backdrop-blur-sm text-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.date}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-background rounded-2xl p-8 lg:p-12 shadow-elegant">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Délai intervention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10 ans</div>
              <div className="text-sm text-muted-foreground">Garantie travaux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}