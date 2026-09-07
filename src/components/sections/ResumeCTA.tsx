import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalProfile } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { GitHubIcon } from '../ui/Icons';

export const ResumeCTA: React.FC = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const triggerConfetti = () => {
    setDownloadStarted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.85 },
        colors: ['#2563eb', '#10b981', '#3b82f6', '#4f46e5'],
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section className="py-16 sm:py-20 relative bg-gradient-to-br from-slate-900 via-slate-950 to-navy-950 text-white overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-950/80 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-800 text-brand-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Comprehensive Curriculum Vitae
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Want to know more about my experience?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Download my resume to explore my education, technical skills, projects, and professional experience.
              </p>

              {/* Quick Resume Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SLIIT / University of Bedfordshire (1st Class)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SriLankan Airlines Software Engineering Intern</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISO/IEC 25010 Software Quality Plan</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Selenium, Playwright, React & AI</span>
                </div>
              </div>
            </div>

            {/* Right Action Button Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-900/90 rounded-2xl border border-slate-800 text-center space-y-4">
              <div className="p-4 rounded-2xl bg-brand-600/20 text-brand-400 border border-brand-500/30">
                <FileText className="w-8 h-8" />
              </div>

              <div className="text-xs text-slate-400">
                PDF Document • Updated 2026
              </div>

              <div className="flex w-full flex-col gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  href={personalProfile.socialLinks.resumeUrl}
                  download="Oshadi_Rangika_Resume.pdf"
                  onClick={triggerConfetti}
                  icon={<Download className="w-5 h-5" />}
                  className="w-full justify-center"
                >
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={personalProfile.socialLinks.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<GitHubIcon className="w-5 h-5" />}
                  className="w-full justify-center"
                >
                  GitHub Repository
                </Button>
              </div>

              {downloadStarted && (
                <p className="text-xs text-emerald-400" role="status">
                  Your resume download has started. Thank you for your interest.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
