import React from 'react';
import { 
  Building2, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck, 
  Mail, 
  Phone, 
  Briefcase 
} from 'lucide-react';
import { workExperiences, references } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Work History"
          badgeVariant="primary"
          title="Professional Journey &"
          titleHighlight="Industry Experience"
          subtitle="Real-world engineering contributions and quality assurance rigor in enterprise aviation IT environments."
        />

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          {workExperiences.map((exp) => (
            <div
              key={exp.id}
              className="relative bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-8 lg:p-10 hover:border-slate-300 transition-all duration-300"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="p-2 rounded-xl bg-brand-50 text-brand-600 border border-brand-100">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 font-medium">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-brand-600" />
                      {exp.company}
                    </span>
                    {exp.division && (
                      <span className="text-slate-500">
                        • {exp.division}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center sm:flex-col sm:items-end gap-2">
                  <Badge variant="primary" size="md">
                    {exp.type}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="py-6 border-b border-slate-100">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {exp.summary}
                </p>
              </div>

              {/* Core Responsibilities & Impact */}
              <div className="py-6 border-b border-slate-100 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Key Responsibilities & QA Execution
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span className="leading-normal">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technologies Utilized */}
              <div className="pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Technologies & Practices Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Professional References Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Professional Industry References
                </h4>
                <p className="text-xs text-slate-400">
                  Direct supervisors and mentors from SriLankan Airlines IT Business Systems
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {references.map((ref, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-2.5"
                >
                  <div>
                    <h5 className="text-base font-bold text-white">{ref.name}</h5>
                    <p className="text-xs text-brand-400 font-medium">{ref.title}</p>
                    <p className="text-xs text-slate-400">{ref.company}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300 font-mono">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <a href={`mailto:${ref.email}`} className="hover:text-brand-400 transition-colors">
                        {ref.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      <span>{ref.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
