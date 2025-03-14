
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle, AlertCircle, Info } from 'lucide-react';
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

interface ComparisonTableProps {
  platforms: Platform[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ platforms }) => {
  const sortedPlatforms = [...platforms].sort((a, b) => b.rating - a.rating);

  return (
    <AnimatedSection className="w-full">
      <ScrollArea className="w-full overflow-auto">
        <div className="min-w-[768px] w-full">
          <div className="rounded-xl overflow-hidden border border-border shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30">
                  <th className="p-4 text-left font-medium text-sm w-6">#</th>
                  <th className="p-4 text-left font-medium text-sm">Plattform</th>
                  <th className="p-4 text-left font-medium text-sm">Bewertung</th>
                  <th className="p-4 text-left font-medium text-sm">Preise</th>
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
                      index === 0 ? "bg-amber-50/30 dark:bg-amber-900/10" : (
                        index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'
                      )
                    )}
                  >
                    <td className="p-4 font-medium text-center">
                      {index === 0 ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100">
                          1
                        </div>
                      ) : (
                        <div className="text-muted-foreground">{index + 1}</div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-secondary/50 p-1 flex items-center justify-center">
                          <img
                            src={platform.logo}
                            alt={`${platform.name} Logo`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{platform.name}</div>
                          <div className="text-xs text-muted-foreground">{platform.ageGroup}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="font-medium">{platform.rating.toFixed(1)}</span>
                        <span className="text-muted-foreground">/5.0</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <span className="font-medium">{platform.pricing}</span>
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
                            size="sm"
                            className={cn(
                              "whitespace-nowrap",
                              index === 0 && "shadow-sm"
                            )}
                          >
                            Webseite
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
      
      <div className="mt-4 px-4 py-3 bg-muted/20 rounded-lg text-xs text-muted-foreground flex space-x-3">
        <div className="flex items-center">
          <CheckCircle className="h-3 w-3 mr-1" />
          <span>Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}</span>
        </div>
        <div className="flex items-center">
          <Info className="h-3 w-3 mr-1" />
          <span>Preise können variieren. Besuchen Sie die offizielle Webseite für aktuelle Angebote.</span>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ComparisonTable;
