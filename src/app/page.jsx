'use client';
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// Lazy loaded below-the-fold components for lag-free instant initial render
const DynamicNarrativeSection = dynamic(() => import('@/components/NarrativeSection'), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] flex items-center justify-center text-zinc-500 font-mono-code text-xs">LOADING STORY ENGINE...</div>
});

const DynamicFoundersSection = dynamic(() => import('@/components/FoundersSection'), {
  ssr: false,
  loading: () => <div className="min-h-[40vh] flex items-center justify-center text-zinc-500 font-mono-code text-xs">LOADING TEAM ROSTER...</div>
});

const DynamicCtaSection = dynamic(() => import('@/components/CtaSection'), {
  ssr: false
});

const DynamicFooter = dynamic(() => import('@/components/Footer'), {
  ssr: false
});

const DynamicJoinModal = dynamic(() => import('@/components/JoinModal'), {
  ssr: false
});

export default function Home() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#030305] text-zinc-100">
      
      {/* Top Floating Navbar */}
      <Navbar onOpenJoin={() => setIsJoinOpen(true)} />

      {/* Hero Section: 4 Guys, 1 Vision */}
      <HeroSection onOpenJoin={() => setIsJoinOpen(true)} />

      {/* Below-the-fold Lazy Loaded Sections */}
      <Suspense fallback={null}>
        {/* Story Narrative: The Idea, The Void, The Mentor */}
        <DynamicNarrativeSection onOpenJoin={() => setIsJoinOpen(true)} />

        {/* The People Behind It: 4 Founders & Squad Roster */}
        <DynamicFoundersSection />

        {/* Closing CTA */}
        <DynamicCtaSection onOpenJoin={() => setIsJoinOpen(true)} />

        {/* Footer */}
        <DynamicFooter />

        {/* Guild Application Join Modal */}
        <DynamicJoinModal 
          isOpen={isJoinOpen} 
          onClose={() => setIsJoinOpen(false)} 
        />
      </Suspense>

    </main>
  );
}
