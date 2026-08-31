'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Cpu, Zap, Terminal, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenJoin }) {
  const { scrollY } = useScroll();
  
  // Parallax transform multipliers
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 800], [0, 90]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 overflow-hidden py-16">
      
      {/* Parallax Background Glowing Orbs */}
      <motion.div 
        style={{ y: bgY }} 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#00D4FF]/15 via-[#FF5A1F]/15 to-transparent blur-[120px] pointer-events-none" 
      />

      {/* Main Container */}
      <motion.div 
        style={{ y: textY, opacity }} 
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto"
      >
        
        {/* Left Column: Headline & Subtitle */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/40 text-[#00D4FF] font-mono-code text-xs w-fit mb-6 shadow-[0_0_12px_rgba(0,212,255,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-ping" />
            <span>1ST EVER ROBOTICS GUILD AT SIET PANCHKULA</span>
          </motion.div>

          {/* Main Title: Zero to Circuit */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 uppercase text-white"
          >
            ZERO TO <br />
            <span className="text-orange-gradient drop-shadow-[0_0_35px_rgba(255,90,31,0.5)]">
              CIRCUIT
            </span>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-body"
          >
            The origin journey of AUTONEX — from zero hardware culture at campus to a thriving 
            guild of <strong className="text-[#00D4FF]">Autonomous Robotics</strong>, <strong className="text-[#00FF88]">Industrial Automation</strong> & <strong className="text-[#FF5A1F]">Embedded Systems</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenJoin}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#FFB800] to-[#00D4FF] text-black font-display font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,90,31,0.6)] hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Zap className="w-5 h-5 text-black fill-current" />
              JOIN THE GUILD
            </button>

            <a
              href="#problem"
              className="px-8 py-4 rounded-full bg-[#12121A] border border-white/20 text-white font-mono-code text-xs font-bold uppercase tracking-wider hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
            >
              READ OUR JOURNEY ➔
            </a>
          </motion.div>

        </div>

        {/* Right Column: Code Terminal Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="autonex-card rounded-2xl p-5 border-2 border-[#00D4FF]/40 relative shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-mono-code text-xs text-slate-400 ml-2">autonex_robotics.py</span>
              </div>
              <Terminal className="w-4 h-4 text-[#00D4FF]" />
            </div>

            {/* Terminal Content */}
            <div className="font-mono-code text-xs leading-relaxed space-y-2 text-slate-300">
              <div className="text-emerald-400"># SIET Panchkula 1st Ever Robotics Club</div>
              <div><span className="text-cyan-400">import</span> <span className="text-purple-300">autonex</span> <span className="text-cyan-400">as</span> <span className="text-white">ax</span></div>
              <div className="pt-2"><span className="text-yellow-300">club</span> = ax.RoboticsGuild(<span className="text-emerald-300">"AUTONEX"</span>)</div>
              <div>club.add_domain(<span className="text-emerald-300">"Autonomous Robotics"</span>)</div>
              <div>club.add_domain(<span className="text-emerald-300">"Industrial Automation"</span>)</div>
              <div>club.add_domain(<span className="text-emerald-300">"Embedded Systems & IoT"</span>)</div>
              <div className="pt-2 text-amber-400">▶ club.run()</div>
              <div className="text-emerald-400 font-bold">✓ Status: ACTIVE BUILDERS (40+)</div>
              <div className="text-emerald-400 font-bold">✓ Hardware Labs: ONLINE</div>
              <div className="text-cyan-400 font-bold">✓ Innovation: PIONEERING</div>
            </div>

            {/* Floating Domain Badges */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#00D4FF]/10 text-[#00D4FF] font-mono-code text-[11px] border border-[#00D4FF]/30">
                🤖 Autonomous ROS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#00FF88]/10 text-[#00FF88] font-mono-code text-[11px] border border-[#00FF88]/30">
                ⚙️ Industrial PLC
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#FF5A1F]/10 text-[#FF5A1F] font-mono-code text-[11px] border border-[#FF5A1F]/30">
                🔌 ESP32 / STM32
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 font-mono-code text-xs text-slate-400 hover:text-[#00D4FF] transition-colors"
      >
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 text-[#FF5A1F]" />
      </motion.a>

    </section>
  );
}
