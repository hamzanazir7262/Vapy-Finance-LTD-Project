import React from 'react';
import { IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const CallButton = () => (
  <IconButton
    href="tel:+919160461166"
    color="primary"
  >
    <PhoneIcon />
  </IconButton>
);

export default CallButton;
