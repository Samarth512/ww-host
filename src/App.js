
import React, { useState } from 'react';
import { Card, CardContent } from "@shadcn/ui/card";
import { Button } from "@shadcn/ui/button";
import './App.css';

const videos = [
  require('./assets/home.mp4'),
  require('./assets/medical.mp4'),
  require('./assets/mental.mp4'),
  require('./assets/quick.mp4'),
  require('./assets/social.mp4'),
  require('./assets/sos.mp4'),
];

const description = `Wellwish – Your Personal Health Companion\n\nWellwish is an all-in-one health management app built with Flutter and Firebase to help you stay on top of your physical and mental well-being. Chat with an AI medical assistant to discuss symptoms, create diet plans, and manage medications. Book appointments with verified doctors and mental health professionals, set reminders for meds or tasks, and stay safe with an SOS alert system that shares your location during emergencies.\n\nJoin anonymous chatrooms for community support, track your emotional health, and explore guided breathing exercises for relaxation — all in one secure, user-friendly app.`;

const features = [
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

function App() {
  const [current, setCurrent] = useState(0);

  const nextVideo = () => setCurrent((current + 1) % videos.length);
  const prevVideo = () => setCurrent((current - 1 + videos.length) % videos.length);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--gradient-bg)' }}>
      <Card className="wellwish-card" style={{ maxWidth: 540, width: '95%', marginTop: 40, marginBottom: 32, boxShadow: '0 8px 32px rgba(67,160,71,0.18)' }}>
        <CardContent>
          <h1 className="wellwish-title" style={{ fontSize: '2.7rem', marginBottom: 20 }}>Wellwish</h1>
          <p className="wellwish-desc" style={{ fontSize: '1.25rem', marginBottom: 28 }}>{description}</p>
          <Button asChild size="lg" style={{ fontSize: '1.2rem', padding: '14px 36px', marginBottom: 32, background: 'linear-gradient(90deg, #43a047 60%, #a5d6a7 100%)', color: '#fff', fontWeight: 700, boxShadow: '0 2px 8px rgba(67,160,71,0.12)' }}>
            <a
              href="https://drive.google.com/file/d/11Xt_vGG-m6JRy_RGBwMx1oLLGYV-e59i/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Wellwish
            </a>
          </Button>
          <div className="wellwish-carousel">
            <div className="wellwish-video-wrapper" style={{ maxWidth: 420, margin: '0 auto' }}>
              <video
                key={current}
                src={videos[current]}
                controls
                className="wellwish-video"
                style={{ maxHeight: 260 }}
              />
            </div>
            <div className="wellwish-carousel-controls">
              <Button onClick={prevVideo} className="wellwish-carousel-btn" size="sm" style={{ fontSize: '1.1rem', padding: '10px 20px' }}>Prev</Button>
              <span className="wellwish-carousel-index" style={{ fontSize: '1.15rem' }}>{current + 1} / {videos.length}</span>
              <Button onClick={nextVideo} className="wellwish-carousel-btn" size="sm" style={{ fontSize: '1.1rem', padding: '10px 20px' }}>Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <section style={{ width: '100%', maxWidth: 1100, margin: '0 auto', marginBottom: 40 }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 800, marginBottom: 32, color: 'var(--primary-green)', letterSpacing: '-1px' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 28 }}>
          {features.map((feature, idx) => (
            <Card key={feature.title} style={{ borderRadius: 20, boxShadow: '0 4px 24px rgba(67,160,71,0.10)', background: 'rgba(255,255,255,0.95)', padding: 0 }}>
              <CardContent style={{ padding: '28px 20px' }}>
                <h3 style={{ color: 'var(--primary-green)', fontSize: '1.25rem', fontWeight: 700, marginBottom: 12 }}>{feature.title}</h3>
                <ul style={{ paddingLeft: 18, margin: 0, color: '#388e3c', fontSize: '1.08rem', lineHeight: 1.6 }}>
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="wellwish-footer" style={{ fontSize: 16, marginTop: 32 }}>
        © {new Date().getFullYear()} Wellwish. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
