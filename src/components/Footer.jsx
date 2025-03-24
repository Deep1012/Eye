
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 70 }
    }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="footer-left">
        <motion.h2 className="footer-logo" variants={itemVariants}>netraya.</motion.h2>
        <motion.ul className="footer-links" variants={containerVariants}>
          {['About Us', 'Our Services', 'Research Articles', 'Request Demo', 'Contact Us'].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">{item}</a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="footer-right">
        <motion.p variants={itemVariants}>
          Have research to share? Send your articles to us. We welcome contributions that advance the understanding and innovation in diabetic retinopathy detection and related fields.
        </motion.p>
        <motion.div className="subscribe-section" variants={itemVariants}>
          <input type="email" placeholder="Enter your email" className="subscribe-input" />
          <Button className="subscribe-button">Subscribe</Button>
        </motion.div>
        <motion.small className="footer-disclaimer" variants={itemVariants}>
          By subscribing you agree to provide consent to receive updates from our company.
        </motion.small>
      </div>
    </motion.footer>
  );
};

export default Footer;
