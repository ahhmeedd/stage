import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Clock, Award, Monitor, MapPin, ArrowRight, GraduationCap } from 'lucide-react';
import formationsImg from '@/assets/formations-classroom.jpg';

interface FormationsSectionProps {
  onNavigate: (section: string) => void;
}

export function FormationsSection({ onNavigate }: FormationsSectionProps) {
  const formations = [
    {
      id: 1,
      title: 'Traitement d\'eau pour piscines',
      description: "Apprendre à concevoir et modéliser intégralement une station de traitement d’eau pour piscine, en maîtrisant les outils et normes utilisés dans les projets professionnels",
      duration: '15 heures',
      type: 'Présentiel',
      level: 'Débutant',
      price: '100€',
      modules: [
        'Fonctionnement d’un système de traitement d’eau pour piscine',
        'Dimensionnement des filtres à sable ...',
        'Insertion et annotation des équipements (pompes, filtres,électrovannes, etc.)'
      ]
    },
    {
      id: 2,
      title: 'Études techniques des systèmes de climatisation et ventilation',
      description: 'Grâce à une approche pratique et des études de cas réels, vous apprendrez à maîtriser les outils indispensables tels qu\'AutoCAD et AutoFLUID, et à réaliser des études complètes.',
      duration: '15 heures',
      type: 'Présentiel',
      level: 'Intermédiaire',
      price: '100€',
      modules: [
        'conception initiale à la finalisation des plans techniques.',
        'Lire et analyser des plans d’architecture et de structure,',
        'Concevoir des réseaux de climatisation et ventilation.'
      ]
    },
    {
      id: 3,
      title: 'Sécurité incendie et désenfumage',
      description: 'Formation sur la réglementation et les systèmes de sécurité incendie dans les bâtiments ERP/IGH',
      duration: '15 heures',
      type: 'Hybride',
      level: 'Débutant',
      price: '100€',
      modules: [
        'Réglementation incendie ERP/IGH',
        'Systèmes de détection',
        'Désenfumage naturel et mécanique et Mise en conformité',
        'Réaliser des notes de calcul en sécurité incendie et désenfumage.'
      ]
    },
    {
      id: 4,
      title: 'Plomberie sanitaire moderne',
      description: 'Techniques modernes de plomberie et équipements sanitaires ALIM ES-ECS-RECS/ EVAC EV-EU-EP',
      duration: '15 heures',
      type: 'En ligne',
      level: 'Intermédiaire',
      price: '100€',
      modules: [
        'Réseaux eau chaude sanitaire',
        'Réaliser des notes de calcul en plomberie sanitaire (Alim, Evac).',
        'Préparer des plans techniques prêts à être utilisés sur chantier.',
        'Économies d\'eau'
      ]
    },
    {
      id: 5,
      title: 'Études techniques des systèmes de Chauffage de sol et central',
      description: 'Grâce à une approche pratique et des études de cas réels, vous apprendrez à maîtriser les outils indispensables tels qu\'AutoCAD et AutoFLUID, et à réaliser des études complètes.',
      duration: '15 heures',
      type: 'Présentiel',
      level: 'Intermédiaire',
      price: '100€',
      modules: [
        'conception initiale à la finalisation des plans techniques.',
        'Lire et analyser des plans d’architecture et de structure,',
        'Concevoir des réseaux de climatisation et ventilation.'
      ]
    },
    {
      id: 6,
      title: 'REVIT MEP EN LIGNE',
      description: 'Le logiciel nécessaire pour cette formation (REVIT MEP) et maquettes d’architecture et de structure',
      duration: '15 heures',
      type: 'En ligne',
      level: 'Avancé',
      price: '100€',
      modules: [
        'Importation et exportation de fichier AUTOCAD DWG',
        'Démarrage d\'un projet de Climatisation',
        'Démarrage d\'un projet à l\'aide de Gabarit Revit.'
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-700';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-700';
      case 'Avancé': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'En ligne': return <Monitor className="h-4 w-4" />;
      case 'Présentiel': return <MapPin className="h-4 w-4" />;
      case 'Hybride': return <Users className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            <span className="text-primary">Formations</span> Professionnelles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Développez vos compétences avec nos formations spécialisées 
            dispensées par nos experts certifiés.
          </p>
        </div>

        {/* Hero Formation */}
        <div className="bg-gradient-primary rounded-2xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 text-primary-foreground">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Développez vos compétences avec nos formations certifiantes
              </h3>
              <p className="text-lg mb-8 text-primary-foreground/90">
                AeroNova Engineering vous propose un catalogue complet de formations 
                techniques dans les domaines du génie climatique, dispensées par nos 
                experts certifiés.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span>Formateurs certifiés</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Groupes limités</span>
                </div>
                <div className="flex items-center">
                  <Monitor className="h-5 w-5 mr-2" />
                  <span>Formation en ligne</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src={formationsImg} 
                alt="Formation en génie climatique"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Avantages formations */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Award, title: 'Certification', desc: 'Formations certifiantes reconnues' },
            { icon: Users, title: 'Experts', desc: 'Formateurs expérimentés' },
            { icon: BookOpen, title: 'Pratique', desc: 'Formation théorie + pratique' },
            { icon: Monitor, title: 'Flexibilité', desc: 'Présentiel ou en ligne' }
          ].map((avantage, index) => (
            <Card key={index} className="text-center shadow-elegant">
              <CardContent className="p-6">
                <avantage.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{avantage.title}</h3>
                <p className="text-sm text-muted-foreground">{avantage.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Liste des formations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {formations.map((formation) => (
            <Card key={formation.id} className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getLevelColor(formation.level)}>
                      {formation.level}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      {getTypeIcon(formation.type)}
                      {formation.type}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{formation.price}</div>
                    <div className="text-xs text-muted-foreground">par personne</div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {formation.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {formation.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {formation.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Programme :</h4>
                  <ul className="space-y-2">
                    {formation.modules.map((module, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full"
                  onClick={() => onNavigate('contact')}
                >
                  Demander des informations
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}