'use client';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Cpu, Sparkles, Code, Palette, Calendar, Share2, Award } from 'lucide-react';

export default function FoundersSection() {
  const founders = [
    {
      name: "Sandeep",
      role: "Technical R&D Lead",
      dept: "AI & ML (2nd Year)",
      desc: "Built the core hardware, autonomous rover firmware, and ROS vision pipelines.",
      badge: "Tech Lead",
      icon: Code,
      color: "#06B6D4"
    },
    {
      name: "Narinder",
      role: "Media & Creative Lead",
      dept: "AI & ML (2nd Year)",
      desc: "Architected the visual brand, UI assets, poster designs, and video teasers.",
      badge: "Media Lead",
      icon: Palette,
      color: "#8B5CF6"
    },
    {
      name: "Anuj",
      role: "Events & Operations Lead",
      dept: "AI & ML (2nd Year)",
      desc: "Organized SIET's first RoboWars arena and managed logistics for 120+ participants.",
      badge: "Events Lead",
      icon: Calendar,
      color: "#10B981"
    },
    {
      name: "Aaditya Verma",
      role: "Founding Architect & Lead",
      dept: "Robotics & Automation",
      desc: "Pioneered the idea of forming SIET Panchkula's first official robotics guild.",
      badge: "Founder",
      icon: Cpu,
      color: "#EC4899"
    }
  ];

  const squads = [
    {
      title: "Technical & R&D Team",
      desc: "Autonomous rovers, PLC industrial automation rigs, ROS algorithms, and embedded IoT.",
      tech: ["ROS", "Python", "C++", "Embedded IoT", "PLC", "ESP32/STM32"],
      lead: "Sandeep"
    },
    {
      title: "Media & Creative Team",
      desc: "Visual design, branding assets, poster artwork, promotional teasers, and UI/UX.",
      tech: ["Figma", "Photoshop", "Premiere Pro", "Blender", "Canvas UI"],
      lead: "Narinder"
    },
    {
      title: "Events & Management",
      desc: "Planning, stage coordination, RoboWars logistics, technical hackathons, and showcases.",
      tech: ["Event Ops", "RoboWars Arena", "Logistics", "Stage Coordination"],
      lead: "Anuj"
    },
    {
      title: "Socials & Outreach",
      desc: "Managing club social handles, campus outreach, student engagement, and sponsorships.",
      tech: ["PR", "Outreach", "Social Media", "Community Engagement"],
      lead: "Neha Singh"
    }
  ];

  return (
    <section id="founders" className="py-24 px-4 relative z-10 bg-grid-minimal scroll-mt-16">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-400 font-mono-code text-xs mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>THE PEOPLE BEHIND THE MOVEMENT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-4">
            MEET THE <span className="text-gradient-accent">FOUNDERS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            How four student builders in a quiet hostel room created SIET Panchkula’s inaugural technical guild.
          </p>
        </div>

        {/* 4 Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {founders.map((f, idx) => {
            const IconComp = f.icon;
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bento-card rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400">
                      <IconComp className="w-5 h-5" style={{ color: f.color }} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-white/[0.08] text-white border border-white/10">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {f.name}
                  </h3>
                  <div className="text-xs font-mono-code text-indigo-400 mb-3 font-semibold">
                    {f.role} • {f.dept}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex justify-between items-center text-[11px] font-mono-code text-zinc-500">
                  <span>SIET PANCHKULA</span>
                  <span className="text-emerald-400">✓ ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Faculty Mentor Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card rounded-3xl p-8 sm:p-10 relative border-glow-indigo mb-20 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Avatar Circle */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[3px] shrink-0 shadow-xl">
              <div className="w-full h-full bg-[#050508] rounded-full flex items-center justify-center font-display text-3xl sm:text-4xl font-black text-white">
                MS
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-indigo-400 font-mono-code text-xs mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>FACULTY MENTOR & ACADEMIC LEADERSHIP</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-1">
                Dr. Milap Sharma
              </h3>
              <div className="text-xs sm:text-sm font-mono-code text-cyan-400 font-semibold mb-4">
                Assistant Professor — Department of Automation & Robotics (Ph.D. PEC 2023)
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 max-w-3xl">
                Scholar in wearable sensor systems for occupational safety and industrial ergonomics. Under Dr. Sharma’s visionary academic mentorship, AUTONEX bridges theoretical research with real hardware engineering at SIET Panchkula.
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start font-mono-code text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-zinc-300 border border-white/10">🎓 Ph.D. PEC 2023</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-zinc-300 border border-white/10">📊 H-Index: 8</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-zinc-300 border border-white/10">📚 150+ Citations</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-emerald-400 border border-white/10">🛡️ Safety Sensors</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specialized Squads Grid */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase text-white">
              SPECIALIZED <span className="text-gradient-accent">ENGINEERING SQUADS</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {squads.map((sq, idx) => (
              <div key={sq.title} className="bento-card rounded-2xl p-6 relative">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-display text-lg font-bold text-white">
                    {sq.title}
                  </h4>
                  <span className="text-xs font-mono-code text-cyan-400 bg-white/[0.05] px-2.5 py-0.5 rounded border border-white/10 font-bold">
                    Lead: {sq.lead}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {sq.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {sq.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/[0.05] text-zinc-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
