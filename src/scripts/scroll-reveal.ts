/**
 * Scroll Reveal — IntersectionObserver pour animations d'entrée
 */
const DEFAULT_TEMPO = 500;

function getTempoMs(): number {
  const tempo = document.documentElement.dataset.animTempo;
  if (tempo) return parseInt(tempo, 10);
  return DEFAULT_TEMPO;
}

function initScrollReveal() {
  const tempoMs = getTempoMs();
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          const parent = el.closest('.reveal-stagger');
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll('.reveal, .reveal-left, .reveal-right'));
            const index = siblings.indexOf(el);
            el.style.transitionDelay = `${index * (tempoMs * 0.3)}ms`;
          }

          el.classList.add('revealed');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}
