
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle, Info, TrendingUp, Award, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30">
                  <th className="p-4 text-left font-medium text-sm w-6">#</th>
                  <th className="p-4 text-left font-medium text-sm">Plattform</th>
                  <th className="p-4 text-left font-medium text-sm">Bewertung</th>
                  <th className="p-4 text-left font-medium text-sm">Nutzergruppe</th>
                  <th className="p-4 text-left font-medium text-sm">Beste Eigenschaften</th>
                  <th className="p-4 text-left font-medium text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {sortedPlatforms.map((platform, index) => (
                  <tr 
                    key={platform.id}
                    className={cn(
                      "border-t border-border transition-colors duration-150 hover:bg-muted/20",
                      index === 0 ? "bg-amber-50/50 dark:bg-amber-900/20" : (
                        index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
                      )
                    )}
                  >
                    <td className="p-4 font-medium text-center">
                      {index === 0 ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white dark:bg-primary">
                          <Trophy className="h-4 w-4" />
                        </div>
                      ) : (
                        <div className={cn(
                          "inline-flex items-center justify-center w-6 h-6 rounded-full text-center",
                          index === 1 ? "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100" :
                          index === 2 ? "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100" :
                          "text-muted-foreground"
                        )}>
                          {index + 1}
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={cn(
                          "flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-secondary/50 p-1 flex items-center justify-center",
                          index === 0 && "w-12 h-12 border-2 border-primary"
                        )}>
                          <img
                            src={platform.logo}
                            alt={`${platform.name} Logo`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className={cn(
                            "font-medium",
                            index === 0 && "font-semibold text-primary"
                          )}>
                            {platform.name}
                            {index === 0 && (
                              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/20 text-[10px]">
                                <Award className="h-3 w-3 mr-1" /> Testsieger
                              </Badge>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">{platform.ageGroup}</div>
                          {index === 0 && (
                            <div className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center mt-1">
                              <Users className="h-3 w-3 mr-1" />
                              <span>327 Singles haben sich heute entschieden</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className={cn(
                          "font-medium",
                          index === 0 && "text-lg font-semibold"
                        )}>
                          {platform.rating.toFixed(1)}
                        </span>
                        <span className="text-muted-foreground">/5.0</span>
                      </div>
                      {index === 0 && (
                        <div className="text-xs flex items-center mt-1 text-green-600 dark:text-green-400">
                          <TrendingUp className="h-3 w-3 mr-1" /> Höchste Erfolgsquote
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <span className="font-medium">{platform.ageGroup}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {platform.features.slice(0, 2).map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs font-normal">
                            {feature}
                          </Badge>
                        ))}
                        {platform.features.length > 2 && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Badge variant="outline" className="text-xs">
                                  +{platform.features.length - 2}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                <div className="text-xs space-y-1">
                                  {platform.features.slice(2).map((feature, idx) => (
                                    <p key={idx}>• {feature}</p>
                                  ))}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end space-x-2">
                        <a href={`https://${platform.id}.de`} target="_blank" rel="noopener noreferrer">
                          <Button 
                            variant={index === 0 ? "default" : "outline"} 
                            size={index === 0 ? "default" : "sm"}
                            className={cn(
                              "whitespace-nowrap",
                              index === 0 && "shadow-md px-6 hover:scale-105 transition-all duration-300"
                            )}
                          >
                            {index === 0 ? "Jetzt besuchen" : "Webseite"}
                          </Button>
                        </a>
                        <Link to={`/plattform/${platform.id}`}>
                          <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollArea>
      
      <div className="mt-4 px-4 py-3 bg-muted/20 rounded-lg text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:gap-0 sm:space-x-3">
        <div className="flex items-center">
          <CheckCircle className="h-3 w-3 mr-1" />
          <span>Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}</span>
        </div>
        <div className="flex items-center">
          <Info className="h-3 w-3 mr-1" />
          <span>Von Experten geprüft für die beste Partnerwahl.</span>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Trophy = (props: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

export default ComparisonTable;
