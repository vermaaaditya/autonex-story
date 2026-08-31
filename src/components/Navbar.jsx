'use client';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenJoin }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#09021A]/80 border-b border-[#00D4FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <motion.a 
          href="#hero"
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00D4FF] via-[#00FF88] to-[#FF5A1F] p-[2px] shadow-[0_0_15px_rgba(0,212,255,0.4)]">
            <div className="w-full h-full bg-[#09021A] rounded-md flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#00D4FF]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black tracking-wider text-white">
              AUTONEX
            </span>
            <span className="text-[10px] font-mono-code text-[#00FF88] -mt-1 tracking-widest uppercase font-bold">
              SIET PANCHKULA • ROBOTICS GUILD
            </span>
          </div>
        </motion.a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono-code text-xs font-bold text-slate-300">
          <a href="#hero" className="hover:text-[#00D4FF] transition-colors">00 // HOME</a>
          <a href="#problem" className="hover:text-[#00FF88] transition-colors">01 // THE VOID</a>
          <a href="#spark" className="hover:text-[#FF5A1F] transition-colors">02 // THE SPARK</a>
          <a href="#build" className="hover:text-[#00D4FF] transition-colors">03 // THE BUILD</a>
          <a href="#present" className="hover:text-[#FFB800] transition-colors">04 // STATUS</a>
        </nav>

        {/* CTA Button */}
        <button
          onClick={onOpenJoin}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#FFB800] text-black font-headline font-bold text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,90,31,0.5)] hover:scale-105 transition-transform"
        >
          <span>JOIN AUTONEX</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </header>
  );
}
