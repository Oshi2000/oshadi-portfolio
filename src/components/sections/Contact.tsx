import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { personalProfile } from '../../data/portfolioData';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { LinkedInIcon, GitHubIcon } from '../ui/Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalProfile.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Netlify form submission payload
      const formData = new FormData();
      formData.append('form-name', 'portfolio-contact');
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject);
      formData.append('message', formState.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok || response.status === 200) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Get In Touch"
          badgeVariant="primary"
          title="Let’s Build Something"
          titleHighlight="Great"
          subtitle="Whether you’re looking for a software engineer, QA professional, or someone passionate about AI and emerging technologies, I’d love to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Let's Start a Conversation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                I am currently open to full-time Software Engineering, Quality Assurance, and AI opportunities. Feel free to reach out via email, phone, or LinkedIn.
              </p>
            </div>

            {/* Email Card with 1-click Copy */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personalProfile.socialLinks.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {personalProfile.socialLinks.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="p-2 text-slate-500 hover:text-brand-600 hover:bg-slate-200/60 rounded-xl transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Contact Number
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                  {personalProfile.socialLinks.phone}
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  {personalProfile.socialLinks.location}
                </div>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Professional Networks
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalProfile.socialLinks.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-900 text-white hover:bg-slate-800 rounded-xl transition-all font-semibold text-xs sm:text-sm shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4 text-brand-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalProfile.socialLinks.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all font-semibold text-xs sm:text-sm shadow-subtle"
                >
                  <GitHubIcon className="w-4 h-4 text-slate-800" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Netlify Forms Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 lg:p-10">
            {status === 'success' ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. Your message has been sent to {personalProfile.socialLinks.email}. I will respond promptly.
                </p>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form
                name="portfolio-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Netlify Hidden Form Name */}
                <input type="hidden" name="form-name" value="portfolio-contact" />
                
                {/* Honeypot field for spam prevention */}
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-800 placeholder-slate-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@example.com"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-800 placeholder-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Subject / Topic <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity for Software Engineering / QA Role"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-800 placeholder-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your role, project, or inquiry..."
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-800 placeholder-slate-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={status === 'submitting'}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full justify-center"
                  >
                    Send Message
                  </Button>
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-rose-600 text-center pt-1">
                    Your message could not be sent right now. Please email me directly at{' '}
                    <a className="font-semibold underline" href={`mailto:${personalProfile.socialLinks.email}`}>
                      {personalProfile.socialLinks.email}
                    </a>.
                  </p>
                )}

                <p className="text-[11px] text-slate-400 text-center pt-1 font-normal">
                  Powered by Netlify Forms with secure spam filtering.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
