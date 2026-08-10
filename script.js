  // Sticky header shadow on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }));

  // Mobile filters drawer toggle
  const filtersToggle = document.getElementById('filtersToggle');
  const filtersPanel = document.getElementById('filtersPanel');
  filtersToggle.addEventListener('click', () => {
    const open = filtersPanel.classList.toggle('open');
    filtersToggle.classList.toggle('open', open);
  });

  // Filtering logic
  const bodyChips = document.querySelectorAll('#bodyChips .chip');
  const makeChecks = document.querySelectorAll('.filter-group:nth-of-type(2) input');
  const priceChecks = document.querySelectorAll('.filter-group:nth-of-type(3) input');
  const cards = document.querySelectorAll('.car-card');
  const emptyState = document.getElementById('emptyState');
  let activeBody = 'all';

  function applyFilters(){
    const activeMakes = Array.from(makeChecks).filter(c => c.checked).map(c => c.value);
    const activePrices = Array.from(priceChecks).filter(c => c.checked).map(c => c.value);
    let visibleCount = 0;

    cards.forEach(card => {
      const bodyMatch = activeBody === 'all' || card.dataset.body === activeBody;
      const makeMatch = activeMakes.includes(card.dataset.make);
      const priceMatch = activePrices.includes(card.dataset.price);
      const show = bodyMatch && makeMatch && priceMatch;
      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    emptyState.classList.toggle('show', visibleCount === 0);
  }

  bodyChips.forEach(chip => {
    chip.addEventListener('click', () => {
      bodyChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeBody = chip.dataset.body;
      applyFilters();
    });
  });
  makeChecks.forEach(c => c.addEventListener('change', applyFilters));
  priceChecks.forEach(c => c.addEventListener('change', applyFilters));

  document.getElementById('resetFilters').addEventListener('click', (e) => {
    e.preventDefault();
    bodyChips.forEach(c => c.classList.remove('active'));
    document.querySelector('[data-body="all"]').classList.add('active');
    activeBody = 'all';
    [...makeChecks, ...priceChecks].forEach(c => c.checked = true);
    applyFilters();
  });

  // Reveal-on-scroll for car cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(card => observer.observe(card));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
