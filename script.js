const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.textContent='☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
const emailToggle = document.getElementById('emailToggle');
const contactForm = document.getElementById('contactForm');
emailToggle.addEventListener('click', () => {
  const isOpen = !contactForm.hidden;
  contactForm.hidden = isOpen;
  emailToggle.setAttribute('aria-expanded', String(!isOpen));
  emailToggle.innerHTML = isOpen ? 'Email me <span aria-hidden="true">↗</span>' : 'Close form <span aria-hidden="true">×</span>';
  if (!isOpen) contactForm.querySelector('input').focus();
});
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name').toString().trim();
  const email = data.get('email').toString().trim();
  const message = data.get('message').toString().trim();
  const subject = encodeURIComponent('Portfolio enquiry from ' + name);
  const body = encodeURIComponent('Hi Keerthana,\n\n' + message + '\n\nFrom: ' + name + '\nReply to: ' + email);
  window.location.href = 'mailto:keerthanachandrashekar03@gmail.com?subject=' + subject + '&body=' + body;
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
