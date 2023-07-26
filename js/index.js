  /**
   * Hero type effect
   */
  const listItems = document.querySelectorAll('.list-group-home-item');
  let delay = 0;
  
  function typeEffect() {
    listItems.forEach((item) => {
      const text = item.textContent;
      item.textContent = '';
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          item.textContent += text[i];
        }, delay);
        delay += 100;
      }
    });
    setTimeout(typeEffect, delay +1000);
  }
  
  typeEffect();
  

/**
 * Navbar links active state on scroll
 */
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 200;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
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

  
