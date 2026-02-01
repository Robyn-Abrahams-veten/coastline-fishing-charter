import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.jpg" 
                alt="Coastline Fishing Charters" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Built for serious fishing. Designed for unforgettable days at sea. 
              Experience the best offshore fishing charters in Cape Town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About</Link>
              <Link to="/fleet" className="text-gray-300 hover:text-white transition-colors text-sm">Our Fleet</Link>
              <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">Gallery</Link>
              <Link to="/packages" className="text-gray-300 hover:text-white transition-colors text-sm">Packages</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+27828824594" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +27 82 882 4594
              </a>
              <a 
                href="https://wa.me/27828824594" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                +27 82 882 4594
              </a>
              <a 
                href="mailto:info@coastline.capetown" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@coastline.capetown
              </a>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Hout Bay Harbour<br />Cape Town, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Coastline Fishing Charters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
