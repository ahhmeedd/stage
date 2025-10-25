import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('../netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Échec de l\'envoi du message');
      }

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message envoyé avec succès",
          description: "Nous vous avons envoyé une confirmation par email.",
        });
        
        // Reset form
        setFormData({
          nom: '',
          email: '',
          sujet: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'N°47 Rue Fathi Zouhir Cité Nkhilette \n2083 Ariana, Tunisie'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+216 23 948 792'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'aeronov.eng@gmail.com'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven : 8h00 - 18h00\nUrgences : 24h/7j'
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Contactez <span className="text-primary">AeroNova</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre disposition 
            pour vous accompagner dans tous vos projets techniques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sujet">Sujet *</Label>
                  <Input
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    required
                    placeholder="Objet de votre demande"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      Envoyer le message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Carte et Urgences */}
            <div className="mt-12 grid lg:grid-cols-2 gap-12">
              {/* Carte */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Notre localisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.955445451038!2d10.1835016!3d36.8796488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb4269765cdf%3A0x8e97de1fd6390257!2s01%20Av.%20Fethi%20Zouhir%2C%20Ariana%202080!5e0!3m2!1sen!2stn!4v1712345678901!5m2!1sen!2stn"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: '0.5rem' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localisation AeroNova Engineering"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Urgences */}
              <div className="space-y-6">
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Service d'urgence 24h/7j
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      En cas de panne ou d'urgence, notre équipe d'astreinte est disponible
                    </p>
                    <div className="space-y-3">
                      <Button 
                        size="lg" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() => window.open('tel:+21623948792')}
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Appeler le service d'urgence
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full border-accent text-accent hover:bg-accent/10"
                        onClick={() => window.open('https://wa.me/21623948792?text=Bonjour, j\'ai besoin d\'une intervention d\'urgence')}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Contacter par WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
