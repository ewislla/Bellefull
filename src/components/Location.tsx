import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone, Mail, Car, Accessibility, Instagram, Facebook, Twitter } from 'lucide-react';

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  /*const hours = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '5:00 PM - 10:00 PM' },
    { day: 'Wednesday', hours: '5:00 PM - 10:00 PM' },
    { day: 'Thursday', hours: '5:00 PM - 10:00 PM' },
    { day: 'Friday', hours: '5:00 PM - 11:00 PM' },
    { day: 'Saturday', hours: '12:00 PM - 11:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 9:00 PM' }
  ];*/

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  return (
    <section id="location" ref={sectionRef} className="py-12 sm:py-16 lg:py-32 bg-[#F3E9D2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-[#2E4057] mb-4 lg:mb-6">
            Visit Us
          </h2>
          <p className="text-lg lg:text-xl text-[#2E4057]/70 max-w-3xl mx-auto">
            Located  Beside Goin-ama town hall Alamieyeseigha expressway Amassoma, Bayelsa State.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 lg:translate-x-12 opacity-0'
          }`}>
            <div className="space-y-6 lg:space-y-8">
              {/* Hours 
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl">
                <div className="flex items-center mb-4 lg:mb-6">
                  <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-[#D4A95E] mr-3" />
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#2E4057]">Hours of Operation</h3>
                </div>
                
                <div className="space-y-2 lg:space-y-3">
                  {hours.map((schedule, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-center py-2 px-3 lg:px-4 rounded-lg ${
                        schedule.day === getCurrentDay() 
                          ? 'bg-[#D4A95E]/10 border border-[#D4A95E]/20' 
                          : 'hover:bg-gray-50'
                      } transition-colors duration-200`}
                    >
                      <span className={`font-medium text-sm lg:text-base ${
                        schedule.day === getCurrentDay() ? 'text-[#D4A95E]' : 'text-[#2E4057]'
                      }`}>
                        {schedule.day}
                      </span>
                      <span className={`text-sm lg:text-base ${
                        schedule.hours === 'Closed' ? 'text-red-500' : 'text-[#2E4057]/70'
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#2E4057] mb-4 lg:mb-6">Get in Touch</h3>
                
                <div className="space-y-4 lg:space-y-6">
                  <a 
                    href="tel:+234 8123327359"
                    className="flex items-center p-3 lg:p-4 hover:bg-[#D4A95E]/5 rounded-lg transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#D4A95E]/10 rounded-full flex items-center justify-center mr-3 lg:mr-4 group-hover:bg-[#D4A95E]/20 transition-colors duration-200">
                      <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-[#D4A95E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2E4057] text-sm lg:text-base">Phone</p>
                      <p className="text-[#2E4057]/70 text-sm lg:text-base">+234 8123327359 </p>
                    </div>
                  </a>

                  <a 
                    href="mailto:hello@belleful.com"
                    className="flex items-center p-3 lg:p-4 hover:bg-[#D4A95E]/5 rounded-lg transition-colors duration-200 group"                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#D4A95E]/10 rounded-full flex items-center justify-center mr-3 lg:mr-4 group-hover:bg-[#D4A95E]/20 transition-colors duration-200">
                      <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-[#D4A95E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2E4057] text-sm lg:text-base">Email</p>
                      <p className="text-[#2E4057]/70 text-sm lg:text-base">hello@belleful.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#2E4057] mb-4 lg:mb-6">Follow Our Journey</h3>
                
                <div className="flex space-x-3 lg:space-x-4">
                  <a 
                    href="https://www.instagram.com/bellefulofficial?igsh=dDIxb3hmd251dWU0"
          
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-[#D4A95E]/10 rounded-full flex items-center justify-center hover:bg-[#D4A95E] hover:text-white transition-all duration-200 group"
                  >
                    <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-[#D4A95E] group-hover:text-white" />
                  </a>
                  <a 
                    href="https://x.com/bellefulhq?s=21"
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-[#D4A95E]/10 rounded-full flex items-center justify-center hover:bg-[#D4A95E] hover:text-white transition-all duration-200 group"
                  >
                    <Twitter className="w-5 h-5 lg:w-6 lg:h-6 text-[#D4A95E] group-hover:text-white" />
                  </a>
                </div>
                
                <p className="text-[#2E4057]/70 text-xs lg:text-sm mt-3 lg:mt-4">
                  @BellefulRestaurant - Follow us for daily specials, cultural events, and behind-the-scenes moments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Neighborhood Description */}
        <div className={`mt-16 lg:mt-20 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl p-6 lg:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E4057] mb-4 lg:mb-6">
              In the Heart of Culture
            </h3>
            <p className="text-base lg:text-lg text-[#2E4057]/70 leading-relaxed mb-4 lg:mb-6">
              Nestled in the vibrant Heritage District, Belleful sits at the crossroads of tradition and innovation. 
              Our neighborhood is a melting pot of cultures, art galleries, and historic landmarks. 
              Just steps away from the Cultural Center and the famous Heritage Market, we're surrounded by 
              the energy and spirit that inspires our cuisine every day.
            </p>
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4 text-xs lg:text-sm text-[#2E4057]/60">
              <span>• 2 mins from Heritage Market</span>
              <span>• 5 mins from Cultural Center</span>
              <span>• Multiple bus routes nearby</span>
              <span>• Street parking available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;