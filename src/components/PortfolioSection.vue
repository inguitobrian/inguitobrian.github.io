<template>
  <section id="portfolio" class="portfolio section">
    <!-- Section Title -->
    <div
      class="container section-title about-page"
      data-aos="fade-up-right"
      data-aos-delay="100"
    >
      <span class="description-title">Portfolio</span>
      <h2>Portfolio</h2>
    </div>

    <div class="container">
      <div class="row gy-4" data-aos="fade-up" data-aos-delay="200">
        <div
          v-for="item in previewItems"
          :key="item.id"
          class="col-lg-4 col-md-6 portfolio-item"
        >
          <div class="portfolio-content h-100">
            <a
              :href="`/assets/img/portfolio/${item.image}`"
              data-gallery="portfolio-gallery-app"
              class="glightbox"
            >
              <img
                :src="`/assets/img/portfolio/${item.image}`"
                class="img-fluid"
                :alt="item.title"
                loading="lazy"
                decoding="async"
              />
            </a>
            <div class="portfolio-info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.shortDesc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- See All Portfolio Button -->
      <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="300">
        <router-link to="/portfolio" class="btn btn-dark btn-see-all">
          See All Portfolio <i class="bi bi-arrow-right ms-2"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioSection",
  data() {
    return {
      previewItems: [
        {
          id: 1,
          title: "Library Home Page",
          image: "proj1.jpg",
          shortDesc: "Laravel, PHP, CSS, HTML",
        },
        {
          id: 6,
          title: "Brand Identity Package",
          image: "branding-1.jpg",
          shortDesc: "Logo, Color Palette, Typography",
        },
        {
          id: 8,
          title: "Event Poster Design",
          image: "branding-3.jpg",
          shortDesc: "Print & Graphics Design",
        },
      ],
    };
  },
  mounted() {
    this.initializeGLightbox();
  },
  methods: {
    async initializeGLightbox() {
      let attempts = 0;
      const maxAttempts = 50;

      const checkGLightbox = () => {
        if (window.GLightbox) {
          window.GLightbox({
            selector: ".glightbox",
          });
          return true;
        }
        return false;
      };

      if (checkGLightbox()) return;

      const waitForGLightbox = () => {
        attempts++;
        if (checkGLightbox() || attempts >= maxAttempts) {
          return;
        }
        setTimeout(waitForGLightbox, 100);
      };

      setTimeout(waitForGLightbox, 100);
    },
  },
};
</script>

<style scoped>
.btn-see-all {
  padding: 14px 35px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-see-all:hover {
  background-color: white;
  color: black;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
</style>
