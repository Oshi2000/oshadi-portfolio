import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Copy, 
  Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalProfile } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { LinkedInIcon, GitHubIcon } from '../ui/Icons';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'quality'>('quality');

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#2563eb', '#10b981', '#3b82f6', '#4f46e5'],
      });
    } catch {
      // Graceful fallback
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalProfile.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      {/* Background Gradients & Subtle Grid */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-subtle mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-800 tracking-wide">
                First Class Honours Graduate • Open for Roles
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Hi, I’m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700">
                {personalProfile.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-semibold text-slate-700 mb-5 leading-snug">
              {personalProfile.heroSubtitle}
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {personalProfile.shortBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                View My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={personalProfile.socialLinks.resumeUrl}
                download="Oshadi_Rangika_Resume.pdf"
                onClick={triggerConfetti}
                icon={<Download className="w-4 h-4" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Secondary Links & Email Copy */}
            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Connect:
                </span>
                <a
                  href={personalProfile.socialLinks.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50/50 transition-all shadow-subtle"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-brand-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalProfile.socialLinks.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-subtle"
                >
                  <GitHubIcon className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Quick Copy Email */}
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-100 hover:bg-slate-200/70 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{personalProfile.socialLinks.email}</span>
                    <Copy className="w-3 h-3 text-slate-400 ml-1" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Engineering & QA Console Card */}
          <div className="lg:col-span-5 relative">
            {/* Glow backing */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-3xl blur-lg opacity-20" />

            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">oshadi.profile.ts</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveTab('quality')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'quality'
                        ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    QA Engine
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-brand-600/30 text-brand-400 border border-brand-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Tech Stack
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-4">
                {activeTab === 'quality' ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <ShieldCheck className="w-4 h-4" /> ISO/IEC 25010 Quality Gate
                      </span>
                      <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 text-[11px]">
                        PASSED 100%
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between bg-slate-950/50 p-2 rounded-lg border border-slate-800/60">
                        <span className="text-slate-300">Aero Vault Enterprise Tests:</span>
                        <span className="text-emerald-400 font-semibold">100% Automated & Verified</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-950/50 p-2 rounded-lg border border-slate-800/60">
                        <span className="text-slate-300">CleanOps Pro Smoke Tests:</span>
                        <span className="text-emerald-400 font-semibold">Katalon Suite Ready</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-950/50 p-2 rounded-lg border border-slate-800/60">
                        <span className="text-slate-300">Lighthouse Performance Audit:</span>
                        <span className="text-emerald-400 font-semibold">Score: 98/100</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-950/50 p-2 rounded-lg border border-slate-800/60">
                        <span className="text-slate-300">Regression Defect Density:</span>
                        <span className="text-emerald-400 font-semibold">0 Critical Defects</span>
                      </div>
                    </div>

                    <div className="pt-2 text-slate-400 text-[11px] flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Continuous test automation enabled with Selenium & Playwright.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                      <span className="flex items-center gap-1.5 text-brand-400 font-semibold">
                        <Terminal className="w-4 h-4" /> Core Technical Capabilities
                      </span>
                      <span className="text-brand-400 bg-brand-950/60 px-2 py-0.5 rounded border border-brand-800 text-[11px]">
                        Full-Stack & AI
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                        <div className="text-slate-400 text-[11px] mb-1">Frontend & Visualization:</div>
                        <div className="text-brand-300">React.js • Tailwind CSS • Three.js • R3F</div>
                      </div>

                      <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                        <div className="text-slate-400 text-[11px] mb-1">Backend & Services:</div>
                        <div className="text-indigo-300">Node.js • Express • Flask • C# (.NET) • Spring Boot</div>
                      </div>

                      <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                        <div className="text-slate-400 text-[11px] mb-1">AI & Computer Vision:</div>
                        <div className="text-emerald-300">TensorFlow • Mask R-CNN • OpenCV • 2D-3D Mapping</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Verified Badge */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    SLIIT / Univ of Bedfordshire
                  </span>
                  <span className="text-slate-300 font-semibold">First Class Honours</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
