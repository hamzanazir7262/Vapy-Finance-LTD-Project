// src/components/Loader.js
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black background with slight transparency
        zIndex: 9999,
      }}
    >
      <CircularProgress sx={{ color: 'white' }} />
    </Box>
  );
};

export default Loader;
