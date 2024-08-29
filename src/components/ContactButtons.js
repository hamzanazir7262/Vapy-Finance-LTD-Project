import React from 'react';
import './styles/styles.css'; // Correct import path
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
const ContactButtons = () => {
  return (
    <div className="contact-buttons-wrapper">
      <a
        href="https://wa.me/919160461130"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button contact-button-whatsapp"
      >
        <IconButton color="success">
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </a>
      <a
        href="tel:+919160461166"
        className="contact-button contact-button-call"
      >
          <IconButton color="primary">
          <PhoneIcon fontSize="large" />
        </IconButton>
      </a>
    </div>
  );
};

export default ContactButtons;
