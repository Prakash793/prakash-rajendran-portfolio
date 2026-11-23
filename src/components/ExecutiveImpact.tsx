'use client';

import React from 'react';
import { 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { soundFx } from '@/utils/sound';

export default function ExecutiveImpact() {
  const promotionSteps = [
    {
      year: 'Apr 2026 – Present',
      role: 'Deputy Manager',
      company: 'RECAM SOLUTIONS PVT LTD',
      scope: 'Portfolio-wide Operations & AI Leadership',
      metrics: 'Supervising multi-shift operations, SLA governance & client executive alignment.',
      highlight: 'Promoted to Deputy Manager',
      active: true,
    },
    {
      year: '2024 – Mar 2026',
      role: 'Assistant Manager',
      company: 'RECAM SOLUTIONS PVT LTD',
      scope: 'End-to-End Delivery & Quality Sign-Off',
      metrics: 'Managed delivery pipelines, exception handling & team lead coaching.',
      highlight: 'Promoted to Assistant Manager',
      active: false,
    },
    {
      year: '2022 – 2024',
      role: 'Senior Team Lead',
      company: 'RECAM SOLUTIONS PVT LTD',
      scope: 'Multilingual Operations & Standardization',
      metrics: 'Standardized abstraction guidelines & conducted 2nd-level QA audits.',
      highlight: 'Promoted to Senior Team Lead',
      active: false,
    },
    {
      year: '2018 – 2022',
      role: 'Team Lead',
      company: 'RECAM SOLUTIONS PVT LTD',
      scope: 'Frontline Abstraction Operations',
      metrics: 'Guided analyst cohorts, daily task allocations & quality reviews.',
      highlight: 'Promoted to Team Lead',
      active: false,
    },
    {
      year: 'Jul 2017 – Sep 2018',
      role: 'Senior Process Associate',
      company: 'The Annett Group',
      scope: 'Foundational CRE Abstraction',
      metrics: 'Executed high-precision document indexing, rent steps & clause tagging.',
      highlight: 'Career Entry Point',
      active: false,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#05060c] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            OPERATIONAL EXCELLENCE // LEADERSHIP LADDER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Merit-Based Progression & <span className="gold-gradient-text">Institutional Impact</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A visual breakdown of repeated leadership promotions, increasing organizational trust, and consistent operational results.
          </p>
        </div>

        {/* 4 Key Executive Performance Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            {
              value: '99.8%',
              label: 'Institutional SLA Adherence',
              desc: 'Across global multi-client accounts',
              icon: ShieldCheck,
              color: 'text-emerald-400',
            },
            {
              value: '4 Milestones',
              label: 'Consecutive Promotions',
              desc: 'Earned through verified performance',
              icon: Award,
              color: 'text-amber-400',
            },
            {
              value: '8+ Years',
              label: 'Dedicated CRE Track Record',
              desc: 'Commercial lease operations mastery',
              icon: Clock,
              color: 'text-indigo-400',
            },
            {
              value: '100% Zero-Defect',
              label: 'Statutory Compliance Focus',
              desc: 'Rigorous multi-tier QA matrices',
              icon: Sparkles,
              color: 'text-cyan-400',
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/5 text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-slate-900 border border-white/5 ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">VERIFIED</span>
                </div>
                <div className="mt-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Merit Advancement Ladder */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                CAREER ADVANCEMENT TRAJECTORY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                From Frontline Analyst to Deputy Manager
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              RECAM SOLUTIONS PVT LTD & THE ANNETT GROUP
            </span>
          </div>

          <div className="space-y-4">
            {promotionSteps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playClick()}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  step.active
                    ? 'bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900/90 border-amber-500/40 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/60 border-white/5 hover:bg-slate-900/60 hover:border-white/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 ${
                    step.active
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/25'
                      : 'bg-slate-900 text-slate-400 border border-white/5'
                  }`}>
                    0{5 - idx}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">{step.role}</h4>
                      {step.active && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Current Leadership
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-amber-400/90 font-medium">{step.company}</p>
                    <p className="text-xs text-slate-300 mt-1 max-w-xl">{step.metrics}</p>
                  </div>
                </div>

                <div className="md:text-right flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                  <span className="text-xs font-mono font-bold text-slate-400 block">{step.year}</span>
                  <span className="text-[11px] font-mono text-amber-400/80 mt-0.5 block">{step.scope}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
