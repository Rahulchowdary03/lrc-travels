import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Paper, Box, Typography } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
    const userID = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS User ID

    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'lrctravelsinfo@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box className="contact-section" sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6, fontWeight: 'bold', color: '#1a237e' }}>
          Get In Touch
        </Typography>
        
        {status && (
          <Typography align="center" sx={{ mb: 2, color: status.includes('success') ? 'green' : 'red' }}>
            {status}
          </Typography>
        )}

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ mb: 3, color: '#1a237e' }}>
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
                <LocationOn sx={{ mr: 2, color: '#1a237e' }} />
                <Typography>
                  Sri lakshmi PG for gents, Garudacharpalya
                  Mahadevapura, Bengaluru, Karnataka 560048
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
                <Phone sx={{ mr: 2, color: '#1a237e' }} />
                <Typography>
                  +91-9441472754
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
                <Email sx={{ mr: 2, color: '#1a237e' }} />
                <Typography>
                  lrctravelsinfo@gmail.com
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      disabled={loading}
                      sx={{
                        mt: 2,
                        backgroundColor: '#1a237e',
                        '&:hover': {
                          backgroundColor: '#000051',
                        },
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Google Maps */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box sx={{ height: '400px', width: '100%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7036.413927640747!2d77.70031117454684!3d12.98813901451657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110df2272f2f%3A0xc857f5d206b0d88e!2sSri%20Lakshmi%20pg%20for%20gents!5e1!3m2!1sen!2sin!4v1749715704605!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }} // Fixed: valid border value
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;