'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Heart,
  ShieldCheck
} from 'lucide-react';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import { personalData } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050810] border-t border-white/10 pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-slate-950 text-lg shadow-md shadow-amber-500/20">
                PR
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-wide block">
                  {personalData.name}
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  {personalData.title} · {personalData.division}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Operations executive and commercial real estate specialist bridging 8+ years of multilingual lease governance with modern AI document workflows.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-amber-500/10 hover:text-amber-400 text-slate-400 border border-white/5 hover:border-amber-500/30 transition-all"
                aria-label="GitHub @Prakash793"
                title="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-amber-500/10 hover:text-amber-400 text-slate-400 border border-white/5 hover:border-amber-500/30 transition-all"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-amber-500/10 hover:text-amber-400 text-slate-400 border border-white/5 hover:border-amber-500/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalData.phoneRaw}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-amber-500/10 hover:text-amber-400 text-slate-400 border border-white/5 hover:border-amber-500/30 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="#about" className="hover:text-amber-400 transition-colors">
                  02 · About Me & Story
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-amber-400 transition-colors">
                  03 · Career Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-amber-400 transition-colors">
                  04 · Skills & Software
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-amber-400 transition-colors">
                  05 · Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-amber-400 transition-colors">
                  06 · Academic Qualifications
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="hover:text-amber-400 transition-colors">
                  07 · Certifications & Honors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Documents */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Verification & Inquiries
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Mannargudi & Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Anthropic Claude Code Certified (s544a4pph)</span>
              </div>
              <div className="pt-2">
                <a
                  href={personalData.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Download Official Resume PDF
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {personalData.name}. All rights reserved. Built with Next.js, TypeScript & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-white/5 transition-all text-xs"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
