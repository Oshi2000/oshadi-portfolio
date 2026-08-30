import React from 'react';
import { GraduationCap, Building2, Code2, ShieldCheck } from 'lucide-react';
import { metricHighlights } from '../../data/portfolioData';

export const StatsHighlight: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-brand-600" />,
    Building2: <Building2 className="w-6 h-6 text-indigo-600" />,
    Code2: <Code2 className="w-6 h-6 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  };

  return (
    <section className="relative -mt-8 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {metricHighlights.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center gap-4 ${index !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
            >
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 shrink-0 shadow-subtle group-hover:scale-105 transition-transform">
                {iconMap[item.iconName] || <ShieldCheck className="w-6 h-6 text-brand-600" />}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-slate-600 mt-0.5 font-medium">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
