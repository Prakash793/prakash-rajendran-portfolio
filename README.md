# Prakash Rajendran — Executive Portfolio & CRE Intelligence Platform

> **Deputy Manager — Commercial Real Estate Operations & AI Automation**  
> RECAM SOLUTIONS PVT LTD · 8+ Years Experience · 4 Consecutive Merit Promotions · 99.8% SLA Adherence  
> 🔗 [LinkedIn](https://www.linkedin.com/in/prakash-rajendran94) | 💻 [GitHub @Prakash793](https://github.com/Prakash793)

---

## 🌟 Overview

A luxury, Awwwards-inspired personal portfolio and commercial real estate technology showcase. Engineered with Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS, Framer Motion, and Web Audio API synthesizer.

### Live Features
- **Editorial Cassette Deck**: Interactive retro-tactile audio cassette player with spinning spools, synchronous playback controls, and curated audio-visual chapters (inspired by Luis Bizarro).
- **Interactive AI Sandbox**: Live lease clause extraction engine testing CAM caps, ROFO purchase rights, CPI/German VPI escalations, and co-tenancy covenants with confidence scoring.
- **Global Operations Radar**: Multilingual lease jurisdiction map covering US, DACH/Germany, UK, Spain/LATAM, Israel, and APAC operations.
- **Executive Advancement Ladder**: Interactive career timeline tracking 4 consecutive merit promotions from Senior Process Associate to Deputy Manager.
- **Spotlight Command Launcher (`⌘K` / `Ctrl+K`)**: Rapid keyboard-accessible navigation palette.
- **Document & PDF System**: Live embedded resume viewer and downloadable clean PDF.

---

## 🚀 One-Click Deploy to Render

This repository includes a preconfigured `render.yaml` blueprint.

### Method 1: Using Render Dashboard (Recommended)
1. Push this repository to your GitHub account (`https://github.com/Prakash793/prakash-rajendran-portfolio`).
2. Log in to [Render.com](https://render.com).
3. Click **New +** → **Web Service**.
4. Select **Build and deploy from a Git repository** and connect your GitHub repository.
5. Fill in the deployment settings:
   - **Name**: `prakash-rajendran-portfolio`
   - **Runtime**: `Node`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Environment Variable**: `NODE_VERSION` = `20`
6. Click **Create Web Service**.
7. Render will build and deploy your site to a public URL like `https://prakash-rajendran-portfolio.onrender.com` that you can immediately share!

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Production build
npm run build

# 4. Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
├── public/
│   ├── prakash-rajendran.jpg         # Authentic portrait photo
│   └── Prakash_Rajendran_Resume.pdf  # Executive resume PDF
├── src/
│   ├── app/                          # Next.js App Router (layout, page, metadata)
│   ├── components/                   # Interactive UI modules
│   │   ├── Navbar.tsx                # Wide full-screen header with avatar logo
│   │   ├── Hero.tsx                  # Hero with portrait & social badges
│   │   ├── CassetteDeck.tsx          # Awwwards-inspired interactive tape deck
│   │   ├── ClausePlayground.tsx      # Live Claude AI lease clause extraction
│   │   ├── GlobalReach.tsx           # Multi-jurisdictional radar
│   │   ├── ExecutiveImpact.tsx       # 4-stage merit promotion ladder
│   │   ├── Experience.tsx            # Commercial real estate history
│   │   ├── Skills.tsx                # Technical & CRE competencies
│   │   ├── Projects.tsx              # Projects & GitHub works
│   │   ├── ResumeSection.tsx         # ATS breakdown & embedded PDF
│   │   ├── Contact.tsx               # Interactive contact form
│   │   └── CommandPalette.tsx        # ⌘K / Ctrl+K spotlight launcher
│   ├── data/
│   │   └── portfolio.ts              # Authentic resume data & metrics
│   └── utils/
│       └── sound.ts                  # Pure Web Audio API click/chime synthesizer
├── render.yaml                       # Render.com automatic deployment blueprint
└── package.json
```

---

## 👤 Author

**Prakash Rajendran**  
- **Designation**: Deputy Manager (Commercial Real Estate Operations)  
- **Email**: prakzsampath@gmail.com  
- **LinkedIn**: [linkedin.com/in/prakash-rajendran94](https://www.linkedin.com/in/prakash-rajendran94)  
- **GitHub**: [github.com/Prakash793](https://github.com/Prakash793)  
