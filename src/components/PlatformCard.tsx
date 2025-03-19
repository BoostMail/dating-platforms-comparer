
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, MessageCircle, ArrowRight, Award, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

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

  // Calculate delay based on index
  const delay = 100 + (index * 100);

  const isTopPlatform = index === 0;

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
        {/* Badge positioning */}
        {badge && (
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

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-secondary/50 p-2 flex items-center justify-center",
                isTopPlatform && "border-2 border-primary"
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
                    isTopPlatform && "font-semibold text-primary"
                  )}>
                    {name}
                  </h3>
                  {isTopPlatform && (
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
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center mt-1">
                    <Users className="h-3 w-3 mr-1" />
                    <span>327 Singles haben sich heute entschieden</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {variant === 'default' && (
            <>
              <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{userCount}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{ageGroup}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Top Features:</p>
                <div className="space-y-1.5">
                  {features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Check className="h-3.5 w-3.5 text-primary mr-2" />
                      <span className="text-muted-foreground text-xs">{feature}</span>
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
                  size="sm" 
                  className={cn(
                    "group relative overflow-hidden",
                    isTopPlatform && "shadow-md hover:shadow-lg"
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
