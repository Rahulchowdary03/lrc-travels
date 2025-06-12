import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import {
  Menu,
  Close,
  Facebook,
  Instagram,
  Twitter,
  Email,
  Phone,
} from '@mui/icons-material';
import '../styles/Header.css'; // Ensure this file includes the new styles
import logoImage from '../assets/rskLogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Black Section */}
      <Box
        className="black-section"
        sx={{
          backgroundColor: '#1a1a1a',
          color: '#fff',
          padding: '8px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Email Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton
            color="inherit"
            component="a"
            href="mailto:lrctravelsinfo@gmail.com"
            sx={{
              '&:hover': { color: '#1976d2', transform: 'scale(1.1)', transition: 'all 0.2s' },
            }}
          >
            <Email />
          </IconButton>
          <Typography
            variant="body2"
            component="a"
            href="mailto:lrctravelsinfo@gmail.com"
            style={{ color: 'inherit', textDecoration: 'none' }}
            sx={{
              '&:hover': { color: '#1976d2', textDecoration: 'underline', transition: 'color 0.2s' },
            }}
          >
            lrctravelsinfo@gmail.com
          </Typography>
        </Box>

        {/* Phone Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton
            color="inherit"
            component="a"
            href="tel:+919441472754"
            sx={{
              '&:hover': { color: '#28a745', transform: 'scale(1.1)', transition: 'all 0.2s' },
            }}
          >
            <Phone />
          </IconButton>
          <Typography
            variant="body2"
            component="a"
            href="tel:+919441472754"
            style={{ color: 'inherit', textDecoration: 'none' }}
            sx={{
              '&:hover': { color: '#28a745', textDecoration: 'underline', transition: 'color 0.2s' },
            }}
          >
            Call Us: +91-9441472754
          </Typography>
        </Box>

        {/* Social Media Section with enhanced hover effects */}
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            sx={{
              '&:hover': {
                color: '#4267B2',
                transform: 'scale(1.2)',
                transition: 'all 0.3s ease',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            sx={{
              '&:hover': {
                color: '#E4405F',
                transform: 'scale(1.2)',
                transition: 'all 0.3s ease',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            component="a"
            href="https://www.twitter.com"
            target="_blank"
            sx={{
              '&:hover': {
                color: '#1DA1F2',
                transform: 'scale(1.2)',
                transition: 'all 0.3s ease',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <Twitter />
          </IconButton>
        </Box>
      </Box>

      {/* White Section */}
      <AppBar 
        position="sticky"
        className="appbar" 
        sx={{ 
          background: 'linear-gradient(90deg, #6B48FF, #00C4B4)', 
          color: '#000',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
          {/* Logo Section with hover effect */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease',
              }
            }}
          >
            <img src={logoImage} alt="LRC Tours & Travels" className="logo-img" style={{ height: '60px' }} />
            <Typography 
              variant="h5" 
              className="brand-name"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #FFD700, #FF4500)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              LRC Tours & Travels
            </Typography>
          </Box>

          {/* Desktop Navigation with enhanced buttons */}
          <Box className="nav-bar" sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
            {['Home', 'About Us', 'Services', 'Tour Packages', 'Contact'].map((text) => (
              <Button
                key={text}
                onClick={() => scrollToSection(text.toLowerCase().replace(' ', '-'))}
                sx={{
                  color: '#333',
                  fontWeight: 600,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#FF6B6B',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#FF6B6B',
                    '&::after': {
                      width: '80%',
                    },
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>

          {/* Inquiry Section with enhanced styling */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center', 
              gap: '10px',
              backgroundColor: '#f8f9fa',
              padding: '8px 15px',
              borderRadius: '30px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              For More Inquiry:
            </Typography>
            <Typography 
              variant="body2" 
              sx={{
                color: '#FF6B6B',
                fontWeight: 700,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              +91-9441472754
            </Typography>
          </Box>

          {/* Mobile Menu Icon with animation */}
          <IconButton 
            color="inherit" 
            sx={{ 
              display: { xs: 'block', md: 'none' },
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              padding: '8px',
              '&:hover': {
                background: 'linear-gradient(225deg, #FF6B6B, #4ECDC4)',
                transform: 'rotate(180deg) scale(1.1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              },
            }} 
            onClick={toggleDrawer}
          >
            <Menu sx={{ color: '#fff' }} />
          </IconButton>
        </Toolbar>

        {/* Enhanced Mobile Drawer */}
        <Drawer 
          anchor="left" 
          open={mobileOpen} 
          onClose={toggleDrawer}
          PaperProps={{
            sx: {
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
              width: 280,
              boxShadow: '4px 0 15px rgba(0,0,0,0.15)',
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 2,
              background: 'linear-gradient(90deg, #6B48FF, #00C4B4)',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={logoImage} alt="LRC Tours & Travels" style={{ height: '40px' }} />
                <Typography variant="h6" sx={{ 
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #FFD700, #FF4500)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}>
                  LRC Tours & Travels
                </Typography>
              </Box>
              <IconButton 
                onClick={toggleDrawer}
                sx={{
                  color: '#fff',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.2)',
                    transform: 'rotate(90deg)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Close />
              </IconButton>
            </Box>
            
            <Divider sx={{ 
              mb: 2,
              background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
              height: '2px'
            }} />
            
            <List>
              {['Home', 'About Us', 'Services', 'Tour Packages', 'Contact'].map((text) => (
                <ListItem 
                  button 
                  key={text} 
                  onClick={() => scrollToSection(text.toLowerCase().replace(' ', '-'))}
                  sx={{
                    mb: 1,
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(45deg, rgba(255,107,107,0.1), rgba(78,205,196,0.1))',
                      transform: 'translateX(10px)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={text} 
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, #6B48FF, #00C4B4)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
}

export default Header;