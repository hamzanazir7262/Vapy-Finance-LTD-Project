// src/pages/ContactUs.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import WhatsAppButton from '../components/WhatsAppButton';
import CallButton from '../components/CallButton';

const ContactUs = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions or need assistance, you can reach us directly by using the buttons below.
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <WhatsAppButton />
        <CallButton />
      </Box>
    </Box>
  );
};

export default ContactUs;
