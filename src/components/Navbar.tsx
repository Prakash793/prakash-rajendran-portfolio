'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Mail, 
  Search, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import Image from 'next/image';
import GitHubIcon from '@/components/icons/GitHubIcon';
import { personalData } from '@/data/portfolio';
import { soundFx } from '@/utils/sound';

interface NavbarProps {
  onOpenPalette?: () => void;
  audioEnabled?: boolean;
  onToggleAudio?: () => void;
}

export default function Navbar({ onOpenPalette, audioEnabled, onToggleAudio }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'sandbox', 'education', 'certifications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    if (onToggleAudio) {
      onToggleAudio();
    } else {
      const state = soundFx.toggle();
      setSoundOn(state);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'AI Sandbox', href: '#sandbox', id: 'sandbox' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05060b]/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/60 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        
        {/* Brand Wordmark & Photo Avatar Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-3.5 focus:outline-none"
          onClick={() => {
            soundFx.playClick();
            setActiveSection('home');
          }}
        >
          <div className="relative">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-amber-400/90 shadow-md shadow-amber-500/30 group-hover:scale-105 group-hover:border-amber-300 transition-all duration-300">
              <Image
                src={personalData.photoUrl}
                alt={personalData.name}
                width={48}
                height={48}
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#05060b] rounded-full" title="Available for Executive Opportunities" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-wide text-base sm:text-lg lg:text-xl group-hover:text-amber-400 transition-colors">
              {personalData.name}
            </span>
            <span className="text-[11px] sm:text-xs text-amber-300/80 tracking-wider uppercase font-medium font-mono">
              Deputy Manager · Commercial Real Estate Operations
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1.5 bg-slate-900/80 p-2 rounded-full border border-white/10 backdrop-blur-xl shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => soundFx.playClick()}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm shadow-amber-500/40 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Quick Controls */}
        <div className="hidden sm:flex items-center gap-2">
          
          {/* Quick Command Palette Launcher */}
          {onOpenPalette && (
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenPalette();
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-white/10 transition-colors"
              title="Open Command Launcher (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Command</span>
              <kbd className="hidden lg:inline bg-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-white/5">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Sound FX Toggle Button */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-xl border text-xs font-mono transition-all ${
              audioEnabled ?? soundOn
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border-white/5'
            }`}
            title="Toggle Tactile Sound Effects"
            aria-label="Toggle Audio Effects"
          >
            {audioEnabled ?? soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* GitHub Icon Link */}
          <a
            href={personalData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-white/10 transition-all"
            title="GitHub Profile (@Prakash793)"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          {/* Resume PDF */}
          <a
            href={personalData.resumeUrl}
            download
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-white/10 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resume</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20"
          >
            <span>Contact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => {
            soundFx.playClick();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-white/10 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#060810]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                  setActiveSection(link.id);
                }}
                className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={personalData.resumeUrl}
              download
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
