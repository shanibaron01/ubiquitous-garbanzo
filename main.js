/**
 * Project Walnut — Lightweight Client-Side Presentation
 * Works flawlessly offline or directly via file:// double-click
 */
document.addEventListener('DOMContentLoaded', () => {
  // Graceful scroll reveal observer layout setup
  const revealElements = document.querySelectorAll('.reveal-element');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Reveal once smoothly
        }
      });
    }, observerOptions);

    revealElements.forEach(element => observer.observe(element));
  } else {
    // Fallback if browser doesn't support observers
    revealElements.forEach(element => element.classList.add('is-visible'));
  }
});
