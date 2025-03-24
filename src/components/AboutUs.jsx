
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import './AboutUs.css';
import aboutus from '../assets/aboutus.png';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren" 
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
        stiffness: 100 
      }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="about-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div 
        className="about-us-image"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img src={aboutus} alt="Eye illustration" />
      </motion.div>
      <div className="about-us-content">
        <motion.h2 variants={itemVariants}>About Us</motion.h2>
        <motion.p variants={itemVariants}>
          From comprehensive research analysis to cutting-edge diagnostic tools, our team of experts is dedicated to
          providing tailored solutions that address the unique needs of ophthalmologists and their patients.
        </motion.p>
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" className="explore-btn">Explore</Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
