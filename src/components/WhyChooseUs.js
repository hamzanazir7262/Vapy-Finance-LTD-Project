import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

const reasons = [
  { img: 'choose-1.png', title: 'Quick & Easy' },
  { img: 'choose-2.png', title: 'Absolute Security' },
  { img: 'choose-3.png', title: 'Quick Approval' },
  { img: 'choose-4.png', title: 'Low Interest Rates' },
  { img: 'choose-5.png', title: 'Personal Security' },
  { img: 'choose-6.png', title: 'Disbursement Day' },
];

const WhyChooseUs = () => {
  return (
    <Container sx={{ marginBottom: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6,marginBottom:14 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
          Why People Choose Us
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {reasons.map((reason, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{marginBottom:10}}>
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
                p: 4, // Increased padding inside the box
                boxShadow: 3,
                borderRadius: 2,
                overflow: 'visible', // Allows the image to overflow out of the box
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Box
                component="img"
                src={reason.img}
                alt={reason.title}
                sx={{
                  position: 'absolute',
                  top: '-40%', // Adjusted to fit better inside and outside
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px', // Adjusted size for better visibility
                  height: 'auto', // Maintains aspect ratio
                  zIndex: 1,
                 
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  mt: '60px', // Margin-top adjusted to make room for the image
                  zIndex: 0,
                }}
              >
                <Typography variant="h6" component="h5" sx={{ mb: 1 }}>
                  {reason.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
