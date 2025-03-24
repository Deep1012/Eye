
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white bg-opacity-80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-eyemind-blue font-bold text-2xl">eyemind</span>
          <span className="text-eyemind-teal font-bold text-2xl">AI</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">How It Works</a>
          <a href="#about" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">About</a>
          <a href="#contact" className="btn-primary">Get Started</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-eyemind-dark-gray" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-lg shadow-lg transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-4">
          <a 
            href="#features" 
            className="py-3 px-4 rounded-lg hover:bg-eyemind-light-gray transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="py-3 px-4 rounded-lg hover:bg-eyemind-light-gray transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#about" 
            className="py-3 px-4 rounded-lg hover:bg-eyemind-light-gray transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="py-3 px-4 btn-primary text-center mx-4 my-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
