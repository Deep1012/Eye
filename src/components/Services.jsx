
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import './Services.css';
import serviceIcon from '/src/assets/serviceIcon.png';

const Services = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleCardClick = (e, path) => {
    // Prevents the click event from triggering if it's from a button click
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
      if (!isLoggedIn) {
        navigate("/signup");
      } else {
        navigate(path);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      id="services" 
      className="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 variants={cardVariants}>Our Services</motion.h2>
      <div className="service-cards">
        {/* Left Card */}
        <motion.div
          className="service-card-wrapper service-card-link"
          onClick={(e) => handleCardClick(e, "/servicespage")}
          variants={cardVariants}
          whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
        >
          <div className="service-card">
            <img src={serviceIcon} alt="Service Icon" className="service-icon" />
            <h3>AI-Powered Research Analysis for Eye Care</h3>
            <p>Utilize our AI model to analyze vast datasets, uncovering insights that drive better patient outcomes.</p>
          </div>
          <div className="service-actions">
            <Button variant="outline" className="service-btn">Learn More</Button>
            {!isLoggedIn && (
              <Link to="/signup" className="sign-up-link">Sign Up &gt;</Link>
            )}
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="service-card-wrapper service-card-link"
          onClick={(e) => handleCardClick(e, "/servicespage")}
          variants={cardVariants}
          whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
        >
          <div className="service-card">
            <img src={serviceIcon} alt="Service Icon" className="service-icon" />
            <h3>Request a Demo to Experience Our Solutions</h3>
            <p>See how our innovative tool can transform your practice.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
