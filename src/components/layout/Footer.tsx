import React from 'react';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { personalProfile } from '../../data/portfolioData';
import { LinkedInIcon, GitHubIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear() || 2026;

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold font-mono text-base shadow-sm">
                <span>OR</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  {personalProfile.name}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  First Class Honours • Software Engineering Graduate
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Passionate about building reliable, user-focused software and exploring the intersection of quality engineering, AI, and modern application development.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalProfile.socialLinks.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-400 hover:border-brand-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={personalProfile.socialLinks.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalProfile.socialLinks.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-brand-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#qa-mindset" className="hover:text-brand-400 transition-colors">
                  QA & Reliability
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-400 transition-colors">
                  Experience & Aviation QA
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-brand-400 transition-colors">
                  Education & Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Quality Philosophy */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quality Commitment
            </h5>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" /> ISO/IEC 25010 Rigor
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Committed to delivering reliable, bug-free, and high-performance software systems with full test coverage.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Oshadi Rangika. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all text-xs font-medium cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
