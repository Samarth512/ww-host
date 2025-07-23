import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FeatureCard = ({ title, points }) => {
  return (
    <Card elevation={6} sx={{ borderRadius: 4, background: 'rgba(255,255,255,0.97)', boxShadow: '0 4px 24px rgba(67,160,71,0.10)', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 8px 32px rgba(67,160,71,0.18)' } }}>
      <CardContent>
        <Typography variant="h6" fontWeight={700} sx={{ color: 'primary.main', mb: 2 }}>{title}</Typography>
        <Box component="ul" sx={{ pl: 2, color: '#388e3c', fontSize: 16, m: 0 }}>
          {points.map((point, i) => (
            <Box component="li" key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
              <Box component="span" sx={{ color: 'primary.main', mr: 1, mt: '2px' }}>✔</Box>
              <span>{point}</span>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard; 