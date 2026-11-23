'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Play, 
  Sparkles, 
  Award, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  FileText, 
  Mail, 
  Layers, 
  ArrowRight,
  TrendingUp,
  Globe2,
  CheckCircle2,
  Zap,
  RotateCw,
  Phone
} from 'lucide-react';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import { personalData } from '@/data/portfolio';
import { soundFx } from '@/utils/sound';

export default function Hero() {
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);
  const [activePersona, setActivePersona] = useState<'cyber' | 'executive'>('cyber');

  const handlePlayIntro = () => {
    soundFx.playChime();
    setIsPlayingIntro(!isPlayingIntro);
  };

  return (
    <section id="home" className="relative min-h-[96vh] pt-20 pb-12 flex flex-col justify-between overflow-hidden bg-[#04060a] select-none">
      
      {/* 1. SEAMLESS WIDE 16:9 CHARACTER BANNER (FULL VISIBILITY - NO CROPPING) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
          <Image
            src={activePersona === 'cyber' ? '/prakash-cyberpunk-banner.jpg' : '/prakash-executive-banner.jpg'}
            alt="Prakash Rajendran"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center transition-all duration-700 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_98%)]"
          />
          {/* Edge gradient blending to guarantee smooth dark transitions */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#04060a] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#04060a] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04060a] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04060a] to-transparent" />
        </div>
      </div>

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none z-0" />

      {/* 2. TOP HUD EVALUATION BAR */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
        <div className="flex items-start justify-between">
          
          {/* Left: Interactive "MY PORTFOLIO" Suite Card */}
          <div className="flex items-center gap-3">
            {/* Tech Matrix Dots */}
            <div className="hidden sm:grid grid-cols-3 gap-1 opacity-70">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>

            {/* Vertical "MY PORTFOLIO" Tag */}
            <div className="hidden sm:block text-[10px] font-mono tracking-widest text-slate-400 uppercase [writing-mode:vertical-lr] rotate-180 py-1 font-semibold">
              MY PORTFOLIO
            </div>

            {/* Suit Avatar & Play Intro Card */}
            <div className="relative p-2 sm:p-2.5 rounded-2xl bg-slate-950/85 border border-cyan-400/50 backdrop-blur-xl shadow-xl shadow-cyan-500/10 flex items-center gap-3">
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />
              
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden border border-cyan-400/40 relative flex-shrink-0 bg-slate-900 shadow-md">
                <Image
                  src="/prakash-rajendran-hd.jpg"
                  alt={personalData.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <button
                onClick={handlePlayIntro}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-400/60 text-cyan-300 text-[11px] font-mono font-bold tracking-wider uppercase transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <Play className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                <span>{isPlayingIntro ? 'AUDIO LIVE' : 'PLAY INTRO'}</span>
              </button>
            </div>
          </div>

          {/* Right: Technical Designation & Giant Sci-Fi 01 */}
          <div className="flex items-center gap-4 sm:gap-6 text-right">
            <div className="hidden md:block space-y-1 text-right">
              <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-200">
                DEPUTY MANAGER · CRE OPERATIONS & AI
              </div>
              <div className="text-[11px] font-mono text-slate-400 tracking-wider">
                BUILDING SCALABLE SOLUTIONS WITH MODERN TECHNOLOGIES.
              </div>
            </div>

            {/* Giant Sci-Fi 01 Frame */}
            <div className="text-4xl sm:text-6xl font-black font-mono tracking-tighter text-slate-700/80 border border-white/10 px-4 py-1.5 rounded-2xl select-none backdrop-blur-md">
              01
            </div>
          </div>

        </div>
      </div>

      {/* 3. CENTER HERO STAGE: FULLY VISIBLE TYPOGRAPHY "PRAKASH" & "RAJENDRAN" */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 my-auto py-4 sm:py-8 flex flex-col justify-between min-h-[440px]">
        
        {/* TOP WORD: P R A K A S H */}
        <div className="w-full flex items-center justify-between font-black tracking-tight text-white/95 text-4xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-sans drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]">
          <span className="hover:text-cyan-400 transition-colors">P</span>
          
          <div className="flex flex-col items-center">
            <span className="text-[9px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 mb-1 backdrop-blur-md shadow-sm">
              DEVELOPER
            </span>
            <span className="hover:text-cyan-400 transition-colors">R</span>
          </div>

          <span className="hover:text-cyan-400 transition-colors">A</span>
          
          <div className="flex flex-col items-center">
            <span className="text-[9px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-400/50 mb-1 backdrop-blur-md shadow-sm">
              ENGINEER
            </span>
            <span className="hover:text-red-400 transition-colors">K</span>
          </div>

          <span className="hover:text-cyan-400 transition-colors">A</span>
          <span className="hover:text-cyan-400 transition-colors">S</span>
          <span className="hover:text-cyan-400 transition-colors">H</span>
        </div>

        {/* Floating Persona Switcher in Center */}
        <div className="w-full flex justify-center py-3 pointer-events-auto">
          <div className="bg-slate-950/90 backdrop-blur-xl px-4 py-2 rounded-full border border-white/15 flex items-center gap-3 shadow-2xl">
            <button
              onClick={() => {
                soundFx.playClick();
                setActivePersona('cyber');
              }}
              className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                activePersona === 'cyber'
                  ? 'bg-gradient-to-r from-red-500 to-amber-500 text-white shadow-lg shadow-red-500/40 scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ⚡ CYBER VISOR MODE
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => {
                soundFx.playClick();
                setActivePersona('executive');
              }}
              className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                activePersona === 'executive'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/40 scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              👔 EXECUTIVE SUIT MODE
            </button>
          </div>
        </div>

        {/* BOTTOM WORD: R A J E N D R A N */}
        <div className="w-full flex items-center justify-between font-black tracking-tight text-white/95 text-4xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-sans drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]">
          <div className="flex flex-col items-center">
            <span className="text-[9px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/50 mb-1 backdrop-blur-md shadow-sm">
              PROBLEM SOLVER
            </span>
            <span className="hover:text-amber-400 transition-colors">R</span>
          </div>

          <span className="hover:text-amber-400 transition-colors">A</span>
          <span className="hover:text-amber-400 transition-colors">J</span>
          <span className="hover:text-amber-400 transition-colors">E</span>

          <div className="flex flex-col items-center">
            <span className="text-[9px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 mb-1 backdrop-blur-md shadow-sm">
              INNOVATOR
            </span>
            <span className="hover:text-emerald-400 transition-colors">N</span>
          </div>

          <span className="hover:text-amber-400 transition-colors">D</span>
          <span className="hover:text-amber-400 transition-colors">R</span>
          <span className="hover:text-amber-400 transition-colors">A</span>
          <span className="hover:text-amber-400 transition-colors">N</span>
        </div>

      </div>

      {/* 4. BOTTOM HUD EVALUATION BAR & METRICS */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
          
          {/* Bottom Left: Tagline Banner */}
          <div className="text-center md:text-left space-y-0.5">
            <p className="text-xs sm:text-sm font-mono tracking-wider text-slate-300 font-bold uppercase">
              BUILDING DIGITAL SOLUTIONS
            </p>
            <p className="text-sm sm:text-base font-mono tracking-wider font-extrabold text-white">
              THAT CREATE <span className="text-red-500 font-black">REAL IMPACT.</span>
            </p>
          </div>

          {/* Center: Connect & PDF Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="/Prakash_Rajendran_Resume.pdf"
              download="Prakash_Rajendran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-slate-900/90 border border-white/15 hover:border-cyan-400 hover:bg-slate-800 transition-all hover:scale-105 shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-red-500 via-amber-400 to-amber-500 hover:from-red-400 hover:to-amber-300 transition-all shadow-lg shadow-red-500/25 hover:scale-105 cursor-pointer"
            >
              <span>CONNECT DIRECTLY</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom Right: "8+ YEARS OF EXPERIENCE" HUD Card */}
          <div className="relative px-6 py-2.5 rounded-2xl bg-slate-950/85 border border-cyan-400/50 backdrop-blur-xl shadow-xl shadow-cyan-500/10 text-center">
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />

            <div className="text-xl sm:text-2xl font-black font-mono text-cyan-400 leading-none">
              8+ <span className="text-xs sm:text-sm font-bold text-slate-200">YEARS</span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1 font-semibold">
              OF CRE & AI EXPERIENCE
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
