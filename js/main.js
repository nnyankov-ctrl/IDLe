/* ============================================================
   IDLe Metric — Main JS
   ============================================================ */


document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // --- Smooth active nav link on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navAnchors.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => {
            a.classList.toggle('active-link', a.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // --- FAQ accordion ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Open this one (if it was closed)
      if (!isOpen) item.classList.add('open');
    });
  });

  // --- Animated timer in hero ---
  const timerEl = document.getElementById('hero-timer');
  if (timerEl) {
    let seconds = 47 * 60 + 23; // Start at 47:23
    const fmt = n => String(n).padStart(2, '0');
    const tick = () => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      timerEl.textContent = h > 0
        ? `${fmt(h)}:${fmt(m)}:${fmt(s)}`
        : `${fmt(m)}:${fmt(s)}`;
      seconds++;
    };
    tick();
    setInterval(tick, 1000);
  }

  // --- Scroll reveal (lightweight) ---
  const revealEls = document.querySelectorAll('.feature-card, .step-card, .support-card');
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      revealObs.observe(el);
    });
  }

});
