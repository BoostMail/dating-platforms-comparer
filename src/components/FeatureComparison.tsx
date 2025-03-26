
import React, { useState } from 'react';
import { Check, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
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
    { id: 'profile_verification', name: 'Profil-Verifizierung' },
    { id: 'matching_algorithm', name: 'Matching-Algorithmus' },
    { id: 'mobile_app', name: 'Mobile App' },
    { id: 'messaging', name: 'Nachrichtenfunktion' },
    { id: 'privacy', name: 'Datenschutz' },
    { id: 'events', name: 'Events & Aktivitäten' },
    { id: 'success_rate', name: 'Erfolgsquote' },
    { id: 'profile_quality', name: 'Profilqualität' },
    { id: 'customer_support', name: 'Kundensupport' },
    { id: 'cost_value', name: 'Preis-Leistung' },
  ];

  // Updated feature data for platforms with meaningful content
  const featureData: Record<string, Record<string, any>> = {
    'lemonswan': {
      'profile_verification': { value: true },
      'matching_algorithm': { value: true },
      'mobile_app': { value: true },
      'messaging': { value: true },
      'privacy': { value: true },
      'events': { value: true },
      'success_rate': { value: '42%' },
      'profile_quality': { value: '9/10' },
      'customer_support': { value: true },
      'cost_value': { value: '8/10' },
    },
    'verliebtab40': {
      'profile_verification': { value: true },
      'matching_algorithm': { value: true },
      'mobile_app': { value: true },
      'messaging': { value: true },
      'privacy': { value: true },
      'events': { value: true },
      'success_rate': { value: '35%' },
      'profile_quality': { value: '8/10' },
      'customer_support': { value: true },
      'cost_value': { value: '8.5/10' },
    },
    'zusammen': {
      'profile_verification': { value: true },
      'matching_algorithm': { value: true },
      'mobile_app': { value: true },
      'messaging': { value: true },
      'privacy': { value: true },
      'events': { value: true },
      'success_rate': { value: '32%' },
      'profile_quality': { value: '8.5/10' },
      'customer_support': { value: true },
      'cost_value': { value: '7.5/10' },
    },
    '60plustreff': {
      'profile_verification': { value: true },
      'matching_algorithm': { value: true },
      'mobile_app': { value: true },
      'messaging': { value: true },
      'privacy': { value: true },
      'events': { value: true },
      'success_rate': { value: '28%' },
      'profile_quality': { value: '7/10' },
      'customer_support': { value: true },
      'cost_value': { value: '7/10' },
    },
    '50plussingles': {
      'profile_verification': { value: false },
      'matching_algorithm': { value: true },
      'mobile_app': { value: true },
      'messaging': { value: true },
      'privacy': { value: true },
      'events': { value: true },
      'success_rate': { value: '25%' },
      'profile_quality': { value: '6.5/10' },
      'customer_support': { value: true },
      'cost_value': { value: '7.5/10' },
    },
  };

  // Function to render feature value
  const renderFeatureValue = (platformId: string, featureId: string) => {
    const platformData = featureData[platformId];
    if (!platformData) return <X className="h-5 w-5 text-destructive" />;

    const featureInfo = platformData[featureId];
    if (!featureInfo) return <X className="h-5 w-5 text-destructive" />;

    // Special formatting for specific features
    if (featureId === 'success_rate') {
      return <span className="font-medium">{featureInfo.value}</span>;
    }
    if (featureId === 'profile_quality' || featureId === 'cost_value') {
      return <span className="font-medium">{featureInfo.value}</span>;
    }

    // For boolean values (true/false)
    return featureInfo.value ? 
      <Check className="h-5 w-5 text-green-500" /> : 
      <X className="h-5 w-5 text-destructive" />;
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
                </div>
                <div>
                  {renderFeatureValue(activePlatform.id, feature.id)}
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

  // Render desktop version
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
                    </div>
                  </td>
                  {platforms.map((platform) => (
                    <td key={`${platform.id}-${feature.id}`} className="p-4 text-center">
                      {renderFeatureValue(platform.id, feature.id)}
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
