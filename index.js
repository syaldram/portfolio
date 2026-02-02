/**
 * Hero type effect
 */
var typed = new Typed('#typed-text', {
  strings: ["DevOps Engineer", "Cloud Architect", "Automation Expert", "Freelancer"],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

/**
 * Navbar scroll effect
 */
window.addEventListener('scroll', () => {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/**
 * Navbar links active state on scroll
 */
var navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  var fromTop = window.scrollY + 200;
  navLinks.forEach(link => {
    var section = document.querySelector(link.hash);
    if (section && 
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

/**
 * Smooth scroll for navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Get the About section element
var aboutSection = document.querySelector('#about');

// Get the about image and content elements
var aboutImg = document.querySelector('#about .about-image');
var aboutContent = document.querySelector('#about .about-content');

// Create an IntersectionObserver for about section
var aboutObserver = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    if (aboutImg) aboutImg.classList.add('fade-right');
    if (aboutContent) aboutContent.classList.add('fade-left');
  }
}, { threshold: 0.2 });

if (aboutSection) {
  aboutObserver.observe(aboutSection);
}

/**
 * Resume section of the web
 */

var resumeSection = document.querySelector('#resume');
// Create an IntersectionObserver
var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    var resume = document.querySelector('#resume .container');
    resume.classList.add('fade-top');
  }
});

// Observe the About section
observer.observe(resumeSection);

/**
 * Portfolio section of the web
 */

var portfolioSection = document.querySelector('#portfolio');
// Create an IntersectionObserver
var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    var portfolio = document.querySelector('#portfolio .container');
    portfolio.classList.add('fade-top');
  }
});

// Observe the About section
observer.observe(portfolioSection);


/**
 * Footer visitor counter
 */

// Get the visitor count element
const visitorCountElement = document.getElementById('visitorCount');

// Set the API Gateway endpoint URL
const apiGatewayUrl = 'https://stfvmcm30d.execute-api.us-east-1.amazonaws.com/prod/counter';

// Fetch the visitor count from the API Gateway endpoint
if (visitorCountElement) {
  fetch(apiGatewayUrl)
    .then(response => response.json())
    .then(visitorCount => {
      // Update the text of the span element with the visitor count
      visitorCountElement.textContent = visitorCount;
    })
    .catch(error => {
      console.error('An error occurred while fetching the visitor count:', error);
    });
}

