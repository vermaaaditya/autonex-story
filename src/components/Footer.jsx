'use client';
import { Cpu, ArrowUp, Github, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#060112] border-t border-slate-800 relative z-10 py-12 px-4 font-body">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#FF5A1F] p-[2px]">
            <div className="w-full h-full bg-[#060112] rounded-md flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#00D4FF]" />
            </div>
          </div>
          <div>
            <div className="font-display text-lg text-white font-bold">AUTONEX</div>
            <div className="text-[10px] font-mono-code text-slate-400">
              SIET PANCHKULA • ROBOTICS & AUTOMATION GUILD
            </div>
          </div>
        </div>

        {/* Links / Copyright */}
        <div className="text-xs font-mono-code text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} AUTONEX GUILD • ZERO TO CIRCUIT SCROLLYTELLING EXPERIENCE
        </div>

        {/* Top Button */}
        <button
          onClick={scrollToTop}
          className="px-3.5 py-1.5 rounded-full bg-[#12121A] border border-slate-700 text-xs font-mono-code text-slate-300 flex items-center gap-1.5 hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>TOP</span>
        </button>

      </div>
    </footer>
  );
}
