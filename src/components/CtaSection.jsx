'use client';
import { motion } from 'framer-motion';
import { Zap, Cpu, ArrowRight, Sparkles } from 'lucide-react';

export default function CtaSection({ onOpenJoin }) {
  return (
    <section id="cta" className="min-h-[85vh] flex flex-col justify-center items-center px-4 relative z-10 py-20 text-center">
      
      {/* Background Radial Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#FF5A1F]/20 via-[#00D4FF]/20 to-transparent blur-[100px] pointer-events-none" />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full autonex-card-orange rounded-3xl p-8 sm:p-14 relative z-10 border-2 border-[#FF5A1F] shadow-[0_0_50px_rgba(255,90,31,0.3)] flex flex-col items-center"
      >
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#FF5A1F] text-[#FF5A1F] font-mono-code text-xs mb-6 shadow-[0_0_12px_#FF5A1F]">
          <Sparkles className="w-4 h-4 text-[#FFB800] animate-spin" />
          <span>AUTONEX ROBOTICS GUILD • SIET PANCHKULA</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-none mb-6">
          CODE THE FUTURE. <br />
          <span className="text-orange-gradient drop-shadow-[0_0_30px_rgba(255,90,31,0.6)]">
            BUILD ROBOTICS.
          </span>
        </h2>

        {/* Paragraph Description */}
        <p className="max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed mb-10 font-body">
          Whether you design ROS algorithms, build pneumatic actuators, program ESP32 firmware, or construct autonomous rovers — your journey starts here at AUTONEX.
        </p>

        {/* Single CTA Button */}
        <button
          onClick={onOpenJoin}
          className="px-10 py-5 rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#FFB800] to-[#00D4FF] text-black font-display font-black text-base uppercase tracking-wider shadow-[0_0_40px_rgba(255,90,31,0.7)] hover:scale-105 transition-transform flex items-center gap-3 group"
        >
          <Zap className="w-6 h-6 text-black fill-current group-hover:rotate-12 transition-transform" />
          <span>JOIN AUTONEX NOW</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Secondary Info */}
        <div className="mt-8 pt-6 border-t border-slate-800 w-full flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code text-slate-400">
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
