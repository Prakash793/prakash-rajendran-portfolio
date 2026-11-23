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
    <div className="relative min-h-screen flex flex-col bg-[#05060b] text-slate-100 selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
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
