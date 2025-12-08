const global = {
  currentPage: window.location.pathname,
};
function highlighjtActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// Init App
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('Home ');
      break;
    case '/shows.html':
      console.log('Shows ');
      break;
    case '/movie-details.html':
      console.log('Movie Details');
      break;
    case '/tv-details.html':
      console.log('tv-details ');
      break;
    case '/search.html':
      console.log('Search ');
      break;
  }
  highlighjtActiveLink();
}
document.addEventListener('DOMContentLoaded', init);
