<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="nabar container-fluid position-relative d-flex align-items-center justify-content-between"
    >
      <router-link
        to="/"
        class="logo d-flex align-items-center me-auto me-xl-0"
      >
        <img
          src="/assets/img/logo1.png"
          alt="Logo"
          class="logo-img"
          style="width: 40px; height: auto"
        />
      </router-link>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <a href="#hero" class="active" @click="scrollToSection('hero')"
              >Home</a
            >
          </li>
          <li><a href="#about" @click="scrollToSection('about')">About</a></li>
          <li>
            <a href="#resume" @click="scrollToSection('resume')">Resume</a>
          </li>
          <li>
            <a href="#portfolio" @click="scrollToSection('portfolio')"
              >Portfolio</a
            >
          </li>
          <li>
            <a href="#Illustrations" @click="scrollToSection('Illustrations')"
              >Artist Gallery</a
            >
          </li>
          <li>
            <a href="#contacts" @click="scrollToSection('contacts')">Contact</a>
          </li>
        </ul>
        <i
          class="mobile-nav-toggle d-xl-none bi bi-list"
          @click="toggleMobileMenu"
        ></i>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    toggleMobileMenu() {
      const navmenu = document.querySelector("#navmenu");
      navmenu.classList.toggle("mobile-nav-active");
    },
  },
};
</script>
