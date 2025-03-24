
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Send, ArrowRight, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
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
      <div className="footer-content">
        <div className="footer-left">
          <motion.h2 className="footer-logo" variants={itemVariants}>netraya.</motion.h2>
          <motion.p className="footer-tagline" variants={itemVariants}>
            Revolutionizing eye health with AI-powered diagnostics
          </motion.p>
          <motion.div className="footer-social" variants={itemVariants}>
            <a href="#" className="social-link"><Twitter size={18} /></a>
            <a href="#" className="social-link"><Facebook size={18} /></a>
            <a href="#" className="social-link"><Linkedin size={18} /></a>
            <a href="#" className="social-link"><Instagram size={18} /></a>
          </motion.div>
        </div>
        
        <div className="footer-navigation">
          <motion.div className="footer-nav-column" variants={containerVariants}>
            <motion.h3 variants={itemVariants}>Quick Links</motion.h3>
            <motion.ul variants={containerVariants}>
              <motion.li variants={itemVariants}><Link to="/#about">About Us</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/#services">Our Services</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/#articles">Articles</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/contact">Contact Us</Link></motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div className="footer-nav-column" variants={containerVariants}>
            <motion.h3 variants={itemVariants}>Services</motion.h3>
            <motion.ul variants={containerVariants}>
              <motion.li variants={itemVariants}><a href="#">AI Diagnostics</a></motion.li>
              <motion.li variants={itemVariants}><a href="#">Research Analysis</a></motion.li>
              <motion.li variants={itemVariants}><a href="#">Clinical Trials</a></motion.li>
              <motion.li variants={itemVariants}><a href="#">Eye Health Tech</a></motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div className="footer-nav-column" variants={containerVariants}>
            <motion.h3 variants={itemVariants}>Legal</motion.h3>
            <motion.ul variants={containerVariants}>
              <motion.li variants={itemVariants}><a href="#">Privacy Policy</a></motion.li>
              <motion.li variants={itemVariants}><a href="#">Terms of Service</a></motion.li>
              <motion.li variants={itemVariants}><a href="#">Cookie Policy</a></motion.li>
              <motion.li variants={itemVariants}><a href="#">Data Protection</a></motion.li>
            </motion.ul>
          </motion.div>
        </div>
        
        <div className="footer-right">
          <motion.h3 variants={itemVariants}>Stay Updated</motion.h3>
          <motion.p variants={itemVariants}>
            Subscribe to our newsletter for the latest in eye health technology and research.
          </motion.p>
          <motion.div className="subscribe-section" variants={itemVariants}>
            <input type="email" placeholder="Your email address" className="subscribe-input" />
            <Button className="subscribe-button">
              Subscribe <Send size={14} className="ml-2" />
            </Button>
          </motion.div>
          <motion.div className="request-demo" variants={itemVariants}>
            <Link to="/contact" className="demo-link">
              Request a Demo <ArrowRight size={14} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div className="footer-bottom" variants={itemVariants}>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Netraya. All rights reserved.
        </div>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
