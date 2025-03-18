
import React, { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LimitedOfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }
        
        const newMinutes = prevTime.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prevTime.hours - 1;
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        // Reset timer when it reaches 0
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="sticky top-16 z-10 w-full bg-primary text-primary-foreground py-2 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 animate-pulse" />
          <span className="text-sm font-medium">
            Limitiertes Angebot: Premium-Mitgliedschaften bis zu 40% günstiger!
          </span>
          <div className="bg-white/20 px-2 py-1 rounded text-xs font-mono">
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <a href="#vergleich">
            <Button size="sm" variant="secondary" className="text-xs bg-white text-primary hover:bg-white/90 h-7">
              Angebot sichern
            </Button>
          </a>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white"
            aria-label="Angebot schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LimitedOfferBanner;
