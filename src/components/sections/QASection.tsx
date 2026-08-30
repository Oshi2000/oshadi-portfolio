import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Server, 
  Gauge, 
  AlertCircle, 
  Check, 
  Layers, 
  FileCheck 
} from 'lucide-react';
import { qaPipelineSteps, qaCompetencies } from '../../data/portfolioData';
import { Badge } from '../ui/Badge';

export const QASection: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const activeStep = qaPipelineSteps[selectedStepIndex];

  const competencyIcons: Record<string, React.ReactNode> = {
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
    Terminal: <Terminal className="w-5 h-5 text-brand-600" />,
    Server: <Server className="w-5 h-5 text-indigo-600" />,
    Gauge: <Gauge className="w-5 h-5 text-amber-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    AlertCircle: <AlertCircle className="w-5 h-5 text-rose-600" />,
  };

  return (
    <section id="qa-mindset" className="py-20 sm:py-28 relative bg-slate-900 text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-900/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-950/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="success" dot size="md" className="mb-3.5 bg-emerald-950/80 text-emerald-400 border-emerald-800">
            Quality Engineering Mindset
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Building Software That Can Be{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Trusted
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Quality is not an afterthought or an inspection at the finish line—it is an engineered discipline woven into every phase of the software development lifecycle.
          </p>
        </div>

        {/* 8-Stage Interactive Quality Pipeline Visualizer */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              Interactive 8-Stage QA Lifecycle
            </h3>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Click any stage to inspect details
            </span>
          </div>

          {/* Stepper Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
            {qaPipelineSteps.map((item, index) => {
              const isSelected = selectedStepIndex === index;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setSelectedStepIndex(index)}
                  className={`flex flex-col items-start p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-950/70 border-emerald-500/80 text-white shadow-glow-qa scale-[1.02]'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded font-bold ${
                      isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      0{item.step}
                    </span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
                  </div>
                  <span className="text-xs font-bold line-clamp-1 text-slate-200">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    {item.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Deep-Dive Card */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Stage Overview */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono font-bold flex items-center justify-center text-sm">
                    {activeStep.step}
                  </span>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">
                      {activeStep.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                      Primary Objective: {activeStep.focus}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {activeStep.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider py-1 mr-1">
                    Tools Used:
                  </span>
                  {activeStep.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Deliverables & Artifacts Panel */}
              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  Key Deliverables & Artifacts
                </h5>

                <div className="space-y-2.5">
                  {activeStep.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80">
                  <span>ISO/IEC 25010 Standard</span>
                  <span className="text-emerald-400 font-mono font-semibold">Stage Verified</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* QA Core Competencies 6-Card Matrix */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              End-to-End QA Competencies
            </h3>
            <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              Comprehensive capabilities spanning functional validation, automation suites, API payloads, and enterprise compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qaCompetencies.map((comp) => (
              <div
                key={comp.title}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-950 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {competencyIcons[comp.iconName] || <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {comp.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {comp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-1.5">
                  {comp.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
