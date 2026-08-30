import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Code, 
  Layout, 
  Server, 
  Cpu, 
  Database, 
  GitBranch, 
  Search, 
  Sparkles 
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'testing-qa': <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    'programming': <Code className="w-5 h-5 text-brand-600" />,
    'frontend': <Layout className="w-5 h-5 text-indigo-600" />,
    'backend': <Server className="w-5 h-5 text-blue-600" />,
    'ai-cv': <Cpu className="w-5 h-5 text-purple-600" />,
    'databases': <Database className="w-5 h-5 text-amber-600" />,
    'tools-practices': <GitBranch className="w-5 h-5 text-slate-700" />,
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Technical Skills"
          badgeVariant="primary"
          title="Curated Technical &"
          titleHighlight="QA Capabilities"
          subtitle="Organized across standardized software quality engineering, full-stack architecture, machine learning frameworks, and modern developer tooling."
        />

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Selenium)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-800 placeholder-slate-400 shadow-subtle"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const matchingSkills = category.skills.filter((s) =>
              searchQuery === '' || s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (matchingSkills.length === 0) return null;

            return (
              <Card
                key={category.id}
                variant="default"
                padding="md"
                className="flex flex-col justify-between hover:border-slate-300 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      {categoryIcons[category.id] || <Code className="w-5 h-5 text-brand-600" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {category.title}
                      </h3>
                      <span className="text-xs text-slate-500">
                        {matchingSkills.length} skills listed
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {matchingSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                          skill.isKey
                            ? 'bg-brand-50/80 text-brand-800 border-brand-200/90 font-semibold shadow-subtle'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {skill.isKey && (
                          <Sparkles className="w-3 h-3 text-brand-600 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-400 font-mono ml-0.5">
                            • {skill.level}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight Indicator */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-600" /> Highlighted Core Skill
                  </span>
                  <span className="font-mono text-slate-400">Verified</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
