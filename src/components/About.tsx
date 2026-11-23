'use client';

import React from 'react';
import { 
  Compass, 
  ShieldCheck, 
  Lightbulb, 
  Target, 
  Cpu, 
  Languages, 
  CheckCircle, 
  TrendingUp, 
  Briefcase,
  Sparkles
} from 'lucide-react';
import { personalData } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            02 · ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Journey, Philosophy & <span className="gold-gradient-text">Core Identity</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A dedicated commercial real estate operations leader with a technical B.Tech foundation and deep expertise in multilingual lease governance.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border-l-4 border-l-amber-500">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-amber-400" />
                The Story Behind the Career
              </h3>
              
              <p className="text-base text-slate-200 leading-relaxed font-medium">
                {personalData.aboutStory.lead}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {personalData.aboutStory.journey}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Operational Philosophy
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{personalData.aboutStory.operationalPhilosophy}&rdquo;
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  The AI & Low-Code Vision
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {personalData.aboutStory.aiVision}
                </p>
              </div>
            </div>

            {/* Languages spoken */}
            <div className="grid grid-cols-2 gap-4">
              {personalData.languages.map((lang, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <div className="text-sm font-bold text-white">{lang.name}</div>
                    <div className="text-xs text-slate-400">{lang.proficiency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Ambitions & Pillars */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Career Ambitions Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Career Ambitions & Value Proposition
              </div>
              <h4 className="text-lg font-bold text-white">Where I Deliver Maximum Impact</h4>
              <ul className="space-y-3">
                {[
                  {
                    title: 'Institutional Operations Leadership',
                    desc: 'Directing large-scale CRE lease abstraction hubs with guaranteed 99.8%+ SLA compliance.',
                  },
                  {
                    title: 'AI-Native Workflow Modernization',
                    desc: 'Implementing Claude LLM prompts and deterministic validation schemas that remove manual toil.',
                  },
                  {
                    title: 'Cross-Border Multilingual Portfolios',
                    desc: 'Solving international legal nuances across European, Asian, and Latin American agreements.',
                  },
                  {
                    title: 'Talent Mentorship & Retention',
                    desc: 'Coaching team leads and analysts to achieve high retention and consistent quality standards.',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">{item.title}</span>
                      <span className="text-xs text-slate-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Executive Roles */}
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Target Executive & Leadership Roles
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {personalData.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 text-slate-200 border border-slate-700/70 font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Core Strengths Grid */}
        <div className="pt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Core Professional Competencies
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Key domains where I bring verified executive experience and technical rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalData.coreStrengths.map((strength, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-xl p-4 flex items-start gap-3 border border-white/5"
              >
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white leading-snug">{strength}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
