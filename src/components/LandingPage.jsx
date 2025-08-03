import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/videos/uae.mp4"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 text-center space-y-4">
        <img src="/assets/logo.png" alt="NOOD" className="w-32 mx-auto" />
        <h1 className="text-4xl font-bold">NOOD International Properties</h1>
        <nav className="space-x-4">
          <Link to="/uae" className="hover:underline">UAE</Link>
          <Link to="/uk" className="hover:underline">UK</Link>
          <Link to="/usa" className="hover:underline">USA</Link>
          <Link to="/pakistan" className="hover:underline">Pakistan</Link>
          <Link to="/russia" className="hover:underline">Russia</Link>
        </nav>
      </div>
    </section>
  );
}
