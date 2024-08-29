import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const isActive = (path) => {
    const baseStyle = { textDecoration: 'none', color: 'black' };
    const activeStyle = {
      textDecoration: 'none',
      color: 'black',
      borderBottom: '3px solid yellow', 
      fontWeight: 'bold',
    };

    return location.pathname === path ? activeStyle : baseStyle;
  };

  return (
    <>
     <Box sx={{ backgroundColor: '#182143', padding: '5px 20px', display: 'flex', alignItems: 'center' }}>
        <PhoneIcon sx={{ color: '#dba722', mr: 1 }} />
        <Typography variant="body2" sx={{ color: 'white', mr: 3 }}>
          +919160461130
        </Typography>
        <EmailIcon sx={{ color: '#dba722', mr: 1 }} />
        <Typography variant="body2" sx={{ color: 'white' }}>
          info@vapyfinanceltd.com
        </Typography>
      </Box>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img
              src="/IMG_20240725_221904 (1).png"
              alt="Vapy Finance LTD Logo"
              style={{ height: 40 }} // Adjust the height as needed
            />
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
            Vapy Finance LTD
          </Typography>
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} to="/" style={isActive('/')}>Home</Button>
            <Button component={Link} to="/about-us" style={isActive('/about-us')}>About Us</Button>
            <Button component={Link} to="/contact-us" style={isActive('/contact-us')}>Contact Us</Button>
            <Button component={Link} to="/services" style={isActive('/services')}>Services</Button>
            <Button component={Link} to="/apply-loan" style={isActive('/apply-loan')}>Apply Loan</Button>
          </Box>
          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="menu"
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)} style={isActive('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about-us" onClick={toggleDrawer(false)} style={isActive('/about-us')}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button component={Link} to="/contact-us" onClick={toggleDrawer(false)} style={isActive('/contact-us')}>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem button component={Link} to="/services" onClick={toggleDrawer(false)} style={isActive('/services')}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button component={Link} to="/apply-loan" onClick={toggleDrawer(false)} style={isActive('/apply-loan')}>
            <ListItemText primary="Apply Loan" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
