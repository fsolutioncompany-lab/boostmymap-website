import React from 'react';
import { Mail, Phone, Scale, MapPin, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-darkSecondary py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neonPink mb-6">Contact</h3>
            <a 
              href="mailto:contact.boostmymap@gmail.com" 
              className="flex items-center gap-2 text-gray-300 hover:text-neonPink transition-colors duration-300 group"
              rel="nofollow"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              contact.boostmymap@gmail.com
            </a>
            <a 
              href="https://calendly.com/contact-boostmymap/30min" 
              className="flex items-center gap-2 text-gray-300 hover:text-neonPink transition-colors duration-300 group"
              rel="nofollow"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Demander une démonstration
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-5 h-5 text-neonPink" />
              Lun-Ven : 9h-18h
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neonTurquoise mb-6">Légal</h3>
            <Link 
              to="/mentions-legales" 
              className="flex items-center gap-2 text-gray-300 hover:text-neonTurquoise transition-colors duration-300 group"
              rel="nofollow"
            >
              <Scale className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Mentions Légales
            </Link>
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="w-5 h-5 text-neonTurquoise" />
              Protection des données
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neonPink mb-6">Notre Entreprise</h3>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5 text-neonPink" />
              Basée en France
            </div>
            <img 
              src="https://boostmymap.fr/logo-boostmymap.png" 
              alt="BoostMyMap" 
              className="h-12"
            />
            <p className="text-gray-400">
              Solution française pour booster votre visibilité locale et collecter des avis Google de façon ludique.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} BoostMyMap. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/blog" 
                className="text-gray-400 hover:text-neonPink transition-colors duration-300 text-sm"
              >
                Blog
              </Link>
              <Link 
                to="/simulateur" 
                className="text-gray-400 hover:text-neonTurquoise transition-colors duration-300 text-sm"
              >
                Simulateur
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}