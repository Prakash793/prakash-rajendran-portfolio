'use client';

import React, { useState } from 'react';
import { 
  Globe2, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Languages, 
  FileCheck,
  Sparkles
} from 'lucide-react';
import { soundFx } from '@/utils/sound';

interface RegionItem {
  id: string;
  name: string;
  flag: string;
  languages: string[];
  docTypes: string[];
  covenants: string[];
  sla: string;
  summary: string;
}

const regions: RegionItem[] = [
  {
    id: 'north-america',
    name: 'North America (US & Canada)',
    flag: '🇺🇸',
    languages: ['English'],
    docTypes: ['Triple Net (NNN)', 'Modified Gross', 'Ground Leases', 'SNDA', 'Estoppel Certificates'],
    covenants: ['Controllable CAM Caps', 'ROFO/ROFR Options', 'Co-Tenancy Covenants', 'Holdover Penalties'],
    sla: '99.9%',
    summary: 'High-volume institutional portfolios across Manhattan, California, Texas, and Toronto with multi-tenant retail and Class-A office assets.',
  },
  {
    id: 'germany-eu',
    name: 'Germany & DACH (Central Europe)',
    flag: '🇩🇪',
    languages: ['German', 'English'],
    docTypes: ['Gewerberaummietvertrag', 'Indexation Addenda', 'Handover Protocols (Übergabeprotokoll)'],
    covenants: ['VPI (Verbraucherpreisindex)', '§ 558 BGB Statutory Terms', 'Sonderkündigungsrecht', 'Betriebskosten'],
    sla: '99.8%',
    summary: 'Reconciling statutory German commercial tenancy law against international translation matrices and 10-point threshold indexation clauses.',
  },
  {
    id: 'united-kingdom',
    name: 'United Kingdom (EMEA)',
    flag: '🇬🇧',
    languages: ['English'],
    docTypes: ['Full Repairing & Insuring (FRI)', 'Underleases', 'Deeds of Variation', 'Licences to Alter'],
    covenants: ['Upward-Only Rent Reviews (UORR)', 'Break Clauses', 'Dilapidations Covenants', 'Service Charge Caps'],
    sla: '99.8%',
    summary: 'City of London and regional UK commercial portfolios with complex open-market rent reviews and statutory 1954 Landlord & Tenant Act exclusions.',
  },
  {
    id: 'spain-latam',
    name: 'Spain & Latin America',
    flag: '🇪🇸',
    languages: ['Spanish', 'Portuguese'],
    docTypes: ['Contrato de Arrendamiento', 'Aditivos de Alquiler', 'Actas de Entrega'],
    covenants: ['IPC (Índice de Precios al Consumo)', 'Gastos Comunes', 'Fianza Legal Obligatoria', 'Cláusulas de Rescisión'],
    sla: '99.7%',
    summary: 'Cross-border lease validation across Madrid, Barcelona, São Paulo, and Mexico City, auditing IPC indexation and statutory municipal charges.',
  },
  {
    id: 'israel',
    name: 'Israel & Middle East',
    flag: '🇮🇱',
    languages: ['Hebrew', 'English'],
    docTypes: ['Bilingual Commercial Leases', 'Option Extensions', 'Handover Acceptance Letters'],
    covenants: ['Consumer Price Indexation (Madad)', 'Arnona Municipal Tax Allocations', 'Security Guarantees'],
    sla: '99.8%',
    summary: 'Auditing high-value Tel Aviv tech hub leases with dual Hebrew-English agreements, indexation resets, and landlord renewal acceptances.',
  },
  {
    id: 'apac-korea',
    name: 'South Korea & APAC',
    flag: '🇰🇷',
    languages: ['Korean', 'English'],
    docTypes: ['Unit Handover Letters', 'Commercial Rental Agreements', 'Deposit Refund Agreements'],
    covenants: ['Gwallibi (Maintenance Overheads)', 'Key Money / Jeonse Conversion', 'Restoration to Original State'],
    sla: '99.7%',
    summary: 'Busan and Seoul institutional asset handovers, rental indexations, and multinational corporate occupier compliance audits.',
  },
];

export default function GlobalReach() {
  const [activeRegion, setActiveRegion] = useState<RegionItem>(regions[0]);

  const handleSelect = (r: RegionItem) => {
    soundFx.playClick();
    setActiveRegion(r);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#060810] border-t border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold font-mono">
            <Globe2 className="w-3.5 h-3.5 text-amber-400" />
            GLOBAL REACH // MULTI-JURISDICTIONAL AUDIT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cross-Border Lease Governance & <span className="gold-gradient-text">Global Jurisdictions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Direct operational oversight across international commercial real estate covenants, local tenancy statutes, and multilingual lease agreements.
          </p>
        </div>

        {/* Global Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Region Selector Pills */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest pb-1 flex items-center justify-between">
              <span>ACTIVE JURISDICTIONS</span>
              <span>GLOBAL COMPLIANCE</span>
            </div>

            <div className="space-y-2">
              {regions.map((region) => {
                const isSelected = activeRegion.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => handleSelect(region)}
                    className={`w-full p-4 rounded-2xl transition-all duration-200 text-left border flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/15'
                        : 'bg-slate-900/40 hover:bg-slate-900/80 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{region.flag}</span>
                      <div>
                        <h4 className={`text-sm sm:text-base font-bold ${isSelected ? 'text-amber-400' : 'text-white'}`}>
                          {region.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <Languages className="w-3 h-3 text-slate-500" />
                          <span>{region.languages.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {region.sla} SLA
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Jurisdiction Detail View */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="border-b border-white/10 pb-5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">{activeRegion.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{activeRegion.name}</h3>
                      <p className="text-xs text-amber-400 font-mono">
                        Languages: {activeRegion.languages.join(' & ')}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400 block">AUDIT CONSISTENCY</span>
                    <span className="text-xl font-bold text-emerald-400">{activeRegion.sla}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {activeRegion.summary}
                </p>
              </div>

              {/* Handled Document Types */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-amber-400" />
                  Primary Commercial Document Types Abstracted
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeRegion.docTypes.map((doc, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-200 font-medium"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specialized Covenants Reconciled */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <div className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Specialized Legal Covenants & Statutory Nuances
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeRegion.covenants.map((cov, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-white/5 flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{cov}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology note */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 text-xs text-slate-300 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Quality Protocol:</strong> Every international lease undergoes a 2-tier audit pairing specialized real estate analysts with validated translation glossaries to eliminate statutory discrepancies.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
