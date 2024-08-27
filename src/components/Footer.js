// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import WhatsAppButton from './WhatsAppButton';
import CallButton from './CallButton';

const Footer = () => (
  <Box sx={{ backgroundColor: '#f8f9fa', p: 4 }}>
    <Grid container spacing={3} sx={{ textAlign: 'center' }}>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Vapy Finance LTD
          <br />
          D.No:-130-17, Shop No 6&7, 1st Floor
          <br />
          Dudgu Koteswara Rao-Bharati Complex
          <br />
          6th Line East Annapurna Nagar, Gorantla
          <br />
          Guntur, AP-522034
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1">
          Phone: +919160461130, +919160461166
          <br />
          Email: <Link href="mailto:info@vapyfinanceltd.com">info@vapyfinanceltd.com</Link>
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <WhatsAppButton />
          <CallButton />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
