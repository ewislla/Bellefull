import React, { useEffect, useRef, useState } from 'react';
import { Star, Clock, Utensils, ShoppingBag, Bed, Wifi, Users, Camera, MapPin } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      name: "Belleful Restaurant",
      tagline: "Modern Nigerian Cuisine",
      description: "Experience bold flavors that tell Nigeria's story through a contemporary lens. Our kitchen crafts dishes that honor traditional recipes while embracing modern culinary techniques. Every meal is an Instagram moment waiting to happen.",
      // price: "₦6,000",
      // priceLabel: "Average per person",
      image: "assets/jollof.jpg",
      rating: 4.9,
      icon: Utensils,
      features: [
        "Aesthetic interiors designed for social sharing",
        "Modern Nigerian cuisine with contemporary twist",
        "Perfect for dates, hangouts, and celebrations",
        "Instagram-worthy food presentation"
      ],
      color: "from-[#2E4057] to-[#D4A95E]",
      bgColor: "bg-[#F3E9D2]"
    },
    {
      name: "Belleful Fashion",
      tagline: "Style That Speaks",
      description: "Discover fashion-forward menswear that defines the modern Nigerian man. Our curated collection combines contemporary style with cultural pride, offering pieces that make statements both on the street and online.",
      //price: "Premium",
      //priceLabel: "Curated Collection",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      rating: 4.8,
      icon: ShoppingBag,
      features: [
        "Carefully curated menswear collection",
        "Contemporary style with cultural pride",
        "Fashion-forward designs for modern men",
        "Style consultation & personalized shopping"
      ],
      color: "from-[#D4A95E] to-[#2E4057]",
      bgColor: "bg-[#F3E9D2]"
    },
    {
      name: "Belleful Lodging",
      tagline: "Boutique Comfort",
      description: "Five beautifully designed rooms that redefine hospitality in Wilberforce Island. Each space is crafted to provide comfort, style, and the perfect backdrop for your Niger Delta experience.",
      //price: "₦20,000",
      //priceLabel: "Per night",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      rating: 4.9,
      icon: Bed,
      features: [
        "5 uniquely designed boutique rooms",
        "Aesthetic interiors perfect for content creation",
        "Ideal for students, parents, creatives, visitors",
        "Located in the heart of Wilberforce Island"
      ],
      color: "from-[#2E4057]/80 to-[#D4A95E]/80",
      bgColor: "bg-[#F3E9D2]"
    },
    {
      name: "BelleNet",
      tagline: "Stay Connected in Style",
      description: "Work, stream, and share seamlessly with our high-speed internet service powered by Starlink. Whether you're a student, creative, or professional, BelleNet keeps you connected to what matters most.",
      //price: "₦300",
      //priceLabel: "Per day unlimited",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      rating: 4.7,
      icon: Wifi,
      features: [
        "High-speed internet powered by Starlink",
        "Perfect for remote work, streaming, social media",
        "Reliable connectivity in stylish environment",
        "Ideal for students, freelancers, digital nomads"
      ],
      color: "from-[#D4A95E]/70 to-[#2E4057]/70",
      bgColor: "bg-[#F3E9D2]"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-12 sm:py-16 lg:py-32 bg-[#2E4057] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            The Full Experience
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Four distinct services, one incredible destination. Everything you need for the perfect lifestyle experience.
          </p>
          <div className="mt-6 lg:mt-8 w-24 h-1 bg-[#D4A95E] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Image Header */}
                <div className="relative overflow-hidden h-48 lg:h-56">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Service Icon */}
                  <div className={`absolute top-4 left-4 p-3 rounded-2xl ${service.bgColor} backdrop-blur-sm shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-[#2E4057]" />
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center shadow-lg">
                    <Star className="w-4 h-4 text-[#D4A95E] mr-1" />
                    <span className="text-sm font-bold text-[#2E4057]">{service.rating}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#D4A95E]/95 backdrop-blur-sm text-[#2E4057] px-4 py-2 rounded-full shadow-lg">
                    <div className="text-lg font-bold">{service.price}</div>
                    <div className="text-xs opacity-80">{service.priceLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#2E4057] mb-2 group-hover:text-[#D4A95E] transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="font-script text-lg text-[#D4A95E] mb-4">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className={`flex-1 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold text-sm lg:text-base hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 mr-2" />
                      Book Now
                    </button>
                    <button className="flex-1 border-2 border-gray-200 text-[#2E4057] px-6 py-3 rounded-xl font-semibold text-sm lg:text-base hover:border-[#D4A95E] hover:text-[#D4A95E] transition-all duration-300 flex items-center justify-center">
                      <Camera className="w-4 h-4 mr-2" />
                      View Gallery
                    </button>
                  </div>*/}
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Summary */}
        <div className={`mt-12 lg:mt-20 text-center transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
              Why Choose Belleful Experience?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-[#D4A95E]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#D4A95E]" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">All-in-One Destination</h4>
                <p className="text-gray-300 text-sm">Four services, one incredible location</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#D4A95E]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-[#D4A95E]" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Instagram-Ready</h4>
                <p className="text-gray-300 text-sm">Every corner designed for social sharing</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#D4A95E]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#D4A95E]" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Prime Location</h4>
                <p className="text-gray-300 text-sm">Heart of Wilberforce Island community</p>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-[#D4A95E] text-[#2E4057] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A95E]/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Experience It All
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;