'use client';
import { motion } from 'framer-motion';
import { Cpu, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenJoin }) {
  return (
    <header className="sticky top-4 z-40 w-full max-w-5xl mx-auto px-4">
      <div className="rounded-full backdrop-blur-xl bg-[#0A0A0F]/80 border border-white/10 p-2 pl-5 pr-3 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-400 to-violet-500 p-[1.5px] shadow-sm">
            <div className="w-full h-full bg-[#050508] rounded-full flex items-center justify-center">
              <Cpu className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-white">
              AUTONEX
            </span>
            <span className="text-[9px] font-mono-code text-zinc-400 -mt-0.5 tracking-widest uppercase">
              SIET PANCHKULA
            </span>
          </div>
        </a>

        {/* Section Links */}
        <nav className="hidden md:flex items-center gap-6 font-sans text-xs font-semibold text-zinc-400">
          <a href="#hero" className="hover:text-white transition-colors">Overview</a>
          <a href="#problem" className="hover:text-white transition-colors">01. Origin</a>
          <a href="#spark" className="hover:text-white transition-colors">02. Blueprint</a>
          <a href="#build" className="hover:text-white transition-colors">03. Guild</a>
          <a href="#present" className="hover:text-white transition-colors">04. Status</a>
        </nav>

        {/* Action Button */}
        <button
          onClick={onOpenJoin}
          className="px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 font-sans font-bold text-xs flex items-center gap-1 transition-all shadow-md hover:scale-105"
        >
          <span>Apply to Guild</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </header>
  );
}
