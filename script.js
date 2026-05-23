/* Vlastimil Lysák — vanilla JS */

/* ── Navigace: průhledná → neprůhledná po scrollu ── */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Hamburger menu ── */
const toggle = document.querySelector('.nav__toggle');
const links  = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('nav__links--open');
  toggle.classList.toggle('nav__toggle--open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Zavřít menu kliknutím na odkaz */
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('nav__links--open');
    toggle.classList.remove('nav__toggle--open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ── E-mail: adresa sestavena z data atributů, v HTML není ── */
const emailCard = document.querySelector('.kontakt__karta--email');
if (emailCard) {
  const addr = `${emailCard.dataset.u}@${emailCard.dataset.d}.${emailCard.dataset.t}`;

  /* Zobrazit adresu v kartě */
  const display = emailCard.querySelector('.kontakt__email-display');
  if (display) display.textContent = addr;

  /* Kliknutí → mailto */
  const open = () => { window.location.href = `mailto:${addr}`; };
  emailCard.addEventListener('click', open);
  emailCard.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });
}
