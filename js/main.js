/**
 * Game Portfolio Website - Main Controller
 */

import { projects, skillsData, bioData } from './projects-data.js';
import { initCanvasBackground } from './canvas-bg.js';
import { sfx } from './audio-fx.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic canvas background
  initCanvasBackground('bg-canvas');

  // Initialize UI components
  initNavigation();
  initSFXControls();
  renderProjects('all');
  initProjectFilters();
  initProjectModal();
  renderSkills();
  initContactForm();
  initCopyEmail();
});

/* ==========================================================================
   Navigation & Header
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-links');

  // Sticky header border on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      sfx.click();
      const isOpen = navMenu.style.display === 'flex';
      navMenu.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'rgba(10, 14, 23, 0.96)';
        navMenu.style.padding = '1.5rem';
        navMenu.style.borderBottom = '1px solid var(--border-accent)';
      }
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }

  // Active link highlighter via IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));

  // Audio effects on nav links
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => sfx.hover());
    link.addEventListener('click', () => sfx.click());
  });
}

/* ==========================================================================
   SFX (Audio FX) Button Controls
   ========================================================================== */
function initSFXControls() {
  const sfxBtn = document.getElementById('sfx-toggle');
  const sfxStatus = document.getElementById('sfx-status');
  if (!sfxBtn) return;

  function updateBtnUI(isUnmuted) {
    if (isUnmuted) {
      sfxBtn.classList.add('active');
      if (sfxStatus) sfxStatus.textContent = 'ON';
    } else {
      sfxBtn.classList.remove('active');
      if (sfxStatus) sfxStatus.textContent = 'MUTED';
    }
  }

  // Initial state
  updateBtnUI(!sfx.isMuted());

  sfxBtn.addEventListener('click', () => {
    const isUnmuted = sfx.toggleMute();
    updateBtnUI(isUnmuted);
  });
}

/* ==========================================================================
   Project Showcase & Grid Rendering
   ========================================================================== */
function renderProjects(categoryFilter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = categoryFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === categoryFilter);

  grid.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card hud-bracket-box';

    let badgeClass = 'badge-unity';
    if (project.category === 'unreal') badgeClass = 'badge-ue5';
    if (project.category === 'godot') badgeClass = 'badge-godot';
    if (project.category === 'jam') badgeClass = 'badge-jam';
    if (project.category === 'tool') badgeClass = 'badge-tool';

    card.innerHTML = `
      <div class="project-thumb">
        <span class="project-status-pill ${badgeClass}">${project.status}</span>
        <img src="${project.thumbnail}" alt="${project.title} screenshot" loading="lazy" />
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-tagline">${project.tagline}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <button class="btn-card btn-card-primary view-details-btn" data-id="${project.id}">
            View Case Study &amp; Demo
          </button>
          ${project.steamUrl ? `
            <a href="${project.steamUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon-link" title="Steam Store Page" aria-label="Steam Page">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.811c0 .052.005.105.005.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 14.819C1.948 20.07 6.745 24 12 24c6.627 0 12-5.373 12-12S18.627 0 11.979 0z"/>
              </svg>
            </a>
          ` : ''}
          ${project.itchUrl ? `
            <a href="${project.itchUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon-link" title="Itch.io Page" aria-label="Itch.io Page">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.5 4v16h19V4H2.5zm2.85 2h13.3c.75.95 1.85 2.37 1.85 2.37V10H3.5V8.37S4.6 6.95 5.35 6zm2.65 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm8 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
              </svg>
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-icon-link" title="GitHub Source" aria-label="GitHub Repository">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Re-attach hover/click audio to newly rendered cards
  const detailButtons = grid.querySelectorAll('.view-details-btn');
  detailButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => sfx.hover());
    btn.addEventListener('click', (e) => {
      sfx.modalOpen();
      const projId = e.currentTarget.getAttribute('data-id');
      openProjectModal(projId);
    });
  });

  const iconLinks = grid.querySelectorAll('.btn-icon-link');
  iconLinks.forEach(l => {
    l.addEventListener('mouseenter', () => sfx.hover());
    l.addEventListener('click', () => sfx.click());
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => sfx.hover());
    btn.addEventListener('click', () => {
      sfx.filterSwitch();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

/* ==========================================================================
   Project Detail Lightbox / Modal
   ========================================================================== */
function initProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (!modalBackdrop) return;

  function closeModal() {
    sfx.modalClose();
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    // Clear video to stop audio playback
    const videoSlot = document.getElementById('modal-video-slot');
    if (videoSlot) videoSlot.innerHTML = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBanner = document.getElementById('modal-banner');
  const modalTagline = document.getElementById('modal-tagline');
  const modalStats = document.getElementById('modal-stats');
  const modalSummary = document.getElementById('modal-summary');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalTech = document.getElementById('modal-tech');
  const modalVideoSlot = document.getElementById('modal-video-slot');

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalBanner) modalBanner.src = project.banner || project.thumbnail;
  if (modalTagline) modalTagline.textContent = project.tagline;

  // Render stats
  if (modalStats && project.quickStats) {
    modalStats.innerHTML = project.quickStats.map(s => `
      <div class="modal-stat-box">
        <span class="lbl">${s.label}</span>
        <span class="val">${s.value}</span>
      </div>
    `).join('');
  }

  // Summary
  if (modalSummary) {
    modalSummary.textContent = project.summary;
  }

  // Highlights
  if (modalHighlights && project.highlights) {
    modalHighlights.innerHTML = project.highlights.map(h => `
      <li>${h}</li>
    `).join('');
  }

  // Video / Embed
  if (modalVideoSlot) {
    if (project.itchEmbedUrl) {
      modalVideoSlot.innerHTML = `
        <div class="modal-video-container">
          <iframe src="${project.itchEmbedUrl}" allowfullscreen></iframe>
        </div>
      `;
    } else if (project.trailerUrl) {
      modalVideoSlot.innerHTML = `
        <div class="modal-video-container">
          <iframe src="${project.trailerUrl}" title="${project.title} Video Preview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      `;
    } else {
      modalVideoSlot.innerHTML = '';
    }
  }

  // Tech Breakdown
  if (modalTech && project.techBreakdown) {
    modalTech.innerHTML = Object.entries(project.techBreakdown).map(([k, v]) => `
      <div class="tech-box">
        <h4>${k}</h4>
        <p>${v}</p>
      </div>
    `).join('');
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   Skills Matrix Rendering
   ========================================================================== */
function renderSkills() {
  const enginesGrid = document.getElementById('skills-engines-grid');
  const disciplinesGrid = document.getElementById('disciplines-grid');

  if (enginesGrid && skillsData.engines) {
    enginesGrid.innerHTML = skillsData.engines.map(eng => `
      <div class="engine-card hud-bracket-box">
        <div class="engine-header">
          <h3 class="engine-name">${eng.name}</h3>
          <span class="engine-level">${eng.level}</span>
        </div>
        <p class="engine-desc">${eng.detail}</p>
      </div>
    `).join('');
  }

  if (disciplinesGrid && skillsData.disciplines) {
    disciplinesGrid.innerHTML = skillsData.disciplines.map(d => `
      <div class="discipline-card">
        <h4 class="discipline-title">
          <span>◆</span> ${d.category}
        </h4>
        <div class="skills-tags-list">
          ${d.skills.map(s => `<div class="skill-tag-pill">${s}</div>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   Contact Form & Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sfx.click();

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (submitBtn) {
      submitBtn.textContent = 'Transmitting Message...';
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      showToast('Transmission Received! I will get back to you shortly.');
      form.reset();
      if (submitBtn) {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }
    }, 800);
  });
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sfx.click();
    const email = bioData.email;
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`);
    }).catch(() => {
      showToast(`Contact: ${email}`);
    });
  });
}

function showToast(msg) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${msg}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
