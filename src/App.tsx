import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Waitlist from './components/Waitlist';
import About from './components/About';
import Dishes from './components/Dishes';
import Experience from './components/Experience';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure all components are loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#F3E9D2] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#D4A95E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#2E4057] font-serif text-xl">Loading Belleful...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3E9D2] scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <Waitlist />
        <About />
        <Dishes />
        <Experience />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;