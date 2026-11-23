'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Sparkles,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { personalData } from '@/data/portfolio';

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<'structured' | 'preview'>('structured');
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    navigator.clipboard.writeText(
      `${personalData.name}\n${personalData.title} | ${personalData.division}\nEmail: ${personalData.email} | Phone: ${personalData.phone}\nLinkedIn: ${personalData.linkedinUrl}\n\nSummary:\n${personalData.summary}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            08 · CURRICULUM VITAE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official <span className="gold-gradient-text">Resume & Credentials</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Download the official verified PDF resume or explore the structured ATS-friendly interactive view below.
          </p>
        </div>

        {/* Action Header Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-white/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Prakash_Rajendran_Resume.pdf</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Updated November 2026 · Official Executive Real Estate & Operations CV
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open PDF
            </a>

            <a
              href={personalData.resumeUrl}
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/25 transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('structured')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'structured'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Structured ATS Profile
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'preview'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <Eye className="w-4 h-4" />
            Live PDF Viewer
          </button>
        </div>

        {/* Resume Content Container */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'structured' ? (
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8 text-left">
              
              {/* Top Resume Header */}
              <div className="border-b border-white/10 pb-6 space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {personalData.name}
                </h3>
                <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
                  {personalData.title} · {personalData.division}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
                  <span>{personalData.location}</span>
                  <span>•</span>
                  <span>{personalData.phone}</span>
                  <span>•</span>
                  <span>{personalData.email}</span>
                  <span>•</span>
                  <span>{personalData.linkedin}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Professional Summary
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {personalData.summary}
                </p>
              </div>

              {/* Core Competencies */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Core Competencies & Tools
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {personalData.coreStrengths.map((str, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-900 text-slate-200 border border-white/10"
                    >
                      {str}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-slate-400 pt-1">
                  <span className="font-semibold text-slate-300">Software & Platforms:</span>{' '}
                  Yardi, ProLease, Manhattan, LP365, Colliers 360, Excel Macros, Prompt Engineering, Project Management Tools
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-6">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Professional Experience
                </h4>
                <div className="space-y-6">
                  {personalData.experiences.map((exp, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <div>
                          <span className="font-bold text-white text-base">{exp.role}</span>
                          <span className="text-slate-400 text-sm"> — {exp.company}</span>
                        </div>
                        <span className="text-xs text-amber-400 font-semibold">{exp.period}</span>
                      </div>
                      <p className="text-xs text-slate-300 italic">{exp.summary}</p>
                      <ul className="space-y-1.5 pt-1">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Education
                  </h4>
                  {personalData.education.map((edu, idx) => (
                    <div key={idx} className="text-xs text-slate-300">
                      <div className="font-bold text-white text-sm">{edu.degree}</div>
                      <div>{edu.field}</div>
                      <div className="text-slate-400">{edu.institution} ({edu.period})</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Certifications & Languages
                  </h4>
                  <div className="text-xs text-slate-300 space-y-1">
                    <div>
                      <span className="font-semibold text-white">Claude Code 101:</span> Anthropic (Apr 2026, ID: s544a4pph)
                    </div>
                    <div>
                      <span className="font-semibold text-white">Languages:</span> English (Professional), Tamil (Native)
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Live PDF Viewer Embed */
            <div className="glass-card rounded-3xl p-4 sm:p-6 border border-white/10 space-y-4">
              <div className="w-full h-[650px] rounded-2xl overflow-hidden bg-slate-900 border border-white/5 relative">
                <iframe
                  src={`${personalData.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                  title="Prakash Rajendran Resume PDF Preview"
                  className="w-full h-full border-0"
                />
              </div>
              <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                <span>Can&apos;t preview PDF in browser?</span>
                <a
                  href={personalData.resumeUrl}
                  download
                  className="text-amber-400 underline font-semibold hover:text-amber-300"
                >
                  Download the file directly
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
