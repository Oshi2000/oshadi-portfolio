import React from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle, 
  Calendar, 
  FileCheck 
} from 'lucide-react';
import { certifications, languages } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Verified Credentials"
          badgeVariant="primary"
          title="Professional Certifications &"
          titleHighlight="Languages"
          subtitle="Specialized industry courses in Artificial Intelligence, Full-Stack Architecture, and QA Automation frameworks."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              variant="default"
              padding="md"
              className="flex flex-col justify-between hover:border-slate-300 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-slate-600 mb-4">
                  Issued by {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Knowledge
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 font-mono">
                    [ADD CREDENTIAL LINK]
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Languages Proficiency Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Language Proficiencies</h4>
              <p className="text-xs text-slate-500">Effective professional communication across global and local teams</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {languages.map((lang) => (
              <div
                key={lang.language}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80"
              >
                <span className="text-sm font-bold text-slate-900">{lang.language}</span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
