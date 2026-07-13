(function () {
  "use strict";

  /* ===================== SCROLL-REVEAL (FadeIn) ===================== */
  var fadeEls = document.querySelectorAll(".fade-in");

  fadeEls.forEach(function (el) {
    var delay = el.getAttribute("data-delay");
    if (delay) {
      el.style.transitionDelay = delay + "ms";
    }
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ===================== NAVBAR SCROLL STATE ===================== */
  var navbar = document.getElementById("navbar");

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  /* ===================== MOBILE MENU ===================== */
  var burger = document.getElementById("burger");
  var mobileLinks = document.querySelectorAll(".navbar__mobile-link");

  function closeMenu() {
    navbar.classList.remove("is-menu-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menú");
  }

  function toggleMenu() {
    var isOpen = navbar.classList.toggle("is-menu-open");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    burger.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  }

  if (burger) {
    burger.addEventListener("click", toggleMenu);
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  /* ===================== FOOTER YEAR ===================== */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
