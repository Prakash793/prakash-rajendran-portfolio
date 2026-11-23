'use client';

import React, { useState } from 'react';
import { 
  Disc3, 
  ArrowUpRight, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2,
  Play,
  RotateCcw
} from 'lucide-react';
import GitHubIcon from '@/components/icons/GitHubIcon';
import { personalData, ProjectItem } from '@/data/portfolio';

interface CassetteDeckProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function CassetteDeck({ onSelectProject }: CassetteDeckProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const activeProject = personalData.projects[activeIndex] || personalData.projects[0];

  return (
    <div className="w-full space-y-8">
      {/* Top Deck Info Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-mono text-slate-300 uppercase tracking-widest text-[11px]">
            EXECUTIVE ARCHIVE // SONY CASSETTE INDEX
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
          <span>TOTAL TAPES: 08</span>
          <span>•</span>
          <span>FORMAT: HIGH BIAS TYPE II</span>
          <span>•</span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
          >
            {isPlaying ? 'PAUSE SPOOLS' : 'SPIN SPOOLS'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: The 3D Tactile Cassette Tape */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-lg aspect-[1.58/1] rounded-2xl bg-[#0c0d12] border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 sm:p-5 flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_25px_60px_rgba(245,158,11,0.15)]">
            
            {/* Plastic cassette gloss reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-white/[0.02] pointer-events-none" />

            {/* Screws in 4 corners */}
            <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center">
              <div className="w-1 h-0.5 bg-slate-500 transform rotate-45" />
            </div>
            <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center">
              <div className="w-1 h-0.5 bg-slate-500 transform -rotate-45" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center">
              <div className="w-1 h-0.5 bg-slate-500 transform rotate-12" />
            </div>
            <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center">
              <div className="w-1 h-0.5 bg-slate-500 transform -rotate-12" />
            </div>

            {/* Top Tape Label Area */}
            <div className="relative rounded-xl bg-gradient-to-r from-[#171922] via-[#1e202c] to-[#171922] border border-white/10 p-3 sm:p-3.5 space-y-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[9px] tracking-wider">
                    SIDE A
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    SONY HF-90 · CRE INTELLIGENCE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-amber-400 font-bold">
                  NR [ON]
                </span>
              </div>

              {/* Tape Title Written in clean font */}
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                  {activeProject.title}
                </h4>
                <span className="text-[10px] font-mono text-slate-400 flex-shrink-0">
                  {activeProject.period}
                </span>
              </div>
            </div>

            {/* Center: Transparent Tape Window with Dual Spools & Magnetic Tape */}
            <div className="relative my-2 w-full h-18 sm:h-20 rounded-xl bg-[#08090d] border border-white/10 flex items-center justify-between px-8 sm:px-12 overflow-hidden shadow-inner">
              
              {/* Magnetic Tape Ribbon across the middle */}
              <div className="absolute inset-x-12 h-6 bg-gradient-to-b from-[#3b2314] via-[#22150c] to-[#120b06] border-y border-amber-950/40 opacity-90" />

              {/* Tape Window Measurement Ruler */}
              <div className="absolute inset-x-20 top-1/2 -translate-y-1/2 flex justify-between text-[8px] font-mono text-slate-600 select-none pointer-events-none">
                <span>100</span>
                <span>50</span>
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>

              {/* Left Spool */}
              <div className={`relative z-10 w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-900/90 flex items-center justify-center shadow-lg ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                <div className="w-6 h-6 rounded-full border border-slate-600 bg-slate-950 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
                {/* 3 gear teeth */}
                <div className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full top-1" />
                <div className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full bottom-1 left-2" />
                <div className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full bottom-1 right-2" />
              </div>

              {/* Center Tape Window Cutout Label */}
              <div className="relative z-10 px-3 py-1 rounded bg-black/60 border border-white/10 text-center">
                <span className="text-[9px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                  INDEX // {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-[8px] text-slate-400 tracking-wider uppercase block">
                  {activeProject.category}
                </span>
              </div>

              {/* Right Spool */}
              <div className={`relative z-10 w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-900/90 flex items-center justify-center shadow-lg ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                <div className="w-6 h-6 rounded-full border border-slate-600 bg-slate-950 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
                {/* 3 gear teeth */}
                <div className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full top-1" />
                <div className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full bottom-1 left-2" />
                <div className="absolute w-1.5 h-1.5 bg-slate-400 rounded-full bottom-1 right-2" />
              </div>
            </div>

            {/* Bottom Tape Trapezoid Section with Head Access Cutouts */}
            <div className="relative h-9 rounded-lg bg-gradient-to-b from-[#11131a] to-[#0a0b0f] border border-white/10 flex items-center justify-between px-6 text-[10px] text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold">TAPE LOADED</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400">
                <TrendingUp className="w-3 h-3" />
                <span>{activeProject.metrics[0]}</span>
              </div>
            </div>

          </div>

          {/* Quick Tape Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 w-full max-w-lg">
            <button
              onClick={() => onSelectProject(activeProject)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/20"
            >
              <span>Inspect Tape Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {activeProject.githubUrl && (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Editorial Project Index (Inspired directly by bizar.ro) */}
        <div className="lg:col-span-6 space-y-2">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest pb-2 border-b border-white/10 flex items-center justify-between">
            <span>PROJECT DIRECTORY</span>
            <span>ROLE & METADATA</span>
          </div>

          <div className="space-y-1">
            {personalData.projects.map((proj, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => onSelectProject(proj)}
                  className={`group w-full p-3.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 border ${
                    isSelected
                      ? 'bg-slate-900/90 border-amber-500/40 shadow-lg shadow-amber-500/10'
                      : 'bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-amber-400' : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-sm sm:text-base font-semibold truncate transition-colors ${
                        isSelected ? 'text-white font-bold' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {proj.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0 text-right">
                    <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                      {proj.role.split('&')[0]}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {proj.period}
                    </span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isSelected
                          ? 'text-amber-400 translate-x-0.5 -translate-y-0.5'
                          : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
