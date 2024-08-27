import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => (
  <IconButton
    href="https://wa.me/919160461130"
    target="_blank"
    rel="noopener noreferrer"
    color="primary"
    sx={{ mr: 1 }}
  >
    <WhatsAppIcon />
  </IconButton>
);

export default WhatsAppButton;
