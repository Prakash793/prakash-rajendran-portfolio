'use client';

import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  ExternalLink,
  Code2,
  Globe,
  FileCheck2,
  FileText,
  Disc3,
  LayoutGrid
} from 'lucide-react';
import GitHubIcon from '@/components/icons/GitHubIcon';
import { personalData, ProjectItem } from '@/data/portfolio';
import ProjectModal from './ProjectModal';
import CassetteDeck from './CassetteDeck';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<'cassette' | 'grid'>('cassette');
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Works', count: personalData.projects.length, icon: Layers },
    { id: 'web-design', label: 'Website Design & UI', count: personalData.projects.filter(p => p.category === 'web-design').length, icon: Globe },
    { id: 'documentation', label: 'Easy Documentation', count: personalData.projects.filter(p => p.category === 'documentation').length, icon: FileText },
    { id: 'cre-ai', label: 'CRE AI Platforms', count: personalData.projects.filter(p => p.category === 'cre-ai').length, icon: Cpu },
    { id: 'open-source', label: 'Open Source & Games', count: personalData.projects.filter(p => p.category === 'open-source').length, icon: Code2 },
  ];

  const filteredProjects = personalData.projects.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
            05 · FEATURED WORK & SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Systems, Platforms & <span className="gold-gradient-text">GitHub Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            An award-winning editorial collection of production commercial real estate platforms, responsive website designs, and open-source systems.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setViewMode('cassette')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'cassette'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <Disc3 className="w-4 h-4" />
            <span>Cassette Deck & Index (Awwwards Style)</span>
          </button>

          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'grid'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Architecture Grid</span>
          </button>
        </div>

        {/* View Mode 1: Cassette Deck (Luis Bizarro Style) */}
        {viewMode === 'cassette' ? (
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 mb-12">
            <CassetteDeck onSelectProject={(p) => setSelectedProject(p)} />
          </div>
        ) : (
          /* View Mode 2: Full Architecture Grid with Filters */
          <div className="space-y-10">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                        : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                        isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Accent Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-indigo-500" />

                  <div className="space-y-4">
                    {/* Meta header */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {project.badge}
                      </span>
                      <span className="text-xs font-medium text-slate-400">{project.period}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Role badge */}
                    <div className="text-xs text-amber-300/90 font-medium flex items-center gap-1.5 pt-1">
                      <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Role: {project.role}</span>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Core Architectural Capabilities
                      </div>
                      <ul className="space-y-1.5">
                        {project.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[11px] rounded bg-slate-900 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 text-[11px] rounded bg-slate-900 text-slate-500">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Card Actions */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {project.metrics[0]}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-white/10 transition-colors"
                          title="View GitHub Repository"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/20"
                      >
                        Deep Dive
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Banner Callout */}
        <div className="mt-12 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
              <GitHubIcon className="w-7 h-7 text-amber-400" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Active Open-Source Profile
              </div>
              <h3 className="text-xl font-bold text-white">github.com/Prakash793</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Explore real estate live websites, multilingual translation frameworks, resume builders, and interactive tools.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end flex-shrink-0">
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02]"
            >
              <GitHubIcon className="w-4 h-4" />
              Visit GitHub Profile (@Prakash793)
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
