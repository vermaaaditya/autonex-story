'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ChevronDown, Terminal, ArrowUpRight } from 'lucide-react';

// Lazy load WebGL shader background
const DynamicMeshShader = dynamic(() => import('./ui/MeshDriftShader'), {
  ssr: false
});

export default function HeroSection({ onOpenJoin }) {
  const words = ["4 GUYS.", "1 VISION.", "AUTONEX."];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 overflow-hidden py-16 bg-[#030305]">
      
      {/* WebGL Shader Backdrop */}
      <DynamicMeshShader />

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full z-10" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 my-auto">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-cyan-400 font-mono-code text-xs w-fit mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>HOW SIET PANCHKULA'S 1ST CLUB WAS BORN</span>
          </motion.div>

          {/* Staggered Title */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 uppercase text-white">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, filter: "blur(14px)", y: 24 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.14 }}
                className={`inline-block mr-4 ${idx === 2 ? 'text-gradient-accent drop-shadow-[0_0_35px_rgba(99,102,241,0.5)]' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-sans font-medium"
          >
            Led by President Aaditya Verma, Vice President Rishabh Kumar, Coordinator Sandeep Sharma, and R&D Head Heemanshu — SIET Panchkula’s inaugural robotics guild was built from scratch.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenJoin}
              className="px-7 py-3.5 rounded-full bg-white text-black font-sans font-bold text-sm hover:bg-zinc-200 shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Join The Legacy</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#founders"
              className="px-7 py-3.5 rounded-full bg-white/[0.08] border border-white/20 text-zinc-200 font-mono-code text-xs font-semibold hover:border-white hover:text-white backdrop-blur-md transition-colors"
            >
              Meet The Founders ➔
            </a>
          </motion.div>

        </div>

        {/* Right Column: Code Terminal Graphic */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(14px)", scale: 0.94 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="lg:col-span-5 relative"
        >
          <div className="bento-card rounded-2xl p-6 relative border-glow-indigo overflow-hidden">
            {/* Window Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span className="font-mono-code text-xs text-zinc-400 ml-2">autonex_origin.py</span>
              </div>
              <Terminal className="w-4 h-4 text-indigo-400" />
            </div>

            {/* Code Body */}
            <div className="font-mono-code text-xs leading-relaxed space-y-2 text-zinc-300">
              <div className="text-zinc-500"># SIET Panchkula Founding Board</div>
              <div><span className="text-cyan-400">president</span> = <span className="text-emerald-300">"Aaditya Verma"</span></div>
              <div><span className="text-cyan-400">vice_president</span> = <span className="text-emerald-300">"Rishabh Kumar"</span></div>
              <div><span className="text-cyan-400">coordinator</span> = <span className="text-emerald-300">"Sandeep Sharma"</span></div>
              <div><span className="text-cyan-400">rd_head</span> = <span className="text-emerald-300">"Heemanshu"</span></div>
              <div className="pt-2"><span className="text-amber-300">mentor</span> = <span className="text-emerald-300">"Dr. Milap Sharma (Ph.D. PEC)"</span></div>
              <div className="pt-2 text-emerald-400 font-semibold">✓ Founding Leadership Board Online</div>
              <div className="text-emerald-400 font-semibold">✓ 40+ Active Builders Registered</div>
            </div>

            {/* Badges */}
            <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-pink-400 font-mono-code text-[11px] border border-white/10">
                👑 Aaditya (President)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-indigo-400 font-mono-code text-[11px] border border-white/10">
                🛡️ Rishabh (Vice President)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-cyan-400 font-mono-code text-[11px] border border-white/10">
                ⚡ Sandeep (Coordinator)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-emerald-400 font-mono-code text-[11px] border border-white/10">
                🔬 Heemanshu (R&D Head)
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down */}
      <motion.a
        href="#founders"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 font-mono-code text-xs text-zinc-400 hover:text-white transition-colors z-20"
      >
        <span>SCROLL TO READ STORY</span>
        <ChevronDown className="w-4 h-4 text-indigo-400" />
      </motion.a>

    </section>
  );
}
