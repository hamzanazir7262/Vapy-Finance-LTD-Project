import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';


// Dummy data for the services
const services = [
  {
    title: 'Car Loans',
    description: 'Get the best car loan options with low interest rates.',
  },
  {
    title: 'Home Loans',
    description: 'Find home loans with flexible terms and conditions.',
  },
  {
    title: 'Personal Loans',
    description: 'Access personal loans for any financial need.',
  },
  {
    title: 'Business Loans',
    description: 'Secure loans to grow your business and expand operations.',
  },
  {
    title: 'Credit Loans',
    description: 'Choose from various credit loan options to manage your expenses.',
  },
  {
    title: 'Loan Against Securities',
    description: 'Get loans by pledging your securities as collateral.',
  },
];

const Services = () => {


  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/apply-loan">
        Apply for a Loan
      </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
