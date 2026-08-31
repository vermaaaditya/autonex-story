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
      content: 'When SIET Panchkula was established, students passionate about hardware faced a blank canvas: zero robotics clubs, zero automation labs, and no official platform for engineering projects.',
      stat: '0 CLUBS',
      statLabel: 'Hardware Culture Before AUTONEX',
      badgeColor: '#06B6D4',
      quote: 'Zero hardware labs. Zero technical contests. Until we laid the first foundation.',
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
      title: 'THE INITIAL BLUEPRINT',
      subtitle: '4 Student Founders & 1 Mentor',
      content: 'Recognizing the need for a hands-on technical community, 4 founding student leaders — President Aaditya Verma, Vice President Rishabh Kumar, Coordinator Sandeep Sharma, and R&D Head Heemanshu — came together to establish SIET Panchkula’s 1st official robotics guild under the guidance of Dr. Milap Sharma.',
      stat: '4 FOUNDERS',
      statLabel: 'Student Leadership Board',
      badgeColor: '#6366F1',
      quote: 'A framework built to unite programmers, hardware builders, and control systems engineers.',
      align: 'right',
      icon: Lightbulb,
      bullets: [
        'Architected 3 core technical domains',
        'Secured faculty mentorship from Dr. Milap Sharma',
        'Established SIET Panchkula’s inaugural club constitution'
      ]
    },
    {
      id: 'build',
      number: '03',
      tag: 'THE BUILD',
      title: 'BUILDING THE COMMUNITY',
      subtitle: '40+ Active Members & Workshops',
      content: 'Word spread rapidly across lecture halls. Students from across departments joined AUTONEX, creating an active community operating across Autonomous Robotics, Industrial Automation, and Embedded IoT.',
      stat: '40+ MEMBERS',
      statLabel: 'Active Student Builders',
      badgeColor: '#10B981',
      quote: 'From isolated hobbyists to an organized technical guild on campus.',
      align: 'left',
      icon: Users,
      bullets: [
        'Established hands-on hardware learning tracks',
        'Formed specialized domain leadership squads',
        'Procured ESP32, STM32 & PLC training kits'
      ]
    },
    {
      id: 'event',
      number: '04',
      tag: 'THE EVENTS',
      title: 'NEXUS DESIGN CHALLENGE & QUIZ',
      subtitle: 'Flagship Campus Competitions',
      content: 'AUTONEX launched its flagship initiatives: the NeXus Design Challenge focusing on hardware CAD & control design, along with the Robotics & Automation Quiz to test engineering fundamentals across campus.',
      stat: 'NEXUS & QUIZ',
      statLabel: 'Flagship Campus Initiatives',
      badgeColor: '#F59E0B',
      quote: 'Inspiring student creativity through the NeXus Design Challenge and Robotics Quiz.',
      align: 'right',
      icon: Rocket,
      bullets: [
        'NeXus Design Challenge for CAD & 3D control design',
        'Campus-wide Robotics & Automation Quiz',
        'Student workshops & technical knowledge sessions'
      ]
    },
    {
      id: 'present',
      number: '05',
      tag: 'PRESENT DAY',
      title: 'SIET PANCHKULA LEGACY',
      subtitle: 'Pioneering & Thriving Guild',
      content: 'Today, AUTONEX continues to thrive as SIET Panchkula’s premiere robotics and automation guild — empowering students to code algorithms, construct hardware prototypes, and lead technical initiatives.',
      stat: '1ST CLUB',
      statLabel: 'Historic Baseline at SIET',
      badgeColor: '#8B5CF6',
      quote: 'Pioneering robotics, industrial PLCs, and embedded IoT innovation.',
      align: 'left',
      icon: Trophy,
      bullets: [
        '40+ Active student members & researchers',
        '3 Specialized technical domains',
        'Inaugural technical club established in SIET history'
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
              
              {/* Text Block */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(14px)", y: 35 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className={`lg:col-span-7 flex flex-col ${isLeft ? 'lg:order-1 text-left' : 'lg:order-2 text-left'}`}
              >
                {/* Tag */}
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

                {/* Quote */}
                <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-indigo-500 text-xs sm:text-sm font-mono-code text-zinc-400 italic">
                  "{chap.quote}"
                </div>

              </motion.div>

              {/* Bento Stat Card */}
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
