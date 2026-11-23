'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import KineticMarquee from './KineticMarquee';
import About from './About';
import ExecutiveImpact from './ExecutiveImpact';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import ClausePlayground from './ClausePlayground';
import GlobalReach from './GlobalReach';
import Education from './Education';
import Certifications from './Certifications';
import ResumeSection from './ResumeSection';
import Contact from './Contact';
import Footer from './Footer';
import AmbientGlow from './AmbientGlow';
import CommandPalette from './CommandPalette';
import { soundFx } from '@/utils/sound';

export default function PortfolioShell() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const handleToggleAudio = () => {
    const newState = soundFx.toggle();
    setAudioEnabled(newState);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#03060f] text-slate-100 selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      
      {/* 1. CONTINUOUS FULL-SCROLL GLASSY BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Full-bleed high-res background image with fixed parallax effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-1/3 left-[-150px] w-[650px] h-[650px] bg-cyan-600/12 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-2/3 right-[-150px] w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-indigo-600/12 rounded-full blur-[180px] pointer-events-none" />

        {/* Global Hexagonal & Cyber Data Matrix Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:36px_36px] opacity-15" />
      </div>

      {/* Real-time ambient mouse tracking specular glow */}
      <AmbientGlow />

      {/* Floating Executive Navigation Chrome */}
      <Navbar
        onOpenPalette={() => setPaletteOpen(true)}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Narrative Flow */}
      <main className="flex-1 relative z-10">
        <Hero />
        <KineticMarquee />
        <About />
        <ExecutiveImpact />
        <Experience />
        <Skills />
        <Projects />

        {/* Live Interactive Clause Intelligence Playground */}
        <div id="sandbox">
          <ClausePlayground />
        </div>

        {/* Global Multilingual Lease Governance Radar */}
        <GlobalReach />

        <KineticMarquee />
        <Education />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      {/* Executive Footer */}
      <Footer />

      {/* Command Palette Keyboard Shortcut Launcher */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
      />
    </div>
  );
}
