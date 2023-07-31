  /**
   * Hero type effect
   */
var typed = new Typed('#typed-text', {
  strings: ["I am a DevOps Engineer.", "I am a Developer.", "I am a Freelancer."],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1500,
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
 * Skills section
 */
window.addEventListener('load', function() {
  // Get the skills section
  var skillsSection = document.querySelector('#skills');
  
  // Get all the progress bars
  var progressBars = document.querySelectorAll('.progress-bar');
  
  // Set a flag to track if the animation has already played
  var animationPlayed = false;
  
  // Create a function to animate the progress bars
  var animateProgressBars = function() {
    // Iterate over each progress bar
    progressBars.forEach(function(progressBar) {
      // Get the width of the progress bar
      var width = progressBar.style.width;
      
      // Set the initial width to 0
      progressBar.style.width = '0%';
      
      // Animate the width from 0 to its final value
      var currentWidth = 0;
      var interval = setInterval(function() {
        if (currentWidth >= parseInt(width)) {
          clearInterval(interval);
        } else {
          currentWidth++;
          progressBar.style.width = currentWidth + '%';
        }
      }, 10);
    });
    
    // Set the animation played flag to true
    animationPlayed = true;
  };
  
  // Create a function to check if the skills section is in view
  var isSkillsSectionInView = function() {
    var rect = skillsSection.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };
  
  // Add an event listener for scroll events
  window.addEventListener('scroll', function() {
    // Check if the skills section is in view and the animation has not played yet
    if (isSkillsSectionInView() && !animationPlayed) {
      // Animate the progress bars
      animateProgressBars();
    }
  });
});


