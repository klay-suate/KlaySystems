/* =============================================
   KLAY SYSTEMS — Shared Script
   ============================================= */

// ── Navbar scroll shadow ──────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar && navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile hamburger menu ─────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

// ── Scroll reveal ─────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ── WhatsApp ──────────────────────────────────
const WA_NUMBER = '258870718218';
const WA_MSG = encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento.');
function openWhatsApp(msg) {
  const text = msg ? encodeURIComponent(msg) : WA_MSG;
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
}
// attach to all wa-trigger elements
document.querySelectorAll('[data-wa]').forEach(el => {
  el.addEventListener('click', () => openWhatsApp(el.dataset.waMsg));
});

// ── Contact form feedback ─────────────────────
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    const submitBtn = this.querySelector('[type="submit"]');
    const successMsg = document.querySelector('.form-success');
    if (submitBtn) {
      submitBtn.textContent = 'A enviar…';
      submitBtn.disabled = true;
    }
    // Let Formspree handle the POST; show success after a moment
    if (successMsg) {
      setTimeout(() => {
        successMsg.style.display = 'block';
        this.style.display = 'none';
      }, 1200);
    }
  });
}
