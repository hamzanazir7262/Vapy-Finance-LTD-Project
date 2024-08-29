// src/pages/ContactUs.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Breadcrumbs, Link as MuiLink } from '@mui/material';
import WhatsAppButton from '../components/WhatsAppButton';
import CallButton from '../components/CallButton';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Box
            sx={{
              position: 'relative',
              height: 300,
              overflow: 'hidden',
              mb: 3,
              backgroundImage: `url('breadcrumb-bg.jpg')`, // Replace with your cover image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'inherit',
                backgroundSize: 'inherit',
                backgroundPosition: 'inherit',
                filter: 'blur(15px)',
                zIndex: 0,
                opacity: 0.6
              }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                zIndex: 1
              }}
            >
              Contact us for more details
            </Typography>
            <Breadcrumbs
              separator=">"
              aria-label="breadcrumb"
              sx={{
                mt: 1,
                textAlign: 'center',
                color: 'white',
                zIndex: 1
              }}
            >
              <MuiLink color="inherit" component={Link} to="/">Home</MuiLink>
              <Typography color="text.primary">Contact Us</Typography>
            </Breadcrumbs>
          </Box>
          
          <Box sx={{ p: 4 }}>
            {/* Heading */}
            {/* <Typography variant="h2" gutterBottom align="center">
              Contact Us
            </Typography> */}

            {/* Content Section */}
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  Get in Touch with Us
                </Typography>
                <Typography variant="body1" paragraph>
                  We're here to assist you with any questions or concerns you might have. Whether you need information about our services, assistance with your loan application, or anything else, feel free to reach out to us through the contact methods below.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our team is committed to providing prompt and helpful responses to all inquiries. Don’t hesitate to get in touch, and we'll do our best to assist you as quickly as possible.
                </Typography>
                {/* Contact Buttons */}
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <WhatsAppButton />
                  <CallButton />
                </Box>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/annoyed-young-businessman-speaking-phone-office-background_176420-5244.avif" // Replace with your image URL in the public folder
                    alt="Contact Us"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      We're just a call or message away. Reach out to us for any inquiries or support.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Contact Buttons */}
            {/* <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <WhatsAppButton />
              <CallButton />
            </Box> */}
          </Box>
        </>
      )}
    </>
  );
};

export default ContactUs;
