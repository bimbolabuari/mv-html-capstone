const close = document.querySelector('#close');
const hamburger = document.querySelector('#open');
const nav = document.querySelector('#nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('none');
  close.classList.remove('none');
  nav.classList.remove('second-nav', 'none');
  nav.classList.add('nav-list');
});

close.addEventListener('click', () => {
  nav.classList.add('none', 'section-nav');
  nav.classList.remove('nav-list');
  hamburger.classList.remove('none');
  close.classList.add('none');
});