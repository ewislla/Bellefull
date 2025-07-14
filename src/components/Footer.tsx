import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter , Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2E4057] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#D4A95E] mb-4">
              BELLEFUL
            </h2>
            <p className="font-script text-lg text-[#D4A95E] mb-4">
              Come Craving, Leave Happy
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Authentic Afro-contemporary cuisine that celebrates culture, 
              tradition, and the universal joy of exceptional food.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/bellefulofficial?igsh=dDIxb3hmd251dWU0"
                className="w-10 h-10 bg-[#D4A95E]/10 rounded-full flex items-center justify-center hover:bg-[#D4A95E] transition-all duration-200 group"
              >
                <Instagram className="w-5 h-5 text-[#D4A95E] group-hover:text-[#2E4057]" />
              </a>
              
              <a 
                href="https://x.com/bellefulhq?s=21"
                className="w-10 h-10 bg-[#D4A95E]/10 rounded-full flex items-center justify-center hover:bg-[#D4A95E] transition-all duration-200 group"
              >
                <Twitter className="w-5 h-5 text-[#D4A95E] group-hover:text-[#2E4057]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D4A95E]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 text-sm"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('dishes')}
                  className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 text-sm"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 text-sm"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reservation')}
                  className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 text-sm"
                >
                  Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D4A95E]">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 flex items-center">
                  Private Dining
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 flex items-center">
                  Catering Services
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 flex items-center">
                  Cultural Events
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 flex items-center">
                  Chef's Table
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200 flex items-center">
                  Cooking Classes
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D4A95E]">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-[#D4A95E] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                     Beside Goin-ama town hall <br />
                      Alamieyeseigha expressway<br />
                      Amassoma, Bayelsa State.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#D4A95E] mr-3" />
                <a 
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200"
                >
                  +234 8123327359
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#D4A95E] mr-3" />
                <a 
                  href="mailto:hello@belleful.com"
                  className="text-gray-300 hover:text-[#D4A95E] transition-colors duration-200"
                >
                  hello@belleful.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold text-[#D4A95E] mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D4A95E]"
                />
                <button className="bg-[#D4A95E] text-[#2E4057] px-4 py-2 rounded-r-lg hover:bg-[#D4A95E]/90 transition-colors duration-200 text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>in New York</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <p>&copy; 2025 Belleful Restaurant. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-[#D4A95E] transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-[#D4A95E] transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-[#D4A95E] transition-colors duration-200">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;