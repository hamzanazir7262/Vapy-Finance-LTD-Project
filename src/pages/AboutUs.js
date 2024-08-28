// src/pages/AboutUs.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const AboutUs = () => {
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
              backgroundImage: `url('macro-shot-financial-concept_53876-14671.avif')`, // Replace with your cover image URL
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
              About Us
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
              <Typography color="text.primary">About Us</Typography>
            </Breadcrumbs>
          </Box>
          <Box sx={{ p: 4 }}>
            {/* Heading */}
            {/* <Typography variant="h2" gutterBottom align="center">
              About Us
            </Typography> */}

            {/* Content Section */}
            <Grid container spacing={4} alignItems="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  Welcome to Vapy Finance LTD
                </Typography>
                <Typography variant="body1" paragraph>
                  At Vapy Finance LTD, we are dedicated to providing personalized financial solutions. With a team of experienced professionals, we strive to offer the best loan services tailored to your needs.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our mission is to help you achieve your financial goals with ease and confidence. Explore our loan options and get in touch with us for any inquiries.
                </Typography>
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/smart-discussing-meeting-report-phone_1150-1775.avif" // Replace with the correct path to your image in the public folder
                    alt="Finance"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      Providing reliable financial services with a focus on customer satisfaction.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          
          {/* New Section */}
          <Box sx={{ p: 4 }}>
            <Grid container spacing={4}>
              {/* Vision Section */}
              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  By providing competitive interest rates and flexible repayment options, we aim to make financial empowerment a reality for everyone. With years of experience in the financial industry, we are a name you can trust.
                </Typography>
              </Grid>

              {/* Mission Section */}
              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  Our mission is to offer fast, easy, and hassle-free gold loan services to our clients. We understand the urgency of financial needs, and our streamlined processes ensure that you get the funds you need without any delay.
                </Typography>
              </Grid>

              {/* Values Section */}
              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  Our Values
                </Typography>
                <Typography variant="body1">
                  We adhere to the highest ethical standards in all our dealings. We prioritize our customers’ needs and strive to exceed their expectations. We continuously seek innovative solutions to improve our services and customer experience.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default AboutUs;
