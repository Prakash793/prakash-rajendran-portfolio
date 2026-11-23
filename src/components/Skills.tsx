'use client';

import React, { useState } from 'react';
import { 
  Wrench, 
  Layers, 
  Building2, 
  Users, 
  Cpu, 
  Sparkles, 
  CheckCircle, 
  Search,
  Filter
} from 'lucide-react';
import { personalData, SkillItem } from '@/data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Competencies', icon: Layers },
    { id: 'web-design', label: 'Website Design & Docs', icon: Sparkles },
    { id: 'cre-operations', label: 'CRE & Lease Operations', icon: Building2 },
    { id: 'leadership', label: 'Leadership & SLA Governance', icon: Users },
    { id: 'software', label: 'CRE Software & Systems', icon: Wrench },
    { id: 'automation', label: 'AI & Automation', icon: Cpu },
  ];

  const filteredSkills = personalData.skills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            04 · SKILLS & EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="gold-gradient-text">Skills Matrix</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Cross-functional mastery combining institutional real estate domain knowledge, executive operations governance, and AI prompt engineering.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills & tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {skill.name}
                  </h4>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${
                      skill.level === 'Expert'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="capitalize">{skill.category.replace('-', ' ')}</span>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Software Systems Spotlight */}
        <div className="mt-16 glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Industry Software Suite
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Enterprise Commercial Real Estate & Admin Platforms
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Proficient in enterprise database setups, portfolio indexing & reporting
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Yardi Voyager', type: 'CRE Property Management' },
              { name: 'ProLease', type: 'Lease Admin & Accounting' },
              { name: 'Manhattan IWMS', type: 'Workplace & Portfolio' },
              { name: 'LP365', type: 'Lease Processing Platform' },
              { name: 'Colliers 360', type: 'Corporate Real Estate' },
              { name: 'Anthropic Claude', type: 'AI & Document Workflows' },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-xl p-3.5 border border-white/5 text-center flex flex-col justify-center items-center hover:border-amber-500/30 transition-colors"
              >
                <div className="font-bold text-white text-xs sm:text-sm">{tool.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{tool.type}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
