<template>
  <section id="hero" class="hero section">
    <!-- Background iMage -->
    <div class="image-wrapper">
      <img
        src="/assets/img/Gradient 2.png"
        alt="Left Image"
        class="img-fluid left-image"
        fetchpriority="high"
      />
      <img
        src="/assets/img/Frame 36.png"
        alt="Right Image"
        class="img-fluid right-image"
        fetchpriority="high"
      />
    </div>
    <div class="overlay"></div>
    <!-- end of Background -->

    <div
      class="container-fluid text-container d-flex align-items-end justify-content-center"
    >
      <div class="container">
        <div class="row align-items-end w-100">
          <div class="col-lg-6 header-info text-center text-lg-start">
            <br />
            <br />
            <div class="hellocontent d-flex align-items-center gap-2">
              <h6 class="pre-text mb-0">HELLO</h6>
              <div
                class="ms-1"
                style="background-color: #fff9f9; height: 3px; width: 11rem"
              ></div>
            </div>
            <br />
            <h1 class="home-font">I'm Brian</h1>
            <div class="d-flex align-items-center">
              <div class="container-fluid mx-auto homeload mb-2 text-loader">
                <span ref="typedElement" class="typed"></span>
                <span
                  class="typed-cursor typed-cursor--blink"
                  aria-hidden="true"
                  >|</span
                >
              </div>
            </div>

            <br />
            <br />
            <br />
            <div class="aboutbuttons text-center position-absolute">
              <div class="container buttons">
                <div
                  class="twobuttons d-flex flex-column flex-md-row justify-content-center gap-4"
                >
                  <a
                    href="#about"
                    class="btn btn-dark btn-custom me-md-3 mb-md-0"
                    @click="scrollToSection('about')"
                  >
                    MORE ABOUT ME
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1PgFAflaFwPVQkzIiwgmrOn7dSJEFWYvr/view?usp=sharing"
                    target="_blank"
                    class="btn btn-outline-dark btn-custom"
                  >
                    GET MY CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="social-links1 d-flex flex-column gap-3 position-absolute">
          <a href=""><i class="bi bi-facebook"></i></a>
          <a
            href="https://www.instagram.com/yangoghh?igsh=cTgxZDh0cnEyZGVm"
            target="_blank"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/inguitobrian" target="_blank">
            <i class="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brian-inguito-449b3b282/"
            target="_blank"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  mounted() {
    this.loadTypedJS();
  },
  methods: {
    async loadTypedJS() {
      if (!window.Typed) {
        await this.loadScript("/assets/vendor/typed.js/typed.umd.js");
      }

      if (window.Typed && this.$refs.typedElement) {
        new window.Typed(this.$refs.typedElement, {
          strings: ["A Digital illustrator", "A Student", "An Artist"],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000,
          loop: true,
        });
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
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.btn-outline-dark.btn-custom:hover {
  background-color: white;
  color: black;
  border-color: white;
}
</style>
