'use client';

import React from 'react';

export default function KineticMarquee() {
  const items = [
    'COMMERCIAL REAL ESTATE OPERATIONS',
    '99.8% SLA ADHERENCE',
    'MULTILINGUAL LEASE ABSTRACTION',
    'ANTHROPIC CLAUDE CERTIFIED (ID: s544a4pph)',
    '4 CONSECUTIVE PROMOTIONS',
    'YARDI · PROLEASE · MANHATTAN · LP365',
    'WEBSITE DESIGN & EASY DOCUMENTATION',
    'LOYOLA-ICAM B.TECH IN IT',
    'GITHUB @PRAKASH793',
  ];

  return (
    <div className="relative py-4 bg-slate-950 border-y border-white/10 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-8 text-xs font-mono font-bold tracking-widest text-slate-400">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <span className="text-white hover:text-amber-400 transition-colors uppercase">
              {text}
            </span>
            <span className="text-amber-500 font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
