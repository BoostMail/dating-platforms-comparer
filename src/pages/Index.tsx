
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/HeroSection';
import PlatformCard from '@/components/PlatformCard';
import ComparisonTable from '@/components/ComparisonTable';
import FeatureComparison from '@/components/FeatureComparison';
import AnimatedSection from '@/components/AnimatedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import QuizModal from '@/components/QuizModal';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  CheckCircle, 
  Search, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  Clock,
  ThumbsUp
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
        {/* Hero Section with Quiz */}
        <HeroSection 
          title="Die besten Dating-Plattformen für 40+ Singles in Deutschland"
          subtitle="Vergleichen Sie führende Dating-Seiten, die auf erwachsene Singles spezialisiert sind. Finden Sie Ihren perfekten Partner mit unseren detaillierten Bewertungen und Erfahrungsberichten."
          ctaText="Top Plattformen entdecken"
          ctaHref="#vergleich"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <QuizModal />
            <a href="#vergleich">
              <Button>
                Top Plattformen vergleichen
              </Button>
            </a>
          </div>
        </HeroSection>
        
        {/* Stats Section */}
        <section className="bg-muted/30 py-12 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedSection className="text-center" delay={100}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40+</div>
                <p className="text-sm text-muted-foreground">Dating-Plattformen verglichen</p>
              </AnimatedSection>
              <AnimatedSection className="text-center" delay={200}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3.5M+</div>
                <p className="text-sm text-muted-foreground">Aktive Nutzer in Deutschland</p>
              </AnimatedSection>
              <AnimatedSection className="text-center" delay={300}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">76%</div>
                <p className="text-sm text-muted-foreground">Erfolgsquote bei der Partnersuche</p>
              </AnimatedSection>
              <AnimatedSection className="text-center" delay={400}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">9/10</div>
                <p className="text-sm text-muted-foreground">Würden uns weiterempfehlen</p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Top Platforms Section */}
        <section className="section-container pt-16 pb-10" id="vergleich">
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
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center rounded-full border border-border p-1 text-muted-foreground bg-muted/30">
              <div className="flex items-center space-x-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm dark:bg-black">
                <Clock className="mr-1 h-3 w-3" />
                <span>Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-1 rounded-full px-3 py-1.5 text-xs font-medium">
                <ThumbsUp className="mr-1 h-3 w-3" />
                <span>Von Experten geprüft</span>
              </div>
            </div>
          </div>
          
          {/* Happy couple image for above the fold in Vergleich section */}
          <div className="mb-10 flex justify-center">
            <div className="relative rounded-xl overflow-hidden max-w-2xl w-full">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Glückliches Paar 40+" 
                className="w-full h-60 md:h-80 object-cover rounded-xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <p className="text-lg md:text-xl font-medium">Finden Sie Ihren Traumpartner</p>
                  <p className="text-sm opacity-80">Tausende Singles finden täglich ihr Glück</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Top ranking platform banner */}
          <div className="mb-6 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800/50 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
              <img src={platforms[0].logo} alt={platforms[0].name} className="h-12 object-contain" />
              <div className="font-medium text-lg">10.000+ Nutzer haben {platforms[0].name} gewählt</div>
              <a href={`https://${platforms[0].id}.de`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                  Zum Testsieger
                </Button>
              </a>
            </div>
          </div>
          
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
          
          {/* Feature Comparison moved to this section */}
          <section className="bg-muted/20 py-16 sm:py-24 mt-16 rounded-xl">
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
          
          {/* Benefits Section moved to this section */}
          <section className="section-container mt-16">
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
        </section>
        
        {/* Testimonials Section - kept in Overview */}
        <TestimonialsSection />
        
        {/* Newsletter Section */}
        <section className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <AnimatedSection>
                <h2 className="font-serif text-2xl font-semibold mb-4">Erhalten Sie kostenlose Dating-Tipps</h2>
                <p className="text-muted-foreground mb-4">
                  Melden Sie sich für unseren Newsletter an und erhalten Sie exklusive Dating-Tipps, Ratschläge und Sonderangebote für die besten Plattformen direkt in Ihren Posteingang.
                </p>
                <NewsletterSignup />
              </AnimatedSection>
            </div>
            <div className="md:border-l border-border md:pl-8">
              <AnimatedSection>
                <h3 className="font-serif text-xl font-medium mb-4">Dating Ratgeber</h3>
                <ul className="space-y-4">
                  {[
                    "Die besten Profilbilder für 40+ Singles",
                    "Wie man das erste Date erfolgreich gestaltet",
                    "Online-Dating Sicherheitstipps",
                    "Zweite Chance im Leben: Neuanfang nach 50",
                    "Kommunikationstipps für erfolgreiche Gespräche"
                  ].map((item, index) => (
                    <li key={index} className="text-sm hover:text-primary transition-colors duration-200">
                      <a href="#" className="flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* CTA Section - optimized for conversions */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
          <div className="absolute inset-0 bg-grain opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection className="text-center mx-auto max-w-3xl py-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-4">
                Starten Sie noch heute
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
                Bereit, Ihr Liebesglück zu finden?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Tausende Singles haben bereits ihren Partner gefunden. Sie könnten der Nächste sein!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#vergleich">
                  <Button size="lg" className="w-full sm:w-auto rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Jetzt zum Testsieger
                  </Button>
                </a>
                <QuizModal />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
