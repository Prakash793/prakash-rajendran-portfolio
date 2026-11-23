'use client';

import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  BookOpen,
  Code
} from 'lucide-react';
import { personalData } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-b border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            06 · ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic <span className="gold-gradient-text">Foundations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A degree in Information Technology that underpins my systems-driven approach to commercial real estate operations.
          </p>
        </div>

        {/* Education Showcase */}
        <div className="max-w-4xl mx-auto">
          {personalData.education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6 relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-indigo-500" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    <Award className="w-3.5 h-3.5" />
                    Engineering Degree
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white pt-2">
                    {item.degree}
                  </h3>
                  <div className="text-lg font-bold text-amber-400">
                    {item.field}
                  </div>
                </div>

                <div className="text-left sm:text-right space-y-1 flex-shrink-0">
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-white/5">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    {item.period}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center sm:justify-end gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </div>
                </div>
              </div>

              {/* Institution */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{item.institution}</h4>
                  <p className="text-xs text-slate-400">Premier engineering institution in Chennai, Tamil Nadu</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  Key Academic & Analytical Competencies Gained
                </div>
                <ul className="space-y-2.5">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Analytical Advantage Callout */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/20 flex items-start gap-3 mt-4">
                <Code className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">The Technical Advantage in Commercial Real Estate</span>
                  Having a formal Information Technology education enables me to understand relational databases, data extraction patterns, API schemas, and low-code automations far more deeply than traditional operations managers, making me a unique bridge between business stakeholders and technical developers.
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
