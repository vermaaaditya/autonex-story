'use client';
import { useState } from 'react';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import CircuitLineCanvas from '@/components/CircuitLineCanvas';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NarrativeSection from '@/components/NarrativeSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import JoinModal from '@/components/JoinModal';

export default function Home() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#09021A]">
      {/* Top Fixed Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Dynamic Animated Circuit Path Background */}
      <CircuitLineCanvas />

      {/* Navigation Header */}
      <Navbar onOpenJoin={() => setIsJoinOpen(true)} />

      {/* Hero Section: Zero to Circuit */}
      <HeroSection onOpenJoin={() => setIsJoinOpen(true)} />

      {/* Scrollytelling Narrative Sections 1 - 5 */}
      <NarrativeSection onOpenJoin={() => setIsJoinOpen(true)} />

      {/* Closing CTA Section */}
      <CtaSection onOpenJoin={() => setIsJoinOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Guild Application Join Modal */}
      <JoinModal 
        isOpen={isJoinOpen} 
        onClose={() => setIsJoinOpen(false)} 
      />
    </main>
  );
}
