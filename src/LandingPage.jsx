import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing">
      <div className="video-bg">
        <video autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay">
        <img src="/logo.jpg" alt="NOOD Logo" className="logo" />
        <h1 className="tagline">NOOD International Properties</h1>
        <p className="sub">Redefining Real Estate Globally</p>
        <div className="nav-links">
          <Link to="/united-arab-emirates">🇦🇪 United Arab Emirates</Link>
          <Link to="/united-kingdom">🇬🇧 United Kingdom</Link>
          <Link to="/united-states">🇺🇸 United States</Link>
          <Link to="/russia">🇷🇺 Russia</Link>
          <Link to="/pakistan">🇵🇰 Pakistan</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
