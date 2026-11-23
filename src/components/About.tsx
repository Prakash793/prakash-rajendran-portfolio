'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Globe2, 
  CheckCircle2, 
  Crosshair, 
  Award,
  Zap,
  ArrowRight,
  Sparkles,
  MousePointerClick,
  Compass,
  FileText,
  Landmark,
  Scale,
  FileCheck2,
  ChevronRight,
  Database,
  Search,
  Activity
} from 'lucide-react';
import { personalData } from '@/data/portfolio';
import { soundFx } from '@/utils/sound';

export default function About() {
  const [selectedHub, setSelectedHub] = useState<'us' | 'dach' | 'uk'>('us');
  const [scanning, setScanning] = useState(false);

  const hubSpecs = {
    us: {
      name: 'North American Hub (US Institutional)',
      type: 'Tier-1 Office & Retail Portfolios',
      focus: 'CAM Audits · ROFO Purchase Rights · Major Anchor Co-Tenancy & Expense Caps',
      sla: '99.8% On-Time SLA Delivery',
      value: '$2.4B Gross Asset Value Abstracted',
      badge: 'HIGH-VOLUME LEASE GOVERNANCE',
      tenants: '42 Portfolios Active',
      color: 'amber'
    },
    dach: {
      name: 'DACH Germany & European Operations',
      type: 'Cross-Border Multilingual Abstraction',
      focus: 'German VPI Indexation (Wertsicherungsklausel) · Triple Net · Multi-Lingual German to English',
      sla: '100.0% Indexation Accuracy',
      value: 'Zero Calculation Variance over 10-Yr Terms',
      badge: 'MULTILINGUAL TRANSLATION VALIDATION',
      tenants: '28 Financial Institutions',
      color: 'cyan'
    },
    uk: {
      name: 'UK Institutional & London Core',
      type: 'FRI Leases & Upward-Only Reviews',
      focus: 'Dilapidations Clauses · Landlord/Tenant Act 1954 Exclusions · Co-Tenancy Audits',
      sla: '99.9% Compliance Rating',
      value: '£680,000 Verified Tenant Indemnities',
      badge: 'CROSS-JURISDICTIONAL RISK MITIGATION',
      tenants: '65 Retail & Industrial Sites',
      color: 'emerald'
    }
  };

  const currentHub = hubSpecs[selectedHub];

  const handleHubSelect = (hub: 'us' | 'dach' | 'uk') => {
    soundFx.playClick();
    setSelectedHub(hub);
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      soundFx.playChime();
    }, 400);
  };

  return (
    <section id="about" className="relative min-h-screen py-20 flex flex-col justify-between overflow-hidden text-slate-100 select-none">
      
      {/* 1. CINEMATIC FULL-SIZE DOMAIN BACKGROUND: SAPPHIRE/NAVY SKYLINES WITH GOLDEN LEASE DOCUMENT FLOWS (NOT PITCH-BLACK) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/cre-sapphire-skyline.jpg"
          alt="Commercial Real Estate Operations Sapphire Skyline & Lease Documents"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-105 contrast-110"
        />
        {/* Soft, ultra-subtle atmospheric overlay allowing rich buildings and gold streams to shine through */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e20]/90 via-transparent to-[#060e20]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e20]/70 via-transparent to-[#060e20]/70" />
      </div>

      {/* Domain Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none z-0" />

      {/* 2. TOP GLASS PROTOCOL BAR */}
      <div className="w-full max-w-[96%] xl:max-w-7xl mx-auto px-4 sm:px-6 relative z-20 mb-8">
        <div className="p-4 sm:p-5 rounded-3xl glass-panel flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/25 border border-amber-400/60 p-1 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.35)]">
              <Building2 className="w-6 h-6 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                  RECAM OPERATIONS CORE
                </span>
                <span className="px-3 py-0.5 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/50 text-[10px] font-mono font-bold shadow-sm">
                  ACTIVE · 99.8% SLA
                </span>
              </div>
              <div className="text-xs text-amber-300/90 font-mono font-bold tracking-wide">
                COMMERCIAL REAL ESTATE LEASE ABSTRACTION · AI PIPELINES · WEB SYSTEMS
              </div>
            </div>
          </div>

          {/* Interactive Geographic Hub Selector */}
          <div className="flex items-center gap-2">
            {[
              { id: 'us', label: 'US & Canada', icon: Building2 },
              { id: 'dach', label: 'DACH Germany', icon: Globe2 },
              { id: 'uk', label: 'UK London', icon: Target },
            ].map((hub) => (
              <button
                key={hub.id}
                onClick={() => handleHubSelect(hub.id as any)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                  selectedHub === hub.id
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/40 scale-105 border border-amber-300'
                    : 'glass-card text-slate-200 hover:text-white hover:border-amber-400/50'
                }`}
              >
                <hub.icon className="w-3.5 h-3.5" />
                <span>{hub.label}</span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* 3. CENTER DASHBOARD: 3-COLUMN ULTRA-GLASSY PANELS (VISIBLE DETAILS THROUGH FROSTED GLASS) */}
      <div className="w-full max-w-[96%] xl:max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-between my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN (4 Cols): Operational Philosophy & Career Story */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            <div className="rounded-3xl glass-panel p-6 shadow-2xl space-y-4 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold mb-3 shadow-sm">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  02 // CAREER JOURNEY
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  The Story Behind The Leadership
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mt-3 font-medium">
                  {personalData.aboutStory.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5">
                  {personalData.aboutStory.journey}
                </p>
              </div>

              {/* Quote Card */}
              <div className="p-4 rounded-2xl glass-card border-amber-400/40 space-y-1.5 mt-4">
                <div className="text-[11px] font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Operational Philosophy
                </div>
                <p className="text-xs text-slate-200 leading-relaxed italic font-sans">
                  &ldquo;{personalData.aboutStory.operationalPhilosophy}&rdquo;
                </p>
              </div>
            </div>

          </div>

          {/* CENTER COLUMN (4 Cols): Interactive Holographic Hub Telemetry & Clause Inspector */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            <div className="rounded-3xl glass-panel-amber p-6 sm:p-7 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
              
              {/* Corner Sci-Fi Bracket Highlights */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-300 uppercase">
                    ACTIVE CONTRACT TELEMETRY
                  </span>
                  <span className="text-xs font-mono text-emerald-300 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {currentHub.sla}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest font-bold">
                    {currentHub.badge}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {currentHub.name}
                  </h4>
                  <div className="text-xs font-mono text-cyan-300 font-semibold mt-1">
                    {currentHub.type} · {currentHub.tenants}
                  </div>
                </div>

                {/* Scope & Clause Breakdown */}
                <div className="p-4 rounded-2xl glass-card space-y-2 mt-4 text-left border-white/15">
                  <div className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                    Clause Abstraction & Audit Scope
                  </div>
                  <p className="text-xs text-slate-100 leading-relaxed font-sans font-medium">
                    {currentHub.focus}
                  </p>
                </div>
              </div>

              {/* SLA & Financial Yield */}
              <div className="pt-4 border-t border-white/15 space-y-2 mt-4 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Accuracy Benchmark:</span>
                  <span className="font-bold text-emerald-300">{currentHub.sla}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Audited Financial Value:</span>
                  <span className="font-bold text-amber-300">{currentHub.value}</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN (4 Cols): High-Impact Deliverables & Promotion Milestones */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            
            <div className="rounded-3xl glass-panel p-6 shadow-2xl space-y-4 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold mb-3 shadow-sm">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  VALUE PROPOSITION
                </div>
                <h4 className="text-xl font-extrabold text-white leading-snug">
                  Where I Deliver Maximum Impact
                </h4>

                <ul className="space-y-3 mt-4">
                  {[
                    { title: 'Institutional Operations Leadership', desc: 'Directing CRE lease abstraction hubs with guaranteed 99.8%+ SLA.' },
                    { title: 'AI-Native Automation Architecture', desc: 'Deploying Claude LLM prompts & deterministic QA schemas.' },
                    { title: 'Cross-Border Multilingual Portfolios', desc: 'Solving international legal nuances across US, German (DACH), & UK.' },
                    { title: 'Talent Mentorship & Retention', desc: 'Coaching teams from associates to leads with zero error tolerance.' }
                  ].map((item, idx) => (
                    <li key={idx} className="p-3 rounded-2xl glass-card space-y-0.5 hover:border-cyan-400/50 transition-all">
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-300 pl-5 leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#experience"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-mono font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/30 mt-4 hover:scale-102"
              >
                <span>EXPLORE 4 MERIT PROMOTIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* 4. BOTTOM EXECUTIVE METRICS DOCK */}
      <div className="w-full max-w-[96%] xl:max-w-7xl mx-auto px-4 sm:px-6 relative z-20 pt-8">
        <div className="p-4 sm:p-5 rounded-3xl glass-panel shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center font-mono">
            <div>
              <div className="text-[10px] text-amber-400 uppercase tracking-widest font-bold">PORTFOLIO ACCURACY</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">99.8%</div>
              <div className="text-[11px] text-slate-300 font-sans mt-0.5">Guaranteed SLA</div>
            </div>
            <div>
              <div className="text-[10px] text-cyan-300 uppercase tracking-widest font-bold">CAREER ADVANCEMENT</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">4 PROMOTIONS</div>
              <div className="text-[11px] text-slate-300 font-sans mt-0.5">Merit Advancements</div>
            </div>
            <div>
              <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold">GLOBAL REACH</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">6 REGIONS</div>
              <div className="text-[11px] text-slate-300 font-sans mt-0.5">Cross-Border Leases</div>
            </div>
            <div>
              <div className="text-[10px] text-amber-400 uppercase tracking-widest font-bold">DOMAIN RUNTIME</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">8+ YEARS</div>
              <div className="text-[11px] text-slate-300 font-sans mt-0.5">Commercial Real Estate</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
