import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Cpu, 
  GitBranch, 
  CheckCircle, 
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react';
import { personalProfile, whatIBring } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    Layers: <Layers className="w-6 h-6 text-brand-600" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-600" />,
    GitBranch: <GitBranch className="w-6 h-6 text-blue-600" />,
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="About Me"
          badgeVariant="primary"
          title="Engineering Reliability &"
          titleHighlight="Modern Intelligence"
          subtitle="A multidisciplinary software engineer focused on building robust full-stack applications, intelligent AI models, and enterprise-grade quality assurance pipelines."
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-8 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            {personalProfile.aboutStory.map((paragraph, index) => (
              <p key={index} className="text-slate-600 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Quick Specialization Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
                Core Focus Areas:
              </span>
              <Badge variant="primary" size="md">Software Testing & QA</Badge>
              <Badge variant="purple" size="md">AI & Computer Vision</Badge>
              <Badge variant="slate" size="md">Full-Stack Development</Badge>
              <Badge variant="success" size="md">Test Automation</Badge>
              <Badge variant="outline" size="md">Agile / Scrum & PRINCE2</Badge>
            </div>
          </div>

          {/* Side Card: Academic & Industry Credibility Summary */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award className="w-32 h-32 text-brand-400" />
              </div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-600/20 border border-brand-500/30 text-brand-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">First Class Honours</h4>
                    <p className="text-xs text-slate-400">SLIIT / University of Bedfordshire</p>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Hands-on aviation software engineering & QA experience at <strong>SriLankan Airlines</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Specialized in <strong>ISO/IEC 25010</strong> standard-aligned Software Quality Plans.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Experienced in <strong>Selenium, Playwright, Katalon</strong> & TestRail defect lifecycles.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Author of computer vision 2D-to-3D floor plan transformation research.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#qa-mindset"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    <span>Explore My QA Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* "What I Bring" 4 Cards */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              What I Bring to Your Team
            </h3>
            <p className="text-sm text-slate-500 mt-1.5 max-w-xl mx-auto">
              Four fundamental pillars that define my approach to software engineering and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIBring.map((item) => (
              <Card
                key={item.id}
                variant="default"
                padding="md"
                className="flex flex-col justify-between group hover:border-brand-300 hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {iconMap[item.iconName]}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs font-medium text-slate-500 mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
