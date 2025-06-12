import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Divider, List, ListItem } from '@mui/material';

function PackageDetails() {
  const { packageId } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    fetch('/packages.json')
      .then((response) => response.json())
      .then((data) => setPackageDetails(data[packageId]))
      .catch((error) => console.error("Error loading package details", error));
  }, [packageId]);

  if (!packageDetails) return <Typography variant="h5">Loading...</Typography>;

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" gutterBottom>
        {packageDetails.title}
      </Typography>
      <Typography variant="h6" gutterBottom>{packageDetails.duration}</Typography>
      <Typography variant="body1" paragraph>{packageDetails.description}</Typography>
      <Divider sx={{ margin: '20px 0' }} />
      <Typography variant="h6" gutterBottom>Itinerary</Typography>
      <List>
        {packageDetails.itinerary.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <Divider sx={{ margin: '20px 0' }} />
      <Typography variant="h6" gutterBottom>Places to Visit</Typography>
      <List>
        {packageDetails.places.map((place, index) => (
          <ListItem key={index}>{place}</ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PackageDetails;
