<template>
  <div class="index-page">
    <!-- Header Component -->
    <Header />

    <!-- Main Content -->
    <main class="main">
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Resume Section -->
      <ResumeSection />

      <!-- Portfolio Section -->
      <PortfolioSection />

      <!-- Gallery Section -->
      <GallerySection />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Scroll Top -->
    <ScrollTop />

    <!-- Preloader -->
    <div id="preloader" v-if="showPreloader"></div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ResumeSection from "../components/ResumeSection.vue";
import PortfolioSection from "../components/PortfolioSection.vue";
import GallerySection from "../components/GallerySection.vue";
import ContactSection from "../components/ContactSection.vue";
import ScrollTop from "../components/ScrollTop.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    HeroSection,
    AboutSection,
    ResumeSection,
    PortfolioSection,
    GallerySection,
    ContactSection,
    ScrollTop,
  },
  data() {
    return {
      showPreloader: true,
    };
  },
  mounted() {
    // Initialize all vendor scripts
    this.initializeScripts();

    // Hide preloader after content is loaded
    setTimeout(() => {
      this.showPreloader = false;
    }, 1000);
  },
  methods: {
    initializeScripts() {
      // Initialize mobile navigation
      this.initMobileNav();

      // Initialize scroll functions
      this.initScrollFunctions();

      // Load external libraries
      this.loadVendorScripts();
    },

    initMobileNav() {
      const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
      if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", function (e) {
          document
            .querySelector("#navmenu")
            .classList.toggle("mobile-nav-active");
          this.classList.toggle("bi-list");
          this.classList.toggle("bi-x");
        });
      }

      // Close mobile nav when clicking on a menu link
      document.querySelectorAll("#navmenu a").forEach((navLink) => {
        navLink.addEventListener("click", () => {
          if (
            document
              .querySelector("#navmenu")
              .classList.contains("mobile-nav-active")
          ) {
            document
              .querySelector("#navmenu")
              .classList.remove("mobile-nav-active");
            document
              .querySelector(".mobile-nav-toggle")
              .classList.remove("bi-x");
            document
              .querySelector(".mobile-nav-toggle")
              .classList.add("bi-list");
          }
        });
      });
    },

    initScrollFunctions() {
      // Header scroll effect
      const selectHeader = document.querySelector("#header");
      if (selectHeader) {
        const headerScrolled = () => {
          window.scrollY > 100
            ? selectHeader.classList.add("header-scrolled")
            : selectHeader.classList.remove("header-scrolled");
        };
        window.addEventListener("load", headerScrolled);
        document.addEventListener("scroll", headerScrolled);
      }
    },

    async loadVendorScripts() {
      // Dynamically load vendor scripts
      const scripts = [
        "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
        "/assets/vendor/php-email-form/validate.js",
        "/assets/vendor/aos/aos.js",
        "/assets/vendor/swiper/swiper-bundle.min.js",
        "/assets/vendor/glightbox/js/glightbox.min.js",
        "/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js",
        "/assets/vendor/isotope-layout/isotope.pkgd.min.js",
        "/assets/vendor/waypoints/noframework.waypoints.js",
        "/assets/vendor/typed.js/typed.umd.js",
        "/assets/vendor/purecounter/purecounter_vanilla.js",
        "/assets/js/main.js",
      ];

      for (const src of scripts) {
        await this.loadScript(src);
      }

      // Initialize AOS after scripts are loaded
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      }

      // Initialize GLightbox after scripts are loaded
      if (window.GLightbox) {
        window.GLightbox({
          selector: ".glightbox",
        });
      }

      // Initialize Isotope after scripts are loaded
      if (window.Isotope) {
        this.initIsotope();
      }
    },

    loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },

    initIsotope() {
      const portfolioContainer = document.querySelector(".isotope-container");
      if (portfolioContainer) {
        const portfolioIsotope = new window.Isotope(portfolioContainer, {
          itemSelector: ".portfolio-item",
          layoutMode: "masonry",
        });

        const portfolioFilters = document.querySelectorAll(
          ".portfolio-filters li"
        );
        portfolioFilters.forEach((filter) => {
          filter.addEventListener("click", function () {
            portfolioFilters.forEach((el) =>
              el.classList.remove("filter-active")
            );
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
          });
        });
      }
    },
  },
};
</script>

<style>
/* Additional Vue-specific styles can be added here if needed */
</style>
