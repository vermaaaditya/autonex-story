'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function CircuitLineCanvas() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });
  const laserOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.4]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <svg className="w-full h-full" viewBox="0 0 1000 4000" fill="none" preserveAspectRatio="none">
        
        {/* Stream laser line */}
        <motion.path
          d="M 500,0 L 500,500 L 200,900 L 200,1500 L 800,2000 L 800,2600 L 300,3100 L 300,3600 L 500,3900 L 500,4000"
          stroke="url(#minimal-laser)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* Minimal Nodes */}
        <motion.circle cx="500" cy="500" r="5" fill="#38BDF8" style={{ opacity: laserOpacity }} />
        <motion.circle cx="200" cy="900" r="5" fill="#818CF8" style={{ opacity: laserOpacity }} />
        <motion.circle cx="800" cy="2000" r="5" fill="#C084FC" style={{ opacity: laserOpacity }} />
        <motion.circle cx="300" cy="3100" r="5" fill="#38BDF8" style={{ opacity: laserOpacity }} />
        <motion.circle cx="500" cy="3900" r="6" fill="#818CF8" style={{ opacity: laserOpacity }} />

        <defs>
          <linearGradient id="minimal-laser" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
