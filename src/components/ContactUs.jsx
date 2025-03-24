
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import "./ContactUs.css";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("sending");
    
    // Mock API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

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
        stiffness: 80,
        damping: 12
      }
    }
  };

  const contactMethods = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      description: "123 Innovation Way, Tech Park, CA 92123"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      description: "+1 (555) 123-4567"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      description: "contact@netraya.com"
    }
  ];

  return (
    <motion.div 
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="contact-container">
        <motion.div className="contact-header" variants={itemVariants}>
          <h1>Get in Touch</h1>
          <p>
            Have questions about our AI-powered eye health solutions? 
            We're here to help you. Contact us today.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h2>Contact Information</h2>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.div 
                  className="contact-method" 
                  key={index}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.12)"
                  }}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-text">
                    <h3>{method.title}</h3>
                    <p>{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-media">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.2 }}
                  className="social-icon twitter"
                >
                  𝕏
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.2 }}
                  className="social-icon facebook"
                >
                  f
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.2 }}
                  className="social-icon linkedin"
                >
                  in
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.2 }}
                  className="social-icon instagram"
                >
                  📷
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-container" variants={itemVariants}>
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <motion.div 
                className="form-group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="submit-button"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? (
                    "Sending..."
                  ) : (
                    <>Send Message <Send size={16} className="ml-2" /></>
                  )}
                </Button>
              </motion.div>
              
              {formStatus === "success" && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
