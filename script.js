/* ========================================
   MUFRF Landing Page - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Page Loader ───
  const pageLoader = document.getElementById('pageLoader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      pageLoader.classList.add('hidden');
    }, 800);
  });

  // ─── Navbar Scroll Effect ───
  const navbar = document.getElementById('navbar');
  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ─── Mobile Navigation Toggle ───
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger
    const spans = mobileToggle.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });

  // ─── Active Nav Link on Scroll ───
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = navLinks.querySelectorAll('a:not(.nav-cta)');

  const updateActiveLink = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = navLinks.querySelector(`a[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ─── Hero Particles ───
  const particlesContainer = document.getElementById('heroParticles');
  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = (Math.random() * 4 + 3) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.opacity = Math.random() * 0.3 + 0.1;

    // Randomize colors
    const colors = [
      'rgba(142, 200, 255, 0.6)',
      'rgba(197, 180, 227, 0.5)',
      'rgba(168, 230, 207, 0.5)',
      'rgba(90, 173, 255, 0.4)'
    ];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particlesContainer.appendChild(particle);
  }

  // ─── Scroll Reveal Animations ───
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ─── Counter Animation ───
  const counters = document.querySelectorAll('.counter');
  const floatCardNumbers = document.querySelectorAll('.float-card-number');
  let counterAnimated = false;
  let floatCounterAnimated = false;

  const animateCounter = (el, target, duration = 2000) => {
    const start = 0;
    const startTime = performance.now();

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.floor(start + (target - start) * easedProgress);

      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  // Stats section counters
  const statsSection = document.getElementById('stats');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterAnimated) {
        counterAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.count);
          animateCounter(counter, target);
        });
      }
    });
  }, { threshold: 0.3 });
  statsObserver.observe(statsSection);

  // Hero floating card counters
  const heroSection = document.getElementById('home');
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !floatCounterAnimated) {
        floatCounterAnimated = true;
        floatCardNumbers.forEach(num => {
          const target = parseInt(num.dataset.count);
          animateCounter(num, target, 1500);
        });
      }
    });
  }, { threshold: 0.5 });
  heroObserver.observe(heroSection);

  // ─── Back to Top Button ───
  const backToTop = document.getElementById('backToTop');

  const handleBackToTop = () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  };
  window.addEventListener('scroll', handleBackToTop, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── Contact Form ───
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.form-submit');
    const originalText = submitBtn.textContent;

    // Simulate submission
    submitBtn.textContent = 'กำลังส่ง...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      submitBtn.textContent = '✓ ส่งสำเร็จ!';
      submitBtn.style.background = 'linear-gradient(135deg, #a8e6cf, #2d9b6e)';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.background = '';
        contactForm.reset();
      }, 2000);
    }, 1500);
  });

  // ─── Smooth Scroll for all anchors ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── Parallax effect on hero shapes ───
  const shapes = document.querySelectorAll('.hero-bg-shapes .shape');
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    shapes.forEach((shape, i) => {
      const speed = (i + 1) * 8;
      shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  }, { passive: true });

});
