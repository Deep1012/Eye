
import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-eyemind-blue font-bold text-2xl">eyemind</span>
              <span className="text-eyemind-teal font-bold text-2xl">AI</span>
            </a>
            <p className="text-eyemind-dark-gray mb-6">
              Revolutionary AI-powered eye diagnostics for early detection and better patient outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-eyemind-light-gray flex items-center justify-center text-eyemind-dark-gray hover:bg-eyemind-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-eyemind-light-gray flex items-center justify-center text-eyemind-dark-gray hover:bg-eyemind-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-eyemind-light-gray flex items-center justify-center text-eyemind-dark-gray hover:bg-eyemind-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-eyemind-light-gray flex items-center justify-center text-eyemind-dark-gray hover:bg-eyemind-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Research Papers</a>
              </li>
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Integration Guide</a>
              </li>
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">API Documentation</a>
              </li>
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-eyemind-blue flex-shrink-0 mt-1" size={18} />
                <span className="text-eyemind-dark-gray">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-eyemind-blue flex-shrink-0" size={18} />
                <a href="tel:+11234567890" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-eyemind-blue flex-shrink-0" size={18} />
                <a href="mailto:info@eyemind-ai.com" className="text-eyemind-dark-gray hover:text-eyemind-blue transition-colors">
                  info@eyemind-ai.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-eyemind-light-gray pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-eyemind-dark-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EyeMind AI. All rights reserved.
          </p>
          <p className="text-eyemind-dark-gray text-sm flex items-center">
            Made with <Heart className="mx-1 text-red-500" size={14} /> for better eye health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
