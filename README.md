# Oshadi Rangika — Executive Professional Portfolio

A modern, high-performance personal portfolio website engineered for **Oshadi Rangika**—First Class Honours Software Engineering Graduate specializing in **Software Quality Assurance (QA)**, **Full-Stack Development**, and **AI / Computer Vision**.

---

## 🌟 Key Highlights & Features

- 💎 **Executive & Modern Aesthetic**: Refined dark navy/charcoal styling with electric sapphire accents, subtle glows, and glassmorphism designed for recruiters and engineering managers.
- 🛡️ **Dedicated Quality Assurance Section**: Interactive 8-stage QA lifecycle visualizer (*Requirements → Test Planning → Test Design → Execution → Defect Tracking → Automation → Performance → Release Confidence*) aligned with **ISO/IEC 25010** software quality standards.
- 💻 **Interactive Live Tech & QA Console**: Dynamic hero terminal previewing real test pass metrics and architecture capabilities.
- 🚀 **Featured Project Deep-Dives**: Filterable project gallery with full modal dialogs featuring multi-tab deep dives into **System Architecture**, **QA & Testing Strategy**, and **Key Deliverables**.
  - **CleanOps Pro** *(Quality Manager — AI-Enhanced Offline-First Operations)*
  - **SmartSpace AI / ArchiTransform** *(AI-Based 3D Floor Plan Optimizer with Three.js & Mask R-CNN)*
  - **Kokolam Multi-Shop Platform** *(Full-Stack MERN Marketplace)*
  - **Banana Math Quiz Game** *(Interactive educational web app with real-time scoring)*
  - **Selenium Test Automation Suite** *(Page Object Model automated regression framework)*
- 📈 **Enterprise Aviation Experience**: Structured timeline showcasing the **SriLankan Airlines** (IT Business Systems) internship, Aero Vault system contributions, and formal professional references.
- 🎓 **First Class Honours & Credentials**: Prominent SLIIT / University of Bedfordshire academic spotlight, ICET Master program, and IBM/Meta/Selenium certifications.
- ⚡ **100/100 Performance & Accessibility**: Zero heavy 3D bloat, fast load times, accessible semantic HTML, keyboard focus rings, and reduced-motion media query support.
- 📬 **Netlify Forms Ready**: Production-ready contact form requiring zero backend servers, with 1-click email copying.
- 📄 **1-Click Resume Download**: Instant download of `Oshadi_Rangika_Resume.pdf` with confetti animation.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Animation & Effects**: Canvas Confetti + Tailwind Keyframes
- **Deployment**: [Netlify](https://www.netlify.com/) (pre-configured with `netlify.toml` and SPA `_redirects`)

---

## 📁 Project Directory Structure

```
oshadi-portfolio/
├── dist/                              # Production build output
├── public/
│   ├── assets/
│   │   ├── Oshadi_Rangika_Resume.pdf  # PDF Resume asset (replaceable)
│   │   └── og-image.png               # Social share banner
│   ├── favicon.svg                    # Custom SVG favicon
│   ├── robots.txt                     # SEO robots indexation
│   └── _redirects                     # Netlify SPA redirect rules
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Sticky header with blur and mobile drawer
│   │   │   └── Footer.tsx             # Footer with sitemap, copyright, back-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Executive intro & interactive QA console
│   │   │   ├── StatsHighlight.tsx     # Honours & enterprise metrics bar
│   │   │   ├── About.tsx              # Narrative bio & "What I Bring" cards
│   │   │   ├── QASection.tsx          # "Building Software That Can Be Trusted"
│   │   │   ├── Skills.tsx             # Categorized skill matrix with search
│   │   │   ├── Projects.tsx           # Filterable project gallery & deep-dive modals
│   │   │   ├── Experience.tsx         # SriLankan Airlines timeline & references
│   │   │   ├── Education.tsx          # First Class Honours academic card
│   │   │   ├── Certifications.tsx     # IBM, Meta, Selenium credentials
│   │   │   ├── ResumeCTA.tsx          # Resume conversion banner
│   │   │   └── Contact.tsx            # Netlify Forms contact section
│   │   └── ui/
│   │       ├── Badge.tsx              # Reusable badge component
│   │       ├── Button.tsx             # Accessible button & link component
│   │       ├── Card.tsx               # Surface container with glass styles
│   │       ├── Icons.tsx              # SVG brand icons (LinkedIn, GitHub)
│   │       ├── Modal.tsx              # Accessible dialog modal
│   │       └── SectionHeader.tsx      # Consistent section headings
│   ├── data/
│   │   └── portfolioData.ts           # 🌟 Centralized data store for all content
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces
│   ├── App.tsx                        # Master layout assembler
│   ├── index.css                      # Tailwind base & custom design tokens
│   └── main.tsx                       # React application entry point
├── index.html                         # SEO metadata, Open Graph, fonts & Netlify form
├── netlify.toml                       # Netlify deployment configuration & caching headers
├── package.json                       # Dependencies and build scripts
├── postcss.config.js                  # PostCSS plugins
├── tailwind.config.js                 # Custom theme, colors, shadows, and animations
├── tsconfig.json                      # TypeScript compiler settings
└── vite.config.ts                     # Vite build & chunk splitting configuration
```

---

## 💻 Local Development Instructions

### Prerequisites
- Node.js version 18.0.0 or higher
- npm version 9.0.0 or higher

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live website with hot module reloading.

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript type checks and generates the minified, optimized static bundle in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 🚀 Deploying to Netlify

This repository is pre-configured for instant deployment to **Netlify**.

### Option A: Deploy via GitHub (Recommended for Continuous Deployment)
1. Push this project folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Oshadi Rangika Professional Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** > **"Import an existing project"** > Choose **GitHub**.
4. Select your portfolio repository.
5. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**.

### Option B: Deploy via Netlify Drop (Manual Drag-and-Drop)
1. Run `npm run build` on your machine to generate the `dist` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder into the upload zone.
4. Your website is instantly live!

---

## 📝 Customizing Personal Information & Placeholders

All portfolio content is centralized in **[`src/data/portfolioData.ts`](file:///c:/Users/oshad/OneDrive/Desktop/oshadi%20portfolio/src/data/portfolioData.ts)** so you can easily update text, links, and projects without touching component code.

### 1. Update Resume PDF
Place your final PDF resume at:
`public/assets/Oshadi_Rangika_Resume.pdf`

### 2. Update Social & Contact Links in `src/data/portfolioData.ts`:
- `socialLinks.email`: Current: `oshadirangika2300@gmail.com`
- `socialLinks.phone`: Current: `+94 70 449 4723`
- `socialLinks.location`: Current: `Dankotuwa, Sri Lanka`
- `socialLinks.linkedInUrl`: Current: `https://www.linkedin.com/in/oshadi-rangika-795814254`
- `socialLinks.githubUrl`: Replace `https://github.com/oshadirangika` with your exact GitHub profile URL if different.

### 3. Add Project Links & Repositories in `src/data/portfolioData.ts`:
Under the `projects` array, update:
- `githubUrl`: Link directly to your project GitHub repositories.
- `liveUrl`: Add deployed URLs if available (e.g. Vercel/Netlify demo links).

### 4. Update Certification Credential Links:
In the `certifications` array in `src/data/portfolioData.ts`, replace the `[ADD CREDENTIAL LINK]` placeholders with your actual Coursera / Meta / IBM credential verification URLs.

---

## 📋 Recommended Future Enhancements

1. **Custom Domain**: Connect a personalized custom domain like `oshadirangika.com` via Netlify DNS settings.
2. **Blog / Technical Articles**: If you write technical articles on QA test design or Computer Vision, add a `/articles` subpage.
3. **Automated CI/CD Lighthouse Check**: Add a GitHub Action to test Lighthouse performance scores on every pull request.

---

**Built with pride for Oshadi Rangika • 2026**
