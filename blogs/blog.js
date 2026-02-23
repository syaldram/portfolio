document.addEventListener("DOMContentLoaded", function () {
  // =============================================
  // 1. Donut Chart (Chart.js)
  // =============================================
  const dataEl = document.getElementById("allocationData");
  if (dataEl) {
    const labels = JSON.parse(dataEl.dataset.labels);
    const values = JSON.parse(dataEl.dataset.values);
    const ctx = document.getElementById("allocationChart").getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "#149ddd",
              "#1f5297",
              "#173b6c",
              "#5ba3d9",
              "#f0a500",
              "#c9a227",
            ],
            borderColor: "#fff",
            borderWidth: 3,
            hoverOffset: 12,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: "55%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 20,
              font: { family: "Inter, sans-serif", size: 13, weight: "500" },
              usePointStyle: true,
              pointStyleWidth: 12,
            },
          },
          tooltip: {
            backgroundColor: "#173b6c",
            titleFont: { family: "Poppins, sans-serif", size: 14 },
            bodyFont: { family: "Inter, sans-serif", size: 13 },
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: function (context) {
                return " " + context.label + ": " + context.parsed + "%";
              },
            },
          },
        },
        animation: {
          animateRotate: true,
          duration: 1200,
          easing: "easeOutQuart",
        },
      },
    });
  }

  // =============================================
  // 2. Scroll-Reveal (IntersectionObserver)
  // =============================================
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  // =============================================
  // 3. Scroll Progress Bar
  // =============================================
  const progressBar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + "%";
  });

  // =============================================
  // 4. Back to Top Button
  // =============================================
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // =============================================
  // 5. Navbar Scroll Effect
  // =============================================
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // =============================================
  // 6. Collapse Navbar on Link Click (mobile)
  // =============================================
  const navbarCollapse = document.getElementById("navbarsMain");
  const navLinks = navbarCollapse.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Only collapse if the navbar is in mobile (toggler visible)
      const toggler = document.querySelector(".navbar-toggler");
      if (toggler && window.getComputedStyle(toggler).display !== "none") {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // =============================================
  // 7. Copyright Year
  // =============================================
  const copyrightEl = document.getElementById("copyright");
  if (copyrightEl) {
    copyrightEl.textContent =
      "\u00A9 " + new Date().getFullYear() + " Saad Yaldram";
  }
});
