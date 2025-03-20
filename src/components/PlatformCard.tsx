
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, MessageCircle, ArrowRight, Award, Check } from 'lucide-react';
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
  
  // Remove "PlatformName ist eine" from the description for mobile view
  const mobileDescription = isMobile ? 
    description.replace(new RegExp(`${name} ist eine|${name} ist ein`), '') : description;

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
        isTopPlatform && "shadow-md border-primary/20 transform-gpu"
      )}>
        {/* Badge positioning - only show on desktop and not for LemonSwan */}
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
                  <h3 className={cn(
                    "font-medium text-lg",
                    isTopPlatform && "font-semibold text-primary",
                    isMobile && "font-bold text-base"
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
                    isMobile && "text-[11px] font-medium"
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
              <p className={cn(
                "text-muted-foreground mb-3 text-sm line-clamp-2",
                isMobile && isTopPlatform ? "text-sm font-medium mb-2" : (isMobile && "text-xs mb-2")
              )}>
                {mobileDescription}
              </p>
              
              <div className={cn(
                "grid grid-cols-2 gap-3 mb-4",
                isMobile && "gap-2 mb-3"
              )}>
                <div className="flex items-center space-x-2">
                  <Users className={cn("w-4 h-4 text-muted-foreground", isMobile && "w-3.5 h-3.5")} />
                  <span className={cn("text-xs text-muted-foreground", isMobile && "text-[11px]")}>{userCount}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className={cn("w-4 h-4 text-muted-foreground", isMobile && "w-3.5 h-3.5")} />
                  <span className={cn("text-xs text-muted-foreground", isMobile && "text-[11px]")}>{ageGroup}</span>
                </div>
              </div>

              <div className={cn("mb-5", isMobile && "mb-3")}>
                <div className={cn(
                  "space-y-1.5", 
                  isMobile && "space-y-1"
                )}>
                  {features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className={cn(
                      "flex items-center text-sm",
                      isMobile && isTopPlatform ? "text-sm" : (isMobile && "text-xs")
                    )}>
                      <Check className={cn(
                        "h-3.5 w-3.5 text-primary mr-2", 
                        isMobile && isTopPlatform ? "h-4 w-4 mr-2" : (isMobile && "h-3 w-3 mr-1.5")
                      )} />
                      <span className={cn(
                        "text-muted-foreground text-xs",
                        isMobile && isTopPlatform ? "text-sm font-semibold" : (isMobile && "text-[11px]")
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
            <div className="text-sm">
              <span className="text-muted-foreground">{ageGroup}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <a href={`https://${id}.de`} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant={isTopPlatform ? "default" : "outline"} 
                  size={isMobile ? "sm" : isTopPlatform ? "default" : "sm"}
                  className={cn(
                    "group relative overflow-hidden",
                    isTopPlatform && "shadow-md hover:shadow-lg",
                    isTopPlatform && "animate-pulse shadow-[0_0_15px_rgba(222,67,147,0.5)]"
                  )}
                >
                  <span className={cn(
                    "relative z-10 transition-colors duration-300",
                    isTopPlatform ? "text-white" : "group-hover:text-white"
                  )}>
                    {isTopPlatform ? "Jetzt besuchen" : "Besuchen"}
                  </span>
                  {!isTopPlatform && (
                    <span className="absolute inset-0 w-full h-full bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  )}
                </Button>
              </a>
              
              <Link to={`/plattform/${id}`}>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  <span className="sr-only">Details zu {name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PlatformCard;
