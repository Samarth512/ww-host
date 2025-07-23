import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={4} sx={{ bgcolor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', boxShadow: '0 2px 16px rgba(67,160,71,0.10)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, md: 6 } }}>
        <Typography variant="h5" fontWeight={900} sx={{ letterSpacing: '-1px', display: 'flex', alignItems: 'center' }}>
          <Box component="span" sx={{ color: 'primary.main', mr: 0.5 }}>Well</Box>
          <Box component="span" sx={{ color: '#1b5e20' }}>wish</Box>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button href="#features" color="inherit" sx={{ color: '#388e3c', fontWeight: 600, '&:hover': { color: 'primary.main' } }}>Features</Button>
          <Button href="#download" color="inherit" sx={{ color: '#388e3c', fontWeight: 600, '&:hover': { color: 'primary.main' } }}>Download</Button>
          <Button href="#contact" color="inherit" sx={{ color: '#388e3c', fontWeight: 600, '&:hover': { color: 'primary.main' } }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 