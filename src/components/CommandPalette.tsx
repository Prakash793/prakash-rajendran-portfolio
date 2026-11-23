'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  FileText, 
  Mail, 
  Phone, 
  Disc3, 
  Terminal, 
  Briefcase, 
  Wrench, 
  Award, 
  ArrowRight,
  Volume2,
  VolumeX,
  ExternalLink
} from 'lucide-react';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import { personalData } from '@/data/portfolio';
import { soundFx } from '@/utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
}

export default function CommandPalette({ isOpen, onClose, audioEnabled, onToggleAudio }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundFx.playClick();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'cassette',
      name: 'Explore Cassette Deck & Editorial Index',
      category: 'Navigation',
      icon: Disc3,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'sandbox',
      name: 'Launch Claude AI Clause Sandbox',
      category: 'Interactive',
      icon: Terminal,
      action: () => {
        const el = document.getElementById('sandbox');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.location.hash = '#sandbox';
        onClose();
      },
    },
    {
      id: 'resume',
      name: 'Download Official Resume PDF',
      category: 'Documents',
      icon: FileText,
      action: () => {
        const link = document.createElement('a');
        link.href = personalData.resumeUrl;
        link.download = 'Prakash_Rajendran_Resume.pdf';
        link.click();
        onClose();
      },
    },
    {
      id: 'experience',
      name: 'View Career Experience & 4 Promotions',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        window.location.hash = '#experience';
        onClose();
      },
    },
    {
      id: 'skills',
      name: 'Inspect CRE & Software Skills Matrix',
      category: 'Navigation',
      icon: Wrench,
      action: () => {
        window.location.hash = '#skills';
        onClose();
      },
    },
    {
      id: 'audio',
      name: audioEnabled ? 'Mute Audio Sound FX' : 'Enable Tactile Sound FX',
      category: 'Audio',
      icon: audioEnabled ? VolumeX : Volume2,
      action: () => {
        onToggleAudio();
      },
    },
    {
      id: 'email',
      name: `Email Prakash (${personalData.email})`,
      category: 'Contact',
      icon: Mail,
      action: () => {
        window.location.href = `mailto:${personalData.email}`;
        onClose();
      },
    },
    {
      id: 'github',
      name: 'Open GitHub Profile (@Prakash793)',
      category: 'External',
      icon: GitHubIcon,
      action: () => {
        window.open(personalData.githubUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      name: 'Open LinkedIn Profile',
      category: 'External',
      icon: LinkedInIcon,
      action: () => {
        window.open(personalData.linkedinUrl, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump to section (e.g. cassette, resume, audio)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400 font-mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    soundFx.playClick();
                    item.action();
                  }}
                  className="w-full p-3 rounded-xl hover:bg-slate-800/80 text-left flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-950 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium group-hover:text-white">{item.name}</span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>PRESS ESC TO CLOSE</span>
          <span>PRAKASH RAJENDRAN // EXECUTIVE SUITE</span>
        </div>

      </div>
    </div>
  );
}
