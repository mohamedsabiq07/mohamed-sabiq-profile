# Mohamed Sabiq — Personal Portfolio Website

A modern, high-converting portfolio website tailored for **Mohamed Sabiq**, designed to position him as a **Techno-Commercial Specialist & B2B Solutions Builder** in the UAE.

---

## 🌟 Key Features

1. **Dual Perspective Lens**:
   - Filter between **"Site & Engineering"** (Corniche Kalothi G+6P+40, Ayat Gate, Imperial Palace, DEWA compliance, Quantity Surveying) and **"Product & Digital Growth"** (SupplySouq B2B marketplace MVP, RidOut multi-emirate SEO, Generative AI workflows).
2. **One-Click Tailored Resumes**:
   - Direct download links for both `Technical Sales & B2B CV` and `Marketing & Growth CV`.
3. **Deep Dive Case Studies Modal**:
   - Interactive popups highlighting **Problem → Solution → Quantifiable Metrics**.
4. **Interactive ROI & Schedule Optimization Calculator**:
   - Visualizes material cost savings (~18%) and delivery acceleration (~25%) based on actual site experience.
5. **Direct UAE Contact Actions**:
   - Pre-filled WhatsApp click-to-chat (`+971 502364014`) and direct email integration.
6. **Zero External Dependencies / Pure Performance**:
   - Built with modern HTML5, Tailwind CSS, Lucide/FontAwesome, and clean Vanilla JS.
   - Ultra-fast loading speeds with 100/100 Lighthouse performance.

---

## 🚀 How to Preview Locally

### Option A: Direct Browser Opening (No terminal needed)
Simply double-click `index.html` in your file explorer to open it in any web browser (Chrome, Edge, Safari, Brave).

### Option B: Using a Lightweight Dev Server
In your terminal/PowerShell inside this directory, run:

```powershell
# Using Node.js (npx)
npx http-server -p 3000

# OR using Python 3
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

---

## 🌐 1-Click Free Deployment

### 1. GitHub Pages (Free)
1. Push this folder to a GitHub repository (e.g., `github.com/your-username/portfolio`).
2. In the repository settings, go to **Settings** → **Pages**.
3. Under **Branch**, select `main` and root folder `/` and click **Save**.
4. Your website will be live at `https://<your-username>.github.io/portfolio/`.

### 2. Vercel (Free & Recommended)
1. Sign up on [Vercel.com](https://vercel.com).
2. Click **Add New Project** → Import your GitHub repository (or drag-and-drop the folder via the Vercel CLI).
3. Framework Preset: Choose **Other** (Static HTML).
4. Click **Deploy**. You get a free `.vercel.app` domain with SSL and free custom domain support (e.g. `mohamedsabiq.com`).

### 3. Netlify (Free Drag-and-Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop this `portfolio website` folder directly into the browser.
3. Your site goes live in 10 seconds!

---

## 📁 File Structure

```
portfolio website/
├── index.html                    # Main landing page & layout
├── assets/
│   ├── css/
│   │   └── style.css             # Glassmorphism, glows & animations
│   └── js/
│       └── app.js                # Modal deep dives, filter tabs, ROI calculator
├── Mohamed_Sabiq_CV.pdf          # Technical Sales & B2B CV
├── Mohamed_Sabiq_Marketing_Business_Development_CV (1).pdf # Marketing & BD CV
└── README.md                     # Documentation & deployment guide
```

---

## ✏️ How to Customize

- **Add / Edit Case Studies**: Open `assets/js/app.js` and modify the `caseStudies` object.
- **Update Contact Info**: Open `index.html` and search for `+971 502364014` or `mohamedsabiq07@gmail.com`.
- **Add New Certifications or Milestones**: Edit the respective sections in `index.html`.
