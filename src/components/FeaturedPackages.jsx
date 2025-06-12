import React, { useEffect, useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';

function FeaturedPackages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/packages.json`)
      .then((response) => response.json())
      .then((data) => setPackages(data));
  }, []);

  const handleCallNow = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 8 }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4 }}>
        Tour Packages
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {packages.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Smooth shadow
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                },
                borderRadius: '12px',
              }}
            >
              <CardMedia
                component="img"
                alt={pkg.title}
                height="200"
                image={`${process.env.PUBLIC_URL}/${pkg.image}`}
                sx={{
                  objectFit: 'cover',
                  borderRadius: '12px 12px 0 0',
                }}
              />

              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '16px',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {pkg.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'green', fontWeight: 'bold', mb: 1 }}>
                  {pkg.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
                  {pkg.highlights}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: '#ff5722',
                    '&:hover': {
                      backgroundColor: '#e64a19',
                    },
                    alignSelf: 'center',
                    width: 'fit-content',
                    padding: '6px 16px',
                  }}
                  onClick={() => handleCallNow(pkg.phoneNumber || '+91 8123159153')}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedPackages;
