'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Cpu, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import MeshDriftShader from './ui/MeshDriftShader';
import HolographicBeams from './ui/BeamsBackground';

export default function HeroSection({ onOpenJoin }) {
  const { scrollY } = useScroll();
  
  const textY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  // Staggered word animations
  const words = ["ZERO", "TO", "CIRCUIT"];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 overflow-hidden py-16 bg-[#030305]">
      
      {/* 1. Animated WebGL Mesh Drift Shader Background */}
      <MeshDriftShader />

      {/* 2. Holographic Light Beams Overlay */}
      <HolographicBeams density={20} speed={1.2} opacity={45} className="opacity-50" />

      {/* Ambient Gradient Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-transparent blur-[140px] pointer-events-none rounded-full z-10" />

      <motion.div 
        style={{ y: textY, opacity }} 
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 my-auto"
      >
        
        {/* Left Column: Headline & Subtitle */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Pill Badge */}
          <motion.div
            initial={{ filter: "blur(8px)", opacity: 0, y: 15 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-cyan-400 font-mono-code text-xs w-fit mb-6 shadow-md backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>1ST EVER ROBOTICS GUILD AT SIET PANCHKULA</span>
          </motion.div>

          {/* Staggered Blur-Fade Title */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 uppercase text-white drop-shadow-lg">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ filter: "blur(14px)", opacity: 0, y: 24 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className={`inline-block mr-4 ${idx === 2 ? 'text-gradient-accent drop-shadow-[0_0_40px_rgba(99,102,241,0.5)]' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ filter: "blur(8px)", opacity: 0, y: 15 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-sans font-medium drop-shadow-md"
          >
            The origin story of AUTONEX — building campus hardware culture from zero into a thriving 
            community of <strong className="text-white">Autonomous Robotics</strong>, <strong className="text-white">Industrial Automation</strong> & <strong className="text-white">Embedded Systems</strong>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenJoin}
              className="px-7 py-3.5 rounded-full bg-white text-black font-sans font-bold text-sm hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Join AUTONEX</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#problem"
              className="px-7 py-3.5 rounded-full bg-white/[0.08] border border-white/20 text-zinc-200 font-mono-code text-xs font-semibold hover:border-white hover:text-white backdrop-blur-md transition-colors"
            >
              Explore Narrative ➔
            </a>
          </motion.div>

        </div>

        {/* Right Column: Bento Code Block */}
        <motion.div
          initial={{ filter: "blur(14px)", opacity: 0, scale: 0.92 }}
          animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="bento-card rounded-2xl p-6 relative border-glow-indigo overflow-hidden">
            {/* Window Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span className="font-mono-code text-xs text-zinc-400 ml-2">autonex_robotics.py</span>
              </div>
              <Terminal className="w-4 h-4 text-indigo-400" />
            </div>

            {/* Code Body */}
            <div className="font-mono-code text-xs leading-relaxed space-y-2 text-zinc-300">
              <div className="text-zinc-500"># SIET Panchkula 1st Ever Robotics Club</div>
              <div><span className="text-cyan-400">import</span> <span className="text-indigo-300">autonex</span> <span className="text-cyan-400">as</span> <span className="text-white">ax</span></div>
              <div className="pt-2"><span className="text-amber-300">club</span> = ax.RoboticsGuild(<span className="text-emerald-300">"AUTONEX"</span>)</div>
              <div>club.add_domain(<span className="text-emerald-300">"Autonomous Robotics"</span>)</div>
              <div>club.add_domain(<span className="text-emerald-300">"Industrial Automation"</span>)</div>
              <div>club.add_domain(<span className="text-emerald-300">"Embedded Systems & IoT"</span>)</div>
              <div className="pt-2 text-indigo-400">▶ club.run()</div>
              <div className="text-emerald-400 font-semibold">✓ Status: ACTIVE BUILDERS (40+)</div>
              <div className="text-emerald-400 font-semibold">✓ Hardware Labs: ONLINE</div>
            </div>

            {/* Domain Badges */}
            <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-cyan-400 font-mono-code text-[11px] border border-white/10">
                🤖 Autonomous ROS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-indigo-400 font-mono-code text-[11px] border border-white/10">
                ⚙️ Industrial PLC
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-emerald-400 font-mono-code text-[11px] border border-white/10">
                🔌 ESP32 / STM32
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 font-mono-code text-xs text-zinc-400 hover:text-white transition-colors z-20"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-indigo-400" />
      </motion.a>

    </section>
  );
}
