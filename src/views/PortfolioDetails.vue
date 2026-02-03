<template>
  <div class="portfolio-details-page">
    <!-- Header Component -->
    <Header />

    <!-- Main Content -->
    <main class="main">
      <div class="page-title" data-aos="fade">
        <div class="container">
          <nav class="breadcrumbs">
            <ol>
              <li><router-link to="/">Home</router-link></li>
              <li class="current">Portfolio Details</li>
            </ol>
          </nav>
          <h1>Portfolio Details</h1>
        </div>
      </div>

      <!-- Portfolio Details Section -->
      <section id="portfolio-details" class="portfolio-details section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-8">
              <div class="portfolio-details-slider swiper init-swiper">
                <div class="swiper-wrapper align-items-center">
                  <div
                    v-for="image in portfolioImages"
                    :key="image.id"
                    class="swiper-slide"
                  >
                    <img
                      :src="`/assets/img/portfolio/${image}`"
                      :alt="`Portfolio ${image}`"
                    />
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>

            <div class="col-lg-4">
              <div
                class="portfolio-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: Web Design</li>
                  <li><strong>Client</strong>: Academic Projects</li>
                  <li><strong>Project date</strong>: 2023-2024</li>
                  <li>
                    <strong>Project URL</strong>:
                    <a href="#">Available on Request</a>
                  </li>
                </ul>
              </div>
              <div
                class="portfolio-description"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2>Portfolio Description</h2>
                <p>
                  These are various web development projects showcasing
                  different technologies and frameworks. Each project
                  demonstrates proficiency in modern web development practices,
                  responsive design, and user experience considerations.
                </p>
                <p>
                  Projects include full-stack applications using PHP, Laravel,
                  JavaScript, and various frontend frameworks. The focus is on
                  creating functional, user-friendly interfaces with clean,
                  maintainable code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Scroll Top -->
    <ScrollTop />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ScrollTop from "../components/ScrollTop.vue";

export default {
  name: "PortfolioDetails",
  components: {
    Header,
    Footer,
    ScrollTop,
  },
  data() {
    return {
      portfolioImages: [
        "proj1.jpg",
        "proj3.jpg",
        "proj4.jpg",
        "proj5.jpg",
        "proj8.jpg",
      ],
    };
  },
  mounted() {
    // Initialize Swiper for portfolio images
    this.initializeSwiper();
  },
  methods: {
    async initializeSwiper() {
      if (!window.Swiper) {
        await this.loadScript("/assets/vendor/swiper/swiper-bundle.min.js");
      }

      if (window.Swiper) {
        new window.Swiper(".portfolio-details-slider", {
          speed: 400,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
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
  },
};
</script>
