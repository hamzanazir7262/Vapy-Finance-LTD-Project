// src/pages/AboutUs.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        At Vapy Finance LTD, we are dedicated to providing personalized financial solutions. With a team of experienced professionals, we strive to offer the best loan services tailored to your needs.
      </Typography>
      <Typography variant="body1">
        Our mission is to help you achieve your financial goals with ease and confidence. Explore our loan options and get in touch with us for any inquiries.
      </Typography>
    </Box>
  );
};

export default AboutUs;
