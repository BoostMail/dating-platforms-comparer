
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-medium">Dating<span className="text-primary">Vergleich</span></span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Wir vergleichen die besten Dating-Plattformen für Menschen über 40 in Deutschland und helfen Ihnen, die perfekte Plattform für Ihre Bedürfnisse zu finden.
            </p>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DatingVergleich. Alle Rechte vorbehalten.
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-wide uppercase mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/vergleich" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Vergleich
                </Link>
              </li>
              <li>
                <Link to="/ratgeber" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Ratgeber
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-wide uppercase mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-xs text-muted-foreground">
          <p>Die auf dieser Website dargestellten Informationen werden in regelmäßigen Abständen aktualisiert. Dennoch können sich Angebote der Dating-Plattformen kurzfristig ändern. Wir bemühen uns, alle Informationen aktuell zu halten, können jedoch keine Garantie für die Richtigkeit übernehmen.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
