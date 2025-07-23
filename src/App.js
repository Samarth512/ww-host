
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';

const App = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 50%, #43a047 100%)', fontFamily: 'Inter, sans-serif', color: '#1b5e20', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Box sx={{ py: { xs: 8, md: 12 }, textAlign: 'center', background: 'rgba(255,255,255,0.85)', boxShadow: '0 8px 32px rgba(67,160,71,0.18)', borderRadius: 6, mx: { xs: 2, md: 'auto' }, maxWidth: 900, mt: 6 }}>
          <Typography variant="h2" component="h1" fontWeight={900} sx={{ fontSize: { xs: 36, md: 56 }, mb: 2, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            <Box component="span" sx={{ color: 'primary.main', background: 'linear-gradient(90deg, #43a047 30%, #a5d6a7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Personal</Box>{' '}
            <Box component="span" sx={{ color: '#1b5e20' }}>Health Companion</Box>
          </Typography>
          <Typography variant="h6" sx={{ color: '#388e3c', maxWidth: 600, mx: 'auto', mb: 4 }}>
            Wellwish is an all-in-one health management app to help you stay on top of your physical and mental well-being.
          </Typography>
          <Button
            href="https://drive.google.com/file/d/11Xt_vGG-m6JRy_RGBwMx1oLLGYV-e59i/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            variant="contained"
            sx={{
              fontWeight: 700,
              fontSize: 20,
              px: 5,
              py: 1.5,
              borderRadius: 8,
              background: 'linear-gradient(90deg, #43a047 60%, #a5d6a7 100%)',
              color: '#fff',
              boxShadow: '0 2px 8px rgba(67,160,71,0.12)',
              '&:hover': {
                background: 'linear-gradient(90deg, #388e3c 60%, #a5d6a7 100%)',
                boxShadow: '0 4px 16px rgba(67,160,71,0.18)',
              },
              mb: 2
            }}
          >
            Download Now
          </Button>
        </Box>
        <Features />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
