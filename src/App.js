
import React, { useState } from 'react';
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

function App() {
  const [current, setCurrent] = useState(0);

  const nextVideo = () => setCurrent((current + 1) % videos.length);
  const prevVideo = () => setCurrent((current - 1 + videos.length) % videos.length);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--gradient-bg)' }}>
      <div className="wellwish-card" style={{ maxWidth: 520, width: '95%' }}>
        <h1 className="wellwish-title" style={{ fontSize: '2.7rem', marginBottom: 20 }}>Wellwish</h1>
        <p className="wellwish-desc" style={{ fontSize: '1.25rem', marginBottom: 28 }}>{description}</p>
        <a
          href="https://drive.google.com/file/d/11Xt_vGG-m6JRy_RGBwMx1oLLGYV-e59i/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="wellwish-download"
          style={{ fontSize: '1.2rem', padding: '14px 36px', marginBottom: 32 }}
        >
          Download Wellwish
        </a>
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
            <button onClick={prevVideo} className="wellwish-carousel-btn" style={{ fontSize: '1.1rem', padding: '10px 20px' }}>Prev</button>
            <span className="wellwish-carousel-index" style={{ fontSize: '1.15rem' }}>{current + 1} / {videos.length}</span>
            <button onClick={nextVideo} className="wellwish-carousel-btn" style={{ fontSize: '1.1rem', padding: '10px 20px' }}>Next</button>
          </div>
        </div>
      </div>
      <footer className="wellwish-footer" style={{ fontSize: 16, marginTop: 32 }}>
        © {new Date().getFullYear()} Wellwish. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
