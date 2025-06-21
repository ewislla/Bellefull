import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Calendar, Users, Gift, Crown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [steamAnimations, setSteamAnimations] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (45 days from now for demo)
  // Set a fixed launch date that's the same for all users
const launchDate = new Date('2025-07-15T18:00:00'); // August 15, 2025 at 6 PM
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    // Create steam animation particles
    const particles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setSteamAnimations(particles);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Nigerian Jollof Rice */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("assets/hero-bg.png")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E4057]/15 via-[#2E4057]/10 to-[#2E4057]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E4057]/60 via-transparent to-transparent" />
      </div>

      {/* African Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="w-full h-full pattern-bg" />
      </div>

      {/* Steam Animations */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        {steamAnimations.map((particle) => (
          <div
            key={particle.id}
            className="absolute bottom-1/3 w-2 h-8 opacity-30"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-white/60 to-transparent rounded-full animate-pulse steam-rise" />
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#D4A95E]/30 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20">
        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-wide leading-tight">
            BELLEFUL
          </h1>
          <p className="font-script text-xl sm:text-2xl lg:text-3xl text-[#D4A95E] mb-6 tracking-wide">
            Come Craving, Leave Happy
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bold Afro-Contemporary Cuisine That Hits Different
          </p>
        </div>

        {/* Countdown Timer */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-[#F3E9D2]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 mb-8 mx-auto max-w-4xl border-2 border-[#D4A95E]/20">
            <h2 className="font-serif text-xl lg:text-2xl font-bold text-[#2E4057] mb-6 tracking-wider">
              GRAND OPENING IN:
            </h2>
            
            <div className="grid grid-cols-4 gap-3 lg:gap-6 mb-6">
              {[
                { value: timeLeft.days, label: 'DAYS' },
                { value: timeLeft.hours, label: 'HOURS' },
                { value: timeLeft.minutes, label: 'MINS' },
                { value: timeLeft.seconds, label: 'SECS' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl p-3 lg:p-4 shadow-lg border border-[#D4A95E]/10 mb-2 transform hover:scale-105 transition-transform duration-200">
                    <div className="text-2xl lg:text-4xl xl:text-5xl font-bold text-[#D4A95E] font-mono">
                      {String(item.value).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs lg:text-sm font-semibold text-[#2E4057] tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/50 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-[#D4A95E] to-[#D4A95E]/70 h-2 rounded-full transition-all duration-1000"
                style={{ width: '65%' }}
              />
            </div>
            
            <p className="text-[#2E4057]/70 text-sm lg:text-base">
              The countdown to authentic Afro-contemporary dining begins...
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button 
            onClick={() => scrollToSection('waitlist')}
            className="group bg-[#D4A95E] text-[#2E4057] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A95E]/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
          >
            <Crown className="w-5 h-5 mr-2" />
            Join The Waitlist
            <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</div>
          </button>
          <button 
            onClick={() => scrollToSection('dishes')}
            className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2E4057] transition-all duration-300 flex items-center"
          >
            <Play className="w-5 h-5 mr-2" />
            Preview Menu
          </button>
        </div>

        {/* Social Proof */}
        <div className={`mt-8 mb-16 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <Users className="w-5 h-5 mr-2 text-[#D4A95E]" />
            <span className="font-semibold text-[#D4A95E]">2,847</span>
            <span className="ml-1">food lovers already on the waitlist</span>
          </div>
        </div>

        {/* Scroll Indicator */}

        <div className={`absolute bottom-2 inset-x-0 flex justify-center transition-all duration-1000 delay-1000 ${
      
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button 
            onClick={() => scrollToSection('waitlist')}
            className="text-white hover:text-[#D4A95E] transition-colors duration-200 flex flex-col items-center animate-bounce"
          >
            <span className="text-sm mb-2">Join The Family</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;