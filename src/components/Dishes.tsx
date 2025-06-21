import React, { useEffect, useRef, useState } from 'react';
import { Star, Clock, Flame, ShoppingCart } from 'lucide-react';

const Dishes = () => {
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

  const dishes = [
    {
      name: "Signature Jollof Rice",
      description: "Our crown jewel - perfectly spiced jasmine rice cooked with tomatoes, peppers, and aromatic spices",
      price: "N10,000",
      image: "assets/jollof.jpg",
      rating: 4.9,
      cookTime: "25 min",
      spiceLevel: 2,
      popular: true
    },
    {
      name: "Premium Suya Platter",
      description: "Grilled beef skewers marinated in our secret blend of groundnuts and spices, served with fresh vegetables",
      price: "N30,000",
      image: "assets/suya.jpg",
      rating: 4.8,
      cookTime: "20 min",
      spiceLevel: 3,
      popular: true
    },
    {
      name: "Egusi with Pounded Yam",
      description: "Rich melon seed stew with leafy greens, tender meat, and fresh fish, paired with smooth pounded yam",
      price: "N20,000",
      image: "assets/egusi.jpg",
      rating: 4.7,
      cookTime: "30 min",
      spiceLevel: 2,
      popular: false
    },
    {
      name: "Grilled Tilapia Special",
      description: "Fresh whole tilapia grilled to perfection with African spices, served with plantain and pepper sauce",
      price: "N23,000",
      image: "assets/tilapia.jpg",
      rating: 4.9,
      cookTime: "35 min",
      spiceLevel: 2,
      popular: true
    },
    {
      name: "Chin Chin Dessert",
      description: "Traditional sweet fried dough cubes dusted with powdered sugar, served with vanilla ice cream",
      price: "N16,000",
      image: "https://images.pexels.com/photos/1998633/pexels-photo-1998633.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      rating: 4.6,
      cookTime: "15 min",
      spiceLevel: 0,
      popular: false
    },
    {
      name: "Pepper Soup",
      description: "Aromatic broth with tender goat meat, seasoned with African pepper and native spices",
      price: "N22,000",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      rating: 4.8,
      cookTime: "40 min",
      spiceLevel: 4,
      popular: false
    }
  ];

  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Flame 
            key={i} 
            className={`w-3 h-3 ${i < level ? 'text-red-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="dishes" ref={sectionRef} className="py-12 sm:py-16 lg:py-32 bg-[#2E4057] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            Signature Dishes
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Each dish is a masterpiece, crafted with authentic ingredients and generations of culinary wisdom
          </p>
          <div className="mt-6 lg:mt-8 w-24 h-1 bg-[#D4A95E] mx-auto rounded-full"></div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Popular Badge */}
                {dish.popular && (
                  <div className="absolute top-3 left-3 bg-[#D4A95E] text-[#2E4057] px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="w-3 h-3 text-[#D4A95E] mr-1" />
                  <span className="text-xs font-semibold text-[#2E4057]">{dish.rating}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#2E4057]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-[#D4A95E] text-[#2E4057] px-4 py-2 rounded-full font-semibold hover:bg-[#D4A95E]/90 transform hover:scale-105 transition-all duration-200 flex items-center text-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-6">
                <div className="flex justify-between items-start mb-2 lg:mb-3">
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-[#2E4057] group-hover:text-[#D4A95E] transition-colors duration-200">
                    {dish.name}
                  </h3>
                  <span className="text-xl lg:text-2xl font-bold text-[#D4A95E]">{dish.price}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-3 lg:mb-4">
                  {dish.description}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-xs lg:text-sm text-gray-500">
                    <Clock className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    <span>{dish.cookTime}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-2">Spice:</span>
                    {renderSpiceLevel(dish.spiceLevel)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 lg:mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button className="group bg-[#D4A95E] text-[#2E4057] px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-[#D4A95E]/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Full Menu
            <div className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dishes;