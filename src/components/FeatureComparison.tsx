import React, { useState } from 'react';
import { Check, X, HelpCircle, Info, ChevronRight, ChevronLeft } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Platform } from './PlatformCard';
import AnimatedSection from './AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface FeatureComparisonProps {
  platforms: Platform[];
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ platforms }) => {
  const isMobile = useIsMobile();
  const [activePlatformIndex, setActivePlatformIndex] = useState(0);
  
  // Features for comparison
  const features = [
    { id: 'profile_verification', name: 'Profil-Verifizierung', description: 'Überprüfung der Identität der Nutzer' },
    { id: 'matching_algorithm', name: 'Matching-Algorithmus', description: 'Qualität des Algorithmus für Partnervorschläge' },
    { id: 'mobile_app', name: 'Mobile App', description: 'Verfügbarkeit und Qualität der mobilen App' },
    { id: 'messaging', name: 'Nachrichtenfunktion', description: 'Möglichkeiten der Kommunikation' },
    { id: 'privacy', name: 'Datenschutz', description: 'Maßnahmen zum Schutz persönlicher Daten' },
    { id: 'events', name: 'Events & Aktivitäten', description: 'Organisation von Offline-Treffen und Events' },
    { id: 'success_rate', name: 'Erfolgsquote', description: 'Prozentsatz erfolgreicher Matches' },
    { id: 'profile_quality', name: 'Profilqualität', description: 'Detailgrad und Qualität der Nutzerprofile' },
    { id: 'customer_support', name: 'Kundensupport', description: 'Qualität und Erreichbarkeit des Kundensupports' },
    { id: 'cost_value', name: 'Preis-Leistung', description: 'Verhältnis von Kosten zu gebotenen Funktionen' },
  ];

  // Updated feature data for platforms with meaningful content
  const featureData: Record<string, Record<string, any>> = {
    'lemonswan': {
      'profile_verification': { value: true, quality: 'high', notes: 'ID-Verifizierung & manuelle Prüfung' },
      'matching_algorithm': { value: true, quality: 'high', notes: 'Wissenschaftlich basierter Persönlichkeitstest' },
      'mobile_app': { value: true, quality: 'high', notes: 'iOS & Android, sehr gut bewertet (4.8/5)' },
      'messaging': { value: true, quality: 'high', notes: 'Vollständige Kommunikation mit Premium-Mitgliedschaft' },
      'privacy': { value: true, quality: 'high', notes: 'DSGVO-konform mit zusätzlichen Schutzmaßnahmen' },
      'events': { value: true, quality: 'medium', notes: 'Regelmäßige Online-Events, gelegentliche regionale Treffen' },
      'success_rate': { value: true, quality: 'high', notes: '42% finden innerhalb von 6 Monaten einen Partner' },
      'profile_quality': { value: true, quality: 'high', notes: 'Detaillierte Profile mit Persönlichkeitstests' },
      'customer_support': { value: true, quality: 'high', notes: 'Telefon, E-Mail, Chat täglich 8-22 Uhr' },
      'cost_value': { value: true, quality: 'medium', notes: '29,99€ - 59,99€ pro Monat je nach Laufzeit' },
    },
    'verliebtab40': {
      'profile_verification': { value: true, quality: 'medium', notes: 'Manuelle Profilprüfung' },
      'matching_algorithm': { value: true, quality: 'high', notes: 'Spezialisiert auf Vorlieben der 40+ Generation' },
      'mobile_app': { value: true, quality: 'medium', notes: 'iOS & Android, gut bewertet (4.2/5)' },
      'messaging': { value: true, quality: 'medium', notes: 'Nur mit Premium-Mitgliedschaft' },
      'privacy': { value: true, quality: 'high', notes: 'DSGVO-konform mit regelmäßigen Audits' },
      'events': { value: true, quality: 'high', notes: 'Regelmäßige regionale Singles-Events' },
      'success_rate': { value: true, quality: 'medium', notes: '35% finden innerhalb eines Jahres einen Partner' },
      'profile_quality': { value: true, quality: 'medium', notes: 'Fokus auf Interessen und Lebensstil' },
      'customer_support': { value: true, quality: 'medium', notes: 'E-Mail, Telefon werktags 9-18 Uhr' },
      'cost_value': { value: true, quality: 'high', notes: '19,99€ - 39,99€ pro Monat je nach Laufzeit' },
    },
    'zusammen': {
      'profile_verification': { value: true, quality: 'medium', notes: 'Grundlegende Verifizierung' },
      'matching_algorithm': { value: true, quality: 'medium', notes: 'Interessen- und Werte-basiert' },
      'mobile_app': { value: true, quality: 'high', notes: 'iOS & Android, sehr gut bewertet (4.5/5)' },
      'messaging': { value: true, quality: 'high', notes: 'Video-Chat Funktion verfügbar' },
      'privacy': { value: true, quality: 'medium', notes: 'DSGVO-konform' },
      'events': { value: true, quality: 'high', notes: 'Regelmäßige Events und Aktivitätsgruppen' },
      'success_rate': { value: true, quality: 'medium', notes: '32% finden innerhalb eines Jahres einen Partner' },
      'profile_quality': { value: true, quality: 'high', notes: 'Tiefgehende Profile mit Wertvorstellungen' },
      'customer_support': { value: true, quality: 'medium', notes: 'E-Mail, Telefon werktags' },
      'cost_value': { value: true, quality: 'medium', notes: '24,99€ - 49,99€ pro Monat je nach Laufzeit' },
    },
    '60plustreff': {
      'profile_verification': { value: true, quality: 'medium', notes: 'Manuelle Profilprüfung' },
      'matching_algorithm': { value: true, quality: 'medium', notes: 'Auf Senioren zugeschnitten' },
      'mobile_app': { value: true, quality: 'low', notes: 'Einfache App für ältere Nutzer optimiert' },
      'messaging': { value: true, quality: 'medium', notes: 'Einfache Kommunikationsfunktionen' },
      'privacy': { value: true, quality: 'high', notes: 'Besonderer Fokus auf Sicherheit für Senioren' },
      'events': { value: true, quality: 'high', notes: 'Viele regionale Treffen speziell für Senioren' },
      'success_rate': { value: true, quality: 'medium', notes: '28% finden einen Partner' },
      'profile_quality': { value: true, quality: 'medium', notes: 'Altersgerechte Profile' },
      'customer_support': { value: true, quality: 'high', notes: 'Telefon-Hotline mit Seniorenberatung' },
      'cost_value': { value: true, quality: 'medium', notes: '19,99€ - 29,99€ pro Monat je nach Laufzeit' },
    },
    '50plussingles': {
      'profile_verification': { value: true, quality: 'low', notes: 'Grundlegende automatisierte Prüfung' },
      'matching_algorithm': { value: true, quality: 'medium', notes: 'Basierend auf Interessen und Lebensphase' },
      'mobile_app': { value: true, quality: 'medium', notes: 'iOS & Android verfügbar' },
      'messaging': { value: true, quality: 'medium', notes: 'Nur mit Premium-Mitgliedschaft' },
      'privacy': { value: true, quality: 'medium', notes: 'DSGVO-konform' },
      'events': { value: true, quality: 'medium', notes: 'Gelegentliche regionale Events' },
      'success_rate': { value: true, quality: 'medium', notes: '25% finden einen Partner' },
      'profile_quality': { value: true, quality: 'medium', notes: 'Fokus auf Lebenserfahrung und Hobby' },
      'customer_support': { value: true, quality: 'medium', notes: 'E-Mail, Live-Chat werktags' },
      'cost_value': { value: true, quality: 'high', notes: '14,99€ - 34,99€ pro Monat je nach Laufzeit' },
    },
  };

  // Function to render feature quality
  const renderFeatureQuality = (platformId: string, featureId: string) => {
    const platformData = featureData[platformId];
    if (!platformData) return <X className="h-5 w-5 text-destructive" />;

    const featureInfo = platformData[featureId];
    if (!featureInfo || !featureInfo.value) {
      return <X className="h-5 w-5 text-destructive" />;
    }

    switch (featureInfo.quality) {
      case 'high':
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500" />
                  <div className="ml-1 flex space-x-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs max-w-xs">
                <p className="font-medium">Hervorragend</p>
                <p>{featureInfo.notes}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      case 'medium':
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-amber-500" />
                  <div className="ml-1 flex space-x-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-muted"></span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs max-w-xs">
                <p className="font-medium">Gut</p>
                <p>{featureInfo.notes}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      case 'low':
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-orange-500" />
                  <div className="ml-1 flex space-x-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-muted"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-muted"></span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs max-w-xs">
                <p className="font-medium">Ausreichend</p>
                <p>{featureInfo.notes}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      default:
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <X className="h-5 w-5 text-destructive" />
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs max-w-xs">
                <p className="font-medium">Nicht verfügbar</p>
                <p>{featureInfo.notes}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
    }
  };

  // Mobile platform selector controls
  const nextPlatform = () => {
    setActivePlatformIndex((prev) => 
      prev === platforms.length - 1 ? 0 : prev + 1
    );
  };

  const prevPlatform = () => {
    setActivePlatformIndex((prev) => 
      prev === 0 ? platforms.length - 1 : prev - 1
    );
  };

  // Render mobile version
  if (isMobile) {
    const activePlatform = platforms[activePlatformIndex];
    
    return (
      <AnimatedSection className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-border rounded-xl shadow-sm overflow-hidden">
        {/* Platform Selector */}
        <div className="p-3 border-b border-border bg-muted/30 flex items-center justify-between">
          <Button variant="outline" size="icon" onClick={prevPlatform} className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-secondary/50 p-1 flex items-center justify-center mb-1">
              <img 
                src={activePlatform.logo} 
                alt={activePlatform.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-bold">{activePlatform.name}</span>
          </div>
          
          <Button variant="outline" size="icon" onClick={nextPlatform} className="h-7 w-7">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Features List */}
        <div className="p-3">
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-center justify-between border-b border-border/50 pb-2">
                <div className="flex items-center">
                  <span className="font-bold text-xs">{feature.name}</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="ml-1">
                        <Info className="h-3 w-3 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent side="right" className="text-xs max-w-xs">
                        {feature.description}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div>
                  {renderFeatureQuality(activePlatform.id, feature.id)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Platform Counter */}
        <div className="p-2 border-t border-border bg-muted/10 text-center">
          <div className="flex justify-center space-x-1">
            {platforms.map((_, index) => (
              <span 
                key={index} 
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  index === activePlatformIndex ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  }

  // Render desktop version (unchanged)
  return (
    <AnimatedSection className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-border rounded-xl shadow-sm overflow-hidden">
      <ScrollArea className="w-full overflow-auto">
        <div className="min-w-[800px]">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30">
                <th className="p-4 text-left font-medium text-sm text-muted-foreground sticky left-0 bg-muted/30 z-10">
                  Funktion
                </th>
                {platforms.map((platform) => (
                  <th key={platform.id} className="p-4 text-center font-medium text-sm">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary/50 p-1 flex items-center justify-center mb-2">
                        <img 
                          src={platform.logo} 
                          alt={platform.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {platform.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={feature.id} 
                  className={cn(
                    "border-t border-border transition-colors duration-150 hover:bg-muted/20",
                    index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
                  )}
                >
                  <td className="p-4 sticky left-0 bg-white/40 dark:bg-black/40 backdrop-blur-md z-10">
                    <div className="flex items-center">
                      <span className="font-medium text-sm">{feature.name}</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="ml-1">
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent side="right" className="text-xs max-w-xs">
                            {feature.description}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  {platforms.map((platform) => (
                    <td key={`${platform.id}-${feature.id}`} className="p-4 text-center">
                      {renderFeatureQuality(platform.id, feature.id)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
    </AnimatedSection>
  );
};

export default FeatureComparison;
