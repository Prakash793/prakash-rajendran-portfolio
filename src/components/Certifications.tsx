'use client';

import React from 'react';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  TrendingUp, 
  BadgeCheck, 
  Cpu
} from 'lucide-react';
import { personalData } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            07 · CERTIFICATIONS & HONORS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Credentials & <span className="gold-gradient-text">Key Achievements</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Industry credentials and operational milestones validating technical competence and leadership excellence.
          </p>
        </div>

        {/* Certifications and Key Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Anthropic Certification Spotlight */}
          <div className="lg:col-span-7">
            {personalData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 h-full flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glowing edge */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {cert.badgeText}
                    </span>
                    <span className="text-xs font-medium text-slate-400">{cert.issueDate}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <div className="text-base font-semibold text-amber-400">
                      Issuer: {cert.issuer}
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-300 font-mono">
                      <span>Credential ID:</span>
                      <span className="text-amber-300 font-bold">{cert.credentialId}</span>
                    </div>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    {cert.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Verified Competencies
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>Prompt engineering for complex legal document structuring & contract schemas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>AI-assisted developer workflows and CLI-based autonomous programming</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>Zero-shot & few-shot LLM clause extraction and structured JSON validation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Anthropic Official Certification
                  </span>
                  <span className="text-xs font-semibold text-amber-400">
                    Active & Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Honors & Career Accomplishments */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                4 Consecutive Career Promotions
              </div>
              <h4 className="text-lg font-bold text-white">Merit-Based Rapid Advancement</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Progressed from frontline Senior Process Associate through Team Lead, Senior Team Lead, Assistant Manager, and Deputy Manager within 8 years, driven by consistent operational excellence.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                99.8% Institutional SLA Adherence
              </div>
              <h4 className="text-lg font-bold text-white">Flawless Turnaround Governance</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Maintained an unprecedented 99.8% client SLA compliance rate across high-volume institutional portfolios spanning US, European, Asian, and Latin American commercial leases.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                AI Pioneer in CRE Operations
              </div>
              <h4 className="text-lg font-bold text-white">Hybrid Human-AI Document Auditing</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Spearheaded the integration of Claude-based AI models and automated spreadsheet macros into traditional lease review, slashing drafting cycle times by 60% without compromising precision.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
