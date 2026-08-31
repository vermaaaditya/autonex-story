'use client';
import { Cpu, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenJoin }) {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="rounded-full backdrop-blur-xl bg-[#0A0A0F]/85 border border-white/10 p-2 pl-5 pr-3 flex items-center justify-between shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
        
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
              FOUNDERS' STORY
            </span>
          </div>
        </a>

        {/* Section Links */}
        <nav className="hidden md:flex items-center gap-6 font-sans text-xs font-semibold text-zinc-400">
          <a href="#hero" className="hover:text-white transition-colors">00. Home</a>
          <a href="#problem" className="hover:text-white transition-colors">01. Origin</a>
          <a href="#founders" className="hover:text-white transition-colors">02. Founders</a>
          <a href="#aibot" className="hover:text-white transition-colors">03. AI Bot</a>
          <a href="#event" className="hover:text-white transition-colors">04. NeXus</a>
        </nav>

        {/* Action Button */}
        <button
          onClick={onOpenJoin}
          className="px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 font-sans font-bold text-xs flex items-center gap-1 transition-all shadow-md hover:scale-105"
        >
          <span>Join Guild</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </header>
  );
}
