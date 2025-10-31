# Al-Khusyu’ Islamic Education Foundation Website

<p align="center">
  <img src="public/navbar-logo.png" width="180" alt="Al-Khusyu' Logo">
</p>

<h1 align="center">Al-Khusyu’ Education Foundation Web Platform</h1>

<p align="center">
  <strong>Modern Digital Platform for Yayasan Pendidikan dan Sosial Al-Khusyu’, Kab. Blitar, Indonesia</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

---

## 🌐 Live Demo

Visit: **[https://alkhusyu.com](https://alkhusyu.com)**

---

## 📖 About

**Al-Khusyu’ Web** is a professional, SEO-first website for Yayasan Pendidikan dan Sosial Al-Khusyu’, serving its education units—from preschool (RA/TK) to high school (SMK), boarding, and special programs in Blitar, Indonesia. This site acts as the digital face of the Foundation, highlights school excellence, dynamic activities, achievements, and programs across all units.

### 🎯 Mission

Empower Islamic education and social outreach through digital transformation—delivering accessibility, information transparency, and engagement for students, parents, teachers, and the public.

---

## ✨ Features

### 🎓 Foundation & Schools Profile

- Detailed organization profile: About, Vision, Mission, Structure
- Dedicated landing pages for each education unit (RA/TK, MI, SMP, SMK, Pesantren, etc.)
- Unit sections: facilities, curriculum, featured programs, teachers, activities

### 🏅 Achievements Log

- Modern achievement listing and detailed pages (text + images)
- Route: `/prestasi` and `/prestasi/:slug`
- Structured data and SEO friendly

### 🏆 Programs & Activities

- Full-featured Program and Activity listing
- Dynamic activity pages (with route: `/kegiatan` and `/kegiatan/:slug`)
- Reusable data-driven components for activities, organizations, and programs

### 📸 Gallery & Visuals

- Visual gallery showcases key events, leaders, facilities (image-based, lazy loading)
- Modern carousel and responsive grids

### 🌟 SEO & Performance

- Dynamic Title, Meta description, Keywords, OG, Twitter Card
- JSON-LD structured data for educational organization
- Optimized images with lazy loading throughout
- SPA routing for Vercel/Apache (404-proof)
- Sitemap.xml & robots.txt ready

### 💠 Tech

- Modular, strongly-typed React + TypeScript codebase
- Data-driven content (easy editing via `src/data/`)
- Mobile-first, accessible, fully responsive

---

## 🛠️ Tech Stack

- **Frontend:** React 18 (TypeScript), Vite, Tailwind CSS, React Router
- **State/SEO:** Native state (hooks), Custom SEO/Helmet component
- **Tooling:** ESLint, Prettier, ready for Vercel, Netlify, or static deployment

---

## 🚀 Installation

> **Prerequisites**: Node.js >= 16.x, npm >= 8.x

1. **Clone the repository**
   ```bash
   git clone https://github.com/AiFahri/al-khusyu.git
   cd alkhusyu-web
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the local development server**
   ```bash
   npm run dev
   ```
4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📖 Usage

- **Browse foundation and school profiles**: /, /tentang, /pendidikan/[unit]
- **View achievements and details**: /prestasi, /prestasi/:slug
- **Explore featured programs and activities**: /program, /program/:slug, /kegiatan, /kegiatan/:slug
- **Access news and visual gallery**: on home and gallery sections
- **SEO and metadata**: reviews and edits in `/src/components/SEO.tsx` and `/index.html`

Content can be updated by editing TypeScript data files in `src/data/` folder (for activities, programs, achievements, etc).

---

## 🗺️ Main Pages & Routes

- `/` — Homepage (institutional overview)
- `/tentang` — About the Foundation
- `/kegiatan` — Activities index (with `/kegiatan/:slug` for detail)
- `/prestasi` — Achievements (with `/prestasi/:slug` for detail)
- `/program` — Highlighted programs (with `/program/:slug` for detail)
- `/pendidikan/tk`, `/pendidikan/madrasah`, `/pendidikan/smp`, `/pendidikan/smk`, etc.

---

## 🔧 Configuration & SEO

- **SEO**: `<SEO />` component (dynamic tags, OG, Twitter, JSON-LD)
- **Static Assets**: place images in `/public/image` and reference by path
- **Routing**: SPA fallback for all unknown paths (`vercel.json`, `.htaccess`)
- **Sitemap / robots.txt**: config in `/public` for search engine discoverability

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'add amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Submit a Pull Request

**Guidelines:**

- Use TypeScript and Tailwind for UI
- Clear, meaningful commit messages
- Ensure code is reusable and documented
- Update README for major changes

---

## 🙏 Acknowledgments

- Yayasan Pendidikan dan Sosial Al-Khusyu’
- All school staff, students & open-source community

<p align="center">
    <strong>Built with ❤️ for Islamic education and community empowerment</strong>
</p>
<p align="center">
    <sub>Empowering generations through digital Islamic education</sub>
</p>
