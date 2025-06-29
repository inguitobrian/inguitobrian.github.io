(function () {
  "use strict";

  // SCROLLED CLASS ON BODY
  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");
    if (
      !header.classList.contains("scroll-up-sticky") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? body.classList.add("scrolled")
      : body.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  document.addEventListener("DOMContentLoaded", toggleScrolled);

  // LOGO SCROLL TO TOP
  document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    if (logo) {
      logo.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });

  // MOBILE NAV TOGGLE
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".mobile-nav-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("mobile-nav-active");
        toggleBtn.classList.toggle("bi-list");
        toggleBtn.classList.toggle("bi-x");
      });
    }

    // DROPDOWNS
    document.querySelectorAll(".navmenu .toggle-dropdown").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        item.parentNode.classList.toggle("active");
        item.parentNode.nextElementSibling.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      });
    });
  });

  // TYPING EFFECT
  document.addEventListener("DOMContentLoaded", () => {
    const targets = [
      ".about-me .typed",
      ".homeload .typed",
      ".nickname .typed",
      ".position-absolute .typed",
    ];

    targets.forEach((selector) => {
      const el = document.querySelector(selector);
      if (el) {
        let strings = el.getAttribute("data-typed-items").split(",");
        new Typed(selector, typedConfig(strings, false));
      }
    });
  });

  function typedConfig(strings, showCursor = true) {
    return {
      strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      cursorChar: showCursor ? "|" : "",
    };
  }

  // 🔥 FASTER PRELOADER REMOVAL (no 1s delay, fires on DOMContentLoaded)
  document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      preloader.remove();
    }
  });

  // SCROLL TO TOP BUTTON
  document.addEventListener("DOMContentLoaded", () => {
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const toggleScrollTop = () => {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      };

      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      toggleScrollTop();
      document.addEventListener("scroll", toggleScrollTop);
    }
  });

  // ANIMATIONS ON SCROLL (deferred to full load)
  window.addEventListener("load", () => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: false });
  });

  // SWIPER SLIDERS
  window.addEventListener("load", () => {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );
      swiperElement.classList.contains("swiper-tab")
        ? initSwiperWithCustomPagination(swiperElement, config)
        : new Swiper(swiperElement, config);
    });
  });

  // GLIGHTBOX
  window.addEventListener("load", () => {
    GLightbox({ selector: ".glightbox" });
  });

  // ISOTOPE FILTERS
  window.addEventListener("load", () => {
    document.querySelectorAll(".isotope-layout").forEach((item) => {
      const layout = item.getAttribute("data-layout") || "masonry";
      const filter = item.getAttribute("data-default-filter") || "*";
      const sort = item.getAttribute("data-sort") || "original-order";

      imagesLoaded(item.querySelector(".isotope-container"), () => {
        const iso = new Isotope(item.querySelector(".isotope-container"), {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter,
          sortBy: sort,
        });

        item.querySelectorAll(".isotope-filters li").forEach((filterBtn) => {
          filterBtn.addEventListener("click", () => {
            item
              .querySelector(".filter-active")
              ?.classList.remove("filter-active");
            filterBtn.classList.add("filter-active");
            iso.arrange({ filter: filterBtn.getAttribute("data-filter") });
            AOS.init();
          });
        });
      });
    });
  });

  // CORRECT SCROLL POSITION ON HASH LINKS
  window.addEventListener("load", () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          const offset = parseInt(
            getComputedStyle(target).scrollMarginTop || "0"
          );
          window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  // NAVMENU SCROLLSPY
  const navLinks = document.querySelectorAll(".navmenu a");
  function updateActiveNav() {
    navLinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", updateActiveNav);
  document.addEventListener("scroll", updateActiveNav);
})();
