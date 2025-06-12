import React from 'react';
import Header from './Header';
import Footer from './Footers';
import { Box } from '@mui/material';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Box component="main">
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;