// src/pages/Services.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

// Dummy data for the services with images
const services = [
  {
    title: 'Car Loans',
    description: 'Get the best car loan options with low interest rates. Enjoy flexible repayment terms and fast approval processes. Our car loans are designed to fit your budget and help you get on the road quickly.',
    imageUrl: 'toy-car-balancing-increasing-coin-stack_23-2147919110.avif', // Replace with your image URL
  },
  {
    title: 'Home Loans',
    description: 'Find home loans with flexible terms and conditions. Whether you’re buying your first home or refinancing your existing mortgage, we offer competitive rates and personalized service.',
    imageUrl: 'unrecognizable-man-putting-money-jar_23-2147737937.avif', // Replace with your image URL
  },
  {
    title: 'Personal Loans',
    description: 'Access personal loans for any financial need. From debt consolidation to emergency expenses, our personal loans come with low rates and simple application processes.',
    imageUrl: 'business-people-shaking-hands-finishing-up-meeting_1150-37745.avif', // Replace with your image URL
  },
  {
    title: 'Business Loans',
    description: 'Secure loans to grow your business and expand operations. We provide financing for startups, established businesses, and everything in between. Get the capital you need to achieve your goals.',
    imageUrl: 'happy-couple-having-meeting-with-real-estate-agent-analyzing-blueprints-while-communicating_637285-3822.avif', // Replace with your image URL
  },
  {
    title: 'Credit Loans',
    description: 'Choose from various credit loan options to manage your expenses. Our credit loans offer flexibility and competitive rates to help you meet your financial needs efficiently.',
    imageUrl: 'credit-score-financial-banking-economy-concept_53876-123705.avif', // Replace with your image URL
  },
  {
    title: 'Loan Against Securities',
    description: 'Get loans by pledging your securities as collateral. This option provides quick access to funds with favorable terms, allowing you to leverage your investments for immediate needs.',
    imageUrl: 'close-up-cash-mask-arrangement_23-2148773930.avif', // Replace with your image URL
  },
];

const Services = () => {
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
        <Box>
          {/* Cover Image and Breadcrumb */}
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
              Main Loan Services
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
              <Typography color="text.primary">Services</Typography>
            </Breadcrumbs>
          </Box>

          <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
            <Typography variant="h4" gutterBottom align="center">
              Our Services
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We offer a range of loan services to meet your financial needs. Explore our services below to find the perfect loan solution for you.
            </Typography>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.imageUrl}
                      alt={service.title}
                    />
                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="h6" component="div" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 4,
                          lineClamp: 4
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        variant="outlined" // Transparent button
                        sx={{
                          mt: 2,
                          borderColor: 'black',
                          color: 'black',
                          '&:hover': {
                            backgroundColor: 'black',
                            color: 'white'
                          }
                        }}
                        component={Link}
                        to="/apply-loan"
                      >
                        Apply for a Loan
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Services;
