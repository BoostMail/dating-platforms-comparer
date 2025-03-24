
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle, Info, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Platform } from './PlatformCard';
import AnimatedSection from './AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

interface ComparisonTableProps {
  platforms: Platform[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ platforms }) => {
  const sortedPlatforms = [...platforms].sort((a, b) => b.rating - a.rating);
  const isMobile = useIsMobile();

  // Hide table on mobile and show PlatformCards instead
  if (isMobile) {
    return null;
  }

  return (
    <AnimatedSection className="w-full hidden md:block">
      <ScrollArea className="w-full overflow-auto">
        <div className="min-w-[768px] w-full">
          {sortedPlatforms.map((platform, index) => {
            const isTopPlatform = index === 0;
            return (
              <div key={platform.id} className={cn(
                "mb-4 rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-200",
                isTopPlatform ? "bg-amber-50/50 dark:bg-amber-900/20" : "bg-white/50 dark:bg-black/30"
              )}>
                <div className="p-4 md:p-6 grid grid-cols-12 gap-4">
                  {/* Logo and rating section */}
                  <div className="col-span-3 flex flex-col items-center justify-center">
                    <div className="w-28 h-16 bg-white p-2 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src={platform.logo}
                        alt={`${platform.name} Logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">{platform.rating.toFixed(1)}</div>
                      <div className="flex justify-center mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={cn(
                              "w-5 h-5", 
                              i < Math.floor(platform.rating) 
                                ? "text-amber-500 fill-amber-500" 
                                : i < platform.rating 
                                  ? "text-amber-500 fill-amber-500 opacity-50" 
                                  : "text-gray-300 fill-gray-300"
                            )} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Platform details section */}
                  <div className="col-span-6">
                    <h3 className="text-xl font-semibold mb-2 tracking-tight">
                      {platform.name} - {isTopPlatform ? "Der mit Abstand beste Anbieter im Test" : `Für ${platform.ageGroup.split('-')[0].trim()}+ Singles`}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">{platform.description.split('.')[0]}.</p>
                    
                    <div className="space-y-2">
                      {platform.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-tight">{feature}</span>
                        </div>
                      ))}
                      
                      {/* Additional feature with arrow */}
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-tight">Erhalten Sie täglich passende Partnervorschläge</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Link to={`/plattform/${platform.id}`}>
                        <span className="text-primary flex items-center hover:underline text-sm">
                          Mehr Details <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* CTA section */}
                  <div className="col-span-3 flex flex-col items-center justify-between">
                    {isTopPlatform && (
                      <div className="bg-white dark:bg-black p-3 rounded-lg border border-green-200 dark:border-green-800 shadow-sm mb-4 w-full text-center">
                        <p className="text-sm text-green-700 dark:text-green-400 leading-tight">
                          Mehr als 400 Leute haben sich heute für diese Singlebörse entschieden!
                        </p>
                      </div>
                    )}
                    
                    <div className="flex-grow"></div>
                    
                    <a href={`https://${platform.id}.de`} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button 
                        variant="default"
                        size="lg"
                        className={cn(
                          "w-full rounded-full font-medium text-base",
                          isTopPlatform && "bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)] hover:shadow-[0_0_20px_rgba(244,63,94,0.7)]"
                        )}
                      >
                        Singlebörse besuchen <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </AnimatedSection>
  );
};

export default ComparisonTable;

