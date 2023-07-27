  /**
   * Hero type effect
   */
var typed = new Typed('#typed-text', {
  strings: ["I am a DevOps Engineer.", "I am a Developer.", "I am a Freelancer."],
  typeSpeed: 40,
  backSpeed: 10,
  loop: true
});
  

/**
 * Navbar links active state on scroll
 */
var navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  var fromTop = window.scrollY + 200;
  navLinks.forEach(link => {
    var section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});


// Get the About section element
var aboutSection = document.querySelector('#about');

// Get the .img-fluid element
var aboutImg = document.querySelector('#about .img-fluid');
var aboutContent = document.querySelector('#about .content');

// Create an IntersectionObserver
var observer = new IntersectionObserver(function(entries) {
  // Check if the About section is intersecting with the viewport
  if (entries[0].isIntersecting) {
    // The About section is visible, add the fade-right class to the .img-fluid element
    aboutImg.classList.add('fade-right');
    aboutContent.classList.add('fade-left');
  }
});

// Observe the About section
observer.observe(aboutSection);

/**
 * Certification section of the web
 */

var certSection = document.querySelector('#certifications');
// Create an IntersectionObserver
var observer = new IntersectionObserver(function(entries) {
  // Check if the About section is intersecting with the viewport
  if (entries[0].isIntersecting) {
    // The About section is visible, add the fade-right class to the .img-fluid element
    var cert = document.querySelector('#certifications div');
    cert.classList.add('fade-top');
  }
});

// Observe the About section
observer.observe(certSection);



