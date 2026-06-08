/* ============================================================
   FISIOTERAPIA RAFAEL MARTÍNEZ — Scripts
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR: sombra al hacer scroll ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ── SMOOTH SCROLL en enlaces internos ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ── ANIMACIÓN DE ENTRADA con IntersectionObserver ── */
  const animatedEls = document.querySelectorAll(
    '.service-card, .stat-card, .about-card, .info-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // animar solo una vez
      }
    });
  }, { threshold: 0.1 });

  animatedEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });

  /* ── FORMULARIO: toast de confirmación ── */
  const form = document.getElementById('cita-form');
  const toast = document.getElementById('toast');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Aquí puedes conectar tu backend, EmailJS, Formspree, etc.
      // Por ahora muestra un toast de confirmación visual.

      showToast('✅ Solicitud enviada — te contactamos pronto');
      form.reset();
    });
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

});
