'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function JoinModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('Autonomous Robotics');
  const [submitted, setSubmitted] = useState(false);
  const [badgeData, setBadgeData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const pass = {
      name,
      email,
      domain,
      memberId: `ANX-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString()
    };

    setBadgeData(pass);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          className="w-full max-w-lg autonex-card rounded-2xl p-6 relative border-2 border-[#00D4FF] shadow-[0_0_40px_rgba(0,212,255,0.3)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00D4FF]" />
              <span className="font-display text-lg text-white font-bold tracking-wide uppercase">
                JOIN AUTONEX GUILD
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              <div>
                <label className="block text-xs font-mono-code text-[#00D4FF] mb-1 font-bold">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aaditya Verma"
                  className="w-full bg-[#09021A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white font-body text-sm focus:outline-none focus:border-[#00D4FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#00FF88] mb-1 font-bold">
                  STUDENT EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="builder@sietpanchkula.ac.in"
                  className="w-full bg-[#09021A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white font-body text-sm focus:outline-none focus:border-[#00FF88]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#FF5A1F] mb-1 font-bold">
                  PREFERRED DOMAIN
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full bg-[#09021A] border border-slate-700 rounded-lg px-3.5 py-2.5 text-white font-body text-sm focus:outline-none focus:border-[#FF5A1F]"
                >
                  <option value="Autonomous Robotics">🤖 Autonomous Robotics (ROS & Kinematics)</option>
                  <option value="Industrial Automation">⚙️ Industrial Automation & PLC</option>
                  <option value="Embedded Systems & IoT">🔌 Embedded Systems & IoT (ESP32/STM32)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF5A1F] via-[#FFB800] to-[#00D4FF] text-black font-display font-black text-sm uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4"
              >
                <Zap className="w-4 h-4 fill-current" />
                SUBMIT GUILD APPLICATION
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 font-body">
              <div className="inline-flex items-center gap-2 text-[#00FF88] font-mono-code text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#00FF88]" />
                <span>APPLICATION RECEIVED! MEMBER BADGE GENERATED</span>
              </div>

              <div className="bg-[#09021A] border-2 border-[#00FF88] rounded-xl p-5 text-left space-y-3 relative shadow-lg">
                <div className="flex justify-between items-start border-b border-slate-800 pb-2">
                  <div>
                    <div className="font-display text-base text-white font-bold">AUTONEX ROBOTICS GUILD</div>
                    <div className="text-[10px] font-mono-code text-[#00FF88]">SIET PANCHKULA OFFICIAL BADGE</div>
                  </div>
                  <span className="font-mono-code text-xs bg-[#FF5A1F] text-black px-2 py-0.5 rounded font-bold">
                    {badgeData.memberId}
                  </span>
                </div>

                <div className="text-xl font-display text-white font-bold">
                  {badgeData.name}
                </div>
                <div className="text-xs font-mono-code text-slate-300">
                  DOMAIN: <span className="text-[#00D4FF] font-bold">{badgeData.domain}</span>
                </div>

                <div className="text-[11px] font-mono-code text-slate-400 pt-2 border-t border-slate-800 flex justify-between">
                  <span>DATE: {badgeData.date}</span>
                  <span className="text-[#00FF88]">STATUS: PENDING ORIENTATION</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 rounded-lg bg-slate-800 text-xs font-mono-code text-slate-300 border border-slate-700"
                >
                  ANOTHER ENTRY
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-lg bg-[#00D4FF] text-xs font-headline font-bold text-black"
                >
                  CLOSE WINDOW
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
