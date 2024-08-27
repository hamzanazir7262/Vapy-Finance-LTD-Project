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
    console.log('click:');
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Success:', response);
        setMessage({ text: 'Your application has been submitted successfully!', type: 'success' });
        setForm({ name: '', phone: '', city: '', pincode: '' }); // Clear form after successful submission
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage({ text: 'There was an error submitting your application. Please try again.', type: 'error' });
      });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Apply for a Loan
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
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ApplyLoan;
