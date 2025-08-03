import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import UnitedArabEmirates from './pages/UnitedArabEmirates';
import UnitedKingdom from './pages/UnitedKingdom';
import UnitedStates from './pages/UnitedStates';
import Russia from './pages/Russia';
import Pakistan from './pages/Pakistan';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/united-arab-emirates" element={<UnitedArabEmirates />} />
        <Route path="/united-kingdom" element={<UnitedKingdom />} />
        <Route path="/united-states" element={<UnitedStates />} />
        <Route path="/russia" element={<Russia />} />
        <Route path="/pakistan" element={<Pakistan />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
