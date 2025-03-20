import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PlatformCard from '@/components/PlatformCard';
import ComparisonTable from '@/components/ComparisonTable';
import FeatureComparison from '@/components/FeatureComparison';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Heart, 
  CheckCircle, 
  Search, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  Clock,
  ThumbsUp
} from 'lucide-react';
import platforms from '@/utils/platformData';

const Comparison = () => {
  const isMobile = useIsMobile();
  
  // Initialize animation observation when component mounts
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.appear-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.appear-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-10 md:pt-16">
        {/* Top Platforms Section */}
        <section className="section-container pt-4 md:pt-10 pb-10" id="vergleich">
          {/* Mobile timestamp - visible only on mobile */}
          {isMobile && (
            <div className="mb-2 flex justify-start">
              <div className="inline-flex items-center rounded-full border border-border p-1 text-muted-foreground bg-background/50">
                <div className="flex items-center space-x-1 px-2 py-0.5 text-xs font-medium">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Hero image with text overlay - different for mobile and desktop */}
          <div className="relative w-full rounded-xl overflow-hidden mb-6 md:mb-10">
            <img 
              src="/lovable-uploads/dc2e8715-a8b0-4c7f-87e8-a6fd19e4b10d.png" 
              alt="Glückliches Paar 40+" 
              className={`w-full ${isMobile ? 'h-56' : 'h-96'} object-cover ${isMobile ? 'object-right-top' : 'object-center'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 md:p-8 text-white w-full">
                <h2 className="font-serif text-2xl md:text-4xl font-semibold text-balance">
                  Die besten Plattformen für Singles 40+
                </h2>
                {/* Desktop timestamp - only visible on desktop */}
                {!isMobile && (
                  <div className="flex justify-start mt-4">
                    <div className="inline-flex items-center rounded-full border border-white/20 p-1 text-white/80 bg-black/30">
                      <div className="flex items-center space-x-1 px-3 py-1 text-xs font-medium">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Desktop comparison table */}
          <ComparisonTable platforms={platforms} />
          
          {/* Mobile view - cards instead of table */}
          <div className="md:hidden grid grid-cols-1 gap-4 mt-4">
            {platforms.map((platform, index) => (
              <PlatformCard 
                key={platform.id} 
                platform={platform} 
                index={index} 
              />
            ))}
          </div>
          
          {/* Desktop view - top 3 platforms */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {platforms.slice(0, 3).map((platform, index) => (
              <PlatformCard 
                key={platform.id} 
                platform={platform} 
                index={index} 
              />
            ))}
          </div>
          
          {/* Feature Comparison */}
          <section className="bg-muted/20 py-10 sm:py-16 mt-10 md:mt-16 rounded-xl">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-8 md:mb-12">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                  Funktionsvergleich
                </span>
                <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-balance">
                  Was bieten die verschiedenen Plattformen?
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto text-balance text-sm md:text-base">
                  Alle Dating-Plattformen sind unterschiedlich. Wir haben die wichtigsten Funktionen verglichen, damit Sie die richtige Wahl treffen können.
                </p>
              </AnimatedSection>
              
              <FeatureComparison platforms={platforms.slice(0, 5)} />
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="section-container mt-10 md:mt-16">
            <AnimatedSection className="text-center mb-8 md:mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                Vorteile
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-balance">
                Warum Online-Dating für 40+ Singles funktioniert
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-balance text-sm md:text-base">
                Die digitale Partnersuche bietet gerade für Menschen über 40 viele Vorteile, die den Weg zu einer neuen Beziehung erleichtern können.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
              <AnimatedSection delay={100} className="p-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Gezielte Partnersuche</h3>
                <p className="text-muted-foreground">
                  Spezialisierte Plattformen ermöglichen eine zielgerichtete Suche nach Partnern mit ähnlichen Interessen, Werten und Lebensvorstellungen.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="p-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Unverbindliches Kennenlernen</h3>
                <p className="text-muted-foreground">
                  In Ihrem eigenen Tempo kommunizieren und erst dann persönlich treffen, wenn Sie sich wirklich bereit fühlen.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={300} className="p-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Große Auswahl</h3>
                <p className="text-muted-foreground">
                  Zugang zu tausenden potenziellen Partnern, die Sie im Alltag wahrscheinlich nie kennenlernen würden.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={400} className="p-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Sicherheit</h3>
                <p className="text-muted-foreground">
                  Seriöse Plattformen bieten Sicherheitsfunktionen und verifizieren Profile, um ein geschütztes Umfeld zu schaffen.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={500} className="p-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Kompatibilität</h3>
                <p className="text-muted-foreground">
                  Wissenschaftlich fundierte Matching-Algorithmen helfen, Partner mit ähnlichen Werten und Lebenszielen zu finden.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={600} className="p-6 rounded-xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Neue Chance</h3>
                <p className="text-muted-foreground">
                  Nach Trennung oder Verlust bieten Dating-Plattformen einen sanften Wiedereinstieg ins Liebesleben mit Menschen in ähnlichen Lebenssituationen.
                </p>
              </AnimatedSection>
            </div>
          </section>
        </section>
        
        {/* CTA Section - optimized for conversions */}
        <section className="py-10 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
          <div className="absolute inset-0 bg-grain opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection className="text-center mx-auto max-w-3xl py-8 md:py-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-3 md:mb-4">
                Starten Sie noch heute
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-balance">
                Bereit, Ihr Liebesglück zu finden?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 text-balance">
                Tausende Singles haben bereits ihren Partner gefunden. Sie könnten der Nächste sein!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`https://${platforms[0].id}.de`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Jetzt zum Testsieger
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Comparison;
