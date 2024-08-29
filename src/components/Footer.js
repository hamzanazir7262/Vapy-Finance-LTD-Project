// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, Grid, Container } from '@mui/material';
import WhatsAppButton from './WhatsAppButton';
import CallButton from './CallButton';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => (
  <>
    <Box
      sx={{
        backgroundImage: 'url("/contact-widget.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 0',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white' }}>
              <Typography variant="h4" gutterBottom>
                Feel free to Contact Us
              </Typography>
              <Typography variant="body1">
                We are here to assist you with all your gold loan needs. Visit our nearest branch or contact us through our website or customer service helpline. Let us help you achieve your financial goals with ease and confidence.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white', textAlign: 'center' }}>
              <Typography variant="subtitle1">Contact Us Now!</Typography>
              <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, fontSize: 16 }}>
                <PhoneIcon sx={{ fontSize: '16', mr: 2 }} />
                (+91) 91604 61130
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    <Box sx={{ backgroundColor: '#182143', color: 'white', p: 4 }}>
      <Container>
        <Grid container spacing={3} sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1">
              Phone: +919160461130, +919160461166
              <br />
              Email: <Link href="mailto:info@vapyfinanceltd.com" color="inherit">info@vapyfinanceltd.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Pages
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="none">
                Home
              </Link>
              <Link href="/about-us" color="inherit" underline="none">
                About Us
              </Link>
              <Link href="/services" color="inherit" underline="none">
                Services
              </Link>
              <Link href="/contact-us" color="inherit" underline="none">
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Call Us
            </Typography>
            <Box sx={{  }}>
              <WhatsAppButton />
              <CallButton />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Footer;
