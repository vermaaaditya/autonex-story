'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Cpu } from 'lucide-react';

export default function CtaSection({ onOpenJoin }) {
  return (
    <section id="cta" className="min-h-[85vh] flex flex-col justify-center items-center px-4 relative z-10 py-20 text-center">
      
      {/* Glow Spotlight */}
      <div className="absolute w-[600px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Main Container Card */}
      <motion.div
        initial={{ filter: "blur(12px)", opacity: 0, scale: 0.92 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full bento-card rounded-3xl p-8 sm:p-14 relative z-10 border-glow-indigo flex flex-col items-center shadow-2xl"
      >
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-400 font-mono-code text-xs mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>AUTONEX ROBOTICS GUILD • SIET PANCHKULA</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-none mb-6">
          CODE THE FUTURE. <br />
          <span className="text-gradient-accent">
            BUILD ROBOTICS.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed mb-10 font-sans font-medium">
          Whether you design ROS algorithms, build pneumatic actuators, program ESP32 firmware, or construct autonomous rovers — your journey starts here at AUTONEX.
        </p>

        {/* Button */}
        <button
          onClick={onOpenJoin}
          className="px-9 py-4 rounded-full bg-white text-black font-sans font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105 transition-all flex items-center gap-2"
        >
          <span>Apply to Guild Now</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        {/* Specs */}
        <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code text-zinc-500">
          <span>📍 SIET PANCHKULA</span>
          <span>•</span>
          <span>🤖 3 CORE DOMAINS</span>
          <span>•</span>
          <span>⚙️ HARDWARE LABS ONLINE</span>
        </div>

      </motion.div>
    </section>
  );
}
