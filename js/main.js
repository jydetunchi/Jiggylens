// ── HERO SLIDER ──
const bgSlider = document.querySelector('.hero-bg-slider');
const bgSlides = document.querySelectorAll('.hero-bg-slider .slide');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
const heroSection = document.querySelector('.hero--fullscreen');

let idx = 0;
const count = bgSlides.length;
let timer = null;
const interval = 5200;

function goto(n) {
  idx = (n + count) % count;
  bgSlider.style.transform = `translateX(-${idx * 100}%)`;
}

function fwd() { goto(idx + 1); }
function back() { goto(idx - 1); }

prev?.addEventListener('click', back);
next?.addEventListener('click', fwd);

function autoStart() { timer = setInterval(fwd, interval); }
function autoStop() { clearInterval(timer); timer = null; }

autoStart();
heroSection?.addEventListener('mouseenter', autoStop);
heroSection?.addEventListener('mouseleave', autoStart);

// ── FADE-IN ON SCROLL ──
const fadeObs = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(s => fadeObs.observe(s));

// ── SMOOTH SCROLL ──
function scrollTo(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ── NAVBAR ACTIVE STATE ──
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-primary a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

updateActiveNav();

// ── PREVENT DEFAULT BUTTON BEHAVIOR IF NO ONCLICK ──
document.querySelectorAll('button').forEach(btn => {
  if (!btn.onclick) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
});

// ── IMAGE ORIENTATION HANDLER ──
function applyImageOrientation() {
  const imgs = document.querySelectorAll('.gallery-item img');
  imgs.forEach(img => {
    function setClass() {
      if (!img.naturalWidth || !img.naturalHeight) return;
      img.classList.remove('portrait','landscape');
      if (img.naturalHeight > img.naturalWidth) img.classList.add('portrait');
      else img.classList.add('landscape');
    }

    if (img.complete) setClass();
    else img.addEventListener('load', setClass);
  });
}

document.addEventListener('DOMContentLoaded', applyImageOrientation);
window.addEventListener('resize', applyImageOrientation);
