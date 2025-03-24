
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.appear-element');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        
        if (elementPosition.top < screenHeight * 0.8) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
