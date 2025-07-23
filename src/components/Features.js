import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FeatureCard from './FeatureCard';

const featuresData = [
    {
      title: "Medical Chatbot",
      points: [
        "Discuss symptoms and get medical advice.",
        "Build personalized diet schedules.",
        "Updates tables with user-provided info (e.g., medications, dietary restrictions)."
      ]
    },
    {
      title: "Doctor & Mental Health Directory",
      points: [
        "Browse a database of healthcare professionals.",
        "Book appointments with available doctors or mental health specialists based on their slots."
      ]
    },
    {
      title: "Reminder System",
      points: [
        "Set reminders for medications, appointments, or any important tasks."
      ]
    },
    {
      title: "Emergency SOS Feature",
      points: [
        "Triggers when the SOS button is pressed or if the device experiences a fall.",
        "Sends an SMS with the user’s location to emergency contacts."
      ]
    },
    {
      title: "Anonymous Private Bot Sessions",
      points: [
        "Private sessions with the chatbot for discussing sensitive issues.",
        "Emotional chart feature to track and manage emotional well-being."
      ]
    },
    {
      title: "Anonymous Chatrooms",
      points: [
        "Engage with other users anonymously, providing a space for community support."
      ]
    },
    {
      title: "Breathing Exercise Pages",
      points: [
        "Helps users practice relaxation through guided breathing exercises."
      ]
    },
    {
      title: "User Authentication",
      points: [
        "Secure login using Firebase with Google Authentication."
      ]
    }
  ];
  

const Features = () => {
  return (
    <Box id="features" sx={{ py: 10, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight={800} align="center" sx={{ mb: 6 }}>
          <Box component="span" sx={{ color: 'primary.main' }}>App</Box>{' '}
          <Box component="span" sx={{ color: '#1b5e20' }}>Features</Box>
        </Typography>
        <Grid container spacing={4}>
          {featuresData.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <FeatureCard title={feature.title} points={feature.points} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 