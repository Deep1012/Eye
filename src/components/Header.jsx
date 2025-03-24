
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";
import './Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link to="/">netraya.</Link>
      </motion.div>
      
      <NavigationMenu className="navigation-menu">
        <NavigationMenuList className="nav-links">
          <NavigationMenuItem variants={itemVariants}>
            <NavigationMenuLink asChild>
              <motion.a 
                href="/#about" 
                className="nav-link"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                About Us
              </motion.a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem variants={itemVariants}>
            <NavigationMenuLink asChild>
              <motion.a 
                href="/#services" 
                className="nav-link"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                Our Services
              </motion.a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem variants={itemVariants}>
            <NavigationMenuLink asChild>
              <motion.a 
                href="/#articles" 
                className="nav-link"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                Articles
              </motion.a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem variants={itemVariants}>
            <NavigationMenuLink asChild>
              <motion.a 
                href="/contact" 
                className="nav-link"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                as={Link}
              >
                Contact
              </motion.a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="auth-buttons">
        {isLoggedIn && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={handleLogout} variant="outline">Logout</Button>
          </motion.div>
        )}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
