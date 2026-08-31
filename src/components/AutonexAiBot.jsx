'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Sparkles, RefreshCw, Cpu, User } from 'lucide-react';

export default function AutonexAiBot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'BEEP BOOP! 🤖 I am the AUTONEX Cyber-Bot! Ask me anything about President Aaditya Verma, Vice President Rishabh Kumar, Coordinator Sandeep Sharma, R&D Head Heemanshu, or our 3 technical domains!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const newMessages = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Signal error! But I can tell you that Aaditya Verma is President, Rishabh Kumar is VP, Sandeep Sharma is Coordinator, and Heemanshu is R&D Head!'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    "Who are the founders?",
    "What are the 3 domains?",
    "Tell me about Dr. Milap Sharma",
    "How to join AUTONEX?"
  ];

  return (
    <section id="aibot" className="py-24 px-4 relative z-10 bg-grid-minimal scroll-mt-16">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-400 font-mono-code text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI POWERED GUILD ASSISTANT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-4">
            ASK THE <span className="text-gradient-accent">AUTONEX BOT</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-sans">
            Chat with our animated cyber-robot powered by Groq AI to learn about our founders, mentors, and robotics journey.
          </p>
        </motion.div>

        {/* Robo & Speech Bubble Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Animated Vector Cyber-Robo Model */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-72 flex flex-col items-center justify-center"
            >
              {/* Antenna Spark */}
              <div className="w-2 h-8 bg-gradient-to-t from-cyan-400 to-indigo-500 rounded-full relative">
                <span className="absolute -top-2 -left-1.5 w-5 h-5 rounded-full bg-cyan-400 animate-ping opacity-75" />
                <span className="absolute -top-2 -left-1.5 w-5 h-5 rounded-full bg-cyan-300 shadow-[0_0_15px_#00D4FF]" />
              </div>

              {/* Head Box */}
              <div className="w-44 h-36 bg-[#0A0A14] border-2 border-cyan-400 rounded-3xl p-4 flex flex-col items-center justify-between relative shadow-[0_0_35px_rgba(0,212,255,0.3)]">
                {/* Ears */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-10 bg-indigo-600 rounded-l-lg border-l border-white/20" />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-10 bg-indigo-600 rounded-r-lg border-r border-white/20" />

                {/* Visor & Glowing Eyes */}
                <div className="w-full h-14 bg-black rounded-2xl border border-white/10 flex items-center justify-around px-4 relative overflow-hidden">
                  <div className="w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_15px_#00D4FF] animate-pulse" />
                  <div className="w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_15px_#00D4FF] animate-pulse" />
                  {/* Visor Scanline */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" />
                </div>

                {/* Mouth / Speaker Grille (Connecting Tail Target) */}
                <div id="robo-mouth" className="w-24 h-6 bg-zinc-900 border border-cyan-400/40 rounded-xl flex items-center justify-center gap-1">
                  <span className={`w-1.5 h-3 rounded-full bg-cyan-400 ${isLoading ? 'animate-bounce' : 'animate-pulse'}`} />
                  <span className={`w-1.5 h-4 rounded-full bg-indigo-400 ${isLoading ? 'animate-bounce delay-100' : 'animate-pulse'}`} />
                  <span className={`w-1.5 h-3 rounded-full bg-cyan-400 ${isLoading ? 'animate-bounce delay-200' : 'animate-pulse'}`} />
                </div>
              </div>

              {/* Neck & Body */}
              <div className="w-10 h-4 bg-zinc-800 border-x border-zinc-600" />
              <div className="w-52 h-20 bg-[#0A0A14] border-2 border-indigo-500 rounded-b-3xl p-3 flex items-center justify-center shadow-lg relative">
                {/* Core Reactor */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-600 p-[2px] shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  <div className="w-full h-full bg-[#050508] rounded-full flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Robo Label */}
            <span className="font-mono-code text-xs text-cyan-400 font-bold tracking-widest mt-2 uppercase">
              ANX-3000 CYBER BOT
            </span>
          </div>

          {/* Right Column: Floating Speech Bubble right next to Robo's mouth */}
          <div className="lg:col-span-8 relative">
            
            {/* Speech Bubble Tail SVG pointing to the left mouth */}
            <div className="hidden lg:block absolute -left-4 top-16 w-0 h-0 border-t-[12px] border-t-transparent border-r-[16px] border-r-indigo-500 border-b-[12px] border-b-transparent z-30" />

            <div className="bento-card rounded-3xl p-6 sm:p-8 relative border-2 border-indigo-500/40 shadow-[0_0_50px_rgba(99,102,241,0.2)] flex flex-col h-[520px]">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <Bot className="w-5 h-5 text-cyan-400" />
                  <span className="font-display text-base text-white font-bold tracking-wide">
                    AUTONEX KNOWLEDGE STREAM
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono-code text-xs border border-emerald-500/20">
                  ● GROQ AI ONLINE
                </span>
              </div>

              {/* Messages Body */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 font-sans text-xs sm:text-sm">
                <AnimatePresence>
                  {messages.map((m, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {m.role === 'assistant' && (
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}

                      <div
                        className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-wrap ${
                          m.role === 'user'
                            ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium shadow-md'
                            : 'bg-white/[0.06] border border-white/10 text-zinc-200 font-normal'
                        }`}
                      >
                        {m.content}
                      </div>

                      {m.role === 'user' && (
                        <div className="w-7 h-7 rounded-lg bg-cyan-600 flex items-center justify-center text-white shrink-0">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isLoading && (
                  <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>CYBER BOT IS THINKING...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 mb-3">
                {quickPrompts.map((qp) => (
                  <button
                    key={qp}
                    onClick={() => handleSend(qp)}
                    className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 font-mono-code text-[11px] hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                  >
                    {qp}
                  </button>
                ))}
              </div>

              {/* Chat Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Aaditya, Rishabh, Sandeep, Heemanshu, or AUTONEX..."
                  className="flex-1 bg-[#050508] border border-white/15 rounded-xl px-4 py-3 text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-sans font-bold text-xs flex items-center gap-1.5 hover:scale-105 transition-all shadow-md disabled:opacity-50"
                >
                  <span>SEND</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
