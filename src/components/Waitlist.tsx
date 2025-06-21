import React, { useEffect, useRef, useState } from 'react';
import { Crown, Gift, Scroll, Music, Mail, User, Phone, Users, Check, Share2, Instagram, Facebook, Twitter, MessageCircle, Sparkles, TrendingUp, MapPin } from 'lucide-react';

const Waitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    partySize: '2',
    occasions: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(2847);
  const [recentSignups, setRecentSignups] = useState([
    { name: 'Sarah from Lagos', time: '2 mins ago' },
    { name: 'Michael from Abuja', time: '5 mins ago' },
    { name: 'Amara from Owerri', time: '8 mins ago' }
  ]);
  const [currentSignupIndex, setCurrentSignupIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSignupIndex((prev) => (prev + 1) % recentSignups.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [recentSignups.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOccasionChange = (occasion: string) => {
    setFormData(prev => ({
      ...prev,
      occasions: prev.occasions.includes(occasion)
        ? prev.occasions.filter(o => o !== occasion)
        : [...prev.occasions, occasion]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setWaitlistCount(prev => prev + 1);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        email: '',
        fullName: '',
        phone: '',
        partySize: '2',
        occasions: []
      });
    }, 4000);
  };

  const benefits = [
    {
      icon: Crown,
      title: "Priority Reservations",
      description: "First access to book your table when we open"
    },
    {
      icon: Scroll,
      title: "Exclusive Menu Preview",
      description: "See our signature dishes before anyone else"
    },
    {
      icon: Gift,
      title: "Opening Day Special",
      description: "20% off your first meal + complimentary appetizer"
    },
    {
      icon: Music,
      title: "Cultural Events",
      description: "VIP invites to live music nights & cultural celebrations"
    }
  ];

  const occasions = [
    'Birthday Celebration',
    'Anniversary Dinner',
    'Business Meeting',
    'Date Night',
    'Family Gathering'
  ];

  return (
    <section id="waitlist" ref={sectionRef} className="relative py-20 lg:py-32 bg-[#F3E9D2] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full adinkra-pattern" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-[#D4A95E]/10 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#D4A95E] mr-2" />
            <span className="text-[#D4A95E] font-semibold">Pre-Launch Exclusive</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E4057] mb-6">
            Join The Belleful Family
          </h2>
          <p className="text-xl text-[#2E4057]/70 max-w-3xl mx-auto mb-8">
            Be the first to taste authentic Afro-contemporary cuisine and secure your spot at the most anticipated restaurant
          </p>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <TrendingUp className="w-5 h-5 text-[#D4A95E] mr-2" />
              <span className="font-bold text-[#D4A95E] text-lg">{waitlistCount.toLocaleString()}</span>
              <span className="text-[#2E4057] ml-1">food lovers waiting</span>
            </div>
            
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span className="text-[#2E4057] text-sm">
                {recentSignups[currentSignupIndex].name} just joined!
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Waitlist Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#D4A95E]/10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl font-bold text-[#2E4057] mb-2">
                      Reserve Your Spot
                    </h3>
                    <p className="text-[#2E4057]/60 text-sm">
                      Join the exclusive waitlist and be part of culinary history
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Party Size
                      </label>
                      <select
                        name="partySize"
                        value={formData.partySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                      >
                        {[1,2,3,4,5,6,7,8].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#2E4057] mb-3">
                      Special Occasions (Optional)
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {occasions.map((occasion) => (
                        <label key={occasion} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.occasions.includes(occasion)}
                            onChange={() => handleOccasionChange(occasion)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200 ${
                            formData.occasions.includes(occasion)
                              ? 'bg-[#D4A95E] border-[#D4A95E]'
                              : 'border-gray-300 hover:border-[#D4A95E]'
                          }`}>
                            {formData.occasions.includes(occasion) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-sm text-[#2E4057]">{occasion}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D4A95E] to-[#D4A95E]/80 text-white py-4 rounded-lg font-bold text-lg hover:from-[#D4A95E]/90 hover:to-[#D4A95E]/70 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Reserve My Spot
                    <Sparkles className="w-5 h-5 ml-2" />
                  </button>

                  <p className="text-xs text-[#2E4057]/60 text-center">
                    By joining, you agree to receive exclusive updates about Belleful Restaurant
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2E4057] mb-4">
                    Welcome to the Family! 🎉
                  </h3>
                  <p className="text-[#2E4057]/70 mb-4">
                    You're now #{waitlistCount} on our exclusive waitlist
                  </p>
                  <p className="text-sm text-[#2E4057]/60 mb-6">
                    Check your email for confirmation and what happens next
                  </p>
                  
                  {/* Share Buttons */}
                  <div className="border-t pt-6">
                    <p className="text-sm font-semibold text-[#2E4057] mb-4">
                      Share with friends and move up 5 spots! 🚀
                    </p>
                    <div className="flex justify-center space-x-3">
                      <button className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Benefits Section */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl font-bold text-[#2E4057] mb-6">
                  Exclusive Waitlist Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#D4A95E]/10"
                    >
                      <div className="w-12 h-12 bg-[#D4A95E]/10 rounded-full flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-[#D4A95E]" />
                      </div>
                      <h4 className="font-semibold text-[#2E4057] text-lg mb-2">{benefit.title}</h4>
                      <p className="text-[#2E4057]/70 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Preview */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#D4A95E]/10">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-[#D4A95E] mr-3" />
                  <h4 className="font-serif text-xl font-bold text-[#2E4057]">Coming to New York</h4>
                </div>
                <p className="text-[#2E4057]/70 text-sm mb-4">
                  Located in the heart of the Heritage District, bringing authentic Afro-contemporary cuisine to New York's vibrant food scene.
                </p>
                <div className="flex items-center text-sm text-[#2E4057]/60">
                  <span>Join 134 others in New York already on the waitlist</span>
                </div>
              </div>

              {/* Urgency Element */}
              <div className="bg-gradient-to-r from-[#D4A95E]/10 to-[#D4A95E]/5 rounded-xl p-6 border border-[#D4A95E]/20">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse" />
                  <span className="font-semibold text-[#2E4057]">Limited Time Offer</span>
                </div>
                <p className="text-[#2E4057]/70 text-sm mb-3">
                  Early bird special: First 3,000 waitlist members get 20% off their first meal + complimentary appetizer
                </p>
                <div className="text-xs text-[#2E4057]/60">
                  🔥 47 people joined in the last hour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;