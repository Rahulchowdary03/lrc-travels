import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import airportImage from '../assets/airplane.jpg';

function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <img
        src={airportImage}
        alt="Beautiful travel destination"
        className="hero-image"
      />
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore with LRC Tours & Travels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Unforgettable Journeys Await
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <Button 
            variant="contained" 
            color="secondary"
            onClick={scrollToServices}
            className="book-now-btn"
          >
            Book Now
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
