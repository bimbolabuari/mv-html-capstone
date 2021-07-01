const close = document.querySelector('#close');
const hamburger = document.querySelector('#open');
const nav = document.querySelector('#nav');
const firstNav = document.querySelector('.first-nav');
const featuredContainer = document.querySelector('.featured-ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('none');
  firstNav.classList.remove('none');
  close.classList.remove('none');
  nav.classList.remove('second-nav', 'none');
  nav.classList.add('nav-list');
});

close.addEventListener('click', () => {
  nav.classList.add('none', 'section-nav');
  nav.classList.remove('nav-list');
  firstNav.classList.add('none');
  hamburger.classList.remove('none');
  close.classList.add('none');
});

const speakersArray = [
  {
    name: 'Yochai Benkler',
    intro: 'Berkamn Professor of Enterpreneurial Legal studies at Harvard Law school',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: './images/passport1.jpg',
  },
  {
    name: 'Yochai Benkler',
    introduction: 'Berkamn Professor of Enterpreneurial Legal studies at Harvard Law school',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: './images/passport2.jpg',
  },
  {
    name: 'Yochai Benkler',
    introduction: 'Berkamn Professor of Enterpreneurial Legal studies at Harvard Law school',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: './images/passport3.jpg',
  },
  {
    name: 'Yochai Benkler',
    introduction: 'Berkamn Professor of Enterpreneurial Legal studies at Harvard Law school',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: './images/passport4.jpg',
  },
  {
    name: 'Yochai Benkler',
    introduction: 'Berkamn Professor of Enterpreneurial Legal studies at Harvard Law school',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: './images/passport1.jpg',
  },
  {
    name: 'Yochai Benkler',
    introduction: 'Berkamn Professor of Enterpreneurial Legal studies at Harvard Law school',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: './images/passport2.jpg',
  },
];

const createFeaturedSpeaker = (speaker) => {
  const speakerContainer = document.createElement('li');
  speakerContainer.classList.add('featured-list', 'flex');
  speakerContainer.innerHTML = `
  <img src='${speaker.image}' class="featured-img" alt="featured-speakers">
  <div class="featured-container">
      <h3 class="featured-h3">${speaker.name}</h3>
      <h4 class="featured-h4">${speaker.intro}</h4>
      <p class="featured-paragraph">${speaker.about}</p>
  </div>
  `;
  return speakerContainer;
};

const showSpeaker = (speaker, featuredContainer) => {
  const newFeaturedSpeaker = createFeaturedSpeaker(speaker);
  featuredContainer.appendChild(newFeaturedSpeaker);
};

speakersArray.forEach((speaker) => {
  showSpeaker(speaker, featuredContainer);
});