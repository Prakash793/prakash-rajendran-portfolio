'use client';

import React from 'react';
import Image from 'next/image';
import { 
  FileText, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  TrendingUp,
  Globe2,
  ExternalLink
} from 'lucide-react';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import { personalData } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden radial-gradient-mesh">
      {/* Background Decorative Rings & Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Swiss / Viewfinder Editorial Crosshairs */}
      <div className="hidden lg:block absolute top-28 left-8 text-slate-700 font-mono text-xs select-none pointer-events-none">
        + 01 // ARCHIVE_INIT
      </div>
      <div className="hidden lg:block absolute top-28 right-8 text-slate-700 font-mono text-xs select-none pointer-events-none">
        TAMIL NADU, IN +
      </div>
      <div className="hidden lg:block absolute bottom-10 left-8 text-slate-700 font-mono text-xs select-none pointer-events-none">
        + SONY_TYPE_II // 2026
      </div>
      <div className="hidden lg:block absolute bottom-10 right-8 text-slate-700 font-mono text-xs select-none pointer-events-none">
        99.8%_SLA +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & Brand Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Executive & CRE Leadership Roles</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white">
                Hi, I&apos;m <span className="gold-gradient-text">{personalData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-amber-400/90 flex items-center gap-2 flex-wrap">
                <Building2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>{personalData.title}</span>
                <span className="text-slate-500 hidden sm:inline">|</span>
                <span className="text-slate-300 text-base">{personalData.division}</span>
              </p>
            </div>

            {/* Professional Headline */}
            <div className="border-l-2 border-amber-500/60 pl-4 py-1">
              <p className="text-xl sm:text-2xl font-semibold text-slate-100 tracking-tight leading-snug">
                {personalData.tagline}
              </p>
            </div>

            {/* Personal Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personalData.summary}
            </p>

            {/* Focus Pillars */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Multilingual Lease Abstraction',
                '99.8% SLA Governance',
                'Commercial Real Estate (CRE)',
                'Claude Code & AI Automation',
                'CAM Audit & Complex Covenants',
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={personalData.resumeUrl}
                download
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                Download Resume (PDF)
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 sm:ml-2">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-amber-500/10 hover:text-amber-400 text-slate-300 border border-slate-700/80 hover:border-amber-500/40 transition-all"
                  aria-label="Prakash Rajendran GitHub Profile"
                  title="GitHub @Prakash793"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-amber-500/10 hover:text-amber-400 text-slate-300 border border-slate-700/80 hover:border-amber-500/40 transition-all"
                  aria-label="Prakash Rajendran LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-amber-500/10 hover:text-amber-400 text-slate-300 border border-slate-700/80 hover:border-amber-500/40 transition-all"
                  aria-label="Email Prakash Rajendran"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalData.phoneRaw}`}
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-amber-500/10 hover:text-amber-400 text-slate-300 border border-slate-700/80 hover:border-amber-500/40 transition-all"
                  aria-label="Call Prakash Rajendran"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Details / Location */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {personalData.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                RECAM SOLUTIONS PVT LTD
              </span>
            </div>
          </div>

          {/* Right Column: Premium Photo & Credential Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-md">
              {/* Glow Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/40 via-amber-400/20 to-indigo-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-tilt" />

              <div className="relative bg-slate-900/90 border border-white/10 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-inner">
                  <Image
                    src={personalData.photoUrl}
                    alt="Prakash Rajendran - Deputy Manager, Commercial Real Estate & Operations"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Top Badge on Image */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px] font-semibold text-slate-200">
                      Claude Certified (Anthropic)
                    </span>
                  </div>

                  {/* Gradient Bottom Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 flex flex-col justify-end">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-lg leading-tight">Prakash Rajendran</p>
                        <p className="text-amber-400 text-xs font-medium">Deputy Manager · Operations</p>
                      </div>
                      <div className="bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded-md text-[11px] font-bold">
                        8+ Yrs Exp
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badges beneath image */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-slate-950/60 border border-white/5 rounded-xl p-3 text-left">
                    <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      SLA Performance
                    </div>
                    <div className="text-xl font-bold text-white mt-0.5">99.8%</div>
                    <div className="text-[11px] text-slate-400">Institutional adherence</div>
                  </div>

                  <div className="bg-slate-950/60 border border-white/5 rounded-xl p-3 text-left">
                    <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-semibold">
                      <Globe2 className="w-3.5 h-3.5" />
                      Multilingual
                    </div>
                    <div className="text-xl font-bold text-white mt-0.5">Global</div>
                    <div className="text-[11px] text-slate-400">Cross-border leases</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/5">
          {personalData.keyMetrics.map((metric, idx) => (
            <div key={idx} className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white gold-gradient-text">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">{metric.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{metric.helper}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
