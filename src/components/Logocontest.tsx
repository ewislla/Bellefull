import React, { useEffect, useRef, useState } from 'react';
import { 
  Trophy, 
  Palette, 
  Star, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Eye,
  Heart,
  Zap,
  Target,
  Crown
} from 'lucide-react';

const LogoContest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [participantsCount, setParticipantsCount] = useState(5);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contestPrizes = [
    {
      position: '1st Place',
      prize: '₦50,000',
      icon: Trophy,
      color: 'from-yellow-400 to-yellow-600',
      extras: ['Logo usage rights', 'Restaurant credit', 'VIP opening night']
    },
  ];

  const requirements = [
    {
      icon: Target,
      title: 'Authentic African Identity',
      description: 'Incorporate elements that reflect our Afro-contemporary cuisine'
    },
    {
      icon: Eye,
      title: 'Memorable & Scalable',
      description: 'Works perfectly on everything from business cards to billboards'
    },
    {
      icon: Heart,
      title: 'Emotional Connection',
      description: 'Evokes warmth, culture, and premium dining experience'
    },
    {
      icon: Zap,
      title: 'Modern & Timeless',
      description: 'Contemporary design that won\'t look dated in 10 years'
    }
  ];

  return (
    <section id="logocontest" ref={sectionRef} className="relative py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-[#2E4057] to-[#1a2332] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#D4A95E] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-[#D4A95E] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#D4A95E]/20 rounded-full animate-bounce delay-300" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-[#D4A95E]/30 rounded-full animate-bounce delay-700" />
        <div className="absolute bottom-1/4 left-1/6 w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#D4A95E]/15 rounded-full animate-bounce delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-[#D4A95E]/10 rounded-full px-4 py-2 sm:px-6 sm:py-2 mb-4 sm:mb-6 border border-[#D4A95E]/20">
            <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A95E] mr-2 animate-pulse" />
            <span className="text-[#D4A95E] font-semibold text-sm sm:text-base">Design Competition</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Design Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4A95E] to-[#f4d03f]">
              Iconic Logo
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Help us create a visual identity that captures the essence of authentic African cuisine. 
            <span className="text-[#D4A95E] font-semibold"> Win ₦50,000 </span>
            and become our designer!
          </p>

          {/* Contest Stats */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-white/20 min-w-[140px] sm:min-w-[160px]">
              <div className="flex items-center justify-center text-[#D4A95E] mb-1">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-bold text-xl sm:text-2xl">₦50,000</span>
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Grand Prize</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-white/20 min-w-[140px] sm:min-w-[160px]">
              <div className="flex items-center justify-center text-[#D4A95E] mb-1">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-bold text-xl sm:text-2xl">{participantsCount}</span>
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Participants</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-6 sm:py-4 border border-white/20 min-w-[140px] sm:min-w-[160px]">
              <div className="flex items-center justify-center text-[#D4A95E] mb-1">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="font-bold text-xl sm:text-2xl">Open</span>
              </div>
              <div className="text-white/70 text-xs sm:text-sm">Submissions</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column - Contest Details */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            {/* Contest Highlights */}
            <div className="bg-gradient-to-r from-[#D4A95E]/20 to-[#D4A95E]/10 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-[#D4A95E]/20 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4A95E] mr-3" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Why Enter?</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 text-center hover:bg-white/15 transition-colors">
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4A95E] mx-auto mb-2" />
                  <div className="text-white font-semibold mb-1 text-sm sm:text-base">Brand Legacy</div>
                  <div className="text-white/70 text-xs sm:text-sm">Your design becomes part of restaurant history</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 text-center hover:bg-white/15 transition-colors">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4A95E] mx-auto mb-2" />
                  <div className="text-white font-semibold mb-1 text-sm sm:text-base">Portfolio Boost</div>
                  <div className="text-white/70 text-xs sm:text-sm">Showcase your work to thousands of diners</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 text-center hover:bg-white/15 transition-colors">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4A95E] mx-auto mb-2" />
                  <div className="text-white font-semibold mb-1 text-sm sm:text-base">Cultural Impact</div>
                  <div className="text-white/70 text-xs sm:text-sm">Celebrate African heritage through design</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 text-center hover:bg-white/15 transition-colors">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4A95E] mx-auto mb-2" />
                  <div className="text-white font-semibold mb-1 text-sm sm:text-base">Network Growth</div>
                  <div className="text-white/70 text-xs sm:text-sm">Connect with food & design communities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Requirements & CTA */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            {/* Design Requirements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 mb-6 sm:mb-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                What We're Looking For
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start group hover:bg-white/5 rounded-xl p-3 sm:p-4 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4A95E]/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#D4A95E]/20 transition-colors flex-shrink-0">
                      <req.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A95E]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-base sm:text-lg mb-1 sm:mb-2">{req.title}</h4>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#D4A95E] to-[#f4d03f] rounded-2xl p-6 sm:p-8 text-center shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="mb-4 sm:mb-6">
                <Crown className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-3 sm:mb-4 animate-pulse" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  Ready to Design History?
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-4">
                  Submit your logo design and compete for the ₦50,000 grand prize
                </p>
              </div>
              
              <button 
                onClick={() => window.open('https://forms.gle/Usuw9PVWXvajRLna7', '_blank')}
                className="w-full bg-white text-[#D4A95E] py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/90 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl group"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-spin" />
                Enter Contest Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-3 sm:mt-4 flex items-center justify-center text-white/80 text-xs sm:text-sm">
                <span>🔥 {participantsCount} designers already participating</span>
              </div>
              
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                <p className="text-white/70 text-xs leading-relaxed">
                  Contest runs until [DATE]. Winners announced within 48 hours of deadline.
                  <br />
                  By participating, you agree to our contest terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoContest;