'use client';
import { motion } from 'framer-motion';
import { ShieldAlert, Lightbulb, Users, Trophy, Rocket, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NarrativeSection({ onOpenJoin }) {
  const sectionsData = [
    {
      id: 'problem',
      number: '01',
      tag: 'THE PROBLEM',
      title: '0 CLUBS ➔ 1 MOVEMENT',
      subtitle: 'The Void in Campus Hardware & Robotics',
      content: 'When SIET Panchkula was established, students passionate about robotics faced a bleak reality: zero student hardware clubs, zero automated control labs, and no platform to turn theoretical engineering diagrams into physical machines.',
      stat: '0 CLUBS',
      statLabel: 'Hardware Culture Before AUTONEX',
      badgeColor: '#FF5A1F',
      accentText: 'Zero hardware labs. Zero robotics competitions. Until we drew the first schematic.',
      align: 'left',
      icon: ShieldAlert,
      details: [
        'No student access to microcontrollers or actuators',
        'No faculty-mentored hardware projects',
        'Isolated builders with no team environment'
      ]
    },
    {
      id: 'spark',
      number: '02',
      tag: 'THE SPARK',
      title: 'THE MIDNIGHT BLUEPRINT',
      subtitle: '3 Engineers, 1 Uncompromising Vision',
      content: 'Late one evening in a quiet hostel room, three student innovators sketched the initial framework for AUTONEX. Guided by faculty mentors from the Automation & Robotics department, they set out to establish SIET Panchkula’s first official robotics guild.',
      stat: '3 DOMAINS',
      statLabel: 'Autonomous, PLC & Embedded Systems',
      badgeColor: '#00D4FF',
      accentText: 'A blueprint born out of necessity to unite programmers, mechanics, and circuit designers.',
      align: 'right',
      icon: Lightbulb,
      details: [
        'Architected 3 core technical domains',
        'Secured faculty mentorship & departmental backing',
        'Drafted the official AUTONEX constitution'
      ]
    },
    {
      id: 'build',
      number: '03',
      tag: 'THE BUILD',
      title: '50+ FOUNDING MEMBERS',
      subtitle: 'Assembling the Hardware Guild',
      content: 'Word spread rapidly across lecture halls. Within three weeks of launch, over 50 enthusiastic engineers joined AUTONEX. We converted a small lab space into our active hardware workshop, soldering boards, writing ROS scripts, and wiring industrial PLCs.',
      stat: '50+ MEMBERS',
      statLabel: 'Joined in the First 21 Days',
      badgeColor: '#00FF88',
      accentText: 'From solo hobbyists to an organized technical powerhouse operating 7 days a week.',
      align: 'left',
      icon: Users,
      details: [
        'Established hands-on hardware workstations',
        'Formed dedicated domain leadership leads',
        'Procured ESP32, STM32 & PLC training kits'
      ]
    },
    {
      id: 'event',
      number: '04',
      tag: 'THE FIRST EVENT',
      title: 'ROBOWARS & HEAVY METAL',
      subtitle: '120+ Participants, 24 Robot Submissions',
      content: 'We organized SIET Panchkula’s inaugural RoboWars & Industrial Automation Challenge. 120+ student competitors packed the main auditorium, showcasing custom line-following bots, pneumatic arms, and autonomous rovers.',
      stat: '24 BOTS',
      statLabel: 'Submitted in First Hackathon',
      badgeColor: '#FFB800',
      accentText: 'The moment campus recognized that AUTONEX was not just a club, but a technology movement.',
      align: 'right',
      icon: Rocket,
      details: [
        'Inaugural campus-wide RoboWars arena',
        '120+ active student participants',
        'First prize awarded by Department Chairman'
      ]
    },
    {
      id: 'present',
      number: '05',
      tag: 'WHERE WE ARE NOW',
      title: '40+ BUILDERS & 9+ EVENTS HELD',
      subtitle: 'Pioneering & Thriving at SIET Panchkula',
      content: 'Today, AUTONEX stands proudly as SIET Panchkula’s premiere robotics and automation guild. With 40+ active builders, 9+ major events held, and 3 specialized technical domains, we continue to engineer intelligent machines and inspire the next generation of hardware leaders.',
      stat: '9+ EVENTS',
      statLabel: 'Workshops, Competitions & Hackathons',
      badgeColor: '#00D4FF',
      accentText: 'Operating online hardware labs, research initiatives, and national robotics delegations.',
      align: 'left',
      icon: Trophy,
      details: [
        '40+ Active student members & researchers',
        '9+ Major technical workshops & contests held',
        '1st Official club legacy built in SIET Panchkula'
      ]
    }
  ];

  return (
    <div className="relative z-10 space-y-24 py-16">
      {sectionsData.map((sec, idx) => {
        const IconComponent = sec.icon;
        const isLeft = sec.align === 'left';

        return (
          <section
            key={sec.id}
            id={sec.id}
            className="min-h-[85vh] flex items-center justify-center px-4 relative scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Block */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`lg:col-span-7 flex flex-col ${isLeft ? 'lg:order-1 text-left' : 'lg:order-2 text-left'}`}
              >
                {/* Section Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono-code text-sm font-bold px-2.5 py-1 rounded bg-black/60 border border-white/20 text-[#00D4FF]">
                    {sec.number}
                  </span>
                  <span className="font-mono-code text-xs tracking-widest uppercase font-bold text-slate-400">
                    // {sec.tag}
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-3">
                  {sec.title}
                </h2>

                {/* Subtitle */}
                <h3 className="font-headline text-lg sm:text-xl text-[#00FF88] font-bold mb-6">
                  {sec.subtitle}
                </h3>

                {/* Narrative Body Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-body">
                  {sec.content}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-8">
                  {sec.details.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-mono-code text-slate-200">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: sec.badgeColor }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Accent Callout Quote */}
                <div 
                  className="p-4 rounded-xl border-l-4 bg-[#12121A]/80 backdrop-blur-md text-xs sm:text-sm font-mono-code text-slate-300 italic"
                  style={{ borderColor: sec.badgeColor }}
                >
                  "{sec.accentText}"
                </div>

              </motion.div>

              {/* Supporting Graphic / Stat Callout Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`lg:col-span-5 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div 
                  className="autonex-card rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl border-2 transition-all hover:scale-105"
                  style={{ borderColor: `${sec.badgeColor}60` }}
                >
                  {/* Decorative Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2"
                    style={{ 
                      backgroundColor: `${sec.badgeColor}15`, 
                      borderColor: sec.badgeColor,
                      color: sec.badgeColor
                    }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Stat Number */}
                  <div 
                    className="font-display text-5xl sm:text-6xl font-black tracking-tight mb-2 uppercase"
                    style={{ color: sec.badgeColor, textShadow: `0 0 25px ${sec.badgeColor}80` }}
                  >
                    {sec.stat}
                  </div>

                  {/* Stat Label */}
                  <div className="font-mono-code text-xs sm:text-sm text-slate-300 font-bold uppercase tracking-wider mb-6">
                    {sec.statLabel}
                  </div>

                  {/* Button Action */}
                  <button
                    onClick={onOpenJoin}
                    className="px-5 py-2.5 rounded-full font-headline text-xs font-bold text-black flex items-center gap-1.5 transition-all shadow-md"
                    style={{ backgroundColor: sec.badgeColor }}
                  >
                    <span>EXPLORE AUTONEX</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
