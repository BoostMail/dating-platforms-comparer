
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/HeroSection';
import PlatformCard from '@/components/PlatformCard';
import ComparisonTable from '@/components/ComparisonTable';
import FeatureComparison from '@/components/FeatureComparison';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  CheckCircle, 
  Search, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  ArrowRight
} from 'lucide-react';
import platforms from '@/utils/platformData';

const Index = () => {
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
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection 
          title="Die besten Dating-Plattformen für 40+ Singles in Deutschland"
          subtitle="Vergleichen Sie führende Dating-Seiten, die auf erwachsene Singles spezialisiert sind. Finden Sie Ihren perfekten Partner mit unseren detaillierten Bewertungen und Erfahrungsberichten."
          ctaText="Top Plattformen entdecken"
          ctaHref="#vergleich"
        />
        
        {/* Top Platforms Section */}
        <section className="section-container" id="vergleich">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
              Unsere Empfehlungen
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
              Die besten Dating-Plattformen für die Generation 40+
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              Wir haben die führenden Dating-Plattformen in Deutschland analysiert und bewertet, um Ihnen die besten Optionen für Ihre Partnersuche zu präsentieren.
            </p>
          </AnimatedSection>
          
          <ComparisonTable platforms={platforms} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {platforms.slice(0, 3).map((platform, index) => (
              <PlatformCard 
                key={platform.id} 
                platform={platform} 
                index={index} 
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/vergleich">
              <Button variant="outline" className="group">
                <span>Alle Plattformen vergleichen</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </section>
        
        {/* Feature Comparison */}
        <section className="bg-muted/20 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                Funktionsvergleich
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
                Was bieten die verschiedenen Plattformen?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
                Alle Dating-Plattformen sind unterschiedlich. Wir haben die wichtigsten Funktionen verglichen, damit Sie die richtige Wahl treffen können.
              </p>
            </AnimatedSection>
            
            <FeatureComparison platforms={platforms.slice(0, 5)} />
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
              Vorteile
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
              Warum Online-Dating für 40+ Singles funktioniert
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              Die digitale Partnersuche bietet gerade für Menschen über 40 viele Vorteile, die den Weg zu einer neuen Beziehung erleichtern können.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
          <div className="absolute inset-0 bg-grain opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection className="text-center mx-auto max-w-3xl py-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-4">
                Ihr neues Kapitel
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
                Bereit, Ihr Liebesglück zu finden?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Vergleichen Sie jetzt die besten Dating-Plattformen und starten Sie Ihre Reise zu einer erfüllenden Beziehung.
              </p>
              <a href="#vergleich">
                <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Jetzt vergleichen
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
