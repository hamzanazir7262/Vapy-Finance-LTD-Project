import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const LeadForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, city, pincode } = form;
    const subject = encodeURIComponent('Loan Application');
    const body = encodeURIComponent(
      `Name: ${name}\nPhone Number: ${phone}\nCity: ${city}\nPincode: ${pincode}`
    );
    const mailtoUrl = `mailto:info@vapyfinanceltd.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Box 
        sx={{ 
          position: 'relative', 
          height: 300, 
          overflow: 'hidden', 
          mb: 3,
          marginBottom:5,
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
          Apply for a Loan
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
          <Typography color="text.primary">apply-loan</Typography>
        </Breadcrumbs>
      </Box>
      <Box 
        sx={{ 
          maxWidth: 600, 
          mx: 'auto', 
          p: 3, 
          mt: -15, // Adjust to overlap the cover image if needed
          backgroundColor: 'white',
          marginBottom:5,
          borderRadius: 2,
          boxShadow: 3,
          position: 'relative', // Ensure that the form box has a higher z-index
          zIndex: 2 // Higher than the cover image
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={form.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            fullWidth
            margin="normal"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <TextField
            label="City"
            name="city"
            fullWidth
            margin="normal"
            value={form.city}
            onChange={handleChange}
            required
          />
          <TextField
            label="Pincode"
            name="pincode"
            type="number"
            fullWidth
            margin="normal"
            value={form.pincode}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="outlined"
            sx={{
              borderColor: 'black',
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
                borderColor: 'black'
              }
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default LeadForm;
