import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Wrench, Flame, Droplets } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleServicesClick = () => {
    console.log('Navigating to services section');
    onNavigate('services');
  };

  const handleContactClick = () => {
    console.log('Navigating to contact section');
    onNavigate('contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500 dark:border-blue-300 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-blue-500 dark:border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-blue-500 dark:border-blue-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              AeroNova <span className="text-blue-600 dark:text-blue-400">Engineering</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in">
              Votre expert en génie climatique, chauffage, plomberie et sécurité incendie
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl animate-fade-in">
              Depuis plus de 10 ans, nous concevons et réalisons des solutions techniques 
              innovantes pour vos projets résidentiels et tertiaires. Notre expertise couvre 
              tous les corps d'état techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in">
              <Button 
                size="lg" 
                onClick={handleServicesClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Découvrir nos services 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleContactClick}
                className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Flame className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Chauffage</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Solutions de chauffage modernes et économiques
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Climatisation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Climatisation performante et respectueuse
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Plomberie</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Installation et maintenance sanitaires
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sécurité incendie</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Protection incendie conforme aux normes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}