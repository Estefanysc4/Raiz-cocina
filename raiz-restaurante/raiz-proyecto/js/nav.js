/* =============================================
   NAV — Scroll effect + Reveal on scroll
   ============================================= */

(function () {
  'use strict';

  /* ----- Nav scroll class ----- */
  const nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 48) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ----- Scroll reveal con IntersectionObserver ----- */
  const revealEls = document.querySelectorAll(
    '.hero-content, .plato-texto, .plato-sello-wrap, ' +
    '.nosotros-media, .nosotros-texto, ' +
    '.menu-header, .menu-tabs, ' +
    '.reservas-texto, .reservas-form, ' +
    '.footer-inner'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ----- Stagger en valores de nosotros ----- */
  const staggerEl = document.querySelector('.nosotros-valores');
  if (staggerEl) {
    staggerEl.classList.add('reveal-stagger');
    observer.observe(staggerEl);
  }

  /* ----- Smooth scroll para anclas internas ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ----- Formulario de reserva (feedback visual) ----- */
  const form = document.querySelector('.reservas-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Reserva confirmada ✓';
      btn.style.background = '#2D3527';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3500);
    });
  }
})();
