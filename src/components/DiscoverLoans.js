import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const loans = [
  {
    title: 'Car Loan',
    description: 'Get the best rates for your dream car.',
    imageUrl: 'toy-car-balancing-increasing-coin-stack_23-2147919110.avif',
  },
  {
    title: 'Home Loan',
    description: 'Finance your new home with ease.',
    imageUrl: 'unrecognizable-man-putting-money-jar_23-2147737937.avif',
  },
  {
    title: 'Personal Loan',
    description: 'Flexible personal loans for all your needs.',
    imageUrl: 'business-people-shaking-hands-finishing-up-meeting_1150-37745.avif',
  },
  {
    title: 'Business Loan',
    description: 'Grow your business with our customized loans.',
    imageUrl: 'happy-couple-having-meeting-with-real-estate-agent-analyzing-blueprints-while-communicating_637285-3822.avif',
  },
  {
    title: 'Credit Loans',
    description: 'Choose credit loan options to manage your expenses.',
    imageUrl: 'credit-score-financial-banking-economy-concept_53876-123705.avif',
  },
  {
    title: 'Loan Against Securities',
    description: 'Get loans by pledging your securities as collateral.',
    imageUrl: 'close-up-cash-mask-arrangement_23-2148773930.avif',
  },
];

const DiscoverLoans = () => (
  <Box sx={{ p: 4 }}>
    {/* Heading and Description */}
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Discover the Loan Services for You
      </Typography>
      <Typography variant="body1" color="textSecondary">
        PROVIDING HIGH-QUALITY SERVICES FOR ALL YOUR FINANCIAL NEEDS
      </Typography>
    </Box>

    {/* Loan Cards */}
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
      {loans.map((loan, index) => (
        <Card
          key={index}
          sx={{
            width: 300,
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={loan.imageUrl}
            alt={loan.title}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'opacity 0.3s',
              opacity: 0,
              zIndex: 2,
              '&:hover': { opacity: 1 },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                {loan.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/apply-loan"
                sx={{ backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}
              >
                Apply Loan
              </Button>
            </CardActions>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              color: 'white',
              zIndex: 1,
              transition: 'opacity 0.3s',
              opacity: 1,
           
            }}
          >
            <Typography variant="h6" component="div">
              {loan.title}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  </Box>
);

export default DiscoverLoans;
