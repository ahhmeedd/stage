import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Users, label: 'Équipe d\'experts', value: '15+' },
    { icon: Award, label: 'Années d\'expérience', value: '10+' },
    { icon: CheckCircle, label: 'Projets réalisés', value: '500+' },
    { icon: Clock, label: 'Disponibilité', value: '24/7' },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            À propos d'<span className="text-primary">AeroNova Engineering</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fondée en 2024, AeroNova Engineering s'est imposée comme un acteur majeur 
            dans le domaine du génie climatique et des installations techniques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Notre Mission</h3>
            <p className="text-muted-foreground mb-6">
              Nous accompagnons nos clients dans la conception, l'installation et la maintenance 
              de leurs systèmes techniques. Notre approche privilégie l'innovation, la qualité 
              et le respect de l'environnement.
            </p>
            
            <h4 className="text-xl font-semibold text-foreground mb-4">Nos valeurs</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                Excellence technique et respect des normes
              </li>
              <li className="flex items-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                Innovation et solutions durables
              </li>
              <li className="flex items-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                Accompagnement personnalisé de nos clients
              </li>
              <li className="flex items-center text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                Formation continue de nos équipes
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Notre Expertise</h4>
                <p className="text-muted-foreground mb-4">
                  Une équipe pluridisciplinaire composée d'ingénieurs, de techniciens 
                  et de formateurs qualifiés, tous passionnés par l'innovation technique.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Ingénierie thermique</span>
                    <span className="text-sm font-medium text-primary">95%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Systèmes CVC</span>
                    <span className="text-sm font-medium text-primary">92%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Sécurité incendie</span>
                    <span className="text-sm font-medium text-primary">98%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}