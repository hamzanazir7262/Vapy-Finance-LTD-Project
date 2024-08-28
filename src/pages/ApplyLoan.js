import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

const ApplyLoan = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    pincode: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then((response) => {
        setMessage({ text: 'Your application has been submitted successfully!', type: 'success' });
        setForm({ name: '', phone: '', city: '', pincode: '' }); // Clear form after successful submission
      })
      .catch((error) => {
        setMessage({ text: 'There was an error submitting your application. Please try again.', type: 'error' });
      });
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Full-width background image */}
      <Box
        component="img"
        src="toy-car-balancing-increasing-coin-stack_23-2147919110.avif" // Replace with your image URL
        alt="Cover"
        sx={{
          width: '100%',
          height: { xs: '50vh', md: '100vh' },
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      
      {/* Form starts from half of the image */}
      <Box
        sx={{
          position: 'relative',
          top: { xs: '20%', md: '50%' },
          left: { xs: '5%', md: '50%' },
          transform: { xs: 'translateY(-20%)', md: 'translate(-50%, -50%)' },
          width: { xs: '90%', md: '50%' },
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Apply for a Loans
        </Typography>
        {message.text && (
          <Alert severity={message.type} sx={{ mb: 2 }}>
            {message.text}
          </Alert>
        )}
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
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ApplyLoan;
