import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full top-8 bg-darkSecondary/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://boostmymap.fr/logo-boostmymap.png" 
            alt="BoostMyMap" 
            className="h-16 md:h-20"
          />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/simulateur" 
            className="bg-neonTurquoise hover:bg-neonTurquoise/80 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-neon-turquoise flex items-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Voir le simulateur
          </Link>
          <a 
            href="https://calendly.com/contact-boostmymap/30min" 
            className="bg-neonPink hover:bg-neonPink/80 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-neon-pink"
          >
            Demander une démo
          </a>
        </div>
      </div>
    </header>
  );
}