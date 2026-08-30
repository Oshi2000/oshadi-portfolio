import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { StatsHighlight } from './components/sections/StatsHighlight';
import { About } from './components/sections/About';
import { QASection } from './components/sections/QASection';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { ResumeCTA } from './components/sections/ResumeCTA';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-brand-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Professional Statistics & Highlights */}
        <StatsHighlight />

        {/* 3. About Me & What I Bring */}
        <About />

        {/* 4. Dedicated Quality Assurance ("Building Software That Can Be Trusted") */}
        <QASection />

        {/* 5. Categorized Skills Matrix */}
        <Skills />

        {/* 6. Featured Projects & Deep-Dive Modals */}
        <Projects />

        {/* 7. Experience & Srilankan Airlines QA Timeline */}
        <Experience />

        {/* 8. Education (First Class Honours SLIIT / Bedfordshire) */}
        <Education />

        {/* 9. Certifications & Languages */}
        <Certifications />

        {/* 10. Call-To-Action: Download Resume */}
        <ResumeCTA />

        {/* 11. Contact Form & Direct Details */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
