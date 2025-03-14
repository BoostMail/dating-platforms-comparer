
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

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
            onClick={closeMenu}
          >
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-medium">Dating<span className="text-primary">Vergleich</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                isActive ? "text-primary after:w-full" : "text-foreground/80 hover:text-foreground"
              )}
              end
            >
              Übersicht
            </NavLink>
            <NavLink 
              to="/vergleich" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                isActive ? "text-primary after:w-full" : "text-foreground/80 hover:text-foreground"
              )}
            >
              Vergleich
            </NavLink>
            <NavLink 
              to="/ratgeber" 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                isActive ? "text-primary after:w-full" : "text-foreground/80 hover:text-foreground"
              )}
            >
              Ratgeber
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={cn(
                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out",
                    menuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out translate-y-2",
                    menuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out",
                    menuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                  )}
                />
              </div>
            </button>
          </div>

          {/* CTA Button - Desktop Only */}
          <div className="hidden md:block">
            <Button size="sm" className="font-medium shadow-sm hover:shadow transition-all duration-300">
              Top-Plattformen 2024
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-all duration-300 ease-in-out pt-20",
          menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "text-lg font-medium transition-all duration-200",
              isActive ? "text-primary" : "text-foreground/80"
            )}
            onClick={closeMenu}
            end
          >
            Übersicht
          </NavLink>
          <NavLink 
            to="/vergleich" 
            className={({ isActive }) => cn(
              "text-lg font-medium transition-all duration-200",
              isActive ? "text-primary" : "text-foreground/80"
            )}
            onClick={closeMenu}
          >
            Vergleich
          </NavLink>
          <NavLink 
            to="/ratgeber" 
            className={({ isActive }) => cn(
              "text-lg font-medium transition-all duration-200",
              isActive ? "text-primary" : "text-foreground/80"
            )}
            onClick={closeMenu}
          >
            Ratgeber
          </NavLink>
          <Button 
            className="mt-6 w-full justify-center"
            onClick={closeMenu}
          >
            Top-Plattformen 2024
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
