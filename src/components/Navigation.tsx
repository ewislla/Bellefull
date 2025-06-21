import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Crown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#2E4057]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl lg:text-3xl font-bold text-[#D4A95E] font-serif hover:text-[#D4A95E]/80 transition-colors duration-200"
            >
              BELLEFUL
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-[#D4A95E] transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('waitlist')}
                className="text-white hover:text-[#D4A95E] transition-colors duration-200 font-medium"
              >
                Waitlist
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#D4A95E] transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('dishes')}
                className="text-white hover:text-[#D4A95E] transition-colors duration-200 font-medium"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-white hover:text-[#D4A95E] transition-colors duration-200 font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-white hover:text-[#D4A95E] transition-colors duration-200 font-medium"
              >
                Location
              </button>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-white text-sm">
              <Phone className="w-4 h-4 mr-2" />
              <span>(234) 9130136839</span>
            </div>
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="bg-[#D4A95E] text-[#2E4057] px-6 py-2 rounded-full font-semibold hover:bg-[#D4A95E]/90 transform hover:scale-105 transition-all duration-200 flex items-center"
            >
              <Crown className="w-4 h-4 mr-2" />
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#D4A95E] transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2E4057]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#D4A95E] font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('waitlist')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#D4A95E] font-medium"
            >
              Waitlist
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#D4A95E] font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('dishes')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#D4A95E] font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#D4A95E] font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="block w-full text-left px-3 py-2 text-white hover:text-[#D4A95E] font-medium"
            >
              Location
            </button>
            <div className="px-3 py-2 border-t border-gray-600">
              <div className="flex items-center text-white text-sm mb-3">
                <Phone className="w-4 h-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <button 
                onClick={() => scrollToSection('waitlist')}
                className="w-full bg-[#D4A95E] text-[#2E4057] px-4 py-2 rounded-full font-semibold hover:bg-[#D4A95E]/90 transition-colors duration-200 flex items-center justify-center"
              >
                <Crown className="w-4 h-4 mr-2" />
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;