import React, { useState } from 'react';
import { 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  FileText, 
  Maximize2 
} from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { GitHubIcon } from '../ui/Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'qa' | 'architecture'>('overview');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'QA & Systems', label: 'QA & Operations' },
    { id: 'AI & Computer Vision', label: 'AI & Computer Vision' },
    { id: 'Full-Stack', label: 'Full-Stack Web' },
    { id: 'Automation & Tools', label: 'Test Automation' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const openProjectModal = (project: Project, initialTab: 'overview' | 'qa' | 'architecture' = 'overview') => {
    setActiveModalProject(project);
    setModalTab(initialTab);
  };

  const getCategoryBadgeVariant = (cat: Project['category']) => {
    switch (cat) {
      case 'QA & Systems':
        return 'success';
      case 'AI & Computer Vision':
        return 'purple';
      case 'Automation & Tools':
        return 'dark';
      default:
        return 'primary';
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Featured Engineering & QA"
          badgeVariant="primary"
          title="Engineered Solutions &"
          titleHighlight="Production Systems"
          subtitle="Showcasing enterprise QA platforms, AI computer vision research, full-stack web applications, and automated testing frameworks."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              padding="none"
              className="flex flex-col justify-between overflow-hidden group hover:border-slate-300 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Card Top Preview / Tech Header Banner */}
              <div className="p-6 sm:p-7 bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <Badge variant={getCategoryBadgeVariant(project.category)} size="sm">
                      {project.category}
                    </Badge>
                    
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                      Role: {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Subtle tech background ornament */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-brand-500/10 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-5">
                    {project.keyHighlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions & Deep Dive Modal Trigger */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        icon={<GitHubIcon className="w-3.5 h-3.5" />}
                        iconPosition="left"
                      >
                        Code
                      </Button>
                    )}

                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.liveUrl}
                        target="_blank"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                        iconPosition="right"
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => openProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 p-2 rounded-lg hover:bg-brand-50 transition-colors cursor-pointer"
                  >
                    <span>Inspect Details</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Detailed Deep-Dive Modal */}
        {activeModalProject && (
          <Modal
            isOpen={!!activeModalProject}
            onClose={() => setActiveModalProject(null)}
            title={activeModalProject.title}
            maxWidth="3xl"
          >
            <div className="space-y-6">
              
              {/* Modal Tabs Header */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setModalTab('overview')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    modalTab === 'overview'
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Overview & Features
                </button>
                {activeModalProject.qaAchievements && (
                  <button
                    type="button"
                    onClick={() => setModalTab('qa')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                      modalTab === 'qa'
                        ? 'bg-emerald-600 text-white'
                        : 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    QA & Testing Strategy
                  </button>
                )}
                {activeModalProject.architectureNotes && (
                  <button
                    type="button"
                    onClick={() => setModalTab('architecture')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      modalTab === 'architecture'
                        ? 'bg-brand-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Architecture & Engineering
                  </button>
                )}
              </div>

              {/* Tab 1: Overview */}
              {modalTab === 'overview' && (
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="primary" size="sm">
                        Role: {activeModalProject.role}
                      </Badge>
                      {activeModalProject.period && (
                        <span className="text-xs text-slate-500 font-mono">
                          {activeModalProject.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {activeModalProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Key Technical Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalProject.keyHighlights.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Technologies & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: QA & Quality Strategy */}
              {modalTab === 'qa' && activeModalProject.qaAchievements && (
                <div className="space-y-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-900">
                    <div className="flex items-center gap-2 font-bold text-sm mb-1 text-emerald-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Quality Assurance & Test Verification
                    </div>
                    <p className="text-xs text-emerald-700 font-normal">
                      Rigorous validation strategies executed for {activeModalProject.title} to ensure defect-free operation and high reliability.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {activeModalProject.qaAchievements.map((qa, qIdx) => (
                      <div
                        key={qIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{qa}</span>
                      </div>
                    ))}
                  </div>

                  {activeModalProject.deliverables && (
                    <div className="pt-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        QA Deliverables & Documentation
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeModalProject.deliverables.map((deliv, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs text-slate-700 p-2.5 rounded-lg bg-slate-100 border border-slate-200"
                          >
                            <FileText className="w-3.5 h-3.5 text-slate-500" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Architecture */}
              {modalTab === 'architecture' && activeModalProject.architectureNotes && (
                <div className="space-y-4">
                  <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl border border-slate-800 font-mono text-xs leading-relaxed space-y-3">
                    <div className="text-brand-400 font-bold flex items-center gap-2">
                      <Terminal className="w-4 h-4" /> System Architecture & Decisions
                    </div>
                    {activeModalProject.architectureNotes.map((note, nIdx) => (
                      <p key={nIdx} className="text-slate-300 font-normal">
                        • {note}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {activeModalProject.githubUrl && (
                    <Button
                      variant="dark"
                      size="sm"
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      icon={<GitHubIcon className="w-3.5 h-3.5" />}
                    >
                      View GitHub Repository
                    </Button>
                  )}
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setActiveModalProject(null)}
                >
                  Close
                </Button>
              </div>

            </div>
          </Modal>
        )}

      </div>
    </section>
  );
};
