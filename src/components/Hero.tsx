
import React from 'react';
import RevealAnimation from './RevealAnimation';
import { Eye, Shield, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-eyemind-teal opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-eyemind-blue opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <RevealAnimation animation="animate-fade-in-left">
              <span className="inline-block px-4 py-2 rounded-full bg-eyemind-light-blue text-eyemind-blue font-medium text-sm mb-4">
                AI-Powered Eye Diagnostics
              </span>
            </RevealAnimation>
            
            <RevealAnimation animation="animate-fade-in-left" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Revolutionizing <span className="text-eyemind-blue">Eye Health</span> with Artificial Intelligence
              </h1>
            </RevealAnimation>
            
            <RevealAnimation animation="animate-fade-in-left" delay={200}>
              <p className="text-lg text-eyemind-dark-gray mb-8 max-w-2xl">
                Early detection is key to preventing vision loss. Our AI technology analyzes retinal images with precision, 
                identifying conditions before symptoms appear.
              </p>
            </RevealAnimation>
            
            <RevealAnimation animation="animate-fade-in-left" delay={300} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Learn How It Works
              </a>
            </RevealAnimation>
            
            <RevealAnimation animation="animate-fade-in" delay={500} className="mt-12">
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <Shield className="text-eyemind-blue" size={20} />
                  <span className="text-sm font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="text-eyemind-blue" size={20} />
                  <span className="text-sm font-medium">99.2% Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="text-eyemind-blue" size={20} />
                  <span className="text-sm font-medium">Real-time Results</span>
                </div>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="md:col-span-5">
            <RevealAnimation 
              animation="animate-blur-in" 
              delay={200} 
              className="relative"
            >
              <div className="glass-card p-4 rounded-2xl overflow-hidden shadow-xl relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-eyemind-blue/10 to-eyemind-teal/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1577758231548-6e1beab53fac?auto=format&fit=crop&q=80&w=1024&h=768"
                  alt="AI Eye Analysis" 
                  className="w-full h-auto rounded-xl"
                />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-card bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-xl animate-float">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-subtle"></div>
                      <span className="font-medium text-eyemind-dark-blue">Analysis Complete</span>
                    </div>
                    <p className="text-sm text-eyemind-dark-gray">
                      Retinal scan shows healthy blood vessels with no signs of diabetic retinopathy.
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
