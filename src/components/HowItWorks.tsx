
import React from 'react';
import RevealAnimation from './RevealAnimation';
import { 
  Upload, Search, FileBarChart, Microscope 
} from 'lucide-react';

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description, delay }) => {
  return (
    <RevealAnimation animation="animate-fade-in" delay={delay}>
      <div className="relative">
        <div className="glass-card p-6 pl-16 relative z-10">
          <div className="absolute left-6 top-6 flex items-center justify-center w-8 h-8 rounded-full bg-eyemind-blue text-white font-bold text-sm">
            {number}
          </div>
          <div className="mb-4 text-eyemind-blue">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-eyemind-dark-gray">{description}</p>
        </div>
        {number < 4 && (
          <div className="hidden md:block absolute top-1/2 right-0 w-16 h-1 bg-eyemind-light-blue transform translate-x-8"></div>
        )}
      </div>
    </RevealAnimation>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload size={24} />,
      title: "Image Capture",
      description: "Upload high-resolution retinal images from standard ophthalmic imaging devices or our mobile adapter."
    },
    {
      icon: <Search size={24} />,
      title: "AI Analysis",
      description: "Our deep learning algorithms scan the images, identifying patterns and abnormalities with precision."
    },
    {
      icon: <Microscope size={24} />,
      title: "Condition Detection",
      description: "The system identifies potential conditions and provides confidence scores based on millions of training samples."
    },
    {
      icon: <FileBarChart size={24} />,
      title: "Comprehensive Report",
      description: "Receive detailed reports with visualization, risk assessments, and recommended next steps for patient care."
    }
  ];

  return (
    <section id="how-it-works" className="section-container bg-eyemind-light-gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <RevealAnimation>
          <span className="inline-block px-4 py-2 rounded-full bg-white text-eyemind-blue font-medium text-sm mb-4">
            Simple Process
          </span>
        </RevealAnimation>
        
        <RevealAnimation delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How EyeMind AI Works
          </h2>
        </RevealAnimation>
        
        <RevealAnimation delay={200}>
          <p className="text-lg text-eyemind-dark-gray">
            Our streamlined process makes advanced eye diagnostics accessible to healthcare 
            providers around the world, with minimal technical knowledge required.
          </p>
        </RevealAnimation>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </div>

      <RevealAnimation delay={500} className="mt-20">
        <div className="glass-card p-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-eyemind-blue/5 to-eyemind-teal/5"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">See EyeMind AI in Action</h3>
              <p className="text-eyemind-dark-gray mb-6">
                Watch how our technology analyzes retinal images in real-time, detecting conditions
                with precision and providing actionable insights for better patient care.
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Request a Demo
              </a>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-eyemind-dark-blue/10">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-eyemind-blue/90 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000"
                alt="EyeMind AI Demo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default HowItWorks;
