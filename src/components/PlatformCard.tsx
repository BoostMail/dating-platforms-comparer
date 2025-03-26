
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, MessageCircle, ArrowRight, Award, Check, Info, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { useIsMobile } from '@/hooks/use-mobile';

export interface Platform {
  id: string;
  name: string;
  logo: string;
  rating: number;
  userCount: string;
  ageGroup: string;
  description: string;
  pricing: string;
  features: string[];
  badge?: string;
  color?: string;
}

interface PlatformCardProps {
  platform: Platform;
  index: number;
  variant?: 'default' | 'compact';
  className?: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  platform,
  index,
  variant = 'default',
  className
}) => {
  const { 
    id, 
    name, 
    logo, 
    rating, 
    userCount, 
    ageGroup, 
    description, 
    features, 
    badge,
    color = "bg-primary" 
  } = platform;
  const isMobile = useIsMobile();

  // Calculate delay based on index
  const delay = 100 + (index * 100);

  const isTopPlatform = index === 0;
  
  // Extract just the first sentence for mobile headings and remove platform name prefix
  const getProcessedDescription = () => {
    if (!isMobile) return description;
    
    // Remove platform name prefix
    let processed = description.replace(new RegExp(`${name} ist eine|${name} ist ein`), '');
    
    // For mobile, if requested, keep just first sentence
    if (isMobile) {
      const firstSentence = processed.split('.')[0];
      return firstSentence + '.';
    }
    
    return processed;
  };

  return (
    <AnimatedSection 
      delay={delay}
      className={cn(
        "group transition-all duration-300",
        variant === 'compact' ? 'h-full' : '',
        className
      )}
    >
      <div className={cn(
        "relative h-full rounded-xl overflow-hidden transition-all duration-300",
        "backdrop-blur-md bg-white/40 dark:bg-black/40 border border-border shadow-sm",
        "hover:shadow-md hover:border-primary/20 hover:bg-white/60 dark:hover:bg-black/60",
        isTopPlatform && "shadow-lg border-primary/30 bg-white/60 dark:bg-black/60"
      )}>
        {/* Changed: Redesigned ribbon for better readability - horizontal instead of rotated */}
        {isTopPlatform && !isMobile && (
          <div className="absolute top-3 right-3 z-20">
            <Badge variant="default" className="bg-primary text-white px-3 py-1 text-sm font-semibold shadow-md">
              <Award className="h-3.5 w-3.5 mr-1.5" />
              Testsieger
            </Badge>
          </div>
        )}
        
        {/* Badge positioning - only show on desktop */}
        {badge && !isMobile && !isTopPlatform && (
          <div className="absolute -top-1 -right-1 z-10">
            <Badge className={cn(
              "rounded-sm font-medium text-xs px-2 py-0.5 shadow-sm",
              color === "bg-primary" ? "bg-primary text-white" : color
            )}>
              {badge}
            </Badge>
          </div>
        )}

        {/* Animated ribbon for top platform */}
        {isTopPlatform && (
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/70 to-primary animate-pulse"></div>
        )}

        <div className={cn("p-6", isMobile && "pt-3 pb-4 px-4")}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-secondary/50 p-2 flex items-center justify-center",
                isTopPlatform && "border-2 border-primary",
                isMobile && "w-10 h-10"
              )}>
                <img 
                  src={logo} 
                  alt={`${name} Logo`} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-center">
                  {/* Change: Made brand names bigger on mobile */}
                  <h3 className={cn(
                    "font-medium text-lg",
                    isTopPlatform && "font-semibold text-primary",
                    isMobile && "font-bold text-lg" // Increased from text-base to text-lg
                  )}>
                    {name}
                  </h3>
                  {isTopPlatform && !isMobile && (
                    <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/20 text-[10px]">
                      <Award className="h-3 w-3 mr-1" /> Testsieger
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                </div>
                {isTopPlatform && (
                  <div className={cn(
                    "text-xs text-emerald-600 dark:text-emerald-400 flex items-center mt-1",
                    isMobile && "text-[11px] font-medium bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-2 py-0.5 mt-1.5"
                  )}>
                    <Users className={cn("h-3 w-3 mr-1", isMobile && "h-2.5 w-2.5")} />
                    <span>327 haben sich heute angemeldet</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {variant === 'default' && (
            <>
              {/* Change: Standardized text sizes to match LemonSwan listing */}
              <p className={cn(
                "text-muted-foreground mb-3 text-sm line-clamp-2",
                isMobile && "text-sm font-medium mb-2" // Made ALL platform descriptions text-sm (not just top platform)
              )}>
                {getProcessedDescription()}
              </p>
              
              <div className={cn(
                "grid grid-cols-2 gap-3 mb-4",
                isMobile && "gap-2 mb-3"
              )}>
                <div className="flex items-center space-x-2">
                  <Users className={cn("w-4 h-4 text-muted-foreground", isMobile && "w-3.5 h-3.5")} />
                  <span className={cn("text-xs text-muted-foreground", isMobile && "text-xs")}>{userCount}</span> {/* Standardized to text-xs */}
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className={cn("w-4 h-4 text-muted-foreground", isMobile && "w-3.5 h-3.5")} />
                  <span className={cn("text-xs text-muted-foreground", isMobile && "text-xs")}>{ageGroup}</span> {/* Standardized to text-xs */}
                </div>
              </div>

              <div className={cn("mb-5", isMobile && "mb-4")}> {/* Change: Increased bottom margin for more space */}
                <div className={cn(
                  "space-y-1.5", 
                  isMobile && "space-y-1"
                )}>
                  {features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className={cn(
                      "flex items-center text-sm",
                      isMobile && "text-sm" // Standardized text size for ALL platforms
                    )}>
                      <Check className={cn(
                        "h-3.5 w-3.5 text-primary mr-2", 
                        isMobile && "h-4 w-4 mr-2" // Consistent icon size
                      )} />
                      <span className={cn(
                        "text-muted-foreground text-xs",
                        isMobile && "text-sm" // Standardized text size for ALL platforms
                      )}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex items-center justify-between">
            {/* Replace ageGroup with Details link on mobile */}
            {isMobile ? (
              <Link to={`/plattform/${id}`} className="text-primary text-sm font-normal">
                Details
              </Link>
            ) : (
              <div className="text-sm">
                <span className="text-muted-foreground">{ageGroup}</span>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <a href={`https://${id}.de`} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant={isTopPlatform ? "default" : "outline"} 
                  size={isMobile ? "sm" : isTopPlatform ? "default" : "sm"}
                  className={cn(
                    "group relative overflow-hidden",
                    isTopPlatform && "shadow-md hover:shadow-lg",
                    isTopPlatform && !isMobile && "bg-primary hover:bg-primary/90 text-white border-primary/50"
                  )}
                >
                  <span className={cn(
                    "relative z-10 transition-colors duration-300",
                    isTopPlatform && !isMobile ? "text-white" : (
                      isTopPlatform ? "text-white" : "group-hover:text-white"
                    )
                  )}>
                    {isTopPlatform ? "Jetzt besuchen" : "Besuchen"}
                  </span>
                  {!isTopPlatform && (
                    <span className="absolute inset-0 w-full h-full bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  )}
                </Button>
              </a>
              
              {!isMobile && (
                <Link to={`/plattform/${id}`}>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                    <span className="sr-only">Details zu {name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PlatformCard;
