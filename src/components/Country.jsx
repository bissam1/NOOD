import { motion } from 'framer-motion';

export default function Country({ video, title, children }) {
  return (
    <motion.section
      className="relative min-h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <video className="absolute inset-0 w-full h-full object-cover" src={video} autoPlay muted loop />
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {children}
      </div>
    </motion.section>
  );
}
