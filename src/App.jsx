import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage.jsx';
import Preloader from './components/Preloader.jsx';
import Cursor from './components/Cursor.jsx';
import UnitedArabEmirates from './pages/UnitedArabEmirates.jsx';
import UnitedKingdom from './pages/UnitedKingdom.jsx';
import UnitedStates from './pages/UnitedStates.jsx';
import Pakistan from './pages/Pakistan.jsx';
import Russia from './pages/Russia.jsx';

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading && <Cursor />}
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <AnimatePresence mode="wait">
        {!loading && (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/uae" element={<UnitedArabEmirates />} />
            <Route path="/uk" element={<UnitedKingdom />} />
            <Route path="/usa" element={<UnitedStates />} />
            <Route path="/pakistan" element={<Pakistan />} />
            <Route path="/russia" element={<Russia />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
}
