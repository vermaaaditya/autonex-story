'use client';
import { motion } from 'framer-motion';
import { ShieldAlert, Lightbulb, Users, Trophy, Rocket, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function NarrativeSection({ onOpenJoin }) {
  const narrativeChapters = [
    {
      id: 'problem',
      number: '01',
      tag: 'THE VOID',
      title: '0 CLUBS ➔ 1 MOVEMENT',
      subtitle: 'The Campus Before AUTONEX',
      content: 'When SIET Panchkula was established, students passionate about hardware faced a blank canvas: zero robotics clubs, zero automation labs, and no platform to build real physical machines.',
      stat: '0 CLUBS',
      statLabel: 'Hardware Culture Before AUTONEX',
      badgeColor: '#06B6D4',
      quote: 'Zero hardware labs. Zero robotics contests. Until we sketched the first schematic.',
      align: 'left',
      icon: ShieldAlert,
      bullets: [
        'No student access to microcontrollers or actuators',
        'No faculty-mentored hardware projects',
        'Isolated builders with no team environment'
      ]
    },
    {
      id: 'spark',
      number: '02',
      tag: 'THE SPARK',
      title: 'THE MIDNIGHT IDEA',
      subtitle: '4 Student Engineers & 1 Mentor',
      content: 'Late one evening in a hostel room, 4 guys — Sandeep, Narinder, Anuj & Aaditya — decided to end the void. Supported by Dr. Milap Sharma (Assistant Professor, Dept of Automation & Robotics), they drafted the constitution for SIET Panchkula’s inaugural technical guild.',
      stat: '4 GUYS',
      statLabel: 'Founders Who Started The Guild',
      badgeColor: '#6366F1',
      quote: 'A blueprint born out of necessity to unite programmers, mechanics, and circuit designers.',
      align: 'right',
      icon: Lightbulb,
      bullets: [
        'Architected 3 core technical domains',
        'Secured faculty mentorship & departmental backing',
        'Drafted the official AUTONEX constitution'
      ]
    },
    {
      id: 'build',
      number: '03',
      tag: 'THE BUILD',
      title: 'SETTING UP THE LABS',
      subtitle: '50+ Members Joined in 21 Days',
      content: 'Word spread rapidly across lecture halls. Within three weeks of launch, over 50 enthusiastic engineers joined AUTONEX. We converted a dedicated lab space into our active hardware workshop — soldering boards, running ROS scripts, and wiring PLCs.',
      stat: '50+ MEMBERS',
      statLabel: 'Joined in First 3 Weeks',
      badgeColor: '#10B981',
      quote: 'From solo hobbyists to an organized technical powerhouse operating 7 days a week.',
      align: 'left',
      icon: Users,
      bullets: [
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
      content: 'We organized SIET Panchkula’s inaugural RoboWars & Industrial Automation Challenge. 120+ student competitors packed the auditorium, showcasing custom line-following bots, pneumatic arms, and autonomous rovers.',
      stat: '24 BOTS',
      statLabel: 'Submitted in Inaugural Contest',
      badgeColor: '#F59E0B',
      quote: 'The moment campus recognized that AUTONEX was not just a club, but a technology movement.',
      align: 'right',
      icon: Rocket,
      bullets: [
        'Inaugural campus-wide RoboWars arena',
        '120+ active student participants',
        'First prize awarded by Department Chairman'
      ]
    },
    {
      id: 'present',
      number: '05',
      tag: 'PRESENT DAY',
      title: '40+ ACTIVE BUILDERS & 9+ EVENTS',
      subtitle: 'Pioneering & Thriving at SIET Panchkula',
      content: 'Today, AUTONEX stands as SIET Panchkula’s premiere robotics and automation guild. With 40+ active builders, 9+ major events held, and 3 specialized technical domains, we continue to engineer intelligent machines and inspire future hardware leaders.',
      stat: '9+ EVENTS',
      statLabel: 'Workshops & National Contests',
      badgeColor: '#8B5CF6',
      quote: 'Operating hardware labs, research initiatives, and national robotics delegations.',
      align: 'left',
      icon: Trophy,
      bullets: [
        '40+ Active student members & researchers',
        '9+ Major technical workshops & contests held',
        '1st Official club legacy built in SIET Panchkula'
      ]
    }
  ];

  return (
    <div className="relative z-10 space-y-24 py-16">
      {narrativeChapters.map((chap) => {
        const IconComponent = chap.icon;
        const isLeft = chap.align === 'left';

        return (
          <section
            key={chap.id}
            id={chap.id}
            className="min-h-[85vh] flex items-center justify-center px-4 relative scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Block with Blur-Fade Entrance */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(14px)", y: 35 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className={`lg:col-span-7 flex flex-col ${isLeft ? 'lg:order-1 text-left' : 'lg:order-2 text-left'}`}
              >
                {/* Chapter Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono-code text-xs font-semibold px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-cyan-400">
                    CHAPTER {chap.number}
                  </span>
                  <span className="font-mono-code text-xs tracking-widest uppercase font-semibold text-zinc-400">
                    // {chap.tag}
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-3">
                  {chap.title}
                </h2>

                {/* Subtitle */}
                <h3 className="font-sans text-base sm:text-lg text-indigo-400 font-bold mb-6">
                  {chap.subtitle}
                </h3>

                {/* Body Text */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {chap.content}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 mb-8">
                  {chap.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-400" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Quote Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-indigo-500 text-xs sm:text-sm font-mono-code text-zinc-400 italic">
                  "{chap.quote}"
                </div>

              </motion.div>

              {/* Bento Stat Card with Blur-Fade Entrance */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(14px)", scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: 0.15 }}
                className={`lg:col-span-5 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="bento-card rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 text-cyan-400 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Stat Number */}
                  <div className="font-display text-5xl sm:text-6xl font-black tracking-tight mb-2 uppercase text-white">
                    {chap.stat}
                  </div>

                  {/* Stat Label */}
                  <div className="font-mono-code text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-6">
                    {chap.statLabel}
                  </div>

                  {/* Action */}
                  <button
                    onClick={onOpenJoin}
                    className="px-5 py-2.5 rounded-full bg-white text-black font-sans font-bold text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition-all"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-4 h-4" />
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
