'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function CircuitLineCanvas() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const nodeGlowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.3, 0.8, 1, 0.8, 0.5]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      <svg className="w-full h-full" viewBox="0 0 1000 4000" fill="none" preserveAspectRatio="none">
        
        {/* Main Circuit Backbone Line */}
        <motion.path
          d="M 500,0 L 500,400 L 150,750 L 150,1300 L 850,1750 L 850,2300 L 200,2850 L 200,3400 L 500,3800 L 500,4000"
          stroke="url(#circuit-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* Secondary Parallel Data Lines */}
        <motion.path
          d="M 520,50 L 520,380 L 170,730 L 170,1280 L 870,1730 L 870,2280 L 220,2830 L 220,3380 L 520,3780"
          stroke="#00D4FF"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          style={{ pathLength }}
          className="opacity-60"
        />

        {/* Circuit Nodes / Junction Points along the path */}
        <motion.circle cx="500" cy="400" r="8" fill="#FF5A1F" style={{ opacity: nodeGlowOpacity }} />
        <motion.circle cx="150" cy="750" r="7" fill="#00D4FF" style={{ opacity: nodeGlowOpacity }} />
        <motion.circle cx="150" cy="1300" r="7" fill="#00FF88" style={{ opacity: nodeGlowOpacity }} />
        <motion.circle cx="850" cy="1750" r="8" fill="#FF5A1F" style={{ opacity: nodeGlowOpacity }} />
        <motion.circle cx="850" cy="2300" r="7" fill="#00D4FF" style={{ opacity: nodeGlowOpacity }} />
        <motion.circle cx="200" cy="2850" r="8" fill="#00FF88" style={{ opacity: nodeGlowOpacity }} />
        <motion.circle cx="500" cy="3800" r="10" fill="#FF5A1F" style={{ opacity: nodeGlowOpacity }} />

        {/* Gradients */}
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="25%" stopColor="#00FF88" />
            <stop offset="50%" stopColor="#FF5A1F" />
            <stop offset="75%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
