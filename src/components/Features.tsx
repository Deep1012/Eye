
import React from 'react';
import RevealAnimation from './RevealAnimation';
import { 
  Eye, ShieldCheck, Clock, BrainCircuit, 
  DeviceTablet, Languages, CloudCheck, FileSearch 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <RevealAnimation animation="animate-fade-in" delay={delay}>
      <div className="glass-card p-6 h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eyemind-light-blue text-eyemind-blue mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-eyemind-dark-gray">{description}</p>
      </div>
    </RevealAnimation>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: "Advanced AI Detection",
      description: "Our deep learning algorithms analyze retinal images with precision equivalent to specialized ophthalmologists."
    },
    {
      icon: <Clock size={24} />,
      title: "Early Detection",
      description: "Identify eye conditions up to 18 months before visible symptoms appear, significantly improving treatment outcomes."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "HIPAA Compliant",
      description: "Patient data is encrypted and securely stored in compliance with healthcare privacy regulations."
    },
    {
      icon: <Eye size={24} />,
      title: "Multi-condition Analysis",
      description: "Detects various conditions including diabetic retinopathy, glaucoma, AMD, and other vision-threatening diseases."
    },
    {
      icon: <DeviceTablet size={24} />,
      title: "Device Integration",
      description: "Compatible with existing diagnostic equipment in clinics, requiring minimal additional investment."
    },
    {
      icon: <Languages size={24} />,
      title: "Multilingual Reports",
      description: "Generate patient-friendly reports in multiple languages to improve understanding and compliance."
    },
    {
      icon: <CloudCheck size={24} />,
      title: "Cloud-based Solution",
      description: "Access diagnostic tools from anywhere with secure cloud infrastructure and automatic updates."
    },
    {
      icon: <FileSearch size={24} />,
      title: "Comprehensive History",
      description: "Track patient eye health over time with detailed comparative analysis and trend monitoring."
    }
  ];

  return (
    <section id="features" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <RevealAnimation>
          <span className="inline-block px-4 py-2 rounded-full bg-eyemind-light-blue text-eyemind-blue font-medium text-sm mb-4">
            Advanced Features
          </span>
        </RevealAnimation>
        
        <RevealAnimation delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cutting-edge AI for Complete Eye Health Monitoring
          </h2>
        </RevealAnimation>
        
        <RevealAnimation delay={200}>
          <p className="text-lg text-eyemind-dark-gray">
            Our technology combines advanced computer vision with deep medical expertise to provide
            comprehensive eye health analysis that's accessible, accurate, and actionable.
          </p>
        </RevealAnimation>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={100 * (index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
