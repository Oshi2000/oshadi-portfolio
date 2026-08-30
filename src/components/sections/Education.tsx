import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  CheckCircle2 
} from 'lucide-react';
import { educationList } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Academic Background"
          badgeVariant="primary"
          title="Education & Academic"
          titleHighlight="Excellence"
          subtitle="A solid computer science and software engineering foundation with First Class Honours distinction."
        />

        {/* Education Cards Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          {educationList.map((edu) => {
            const isTopHonour = !!edu.gradeBadge;

            return (
              <div
                key={edu.id}
                className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                  isTopHonour
                    ? 'bg-gradient-to-br from-white to-brand-50/40 border-brand-200/90 shadow-card hover:shadow-card-hover'
                    : 'bg-white border-slate-200 shadow-subtle hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    <div className={`p-3 rounded-2xl shrink-0 ${
                      isTopHonour
                        ? 'bg-brand-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {edu.degree}
                        </h3>
                        {edu.gradeBadge && (
                          <Badge variant="primary" dot size="sm">
                            {edu.gradeBadge}
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm font-semibold text-slate-700">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100/80 px-3 py-1.5 rounded-lg shrink-0 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="pl-0 sm:pl-14 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    <span className="text-slate-800 font-semibold">Specialization / Focus:</span> {edu.focus}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
