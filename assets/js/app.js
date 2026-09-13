/**
 * Mohamed Sabiq Portfolio - Elitefolio Interactive Animations & App Logic
 * Inspired by elittefolio.framer.website
 */

// Case Study Data for Modal Deep Dives
const caseStudies = {
  'supply-souq': {
    title: 'SupplySouq — B2B Material Supply Marketplace',
    role: 'Founder & Product Lead',
    tags: ['Product Management', 'MVP Development', 'B2B Marketplace', 'Generative AI', 'UAE Construction'],
    category: 'growth',
    image: 'assets/images/supplysouq_homepage.png',
    liveUrl: 'https://supply-souq-new-git-main-mohamedsabiq07-8902s-projects.vercel.app/',
    liveUrlDisplay: 'SupplySouq Live App',
    summary: 'Identified a major structural friction point in UAE contractor-supplier procurement: opaque pricing, slow quotation cycles, and fragmented vendor discovery. Architected and led SupplySouq from ideation to working MVP.',
    metrics: [
      { label: 'Stage', value: 'Working MVP' },
      { label: 'Target Market', value: 'UAE Subcontractors & Suppliers' },
      { label: 'Dev Approach', value: 'AI-Accelerated' },
      { label: 'Focus', value: 'B2B Procurement' }
    ],
    sections: [
      {
        heading: 'The Problem',
        content: 'Contractors and site engineers in the UAE frequently lose days waiting for price quotations from fragmented suppliers, leading to project delivery bottlenecks and budget overruns.'
      },
      {
        heading: 'The Product Strategy & Execution',
        content: 'Defined user personas (subcontractors, procurement officers, material suppliers), established the commercial marketplace model, mapped database architectures, and drafted user flow diagrams. Leveraged Generative AI tools to accelerate market research, user stories, schema design, and initial front-end prototyping.'
      },
      {
        heading: 'Key Skills Demonstrated',
        content: 'End-to-end product thinking, commercial opportunity evaluation, UX workflow wireframing, competitive analysis, and tech-business translation.'
      }
    ]
  },
  'ridout': {
    title: 'RidOut Pest Control — End-to-End Digital Growth',
    role: 'Digital Marketing & Business Development Lead',
    tags: ['Website Development', 'Local SEO', 'Lead Generation', 'AI Content Strategy', 'Conversion Optimization'],
    category: 'growth',
    image: 'assets/images/ridout_homepage.png',
    liveUrl: 'https://www.ridoutpestcontrol.ae/',
    liveUrlDisplay: 'ridoutpestcontrol.ae',
    summary: 'Built and scaled the entire digital presence for RidOut Pest Control Services in the UAE, driving customer acquisition across Dubai, Sharjah, and Ajman.',
    metrics: [
      { label: 'Scope', value: '3 Emirates (DXB/SHJ/AJM)' },
      { label: 'Deliverable', value: 'Complete Web & SEO' },
      { label: 'Content Method', value: 'AI-Enhanced Workflows' },
      { label: 'Goal', value: 'Inbound Lead Generation' }
    ],
    sections: [
      {
        heading: 'Strategic Approach',
        content: 'Conducted rigorous competitor and keyword research across the UAE pest control landscape. Developed high-converting service landing pages tailored to specific emirate search intents.'
      },
      {
        heading: 'Execution & AI Workflows',
        content: 'Engineered prompt frameworks for rapid SEO content creation, promotional visual assets, and customer communication templates. Implemented conversion-optimized lead capture funnels.'
      },
      {
        heading: 'Commercial Impact',
        content: 'Established direct inbound customer touchpoints, reducing reliance on expensive cold outreach and positioning the service competitively in hyper-local markets.'
      }
    ]
  },
  'crestmark': {
    title: 'The Crestmark by Ellington, Business Bay — Façade Lighting Installation',
    role: 'Electrical Site Engineer | Façade Lighting Services LLC',
    tags: ['Façade Lighting', 'Luxury Residential', 'Business Bay Dubai', 'DEWA Compliance', 'Ellington Properties', 'Site Leadership'],
    category: 'engineering',
    image: 'assets/images/crestmark_ellington.webp',
    summary: 'Assumed site leadership for the prestigious Crestmark by Ellington waterfront residential development in Business Bay. Mobilized installation crews, established quality and safety protocols, and leading the end-to-end façade lighting execution and DEWA compliance.',
    metrics: [
      { label: 'Location', value: 'Business Bay, Dubai' },
      { label: 'Developer', value: 'Ellington Properties' },
      { label: 'Project Status', value: 'Active Installation' },
      { label: 'Compliance', value: '100% DEWA Compliant' }
    ],
    sections: [
      {
        heading: 'Project Scope & Architecture',
        content: 'The Crestmark is an ultra-prime waterfront residential project situated on the Dubai Water Canal by Ellington Properties. The architectural lighting package demands millimeter precision in luminaire mounting, hidden cabling raceways, and seamless integration with premium façade materials.'
      },
      {
        heading: 'Engineering Leadership & Execution',
        content: 'Took over on-site execution to direct light installation crews, coordinate daily critical paths with the main contractor and MEP consultants, supervise cable pulls and driver connections, and ensure complete compliance with DEWA regulations.'
      },
      {
        heading: 'Current Milestone & Quality Assurance',
        content: 'Actively coordinating installation timelines, site safety standards, material staging, and rigorous QA/QC inspection regimes to ensure on-time, zero-defect delivery.'
      }
    ]
  },
  'corniche-kalothi': {
    title: 'Corniche Kalothi (G+6P+40) — High-Rise Turnaround',
    role: 'Electrical Site Engineer | Façade Lighting Services LLC',
    tags: ['Site Engineering', 'Project Recovery', 'DEWA Compliance', 'Subcontractor Coordination', 'High-Rise'],
    category: 'engineering',
    image: 'assets/images/corniche_kalothi.webp',
    summary: 'Assumed control of a critically delayed 40-floor high-rise façade lighting project plagued by missing documentation, wiring bottlenecks, and material shortages.',
    metrics: [
      { label: 'Building Scale', value: 'G + 6P + 40 Floors' },
      { label: 'Schedule Result', value: '10% Ahead of Revised Plan' },
      { label: 'Compliance', value: '100% DEWA Compliant' },
      { label: 'Key Win', value: 'Resolved Subcontractor Crisis' }
    ],
    sections: [
      {
        heading: 'The Challenge',
        content: 'Severe delay in high-rise wiring and installation caused by documentation discrepancies, inconsistent subcontractor delivery, and supply stockouts threatening handover penalties.'
      },
      {
        heading: 'Engineer Intervention',
        content: 'Restructured site execution priorities, aligned technicians directly with critical path tasks, coordinated daily with suppliers for urgent material releases, and conducted rigorous QA/QC checks to ensure DEWA compliance at every floor stage.'
      },
      {
        heading: 'The Result',
        content: 'Eliminated bottlenecks and completed the entire wiring infrastructure 10% ahead of schedule while maintaining zero-defect DEWA inspection readiness.'
      }
    ]
  },
  'ayat-gate': {
    title: 'Ayat Gate Façade Lighting — 18% Cost Reduction & Rapid Delivery',
    role: 'Electrical Site Engineer | Façade Lighting Services LLC',
    tags: ['Cost Engineering', 'Quantity Surveying', 'Resource Optimization', 'Fast-Track Execution'],
    category: 'engineering',
    image: 'assets/images/ayat_gate.jpg',
    summary: 'Directed a newly assembled installation team to execute and certify the Ayat Gate façade lighting project 25% ahead of standard schedules while slashing material waste.',
    metrics: [
      { label: 'Execution Time', value: '2 Weeks (14 Days)' },
      { label: 'Timeline Speedup', value: '25% Ahead of Schedule' },
      { label: 'Material Cost Saved', value: '18% Reduction' },
      { label: 'Sign-off', value: 'Official Completion Certificate' }
    ],
    sections: [
      {
        heading: 'Resource & Cost Strategy',
        content: 'Performed precision quantity surveying before mobilization. Implemented strict material inventory tracking and eliminated on-site cabling wastage.'
      },
      {
        heading: 'Crew Leadership',
        content: 'Trained and synchronized a fresh installation crew, instituting standard operating procedures for luminaire mounting, driver testing, and conduit routing.'
      },
      {
        heading: 'Outcome',
        content: 'Secured client sign-off and completion certificate in just 14 days, proving that speed and budget discipline can coexist under strong site leadership.'
      }
    ]
  },
  'imperial-palace': {
    title: 'Imperial Palace, Deira — Rapid 18-Day Project Handover',
    role: 'Electrical Site Engineer | Façade Lighting Services LLC',
    tags: ['Turnkey Execution', 'Client Management', 'Final Inspection Sign-Off', 'Dubai Project'],
    category: 'engineering',
    summary: 'Spearheaded complete façade lighting installation, achieving final inspection sign-off and job completion certification in exactly 18 days.',
    metrics: [
      { label: 'Delivery Time', value: '18 Days Flat' },
      { label: 'Timeline Acceleration', value: '25% Faster' },
      { label: 'Inspection Sign-Off', value: 'First-Pass Approved' },
      { label: 'Location', value: 'Deira, Dubai' }
    ],
    sections: [
      {
        heading: 'The Mission',
        content: 'Client required an accelerated handover timeline for this prominent commercial location in Deira without compromising architectural lighting aesthetics or electrical safety.'
      },
      {
        heading: 'Hands-on Execution',
        content: 'Managed live on-site troubleshooting, coordinated directly with the main contractor, and ensured all testing & commissioning procedures adhered to strict engineering standards.'
      }
    ]
  },
  'multi-site-mgmt': {
    title: 'Multi-Account Coordination & Commercial Estimation',
    role: 'Electrical Site Engineer & Commercial Support',
    tags: ['Account Management', 'Client Relations', 'Quantity Surveying', 'Power BI', '7 UAE Projects'],
    category: 'commercial',
    summary: 'Concurrently coordinating operational delivery, technical client communications, and quantity surveying across ~7 active façade lighting projects across the UAE.',
    metrics: [
      { label: 'Active Projects', value: '~7 Concurrent Sites' },
      { label: 'Territory', value: 'UAE Nationwide' },
      { label: 'Tools', value: 'Power BI, Excel, AutoCAD' },
      { label: 'Commercial Scope', value: 'Estimates, BOQs & Client Alignment' }
    ],
    sections: [
      {
        heading: 'Stakeholder & Commercial Delivery',
        content: 'Act as the primary bridge between technical site reality and client commercial agreements. Prepare accurate bill of quantities (BOQs), cost reports, and variation claims.'
      },
      {
        heading: 'Data-Driven Tracking',
        content: 'Utilize Excel and Power BI reporting models to track material schedules, procurement timelines, and client approvals in real time.'
      }
    ]
  },
  'kilnwave': {
    title: 'Kilnwave — Real-Time Browser AI Audio Platform',
    role: 'Frontend Architect & Generative Systems Specialist',
    tags: ['WebGL Fragment Shader', 'Generative UI', 'Real-Time Canvas DSP', 'Zero-Asset Architecture', 'Interactive Audio'],
    category: 'growth',
    image: 'assets/images/kilnwave_preview.png',
    liveUrl: './kilnwave.html',
    liveUrlDisplay: 'Launch Kilnwave Live App',
    summary: 'Engineered a browser-native product interface for Kilnwave whose visual system is generated entirely in real time without photographic assets, powered by hardware-accelerated WebGL shaders, four independent canvas DSP engines, and a 72-band interactive spectrum analyzer.',
    metrics: [
      { label: 'Render Engine', value: '100% WebGL / Canvas' },
      { label: 'Framerate', value: '60 FPS Hardware-Acc' },
      { label: 'Asset Payload', value: '0 KB Images/Video' },
      { label: 'Design System', value: 'Strict Zero-Radius' }
    ],
    sections: [
      {
        heading: 'The Vision & Technical Challenge',
        content: 'Demonstrated cutting-edge AI product UI execution by constructing an audio synthesis interface rendered completely in-browser. Conveying extreme acoustic fidelity and sub-millisecond roundtrip processing without loading static photographs or video loops.'
      },
      {
        heading: 'Hardware-Accelerated WebGL Ribbon Shader',
        content: 'Wrote high-performance GLSL fragment shaders calculating continuous additive sine ribbons (Indigo #6366F1, Violet #8B5CF6, Cyan #06B6D4) that drift and bloom where they overlap, veiled by a smooth downward gradient to maintain flawless typographic contrast.'
      },
      {
        heading: 'Four Independent Real-Time Canvas Engines',
        content: 'Integrated four distinct 2D canvas loops: neural resynthesis waveform oscillation, a dynamic 8x4 matrix of denoising cells, 4 decoupled latent stem tracks, and a sweeping contextual radar attention ring.'
      },
      {
        heading: 'Interactive Spectrum & Zero-Radius Precision',
        content: 'Built a 72-bar spectral analyzer featuring real-time Hz readout and isolated frequency selection box, alongside an accessible plus-to-minus FAQ accordion, mono metadata eyebrows, and strict prefers-reduced-motion compliance.'
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initScrollReveal();
  initBentoCardTiltAndSpotlight();
  initAccordions();
  setupFilterTabs();
  setupModalHandlers();
  setupMobileMenu();
  setupResumeDropdown();
  initHeroRibbonShader();
});

// 1. Interactive Magnetic Cursor & Glow Follower
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  // Smooth lerp for follower
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  }
  requestAnimationFrame(animateFollower);

  // Hover expansion on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .framer-card, .project-card, .accordion-header, select, input');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.backgroundColor = 'rgba(56, 189, 248, 0.4)';
      follower.style.width = '64px';
      follower.style.height = '64px';
      follower.style.borderColor = 'rgba(56, 189, 248, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      cursor.style.backgroundColor = '#38bdf8';
      follower.style.width = '38px';
      follower.style.height = '38px';
      follower.style.borderColor = 'rgba(56, 189, 248, 0.4)';
    });
  });
}

// 2. Framer-style Scroll Reveal with IntersectionObserver
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-init');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// 3. Bento Card Mouse Spotlight & 3D Tilt
function initBentoCardTiltAndSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card, .framer-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update CSS variables for radial spotlight
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D subtle tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// 4. Accordion Toggle Logic (Work Experience & Recruiter FAQ)
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');
      
      // Close sibling accordions in same container
      const parent = item.parentElement;
      parent.querySelectorAll('.accordion-item').forEach(sibling => {
        sibling.classList.remove('active');
      });

      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
}

// 5. Category Filter Setup
function setupFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-sky-500', 'text-white', 'shadow-lg');
        b.classList.add('bg-slate-900', 'text-slate-400');
      });
      btn.classList.remove('bg-slate-900', 'text-slate-400');
      btn.classList.add('active', 'bg-sky-500', 'text-white', 'shadow-lg');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (card._filterTimeout) {
          clearTimeout(card._filterTimeout);
          card._filterTimeout = null;
        }
        const cardCategory = card.getAttribute('data-category');
        if (filter === 'all' || cardCategory === filter || (filter === 'engineering' && cardCategory === 'commercial')) {
          card.style.display = 'flex';
          card._filterTimeout = setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          card._filterTimeout = setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// 6. Case Study Modal Handlers
function setupModalHandlers() {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalRole = document.getElementById('modalRole');
  const modalLiveBadge = document.getElementById('modalLiveBadge');
  const modalTags = document.getElementById('modalTags');
  const modalMetrics = document.getElementById('modalMetrics');
  const modalBody = document.getElementById('modalBody');
  const modalLiveSiteContainer = document.getElementById('modalLiveSiteContainer');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-open-modal');
      const data = caseStudies[projectId];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalRole.textContent = data.role;

      // Live Website Badge at Header
      if (modalLiveBadge) {
        if (data.liveUrl) {
          modalLiveBadge.innerHTML = `
            <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 hover:text-sky-300 border border-sky-500/40 text-xs font-bold transition-all group">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Visit Live: ${data.liveUrlDisplay}</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </a>
          `;
          modalLiveBadge.classList.remove('hidden');
        } else {
          modalLiveBadge.innerHTML = '';
          modalLiveBadge.classList.add('hidden');
        }
      }

      // Live Website Button in Modal Footer
      if (modalLiveSiteContainer) {
        if (data.liveUrl) {
          modalLiveSiteContainer.innerHTML = `
            <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all">
              <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              <span>Visit Live Website (${data.liveUrlDisplay})</span>
            </a>
          `;
        } else {
          modalLiveSiteContainer.innerHTML = '';
        }
      }

      // Tags
      modalTags.innerHTML = data.tags.map(t => 
        `<span class="px-2.5 py-1 text-xs font-medium rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">${t}</span>`
      ).join('');

      // Metrics grid
      modalMetrics.innerHTML = data.metrics.map(m => `
        <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
          <div class="text-sky-400 font-bold text-lg font-display">${m.value}</div>
          <div class="text-xs text-slate-400 mt-0.5">${m.label}</div>
        </div>
      `).join('');

      // Body Sections with Live Website Callout & Clickable Snapshot
      modalBody.innerHTML = `
        ${data.liveUrl ? `
          <div class="mb-5 p-3.5 rounded-xl bg-gradient-to-r from-sky-500/15 via-sky-500/5 to-transparent border border-sky-500/30 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-globe text-base"></i>
              </div>
              <div>
                <div class="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Live Project Link</span>
                  <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-xs text-sky-400 hover:text-sky-300 underline font-mono-tag">
                  ${data.liveUrl}
                </a>
              </div>
            </div>
            <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold shrink-0 flex items-center gap-1.5 shadow-md shadow-sky-500/20 transition-all">
              <span>Open Website</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        ` : ''}

        ${data.image ? `
          <div class="mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black relative group">
            ${data.liveUrl ? `
              <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="block relative group cursor-pointer" title="Click to visit ${data.liveUrlDisplay}">
                <img src="${data.image}" alt="${data.title}" class="w-full h-auto max-h-72 object-cover object-top hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <span class="px-4 py-2 rounded-full bg-sky-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xl shadow-sky-500/30">
                    <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    <span>Redirect to ${data.liveUrlDisplay}</span>
                  </span>
                </div>
              </a>
            ` : `
              <img src="${data.image}" alt="${data.title}" class="w-full h-auto max-h-80 object-cover object-center hover:scale-105 transition-transform duration-500">
            `}
          </div>
        ` : ''}

        <p class="text-slate-300 text-sm leading-relaxed mb-6">${data.summary}</p>
        ${data.sections.map(s => `
          <div class="mb-5">
            <h4 class="text-white font-semibold text-base mb-1.5 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              ${s.heading}
            </h4>
            <p class="text-slate-400 text-sm leading-relaxed pl-3.5 border-l border-slate-800">${s.content}</p>
          </div>
        `).join('')}
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Open modal automatically from URL hash (e.g. #ayat-gate) or query param (?project=ayat-gate)
  function checkUrlHashModal() {
    const rawHash = window.location.hash.replace('#', '').trim();
    const urlParams = new URLSearchParams(window.location.search);
    const target = urlParams.get('project') || rawHash;
    if (target && caseStudies[target]) {
      setTimeout(() => {
        const trigger = document.querySelector(`[data-open-modal="${target}"]`);
        if (trigger) {
          trigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
          trigger.click();
        }
      }, 300);
    }
  }

  checkUrlHashModal();
  window.addEventListener('hashchange', checkUrlHashModal);
}

// 7. Mobile Menu Handler
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// 8. Robust Resume Dropdown Handler (Zero-Gap, Click Toggle & Hover Grace Period)
function setupResumeDropdown() {
  const container = document.getElementById('resumeDropdownContainer');
  const btn = document.getElementById('resumeDropdownBtn');
  const menu = document.getElementById('resumeDropdownMenu');
  const chevron = document.getElementById('resumeChevron');

  if (!container || !btn || !menu) return;

  let isOpen = false;
  let closeTimeout = null;

  function showMenu() {
    clearTimeout(closeTimeout);
    isOpen = true;
    btn.setAttribute('aria-expanded', 'true');
    menu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-1');
    menu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  }

  function hideMenu(immediate = false) {
    clearTimeout(closeTimeout);
    if (immediate) {
      isOpen = false;
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-1');
      menu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      if (chevron) chevron.style.transform = 'rotate(0deg)';
    } else {
      closeTimeout = setTimeout(() => {
        isOpen = false;
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-1');
        menu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      }, 300); // 300ms grace period ensures it never slips away accidentally
    }
  }

  // Click on Resume button toggles open/close
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen) {
      hideMenu(true);
    } else {
      showMenu();
    }
  });

  // Hover over container keeps it open
  container.addEventListener('mouseenter', () => {
    showMenu();
  });

  // Mouse leaving container triggers graceful close with 300ms buffer
  container.addEventListener('mouseleave', () => {
    hideMenu(false);
  });

  // Clicking outside immediately closes
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      hideMenu(true);
    }
  });

  // Pressing Escape closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      hideMenu(true);
    }
  });

  // Clicking download link starts download and closes menu after brief pause
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => hideMenu(true), 200);
    });
  });
}

// 8. Hero WebGL Additive Ribbon Shader Background
function initHeroRibbonShader() {
  const canvas = document.getElementById('hero-ribbon-canvas');
  const container = document.getElementById('hero-ribbon-container');
  if (!canvas || !container) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  let gl = null;
  try {
    gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'high-performance' }) ||
         canvas.getContext('experimental-webgl', { alpha: true, antialias: false });
  } catch (err) {
    gl = null;
  }

  let isVisible = true;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });
    observer.observe(container);
  }

  if (!gl) {
    initCanvas2DFallback(canvas, container);
    return;
  }

  const vsSource = 'attribute vec2 a_position; void main() { gl_Position = vec4(a_position, 0.0, 1.0); }';

  // Tuned for Mohamed Sabiq's portfolio:
  // Ribbon 1: Sky/Cyan (#0EA5E9) -> vec3(0.055, 0.647, 0.914)
  // Ribbon 2: Indigo (#6366F1)   -> vec3(0.388, 0.400, 0.945)
  // Ribbon 3: Violet (#8B5CF6)   -> vec3(0.545, 0.361, 0.965)
  const fsSource = [
    'precision highp float;',
    'uniform vec2 u_resolution;',
    'uniform float u_time;',
    'void main() {',
    '  vec2 uv = gl_FragCoord.xy / u_resolution;',
    '  float y1 = 0.54 + 0.12 * sin(2.1 * uv.x + u_time * 0.48 + 0.0) + 0.06 * sin(4.3 * uv.x - u_time * 0.32 + 1.2);',
    '  float d1 = abs(uv.y - y1);',
    '  float r1 = smoothstep(0.065, 0.0, d1);',
    '  float g1 = exp(-4.5 * d1) * 0.40;',
    '  vec3 col1 = vec3(0.055, 0.647, 0.914) * (r1 + g1);',
    '  float y2 = 0.49 + 0.14 * sin(1.7 * uv.x - u_time * 0.38 + 2.4) + 0.07 * sin(3.6 * uv.x + u_time * 0.50 + 3.1);',
    '  float d2 = abs(uv.y - y2);',
    '  float r2 = smoothstep(0.070, 0.0, d2);',
    '  float g2 = exp(-4.2 * d2) * 0.40;',
    '  vec3 col2 = vec3(0.388, 0.400, 0.945) * (r2 + g2);',
    '  float y3 = 0.51 + 0.13 * sin(2.5 * uv.x + u_time * 0.55 + 4.8) + 0.05 * sin(5.1 * uv.x - u_time * 0.40 + 0.8);',
    '  float d3 = abs(uv.y - y3);',
    '  float r3 = smoothstep(0.060, 0.0, d3);',
    '  float g3 = exp(-4.8 * d3) * 0.40;',
    '  vec3 col3 = vec3(0.545, 0.361, 0.965) * (r3 + g3);',
    '  vec3 totalCol = col1 + col2 + col3;',
    '  float alpha = clamp(r1 + r2 + r3 + (g1 + g2 + g3) * 0.70, 0.0, 0.85);',
    '  gl_FragColor = vec4(totalCol, alpha);',
    '}'
  ].join('\n');

  function createShader(glCtx, type, source) {
    const s = glCtx.createShader(type);
    glCtx.shaderSource(s, source);
    glCtx.compileShader(s);
    if (!glCtx.getShaderParameter(s, glCtx.COMPILE_STATUS)) {
      glCtx.deleteShader(s);
      return null;
    }
    return s;
  }

  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) {
    initCanvas2DFallback(canvas, container);
    return;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    initCanvas2DFallback(canvas, container);
    return;
  }

  gl.useProgram(prog);

  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
    -1,  1,
     1, -1,
     1,  1
  ]), gl.STATIC_DRAW);

  const posAttr = gl.getAttribLocation(prog, 'a_position');
  gl.enableVertexAttribArray(posAttr);
  gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

  const timeLoc = gl.getUniformLocation(prog, 'u_time');
  const resLoc = gl.getUniformLocation(prog, 'u_resolution');

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(container.clientWidth * dpr);
    const h = Math.floor(container.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
  }

  window.addEventListener('resize', resize);
  resize();

  const startTime = performance.now();
  function render(now) {
    if (isVisible) {
      resize();
      const elapsed = (now - startTime) * 0.001;
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function initCanvas2DFallback(canvas, container) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = container.clientWidth * dpr;
    canvas.height = container.clientHeight * dpr;
  }
  window.addEventListener('resize', resize);
  resize();

  let isVisible = true;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => isVisible = entry.isIntersecting);
    }, { threshold: 0.05 });
    observer.observe(container);
  }

  function render2D(t) {
    if (isVisible) {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      const ribbons = [
        { col: 'rgba(14, 165, 233, 0.65)', freq: 0.002, speed: 0.0005, amp: h * 0.12, base: h * 0.52 },
        { col: 'rgba(99, 102, 241, 0.65)', freq: 0.0018, speed: -0.0004, amp: h * 0.14, base: h * 0.48 },
        { col: 'rgba(139, 92, 246, 0.60)', freq: 0.0022, speed: 0.0007, amp: h * 0.11, base: h * 0.50 }
      ];
      ribbons.forEach(rb => {
        ctx.beginPath();
        ctx.strokeStyle = rb.col;
        ctx.lineWidth = 14 * (window.devicePixelRatio || 1);
        ctx.lineCap = 'round';
        for (let x = 0; x <= w; x += 12) {
          const y = rb.base + Math.sin(x * rb.freq + t * rb.speed) * rb.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    }
    requestAnimationFrame(render2D);
  }
  requestAnimationFrame(render2D);
}

