import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0a0505] text-[#ef9221]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand Section with Logo + Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Shubham Logo"
                className="w-28 h-auto"
              />
            </div>
            <p className="text-sm mb-4">
              Bringing divinity to your home with authentic pooja items and spiritual essentials.
            </p>

            
          </div>

          {/* Quick Links */}
          <div className="pl-4 md:pl-0">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate("/about")} className="hover:text-saffron transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")} className="hover:text-saffron transition-colors">
                  Contact
                </button>
              </li>
              <li><button className="hover:text-saffron transition-colors">Shipping Info</button></li>
              <li><button className="hover:text-saffron transition-colors">Return Policy</button></li>
              <li><button className="hover:text-saffron transition-colors">FAQ</button></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="pl-4 md:pl-0">
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-saffron transition-colors">Pooja Essentials</button></li>
              <li><button className="hover:text-saffron transition-colors">Idols & Statues</button></li>
              <li><button className="hover:text-saffron transition-colors">Incense & Fragrances</button></li>
              <li><button className="hover:text-saffron transition-colors">Festival Kits</button></li>
              <li><button className="hover:text-saffron transition-colors">Spiritual Books</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 pl-4 md:pl-0">
            <h4 className="font-semibold mb-2">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-saffron" /> +91 98765 43210
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-saffron" /> info@shubham.com
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-saffron" /> Mumbai, Maharashtra
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream border-opacity-20 mt-8  text-center text-sm">
          <p>&copy; 2025 Shubham. All rights reserved. | Design by Brick2Tech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
