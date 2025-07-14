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
  const [participantsCount, setParticipantsCount] = useState(187);
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
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-br from-[#2E4057] to-[#1a2332] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4A95E] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A95E] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#D4A95E]/20 rounded-full animate-bounce delay-300" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-[#D4A95E]/30 rounded-full animate-bounce delay-700" />
        <div className="absolute bottom-1/4 left-1/6 w-10 h-10 bg-[#D4A95E]/15 rounded-full animate-bounce delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-[#D4A95E]/10 rounded-full px-6 py-2 mb-6 border border-[#D4A95E]/20">
            <Palette className="w-5 h-5 text-[#D4A95E] mr-2 animate-pulse" />
            <span className="text-[#D4A95E] font-semibold">Design Competition</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Design Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4A95E] to-[#f4d03f]">
              Iconic Logo
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Help us create a visual identity that captures the essence of authentic African cuisine. 
            <span className="text-[#D4A95E] font-semibold"> Win ₦50,000 </span>
            and become our designer !
          </p>

          {/* Contest Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <div className="flex items-center text-[#D4A95E] mb-1">
                <Trophy className="w-5 h-5 mr-2" />
                <span className="font-bold text-2xl">₦50,000</span>
              </div>
              <div className="text-white/70 text-sm">Grand Prize</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <div className="flex items-center text-[#D4A95E] mb-1">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-bold text-2xl">{participantsCount}</span>
              </div>
              <div className="text-white/70 text-sm">Participants</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <div className="flex items-center text-[#D4A95E] mb-1">
                <Sparkles className="w-5 h-5 mr-2" />
                <span className="font-bold text-2xl">Open</span>
              </div>
              <div className="text-white/70 text-sm">Submissions</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contest Details */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            {/* Contest Highlights */}
            <div className="bg-gradient-to-r from-[#D4A95E]/20 to-[#D4A95E]/10 rounded-2xl p-8 mb-8 border border-[#D4A95E]/20 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-[#D4A95E] mr-3" />
                <h3 className="font-serif text-2xl font-bold text-white">Why Enter?</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <Crown className="w-8 h-8 text-[#D4A95E] mx-auto mb-2" />
                  <div className="text-white font-semibold mb-1">Brand Legacy</div>
                  <div className="text-white/70 text-sm">Your design becomes part of restaurant history</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <Star className="w-8 h-8 text-[#D4A95E] mx-auto mb-2" />
                  <div className="text-white font-semibold mb-1">Portfolio Boost</div>
                  <div className="text-white/70 text-sm">Showcase your work to thousands of diners</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <Heart className="w-8 h-8 text-[#D4A95E] mx-auto mb-2" />
                  <div className="text-white font-semibold mb-1">Cultural Impact</div>
                  <div className="text-white/70 text-sm">Celebrate African heritage through design</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <Zap className="w-8 h-8 text-[#D4A95E] mx-auto mb-2" />
                  <div className="text-white font-semibold mb-1">Network Growth</div>
                  <div className="text-white/70 text-sm">Connect with food & design communities</div>
                </div>
              </div>
            </div>

            {/* Prize Structure */}
            

          {/* Right Column - Requirements & CTA */}
          
            {/* Design Requirements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                What We're Looking For
              </h3>
              
              <div className="space-y-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start group hover:bg-white/5 rounded-xl p-4 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#D4A95E]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#D4A95E]/20 transition-colors">
                      <req.icon className="w-6 h-6 text-[#D4A95E]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg mb-2">{req.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#D4A95E] to-[#f4d03f] rounded-2xl p-8 text-center shadow-2xl">
              <div className="mb-6">
                <Crown className="w-16 h-16 text-white mx-auto mb-4 animate-pulse" />
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Ready to Design History?
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Submit your logo design and compete for the ₦50,000 grand prize
                </p>
              </div>
              
              {/* Fake CTA Button - Replace with your Google Form link */}
              <button 
                onClick={() => window.open('https://forms.gle/Usuw9PVWXvajRLna7', '_blank')}
                className="w-full bg-white text-[#D4A95E] py-4 rounded-xl font-bold text-lg hover:bg-white/90 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Enter Contest Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-4 flex items-center justify-center text-white/80 text-sm">
                {/* <span>🔥 {participantsCount} designers already participating</span> */}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/70 text-xs">
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