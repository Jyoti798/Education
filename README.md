# Education Landing Page

A **pixel-faithful landing page** built with **React + Vite** and **Bootstrap**, fully responsive.  
It dynamically fetches content from APIs to display a seat price table & chart and a testimonials slider.  
The hero section includes a modal popup with an embedded YouTube video.

---

## 📑 Table of Contents
- [Project Overview](#project-overview)
- [Features / Sections](#features--sections)
- [Tech Stack & Packages](#tech-stack--packages)
- [Quick Setup (Commands)](#quick-setup-commands)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Vite Dev Server Proxy (CORS workaround)](#vite-dev-server-proxy-cors-workaround)
- [Project Structure](#project-structure)
- [Using the APIs](#using-the-apis)
- [Deployment](#deployment)
- [QA Checklist](#qa-checklist)

---

## 📘 Project Overview

This project replicates the Figma design as a **landing page** with the following functionality:

- **Seat Price table & chart** populated using the `seatinfo_api`.
- **Testimonials slider** populated using the `testimonial_api`.
- **Hero section** with image → opens a modal with an embedded YouTube video.

### APIs Used
- **Seat Info API** → `https://viaje.ai/seatinfo_api/`  
- **Testimonial API** → `https://viaje.ai/testimonial_api/`

---

## ✨ Features / Sections

- **Header** — navigation with CTA buttons and responsive mobile menu.
- **Hero** — headline, subheadline, CTA button; hero image clickable to open a modal with YouTube video.
- **Cards / Services** — feature cards (static or from assets).
- **How It Works** — illustrated section (uses dotted SVG/asset).
- **Seat Price** — data table + chart (dynamic via `seatinfo_api`).
- **Testimonials** — slider populated via `testimonial_api`.
- **Footer** — contact info and copyright.

---

## 🛠 Tech Stack & Packages

- **Core:** Vite + React  
- **Styling:** Bootstrap 5 (CSS)  
- **HTTP Client:** axios  
- **Table:** react-data-table-component (or DataTables with jQuery if required)  
- **Charts:** chart.js + react-chartjs-2  
- **Slider:** swiper (or react-slick + slick-carousel)  
- **Modal:** react-modal (or Bootstrap modal)  
- **Developer tools:** eslint + prettier  
- **Optional:** classnames

### Example installation:
```bash
npm install axios bootstrap react-data-table-component chart.js react-chartjs-2 swiper react-modal

# 1. Create Vite React project
npm create vite@latest my-education-landing -- --template react
cd my-education-landing

# 2. Install dependencies
npm install axios bootstrap
npm install react-data-table-component chart.js react-chartjs-2 swiper react-modal

# 3. Optional: Developer tools
npm install -D eslint prettier eslint-plugin-react

# 4. React plugin for Vite
npm install -D @vitejs/plugin-react

# 5. Start dev server
npm run dev



Deployment
Vercel

Push repo to GitHub.

Import project in Vercel.

Build command → npm run build.

Output directory → dist.

Add environment variables in dashboard.

Deploy.