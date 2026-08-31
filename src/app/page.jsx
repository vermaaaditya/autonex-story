'use client';
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const DynamicNarrativeSection = dynamic(() => import('@/components/NarrativeSection'), {
  ssr: false
});

const DynamicFoundersSection = dynamic(() => import('@/components/FoundersSection'), {
  ssr: false
});

const DynamicAutonexAiBot = dynamic(() => import('@/components/AutonexAiBot'), {
  ssr: false
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

      {/* Hero Section */}
      <HeroSection onOpenJoin={() => setIsJoinOpen(true)} />

      {/* Lazy Loaded Sections */}
      <Suspense fallback={null}>
        {/* Narrative Chapters */}
        <DynamicNarrativeSection onOpenJoin={() => setIsJoinOpen(true)} />

        {/* 4 Founders Roster */}
        <DynamicFoundersSection />

        {/* Groq AI Animated Robo Chatbot */}
        <DynamicAutonexAiBot />

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
