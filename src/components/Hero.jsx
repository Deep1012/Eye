
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import './Hero.css';
import hero from '../assets/hero.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        damping: 15,
        stiffness: 100,
        delay: 0.5 
      }
    }
  };

  return (
    <motion.section 
      id="hero" 
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        <motion.h1 variants={itemVariants}>
          Revolutionizing Eye Health with AI-Powered Diagnostic
        </motion.h1>
        <motion.p variants={itemVariants}>
          Unleash the power of deep learning technology to detect diabetic retinopathy and optimize ophthalmology research.
        </motion.p>
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="learn-more-btn">Learn More</Button>
        </motion.div>
      </div>
      <motion.div 
        className="hero-image"
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img src={hero} alt="Eye health illustration" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
