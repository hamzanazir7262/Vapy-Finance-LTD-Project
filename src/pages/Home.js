// src/pages/Home.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Vapy Finance LTD
      </Typography>
      <Typography variant="h5" paragraph>
        We offer a variety of loan services to meet your needs. Apply for a loan today!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/apply-loan">
        Apply for a Loan
      </Button>
    </Box>
  );
};

export default Home;
