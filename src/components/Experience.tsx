import React, { useEffect, useRef, useState } from 'react';
import { Music, Users, Heart, Award, Camera, Volume2 } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % communityImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const communityImages = [
    {
      src: "assets/com1.jpg",
      alt: "Community member enjoying Belleful experience"
    },
    {
      src: "assets/com2.jpg", 
      alt: "Happy customers at Belleful restaurant"
    },
    {
      src: "assets/com3.jpg",
      alt: "Community gathering at Belleful"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 lg:py-32 bg-[#F3E9D2] overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A95E' fill-opacity='0.1'%3E%3Cpolygon points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E4057] mb-6">
            The Belleful Experience
          </h2>
          <p className="text-xl text-[#2E4057]/70 max-w-3xl mx-auto">
            More than just a meal - it's a journey through African culture, hospitality, and culinary excellence
          </p>
        </div>

        {/* Features Grid */}
        

        {/* Community Images Carousel */}
        <div className={`bg-white rounded-3xl p-8 lg:p-12 shadow-xl transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold text-[#2E4057] mb-4">Our Community</h3>
            <div className="w-16 h-1 bg-[#D4A95E] mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {communityImages.map((image, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-8'
                }`}
              >
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-6 h-6 text-[#D4A95E] mx-1" />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {communityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#D4A95E] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Ambiance Video Section - African Restaurant Interior */}
        <div className={`mt-20 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative h-64 lg:h-80 bg-gradient-to-r from-[#2E4057] to-[#D4A95E]/20">
            <img 
              src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop"
              alt="Warm African restaurant ambiance with traditional decor and cultural elements"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2E4057]/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-white/30 transition-colors duration-200 cursor-pointer">
                  <Volume2 className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white text-2xl font-serif font-bold mb-2">Experience the Atmosphere</h4>
                <p className="text-white/90 text-lg">Feel the rhythm, taste the culture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;