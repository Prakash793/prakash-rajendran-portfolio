'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Award,
  Layers,
  Sparkles
} from 'lucide-react';
import { personalData, ExperienceItem } from '@/data/portfolio';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<string>(personalData.experiences[0].id);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            03 · CAREER PROGRESSION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            8+ Years of <span className="gold-gradient-text">Progressive Leadership</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A track record of continuous advancement through merit, operational excellence, and proven SLA delivery in commercial real estate.
          </p>
        </div>

        {/* Career Timeline & Detailed View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline Navigation Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1 flex items-center justify-between">
              <span>Roles & Organizations</span>
              <span>4 Promotions</span>
            </div>

            {personalData.experiences.map((exp) => {
              const isSelected = selectedExp === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExp(exp.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-400 to-amber-600" />
                  )}

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={`text-base font-bold ${isSelected ? 'text-amber-400' : 'text-white'}`}>
                          {exp.role}
                        </h4>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-medium text-slate-300 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 justify-end">
                        <Calendar className="w-3 h-3 text-amber-500" />
                        {exp.period}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">{exp.type}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Card */}
          <div className="lg:col-span-7">
            {(() => {
              const current = personalData.experiences.find((e) => e.id === selectedExp) || personalData.experiences[0];
              return (
                <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10 relative overflow-hidden">
                  
                  {/* Header info */}
                  <div className="border-b border-white/10 pb-6 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                          {current.type}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
                          {current.role}
                        </h3>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        {current.period}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-1">
                      <span className="flex items-center gap-1.5 font-semibold text-white">
                        <Building2 className="w-4 h-4 text-amber-400" />
                        {current.company}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {current.location}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                      {current.summary}
                    </p>
                  </div>

                  {/* Key Responsibilities & Contributions */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Key Contributions & Executive Responsibilities
                    </h5>
                    <ul className="space-y-3">
                      {current.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Applied in this role */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <div className="text-xs font-semibold text-slate-400">
                      Competencies Applied in Role
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.skillsUsed.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

        {/* Visual Timeline Milestones summary */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Career Milestones Timeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              A continuous progression of leadership trust and expanded organizational impact.
            </p>
          </div>

          <div className="relative">
            {/* Timeline center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-600/40 to-slate-800 -translate-x-1/2" />

            <div className="space-y-8">
              {personalData.careerMilestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full md:w-1/2 p-2">
                      <div
                        className={`glass-card rounded-2xl p-5 border border-white/5 ${
                          isEven ? 'md:ml-6 text-left' : 'md:mr-6 text-left md:text-right'
                        }`}
                      >
                        <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-2">
                          {m.year}
                        </div>
                        <h4 className="text-base font-bold text-white">{m.title}</h4>
                        <div className="text-xs font-semibold text-slate-400 mb-1">{m.company}</div>
                        <p className="text-xs text-slate-300 leading-relaxed">{m.description}</p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-400 items-center justify-center text-amber-400 shadow-md shadow-amber-500/30">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
