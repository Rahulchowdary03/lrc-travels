import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Box, Divider } from '@mui/material';

// Import different background images for each service
import airportImage from '../assets/airport.jpg';
import localTaxiImage from '../assets/local-taxi-image.jpg';
import outstationTaxiImage from '../assets/outstation-taxi-service.jpg';

function ServiceDetails() {
  const { serviceName } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Use the correct path with process.env.PUBLIC_URL
    fetch(`${process.env.PUBLIC_URL}/services.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        if (data[serviceName]) {
          setDetails(data[serviceName]);
        } else {
          setError(`No data found for ${serviceName}`);
        }
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [serviceName]);

  if (loading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error || !details) {
    return <Typography variant="h5">Error: {error || 'Service details not found!'}</Typography>;
  }

  // Define background image and table colors based on selected service
  const getBackgroundImage = () => {
    switch (serviceName) {
      case 'Local Taxi':
        return localTaxiImage;
      case 'Outstation Taxi':
        return outstationTaxiImage;
      case 'Airport Taxi':
      default:
        return airportImage;
    }
  };

  const getTableColors = () => {
    switch (serviceName) {
      case 'Local Taxi':
        return {
          tableBg: '#f1f8e9', // Light green background
          headerBg: '#388e3c', // Green header
          borderColor: '#2e7d32', // Dark green border
          textColor: '#333',
        };
      case 'Outstation Taxi':
        return {
          tableBg: '#fff3e0', // Light orange background
          headerBg: '#f57c00', // Orange header
          borderColor: '#e65100', // Dark orange border
          textColor: '#333',
        };
      case 'Airport Taxi':
      default:
        return {
          tableBg: '#e3f2fd', // Light blue background
          headerBg: '#1976d2', // Blue header
          borderColor: '#1565c0', // Dark blue border
          textColor: '#333',
        };
    }
  };

  const { tableBg, headerBg, borderColor, textColor } = getTableColors();

  // Define headers for each service
  const isAirportTaxi = serviceName === "Airport Taxi";
  const isLocalTaxi = serviceName === "Local Taxi";
  const isOutstationTaxi = serviceName === "Outstation Taxi";

  const airportTaxiHeaders = [
    "Vehicle", "Seat","One-Way Price"
  ];

  const localTaxiHeaders = [
    "Vehicle", "seat", "8HoursPrice", "Extra Km Price", "extraHours"
  ];

  const outstationTaxiHeaders = [
    "Vehicle", "seats", "Min Distance", "kmPrice", "Driver Allowance"
  ];

  // Map table rows dynamically based on service
  const airportTaxiRows = details.table.map((row) => (
    <TableRow key={row.vehicle}>
      <TableCell>{row.vehicle}</TableCell>
      <TableCell>{row.seat}</TableCell>
      <TableCell>{row.oneWayPrice}</TableCell>
    </TableRow>
  ));

  const localTaxiRows = details.table.map((row) => (
    <TableRow key={row.vehicle}>
      <TableCell>{row.vehicle}</TableCell>
      <TableCell>{row.seat}</TableCell>
      <TableCell>{row["8HoursPrice"]}</TableCell>
      <TableCell>{row.extraKmPrice}</TableCell>
      <TableCell>{row.extraHours}</TableCell>
    </TableRow>
  ));

  const outstationTaxiRows = details.table.map((row) => (
    <TableRow key={row.vehicle}>
      <TableCell>{row.vehicle}</TableCell>
      <TableCell>{row.seats}</TableCell>
      <TableCell>{row.minDistance}</TableCell>
      <TableCell>{row.kmPrice}</TableCell>
      <TableCell>{row.driverAllowance}</TableCell>
    </TableRow>
  ));

  return (
    <Box
      padding={3}
      sx={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
        {serviceName} Details
      </Typography>

      <Typography variant="h6" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Pricing and Tariff
      </Typography>

      <Table
        sx={{
          backgroundColor: tableBg,
          borderRadius: '8px',
          border: `2px solid ${borderColor}`,
        }}
      >
        <TableHead style={{ backgroundColor: headerBg }}>
          <TableRow>
            {isAirportTaxi && airportTaxiHeaders.map(header => (
              <TableCell key={header} style={{ color: '#FFF', fontWeight: 'bold' }}>{header}</TableCell>
            ))}
            {isLocalTaxi && localTaxiHeaders.map(header => (
              <TableCell key={header} style={{ color: '#FFF', fontWeight: 'bold' }}>{header}</TableCell>
            ))}
            {isOutstationTaxi && outstationTaxiHeaders.map(header => (
              <TableCell key={header} style={{ color: '#FFF', fontWeight: 'bold' }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isAirportTaxi && airportTaxiRows}
          {isLocalTaxi && localTaxiRows}
          {isOutstationTaxi && outstationTaxiRows}
        </TableBody>
      </Table>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h6" gutterBottom style={{ 
        fontWeight: 'bold', 
        fontSize: '28px', 
        color: 'white', // Dark indigo
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        marginBottom: '15px'
      }}>
        Terms & Conditions
      </Typography>
      <Typography
        style={{
          fontSize: '17px',
          fontWeight: '500',
          color: '#fff',
          backgroundColor: 'rgba(25, 118, 210, 0.9)', // Semi-transparent blue
          borderRadius: '8px',
          padding: '15px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lineHeight: '1.6'
        }}
      >
        {details.termsAndConditions}
      </Typography>

      <Divider style={{ margin: '30px 0' }} />

      <Typography variant="h6" gutterBottom style={{ 
        fontWeight: 'bold', 
        fontSize: '28px', 
        color: 'white', // Dark indigo
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        marginBottom: '15px'
      }}>
        Packages
      </Typography>
      <Typography
        style={{
          fontSize: '17px',
          fontWeight: '500',
          color: '#fff',
          backgroundColor: 'rgba(56, 142, 60, 0.9)', // Semi-transparent green
          borderRadius: '8px',
          padding: '15px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lineHeight: '1.6'
        }}
      >
        {details.packages}
      </Typography>

      <Divider style={{ margin: '30px 0' }} />

      <Typography variant="h6" gutterBottom style={{ 
        fontWeight: 'bold', 
        fontSize: '28px', 
        color: 'white', // Dark indigo
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        marginBottom: '15px'
      }}>
        Cancellation and Returns
      </Typography>
      <Typography
        style={{
          fontSize: '17px',
          fontWeight: '500',
          color: '#fff',
          backgroundColor: 'rgba(245, 124, 0, 0.9)', // Semi-transparent orange
          borderRadius: '8px',
          padding: '15px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lineHeight: '1.6'
        }}
      >
        {details.cancellationAndReturns}
      </Typography>

      <Divider style={{ margin: '30px 0' }} />

      <Typography variant="h6" gutterBottom style={{ 
        fontWeight: 'bold', 
        fontSize: '28px', 
        color: 'white', // Dark indigo
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        marginBottom: '15px'
      }}>
        Refunds
      </Typography>
      <Typography
        style={{
          fontSize: '17px',
          fontWeight: '500',
          color: '#fff',
          backgroundColor: 'rgba(183, 28, 28, 0.9)', // Semi-transparent red
          borderRadius: '8px',
          padding: '15px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lineHeight: '1.6'
        }}
      >
        {details.refunds}
      </Typography>
    </Box>
  );
}

export default ServiceDetails;
