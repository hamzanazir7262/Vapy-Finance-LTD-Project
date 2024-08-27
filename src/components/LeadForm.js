import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

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
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Apply for a Loan
      </Typography>
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

export default LeadForm;
