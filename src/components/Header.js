import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const isActive = (path) => {
    const baseStyle = { textDecoration: 'none' };
    const activeStyle = { textDecoration: 'underline' };

    if (drawerOpen) {
      return location.pathname === path
        ? { ...baseStyle, color: 'black', ...activeStyle }
        : { ...baseStyle, color: 'black' };
    }

    return location.pathname === path
      ? { ...baseStyle, color: 'white', ...activeStyle }
      : { ...baseStyle, color: 'white' };
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img
              src="/IMG_20240725_221904 (1).png"
              alt="Vapy Finance LTD Logo"
              style={{ height: 40 }} // Adjust the height as needed
            />
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Vapy Finance LTD
          </Typography>
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/" style={isActive('/')}>Home</Button>
            <Button color="inherit" component={Link} to="/about-us" style={isActive('/about-us')}>About Us</Button>
            <Button color="inherit" component={Link} to="/contact-us" style={isActive('/contact-us')}>Contact Us</Button>
            <Button color="inherit" component={Link} to="/services" style={isActive('/services')}>Services</Button>
            <Button color="inherit" component={Link} to="/apply-loan" style={isActive('/apply-loan')}>Apply Loan</Button>
          </Box>
          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="menu"
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
