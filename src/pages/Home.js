// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import DiscoverLoans from '../components/DiscoverLoans';
import Loader from '../components/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Box sx={{ position: 'relative', textAlign: 'center', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {/* Full-width background image */}
            <Box
              component="img"
              src="business-man-show-money-bank-note-make-financial-plan-invite-people-sell-buy-house-car-monetary-properties-loan-credit-insurance-concept.jpg"
              alt="Background"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            />

            {/* Overlay content */}
            <Box sx={{ position: 'relative', textAlign: 'center', maxWidth: '800px', p: 4 }}>
              <Typography variant="h2" gutterBottom>
                Welcome to Vapy Finance LTD
              </Typography>
              <Typography variant="h5" paragraph>
                We offer a variety of loan services to meet your needs. Apply for a loan today!
              </Typography>
              
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    color: 'white',
                    borderColor: 'black',
                    backgroundColor: 'black',
                    '&:hover': {
                      backgroundColor: 'black', // Maintain the background color on hover
                      borderColor: 'black', // Maintain the border color on hover
                      boxShadow: 'none', // Remove shadow if present
                    },
                  }}
                  component={Link}
                  to="/services"
                >
                  Our Services
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'black',
                    borderColor: 'black',
                    '&:hover': {
                      // backgroundColor: 'black', // Maintain the background color on hover
                      borderColor: 'black', // Maintain the border color on hover
                      boxShadow: 'none', // Remove shadow if present
                    },
                  }}
                  component={Link}
                  to="/contact-us"
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Box>
          
          {/* New Section */}
          <Box sx={{ p: 4, backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {/* Text Section */}
              <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                <Typography variant="h4" gutterBottom>
                  Discover Our Vision
                </Typography>
                <Typography variant="body1" paragraph>

                Certainly! Here's a revised paragraph:

At Vapy Finance LTD, our commitment lies in offering financial solutions that are as unique as our clients. We understand that each individual's financial needs are distinct, and that’s why we tailor our services to provide personalized support. Whether you're seeking to manage your finances more effectively, secure a loan that fits your specific requirements, or explore new financial opportunities, we are here to guide you every step of the way. Discover how our expertise and customized approach can help you reach your financial goals with confidence and ease. Learn more about our vision and how we can partner with you to achieve lasting financial success.                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: 'white',
                    borderColor: 'black',
                    backgroundColor: 'black',
                    '&:hover': {
                      // backgroundColor: 'black', // Maintain the background color on hover
                      borderColor: 'black', // Maintain the border color on hover
                      boxShadow: 'none', // Remove shadow if present
                    },
                  }}
                  component={Link}
                  to="/about-us"
                >
                  Learn More
                </Button>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src="man-working-office-holding-money-with-laptop-documents-desk_1150-52076.jpg" // Replace with the correct path to your image in the public folder
                  alt="Vision"
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          
          <DiscoverLoans />
        </>
      )}
    </>
  );
};

export default Home;
