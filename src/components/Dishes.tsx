import React, { useEffect, useRef, useState } from 'react';
import {
  Star,
  Clock,
  Utensils,
  ShoppingBag,
  Bed,
  Wifi,
  Users,
  Camera,
  MapPin
} from 'lucide-react';

const Services = () => {
  // Coming Soon - Belleful Experience hasn’t been launched yet
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-32 bg-[#2E4057] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8">
            Coming Soon
          </h2>
          <div className="text-6xl mb-8">
            <span className="text-[#D4A95E]">→→→</span>
          </div>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            The Belleful Experience is launching soon. Stay tuned for something
            incredible.
          </p>
          <div className="w-24 h-1 bg-[#D4A95E] mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------
// 🔒 Future content — will be activated later
// ---------------------------------------------
/*

// useState, useRef, and useEffect are already imported above
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1, rootMargin: "50px" }
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
    description:
      "Experience bold flavors that tell Nigeria’s story through a contemporary lens. Our kitchen crafts dishes that honor traditional recipes while embracing modern culinary techniques. Every meal is an Instagram moment waiting to happen.",
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
    description:
      "Discover fashion-forward menswear that defines the modern Nigerian man. Our curated collection combines contemporary style with cultural pride, offering pieces that make statements both on the street and online.",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
    description:
      "Five beautifully designed rooms that redefine hospitality in Wilberforce Island. Each space is crafted to provide comfort, style, and the perfect backdrop for your Niger Delta experience.",
    image:
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
    description:
      "Work, stream, and share seamlessly with our high-speed internet service powered by Starlink. Whether you’re a student, creative, or professional, BelleNet keeps you connected to what matters most.",
    image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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

*/

export default Services;