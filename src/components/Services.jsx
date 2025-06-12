import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import '../styles/Services.css';
import airportImage from '../assets/airport.jpg';
import LocalTaxiImage from '../assets/local-cab-image.jpg';
import OutstationTaxiImage from '../assets/outstation-taxi-service.jpg';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      name: 'Airport Taxi',
      image: airportImage,
      description: 'Convenient airport pickups and drop-offs.',
    },
    {
      name: 'Local Taxi',
      image: LocalTaxiImage,
      description: 'City tours and hourly rentals.',
    },
    {
      name: 'Outstation Taxi',
      image: OutstationTaxiImage,
      description: 'Comfortable trips outside the city.',
    },
  ];

  const handleBookNow = (serviceName) => {
    navigate(`/service/${serviceName}`);
  };

  return (
    <Box sx={{ py: 6, backgroundColor: '#f7f7f7' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                alt={service.name}
                height="200"
                image={service.image}
                sx={{
                  objectFit: 'cover',
                  borderRadius: '16px 16px 0 0',
                }}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                  {service.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'gray' }}>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    alignSelf: 'center',
                    borderRadius: '20px',
                    backgroundColor: '#1976d2',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    },
                  }}
                  onClick={() => handleBookNow(service.name)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
