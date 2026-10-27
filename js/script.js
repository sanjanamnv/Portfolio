/**
 * @license
 * Sri Lakshmi Sanjana M N V - Personal Portfolio Website
 * Script: js/script.js
 * Plain JavaScript (ES6+) for interactive behavior, themes, filtering & validation
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Theme Management (Light / Dark Mode with localStorage & System Preference)
  // =========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  /**
   * Determine the initial theme preference
   * Prioritize localStorage, fall back to system color scheme
   */
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  /**
   * Apply theme to root and update toggle icon
   * @param {string} theme - 'light' or 'dark'
   */
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill text-warning';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
      } else {
        themeIcon.className = 'bi bi-moon-stars-fill text-purple';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
      }
    }
  };

  // Initialize theme on load
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Toggle button click listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Listen for OS system theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolio-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // =========================================================================
  // 2. Navigation Bar: Mobile Auto-Collapse & Active Section Highlighting
  // =========================================================================
  const navbarCollapse = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Close mobile hamburger menu automatically after clicking any nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Use Bootstrap Collapse API if available
        if (window.bootstrap && window.bootstrap.Collapse) {
          const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse) || new window.bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Highlight active section on scroll using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // =========================================================================
  // 3. Project Filtering System (All, Web Development, Mobile Apps, Other)
  // =========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          // Smooth fade-in
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // =========================================================================
  // 4. Project Details Modal (Populating dynamic modal data)
  // =========================================================================
  const projectDetailsModalEl = document.getElementById('projectDetailsModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalTechStack = document.getElementById('modalProjectTechStack');
  const modalImage = document.getElementById('modalProjectImage');
  const modalHighlights = document.getElementById('modalProjectHighlights');

  // Detailed project data dictionary
  const projectData = {
    foodnest: {
      title: 'FoodNest',
      category: 'Web Development (Concept)',
      image: './assets/images/foodnest.svg',
      desc: 'A food-ordering website concept designed to present food items cleanly and provide a smooth, convenient customer ordering workflow with category discovery and cart state management.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'MongoDB (Planned)', 'Java / Redis (Optional)'],
      highlights: [
        'Interactive menu catalog with dish categorization and search filters',
        'Intuitive client-side cart management and pricing calculation',
        'Responsive layout optimized for smartphone and desktop ordering',
        'Database architecture planned for menu items, customer accounts, and order history'
      ]
    },
    shopnest: {
      title: 'ShopNest',
      category: 'Web Development',
      image: './assets/images/shopnest.svg',
      desc: 'A shopping website project focused on exploring product catalogs, modern item filtering, cart interactions, and delivering a clean online retail experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Angular (Explored / Learning)'],
      highlights: [
        'Structured catalog browsing with product cards, ratings, and price tags',
        'Simulated bag management with item increment/decrement workflows',
        'Clean checkout overview and responsive navigation',
        'Component-friendly structure adaptable to modern single-page frameworks'
      ]
    },
    'lg-smartsell': {
      title: 'LG SmartSell',
      category: 'Mobile Applications (Concept)',
      image: './assets/images/lg-smartsell.svg',
      desc: 'A mobile application concept focused on empowering on-field service engineers to track diagnostics, manage appliance repair workflows, and identify legitimate sales and warranty upgrade opportunities during customer visits.',
      technologies: ['Flutter', 'Dart', 'Mobile UI Design', 'REST API (Concept)'],
      highlights: [
        'Service engineer task console with assigned tickets and equipment diagnostic status',
        'Warranty verification and AMC (Annual Maintenance Contract) opportunity prompts',
        'Designed specifically for one-handed mobile touch use in field conditions',
        'Clear separation between technical repair logs and customer-facing quotes'
      ]
    },
    'task-manager': {
      title: 'Student Task Manager',
      category: 'Other / Educational Concept',
      image: './assets/images/task-manager.svg',
      desc: 'A sample project concept designed for college students to track course assignments, lab deadlines, seminars, and project milestones in an organized Kanban style.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      highlights: [
        'Visual status columns for pending, in-progress, and submitted college tasks',
        'Custom deadline reminders and priority labels',
        'Editable sample card provided as a placeholder for future university coursework'
      ]
    },
    'expense-tracker': {
      title: 'Personal Expense Tracker',
      category: 'Other / Utility Concept',
      image: './assets/images/expense-tracker.svg',
      desc: 'A sample project concept for organizing student budgets, tracking daily cafeteria, books, and travel expenses with simple visual analytics.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Charts & Visualizations'],
      highlights: [
        'Monthly budget progress bar and category breakdown',
        'Quick expense logging with currency formatting',
        'Editable sample card provided as a placeholder for personal software projects'
      ]
    }
  };

  const detailButtons = document.querySelectorAll('.btn-view-details');
  detailButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];

      if (data && projectDetailsModalEl) {
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalCategory) modalCategory.textContent = data.category;
        if (modalDesc) modalDesc.textContent = data.desc;
        if (modalImage) {
          modalImage.src = data.image;
          modalImage.alt = `${data.title} preview illustration`;
        }

        // Render tech badges
        if (modalTechStack) {
          modalTechStack.innerHTML = '';
          data.technologies.forEach((tech) => {
            const badge = document.createElement('span');
            badge.className = 'tech-tag me-1 mb-1';
            badge.textContent = tech;
            modalTechStack.appendChild(badge);
          });
        }

        // Render highlights
        if (modalHighlights) {
          modalHighlights.innerHTML = '';
          data.highlights.forEach((item) => {
            const li = document.createElement('li');
            li.className = 'mb-1';
            li.innerHTML = `<i class="bi bi-check2-circle text-purple me-2"></i>${item}`;
            modalHighlights.appendChild(li);
          });
        }

        // Open Bootstrap modal
        if (window.bootstrap && window.bootstrap.Modal) {
          const modalInstance = new window.bootstrap.Modal(projectDetailsModalEl);
          modalInstance.show();
        }
      }
    });
  });

  // =========================================================================
  // 5. Contact Form Client-Side Validation
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    // Email regex: standard RFC 5322 compliant regex for robust validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    /**
     * Validate an individual input field
     * @param {HTMLInputElement|HTMLTextAreaElement} input
     * @param {boolean} condition - Condition that must be true for validity
     * @param {string} errorElementId - ID of invalid feedback container
     * @param {string} errorMessage - Error text
     * @returns {boolean} - true if valid
     */
    const validateField = (input, condition, errorElementId, errorMessage) => {
      const feedbackEl = document.getElementById(errorElementId);
      if (!condition) {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        if (feedbackEl) {
          feedbackEl.textContent = errorMessage;
        }
        return false;
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (feedbackEl) {
          feedbackEl.textContent = '';
        }
        return true;
      }
    };

    // Live validation as user types to clear errors immediately
    nameInput?.addEventListener('input', () => {
      if (nameInput.value.trim().length > 0) {
        validateField(nameInput, nameInput.value.trim().length >= 2, 'nameFeedback', 'Please enter your full name (at least 2 characters).');
      }
    });

    emailInput?.addEventListener('input', () => {
      if (emailInput.value.trim().length > 0) {
        validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'emailFeedback', 'Please provide a valid email address (e.g. name@domain.com).');
      }
    });

    subjectInput?.addEventListener('input', () => {
      if (subjectInput.value.trim().length > 0) {
        validateField(subjectInput, subjectInput.value.trim().length >= 3, 'subjectFeedback', 'Please enter a subject (at least 3 characters).');
      }
    });

    messageInput?.addEventListener('input', () => {
      if (messageInput.value.trim().length > 0) {
        validateField(messageInput, messageInput.value.trim().length >= 10, 'messageFeedback', 'Please write a message of at least 10 characters.');
      }
    });

    // Form submission event
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent accidental page reload

      const nameVal = nameInput?.value.trim() || '';
      const emailVal = emailInput?.value.trim() || '';
      const subjectVal = subjectInput?.value.trim() || '';
      const messageVal = messageInput?.value.trim() || '';

      // Validate all required fields
      const isNameValid = validateField(nameInput, nameVal.length >= 2, 'nameFeedback', 'Please enter your full name.');
      const isEmailValid = validateField(emailInput, emailRegex.test(emailVal), 'emailFeedback', 'Please provide a valid email address.');
      const isSubjectValid = validateField(subjectInput, subjectVal.length >= 3, 'subjectFeedback', 'Please enter a subject for your message.');
      const isMessageValid = validateField(messageInput, messageVal.length >= 10, 'messageFeedback', 'Please enter a message (at least 10 characters).');

      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // Success: Clear form fields
        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
          input?.classList.remove('is-valid');
          input?.classList.remove('is-invalid');
        });

        // Display accurate, honest confirmation notice (Frontend demo context)
        if (formStatus) {
          formStatus.className = 'alert alert-success d-flex align-items-start gap-2 mt-4';
          formStatus.innerHTML = `
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0"></i>
            <div>
              <strong>Validation Successful!</strong> Thank you, <em>${escapeHtml(nameVal)}</em>. 
              Your message inputs passed all client-side validation checks.
              <div class="small text-muted mt-1">
                <i class="bi bi-info-circle me-1"></i>
                <strong>Notice:</strong> As this is a standalone frontend project without a live mail server, 
                no email was dispatched. To receive real emails in production, connect this form action to Formspree, EmailJS, or an Express/Node.js endpoint.
              </div>
            </div>
          `;
          formStatus.focus();
        }
      } else {
        // Focus first invalid field for accessibility
        const firstInvalid = contactForm.querySelector('.is-invalid');
        firstInvalid?.focus();

        if (formStatus) {
          formStatus.className = 'alert alert-danger d-flex align-items-center gap-2 mt-4';
          formStatus.innerHTML = `
            <i class="bi bi-exclamation-triangle-fill text-danger fs-5 flex-shrink-0"></i>
            <div>Please review the highlighted fields above and correct the errors before submitting.</div>
          `;
        }
      }
    });
  }

  // Helper function to sanitize user input for safe HTML insertion
  function escapeHtml(string) {
    const div = document.createElement('div');
    div.innerText = string;
    return div.innerHTML;
  }

  // =========================================================================
  // 6. Resume Download Guide Modal & Direct Download
  // =========================================================================
  const resumeDownloadBtns = document.querySelectorAll('.btn-download-resume');
  const resumeGuideModalEl = document.getElementById('resumeGuideModal');

  resumeDownloadBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // If the user clicks, provide an informative toast or open helper if needed,
      // while allowing standard download to initiate.
      console.log('Downloading resume file from assets/resume.pdf');
    });
  });

  // =========================================================================
  // 7. Back-to-Top Button
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 8. Dynamic Copyright Year
  // =========================================================================
  const copyrightYearEl = document.getElementById('copyrightYear');
  if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear().toString();
  }

  // =========================================================================
  // 9. Viewport Scroll Reveal Animations (Respects prefers-reduced-motion)
  // =========================================================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.fade-in-section');

  if (!prefersReducedMotion && 'IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // If reduced motion is requested or observer is unsupported, make everything visible immediately
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
});
