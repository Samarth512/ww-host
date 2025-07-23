import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', mt: 8, py: 4, boxShadow: '0 -2px 16px rgba(67,160,71,0.10)' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ color: '#388e3c' }}>
          &copy; {new Date().getFullYear()} Wellwish. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button href="#" color="inherit" sx={{ color: '#388e3c', fontWeight: 500, textTransform: 'none', '&:hover': { color: 'primary.main' } }}>Privacy Policy</Button>
          <Button href="#" color="inherit" sx={{ color: '#388e3c', fontWeight: 500, textTransform: 'none', '&:hover': { color: 'primary.main' } }}>Terms of Service</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 