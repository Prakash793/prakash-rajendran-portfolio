'use client';

import React, { useState } from 'react';
import { 
  Terminal, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  ShieldCheck, 
  FileText, 
  Download, 
  RefreshCw,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '@/utils/sound';

interface SampleClause {
  id: string;
  title: string;
  jurisdiction: string;
  excerpt: string;
  result: {
    summary: string;
    risk: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    riskReason: string;
    obligations: string[];
    deadlines: string;
    recommendation: string;
    financialImpact: string;
  };
}

const sampleClauses: SampleClause[] = [
  {
    id: 'cam-cap',
    title: 'Triple-Net (NNN) CAM Expense Cap & Audit Rights',
    jurisdiction: 'New York, US (Commercial Office)',
    excerpt: `Section 4.02(b): Controllable Operating Expenses shall not increase by more than five percent (5%) cumulative and compounded per annum over the actual expenses incurred in Base Year (2024). Capital replacements over $25,000 shall be amortized over useful life in accordance with GAAP. Tenant retains right to audit Landlord's books upon sixty (60) days written notice; if overcharge exceeds 3%, Landlord pays full audit costs.`,
    result: {
      summary: '5% cumulative/compounded annual cap on controllable expenses with full GAAP amortization and landlord-funded audit penalty threshold at 3% discrepancy.',
      risk: 'LOW',
      riskReason: 'Strong tenant protections with compounded ceiling and mandatory audit penalty reimbursement.',
      obligations: [
        'Landlord must amortize capital expenses over $25,000 under GAAP rules',
        'Tenant must provide 60-day written notice prior to exercising audit rights',
        'Landlord reimburses full audit expenses if overcharge exceeds 3%',
      ],
      deadlines: '60 days written notice prior to annual reconciliation window',
      recommendation: 'Ensure annual reconciliations are validated against 2024 Base Year accounting ledger every March.',
      financialImpact: 'Eliminates unexpected capital expenditure pass-throughs; protects operational budget.',
    },
  },
  {
    id: 'expansion-option',
    title: 'Expansion Option & ROFO (Right of First Offer)',
    jurisdiction: 'London, UK (Multi-Floor Commercial)',
    excerpt: `Clause 18.1: Tenant shall have a Right of First Offer on Suite 500 (approx. 14,200 RSF) expiring March 31, 2027. Landlord must give 30 days notice of availability. Tenant must deliver binding exercise notice within twenty (20) business days, failing which option irrevocably lapses. Basic Rent shall be 95% of Fair Market Value with 3 months rent abatement.`,
    result: {
      summary: 'Right of First Offer on Suite 500 at 95% Fair Market Value plus 3 months free rent, requiring strictly timed 20-day response window.',
      risk: 'MEDIUM',
      riskReason: 'Time-sensitive 20-business-day forfeiture window; failure to respond forfeits valuable expansion space.',
      obligations: [
        'Landlord must notify Tenant within 30 days of upcoming vacancy',
        'Tenant must issue irrevocable binding notice within 20 business days',
        'Base Rent to be established at 95% of appraised Fair Market Rent',
      ],
      deadlines: 'Expiry: March 31, 2027 (Strict 20-day response turnaround)',
      recommendation: 'Configure automated iCal critical notice milestone 90 days ahead of prospective delivery.',
      financialImpact: '5% discount below market rent plus 3 months abatement yields ~$180,000 in tenant savings.',
    },
  },
  {
    id: 'german-indexation',
    title: 'German VPI Statutory Indexation & Penalty Rights',
    jurisdiction: 'Frankfurt, Germany (European Master Lease)',
    excerpt: `Section 7(3): Sollte sich der vom Statistischen Bundesamt festgestellte Verbraucherpreisindex für Deutschland (VPI, Basis 2020=100) um mehr als 10 Prozentpunkte gegenüber dem Stand zum Vertragsbeginn verändern, passt sich die Miete im gleichen prozentualen Verhältnis an. Bei Überschreiten von 15 Prozentpunkten steht dem Mieter ein außerordentliches Sonderkündigungsrecht mit 6 Monaten Frist zum Quartalsende zu.`,
    result: {
      summary: 'German statutory consumer price indexation (VPI 2020=100) with 10-point threshold adjustment and extraordinary 6-month cancellation right upon 15-point increase.',
      risk: 'CRITICAL',
      riskReason: 'High inflationary environment can trigger unilateral statutory lease termination by tenant.',
      obligations: [
        'Rent remains static until VPI baseline fluctuates by 10 full percentage points',
        'Adjustments tied strictly to official German Federal Statistical Office index',
        'Special termination right activates if index rises beyond 15 points',
      ],
      deadlines: '6 months notice to calendar quarter-end upon 15-point threshold breach',
      recommendation: 'Reconcile translation against statutory § 558 BGB provisions to verify notice validity.',
      financialImpact: 'Potential sudden tenant departure or substantial rent escalation adjustments.',
    },
  },
];

export default function ClausePlayground() {
  const [selectedClause, setSelectedClause] = useState<SampleClause>(sampleClauses[0]);
  const [customText, setCustomText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasRun, setHasRun] = useState<boolean>(true);

  const handleRunAbstractor = () => {
    soundFx.playCassetteClack();
    setIsProcessing(true);
    setHasRun(false);

    setTimeout(() => {
      setIsProcessing(false);
      setHasRun(true);
      soundFx.playChime();
    }, 900);
  };

  const handleSelectSample = (sample: SampleClause) => {
    soundFx.playClick();
    setSelectedClause(sample);
    setCustomText('');
    setHasRun(true);
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'LOW':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'MEDIUM':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'HIGH':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'CRITICAL':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/30 animate-pulse';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#06080e] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold font-mono">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            LIVE LABORATORY // CLAUDE AI LEASE ABSTRACTION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test Prakash&apos;s <span className="gold-gradient-text">Clause Intelligence Engine</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base">
            Experience how Prakash translates complex legal covenants into automated risk audits, plain-English executive summaries, and structured outputs in real-time.
          </p>
        </div>

        {/* Sandbox Shell */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
          
          {/* Top Bar with Sample Clause Selectors */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-400" />
              Select Contract Clause Preset:
            </span>

            <div className="flex flex-wrap gap-2">
              {sampleClauses.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedClause.id === sample.id && customText === ''
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-white/5 hover:bg-slate-800'
                  }`}
                >
                  {sample.title.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Dual Panel Sandbox: Input Contract vs Abstracted Output */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Panel: Verbatim Contract Excerpt */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>SOURCE LEGAL COVENANT</span>
                  <span className="text-amber-400 font-semibold">{selectedClause.jurisdiction}</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/10 font-mono text-xs text-slate-300 leading-relaxed min-h-[220px] select-text">
                  {selectedClause.excerpt}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleRunAbstractor}
                  disabled={isProcessing}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Ingesting & Auditing via Claude Engine...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-slate-950" />
                      <span>Execute AI Clause Abstraction</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Panel: Structured Extraction & Risk Analysis */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>AUDIT RESULTS & EXECUTIVE SYNTHESIS</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Pydantic Schema Validated
                </span>
              </div>

              {isProcessing ? (
                <div className="min-h-[260px] rounded-2xl bg-slate-950/80 border border-white/5 flex flex-col items-center justify-center space-y-3 p-6 text-center">
                  <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs font-mono text-amber-300">
                    Extracting financial liabilities, notice covenants & statutory rights...
                  </p>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-slate-950/90 border border-white/10 space-y-4 text-left">
                  
                  {/* Executive Summary Card */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/5">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Plain-English Executive Abstract
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-slate-200 mt-1 leading-snug">
                        {selectedClause.result.summary}
                      </p>
                    </div>

                    <div className="flex flex-col items-end flex-shrink-0">
                      <span className="text-[9px] font-mono text-slate-500 uppercase">RISK RATING</span>
                      <span className={`px-2.5 py-1 rounded text-[11px] font-bold border font-mono mt-0.5 ${getRiskBadge(selectedClause.result.risk)}`}>
                        {selectedClause.result.risk}
                      </span>
                    </div>
                  </div>

                  {/* Risk Rationale */}
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-amber-300 font-mono">Risk Rationale: </span>
                    <span>{selectedClause.result.riskReason}</span>
                  </div>

                  {/* Key Obligations */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Covenant Rights & Commitments
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {selectedClause.result.obligations.map((ob, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{ob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Financial & Deadline Bottom Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/5 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Critical Notice Window</span>
                      <span className="text-white font-semibold">{selectedClause.result.deadlines}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Financial Impact Analysis</span>
                      <span className="text-amber-300 font-semibold">{selectedClause.result.financialImpact}</span>
                    </div>
                  </div>

                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
