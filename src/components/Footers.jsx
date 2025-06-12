import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email, LocationOn } from '@mui/icons-material';
import '../styles/Footer.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Connect With Us */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-heading">
              Connect With Us
            </Typography>
            <Typography variant="body2" className="footer-text" sx={{ mb: 2 }}>
              Follow us on social media for travel inspiration, exclusive deals, and beautiful destinations!
            </Typography>
            <div className="social-media-links">
              <IconButton 
                color="inherit" 
                href="https://facebook.com" 
                target="_blank"
                sx={{
                  '&:hover': { color: '#3b5998' },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://twitter.com" 
                target="_blank"
                sx={{
                  '&:hover': { color: '#00acee' },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://instagram.com" 
                target="_blank"
                sx={{
                  '&:hover': { color: '#C13584' },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://linkedin.com" 
                target="_blank"
                sx={{
                  '&:hover': { color: '#0e76a8' },
                }}
              >
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-heading" gutterBottom>
              Quick Links
            </Typography>
            <Box className="nav-bar" sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('hero-section')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('about-us')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                About Us
              </Button>
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('services')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                Services
              </Button>
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('tour-packages')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                Tour Packages
              </Button>
              <Button 
                color="inherit" 
                onClick={() => handleNavigation('contact')}
                sx={{ textTransform: 'none', '&:hover': { color: '#ff9800' } }}
              >
                Contact
              </Button>
            </Box>
          </Grid>

          {/* More Inquiry */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-heading">
              Plan Your Journey
            </Typography>
            <Typography variant="body2" className="footer-text" sx={{ mb: 3 }}>
              Let us help you create unforgettable travel memories
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn sx={{ mr: 1, color: '#ff9800' }} />
              <Typography variant="body2" className="footer-text">
                11/10, 21, Th Main Road, Siddeshwara Nagar,<br />
                Bengaluru, Karnataka 560040
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 1, color: '#ff9800' }} />
              <Typography variant="body2" className="footer-text">
                +91-9441472754
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1, color: '#ff9800' }} />
              <Typography variant="body2" className="footer-text">
                lrctravelsinfo@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Line */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginTop: '40px', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '20px' 
        }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            &copy; 2025 LRC Tours & Travels. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            Designed by{' '}
            <Link 
              href="https://rahulchowdary03.github.io/personal-portfolio/" 
              target="_blank" 
              sx={{ 
                color: '#ff9800', 
                textDecoration: 'none',
                '&:hover': { 
                  color: '#fff',
                  textDecoration: 'underline' 
                } 
              }}
            >
             Lingutla Rahul
            </Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
