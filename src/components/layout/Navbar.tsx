import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Mail } from 'lucide-react';
import { personalProfile } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { LinkedInIcon, GitHubIcon } from '../ui/Icons';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'QA & Quality', href: '#qa-mindset' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Initials */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-bold font-mono text-base shadow-sm group-hover:bg-brand-600 group-hover:border-brand-500 transition-colors duration-200">
              <span>OR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-base leading-tight tracking-tight group-hover:text-brand-600 transition-colors">
                {personalProfile.name}
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                First Class Honours
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-600 bg-brand-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Social Links */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Social quick links */}
            <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200">
              <a
                href={personalProfile.socialLinks.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-500 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={personalProfile.socialLinks.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Button */}
            <Button
              variant="primary"
              size="sm"
              href={personalProfile.socialLinks.resumeUrl}
              download="Oshadi_Rangika_Resume.pdf"
              icon={<FileText className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personalProfile.socialLinks.resumeUrl}
              download="Oshadi_Rangika_Resume.pdf"
              className="p-2 bg-brand-50 text-brand-600 rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-800 hover:text-brand-600 hover:bg-brand-50/60 rounded-xl transition-colors"
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                href={personalProfile.socialLinks.resumeUrl}
                download="Oshadi_Rangika_Resume.pdf"
                icon={<FileText className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Download Resume
              </Button>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={personalProfile.socialLinks.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 text-slate-700 hover:text-brand-600 rounded-xl transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalProfile.socialLinks.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalProfile.socialLinks.email}`}
                  className="p-2.5 bg-slate-100 text-slate-700 hover:text-brand-600 rounded-xl transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
