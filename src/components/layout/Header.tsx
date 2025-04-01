
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-medium normal-case">Singlebörsen<span className="text-primary">Test</span></span>
          </Link>

          {/* CTA Button - For both mobile and desktop */}
          <Button size="sm" className="font-medium shadow-sm hover:shadow transition-all duration-300 hover:scale-105">
            Zum Testsieger
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
