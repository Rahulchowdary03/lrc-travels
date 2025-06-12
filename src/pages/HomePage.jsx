import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import FeaturedPackages from '../components/FeaturedPackages';
import Contact from '../components/Contact';

import WhyChooseUs from '../components/WhyChooseUs';
import PersistentIcons from '../components/PersistentIcons';
import { motion, useAnimation } from 'framer-motion';
import logoImage from '../assets/rskLogo.png'; // Replace with your logo path
import '../styles/smoke.css'; // Add CSS for smoke effect
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    return !hasVisited;
  });
  const [showCar, setShowCar] = useState(false);
  const carControls = useAnimation();
  const logoControls = useAnimation();
  const curtainControls = useAnimation();
  const location = useLocation();

  useEffect(() => {
    const animationSequence = async () => {
      if (!showSplash) return;

      // First animate the logo
      await logoControls.start({
        scale: [0, 1],
        opacity: [0, 1],
        transition: { duration: 1.5 }
      });

      // Wait to show logo
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show car and prepare curtain
      setShowCar(true);
      
      // Ensure curtain is in initial position
      await curtainControls.set({ x: 0 });

      // Animate car and curtain together
      await Promise.all([
        carControls.start({
          x: ['calc(-100% - 300px)', '100%'],
          transition: { 
            duration: 4,
            ease: "linear"
          }
        }),
        curtainControls.start({
          x: ['0%', '100%'],
          transition: { 
            duration: 4,
            ease: "linear"
          }
        })
      ]);

      // End splash screen
      setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem('hasVisitedBefore', 'true');
      }, 500);
    };

    animationSequence();
  }, [carControls, logoControls, curtainControls]);

  useEffect(() => {
    // Handle scroll to section after navigation
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    // Wait for splash screen to finish
    if (!showSplash && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [showSplash]);

  return (
    <>
      {showSplash ? (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            zIndex: 9999,
            overflow: 'hidden',
          }}
        >
          {/* Black curtain */}
          <motion.div
            animate={curtainControls}
            initial={{ x: 0 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#0a0a0a',
              zIndex: 2,
            }}
          />

          {showCar && (
            <>
              {/* Car with welcome text */}
              <motion.div
                animate={carControls}
                initial={{ x: 'calc(-100% - 300px)' }}
                style={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  bottom: '80px',
                  zIndex: 5,
                  left: 0,
                }}
              >
                <div
                  style={{
                    color: '#fff',
                    fontSize: '36px',
                    whiteSpace: 'nowrap',
                    textShadow: '0 0 10px rgba(255,255,255,0.8)',
                  }}
                >
                  Welcome to RSK Tours & Travels
                </div>

                <div style={{ 
                  width: '300px', 
                  height: '120px', 
                  position: 'relative',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px rgba(255,165,0,0.5)',
                }}>
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '60px',
                      top: '20px',
                      background: 'linear-gradient(45deg, #000000, #1a1a1a)',
                      clipPath: 'polygon(0% 50%, 5% 30%, 95% 30%, 100% 50%, 95% 70%, 5% 70%)',
                      boxShadow: '0 0 20px rgba(0,0,0,0.8)',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        width: '20px',
                        height: '10px',
                        background: '#FFD700',
                        right: '5px',
                        top: '25px',
                        borderRadius: '5px',
                        boxShadow: '0 0 10px #FFA500',
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        width: '120px',
                        height: '25px',
                        background: '#4a90e2',
                        left: '80px',
                        top: '5px',
                        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
                      }}
                    />
                    
                    <div className="wheel" style={{ 
                      left: '50px',
                      width: '30px',
                      height: '30px',
                      background: '#333',
                      borderRadius: '50%',
                      border: '4px solid #666',
                      bottom: '-15px',
                      position: 'absolute',
                      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    }}/>
                    <div className="wheel" style={{ 
                      right: '50px',
                      width: '30px',
                      height: '30px',
                      background: '#333',
                      borderRadius: '50%',
                      border: '4px solid #666',
                      bottom: '-15px',
                      position: 'absolute',
                      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    }}/>

                    <div className="smoke"/>
                  </div>
                </div>
              </motion.div>

              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '120px',
                  background: '#333',
                  zIndex: 1,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '10px',
                    top: '50%',
                    background: 'repeating-linear-gradient(90deg, #fff 0px, #fff 50px, transparent 50px, transparent 100px)',
                    animation: 'moveRoad 1s linear infinite',
                  }}
                />
              </div>
            </>
          )}

          {/* Centered Logo */}
          <motion.img
            src={logoImage}
            alt="Logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={logoControls}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              zIndex: 4,
              filter: 'drop-shadow(0 0 10px #FFA500)',
            }}
          />
        </Box>
      ) : (
        <Box>
          <PersistentIcons />
          <section id="hero-section">
            <HeroSection />
          </section>
          <section id="about-us">
            <AboutUs />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="tour-packages">
            <FeaturedPackages />
          </section>
          <section id="WhyChooseUs">
            <WhyChooseUs />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Box>
      )}
    </>
  );
}
