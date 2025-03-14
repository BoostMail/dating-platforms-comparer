
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, MessageCircle, ArrowRight } from 'lucide-react';
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
    pricing,
    features, 
    badge,
    color = "bg-primary" 
  } = platform;

  // Calculate delay based on index
  const delay = 100 + (index * 100);

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
        "hover:shadow-md hover:border-primary/20 hover:bg-white/60 dark:hover:bg-black/60"
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

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-secondary/50 p-2 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`${name} Logo`} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg">{name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                </div>
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
                <div className="flex flex-wrap gap-2">
                  {features.slice(0, 3).map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="font-normal text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span className="text-muted-foreground">Ab </span>
              <span className="font-medium">{pricing}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <a href={`https://${id}.de`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="group relative overflow-hidden">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Besuchen
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
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
