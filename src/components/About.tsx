import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, Award, Star } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 lg:py-32 bg-[#F3E9D2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 lg:-translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-[#2E4057] mb-4 lg:mb-6">
                More Than a Place. It's an Experience.
              </h2>
              <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 w-12 h-12 lg:w-20 lg:h-20 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A95E' fill-opacity='0.6'%3E%3Cpath d='M40 40L20 20v40l20-20zm20 0L40 20v40l20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6 text-[#2E4057]">
              <p className="text-base lg:text-lg leading-relaxed">
                Belleful Experience is a multi-vertical lifestyle brand built for young thriving Nigerians combining modern Nigerian
cuisine, fashion-forward menswear, boutique lodging, and now a digital utility layer (BelleNet) into one aesthetic, experience-
driven space. 
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                Located on Wilberforce Island, near Niger Delta University, Belleful is designed to be the most iconic brand
experience in the region, offering more than services offering a vibe, a story, and a destination.
              </p>
              
            </div>

            {/* Quote
            <div className="mt-6 lg:mt-8 p-4 lg:p-6 bg-white/50 rounded-lg border-l-4 border-[#D4A95E]">
              <p className="font-script text-lg lg:text-xl text-[#2E4057] italic">
                "Every time I eat here, I'm transported back to my grandmother's kitchen. 
                The flavors are so authentic, so full of love. This is what home tastes like."
              </p>
              <p className="text-[#D4A95E] font-semibold mt-2">- Amara K., Regular Customer</p>
            </div>*/}
          </div>

          {/* Image - African Chef Portrait */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 lg:translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="assets/about.jpg"
                  alt="African chef preparing traditional dishes with passion and expertise"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
              
              {/* Floating Stats - Responsive */}
              
              
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-xl p-3 lg:p-6 shadow-xl">
                <div className="flex items-center">
                  <Star className="w-4 h-4 lg:w-6 lg:h-6 text-[#D4A95E] mr-1 lg:mr-2" />
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-[#2E4057]">4.9</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: Heart,
              title: "Authentic Flavors",
              description: "Traditional recipes crafted with love and passed down through generations"
            },
            {
              icon: Users,
              title: "Cultural Community",
              description: "A gathering place where diverse cultures meet and celebrate together"
            },
            {
              icon: Award,
              title: "Premium Quality",
              description: "Only the finest ingredients and highest standards in every dish we serve"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#D4A95E]/10 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#D4A95E]" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-bold text-[#2E4057] mb-3 lg:mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;