'use strict';

// Scroll progress indicator
const progress = document.getElementById('reading-progress-fill');
const setProgress = () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${total > 0 ? (window.scrollY / total) * 100 : 0}%`;
};
window.addEventListener('scroll', setProgress, { passive: true });
window.addEventListener('resize', setProgress);
setProgress();

// Accessible reveal effects; keep all content visible when motion is reduced.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  document.documentElement.classList.add('has-reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Photo slots: missing images show elegant placeholders. After placing
// original JPGs into assets/images, the page uses them automatically.
const dialog = document.getElementById('photo-dialog');
const dialogImg = document.getElementById('dialog-image');
const dialogCaption = document.getElementById('dialog-caption');
const closeDialog = document.getElementById('dialog-close');
let lastPhotoTrigger = null;

document.querySelectorAll('.photo-frame').forEach(frame => {
  const img = frame.querySelector('img');
  if (!img) return;
  const loaded = () => {
    frame.classList.add('has-image');
    if (typeof dialog.showModal !== 'function') return;
    frame.setAttribute('role', 'button');
    frame.setAttribute('tabindex', '0');
    frame.setAttribute('aria-label', `Ampliar foto: ${img.alt}`);
    const open = () => {
      lastPhotoTrigger = frame;
      dialogImg.src = img.currentSrc || img.src;
      dialogImg.alt = img.alt;
      dialogCaption.textContent = frame.closest('figure')?.querySelector('figcaption')?.textContent || img.alt;
      dialog.showModal();
    };
    frame.addEventListener('click', open);
    frame.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  };
  if (img.complete && img.naturalWidth > 0) loaded();
  else img.addEventListener('load', loaded, { once: true });
});
closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => lastPhotoTrigger?.focus());

// Interactive final letter.
const toggle = document.getElementById('letter-toggle');
const letter = document.getElementById('letter-content');
const envelopeStage = document.getElementById('envelope-stage');
toggle.addEventListener('click', () => {
  const willOpen = letter.hidden;
  letter.hidden = !willOpen;
  toggle.setAttribute('aria-expanded', String(willOpen));
  toggle.innerHTML = willOpen ? 'Cerrar la carta <span aria-hidden="true">↑</span>' : 'Abrir mi carta <span aria-hidden="true">♡</span>';
  envelopeStage.classList.toggle('is-open', willOpen);
  if (willOpen) {
    requestAnimationFrame(() => letter.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth', block: 'start' }));
  }
});
