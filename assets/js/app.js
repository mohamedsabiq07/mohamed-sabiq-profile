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
  'corniche-kalothi': {
    title: 'Corniche Kalothi (G+6P+40) — High-Rise Turnaround',
    role: 'Electrical Site Engineer | Façade Lighting Services LLC',
    tags: ['Site Engineering', 'Project Recovery', 'DEWA Compliance', 'Subcontractor Coordination', 'High-Rise'],
    category: 'engineering',
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
  setupInteractiveCalculator();
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
        const cardCategory = card.getAttribute('data-category');
        if (filter === 'all' || cardCategory === filter || (filter === 'engineering' && cardCategory === 'commercial')) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
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
  const modalTags = document.getElementById('modalTags');
  const modalMetrics = document.getElementById('modalMetrics');
  const modalBody = document.getElementById('modalBody');
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

      // Body Sections
      modalBody.innerHTML = `
        ${data.image ? `
          <div class="mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <img src="${data.image}" alt="${data.title}" class="w-full h-auto max-h-72 object-cover object-top hover:scale-105 transition-transform duration-500">
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

// 8. Interactive Project Cost & Time Optimization Calculator
function setupInteractiveCalculator() {
  const projectScaleInput = document.getElementById('calcProjectScale');
  const daysSlider = document.getElementById('calcDaysSlider');
  const daysVal = document.getElementById('calcDaysVal');
  const estSavings = document.getElementById('calcEstSavings');
  const estTimeSaved = document.getElementById('calcEstTimeSaved');

  if (!daysSlider || !estSavings) return;

  function updateCalc() {
    const scale = parseFloat(projectScaleInput.value) || 350000;
    const baseDays = parseInt(daysSlider.value) || 30;
    daysVal.textContent = `${baseDays} Days`;

    // Mohamed's proven track record: ~18% material cost control, ~25% time acceleration
    const savings = Math.round(scale * 0.18);
    const timeSaved = Math.round(baseDays * 0.25);

    estSavings.textContent = `AED ${savings.toLocaleString()}`;
    estTimeSaved.textContent = `${timeSaved} Days Faster`;
  }

  projectScaleInput.addEventListener('change', updateCalc);
  daysSlider.addEventListener('input', updateCalc);
  updateCalc();
}
