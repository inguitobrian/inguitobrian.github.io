<template>
  <div class="portfolio-page">
    <!-- Header Component -->
    <Header />

    <main class="main">
      <section id="portfolio" class="portfolio section">
        <!-- Section Title with Back Button -->
        <div class="container">
          <div class="section-header-wrapper">
            <router-link to="/#portfolio" class="btn-back" title="Back to Home">
              <i class="bi bi-arrow-left"></i>
            </router-link>
            <div class="section-title-content">
              <span class="description-title">Portfolio</span>
              <h2>My Works</h2>
            </div>
          </div>
          <p class="section-description">
            A collection of my projects showcasing web development, graphic
            design, branding, and print design work.
          </p>
        </div>

        <div class="container">
          <div
            class="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul class="portfolio-filters isotope-filters">
              <li
                v-for="filter in filters"
                :key="filter.value"
                :data-filter="filter.value"
                :class="{ 'filter-active': activeFilter === filter.value }"
                @click="setActiveFilter(filter.value)"
              >
                {{ filter.label }}
              </li>
            </ul>

            <div class="row gy-4 isotope-container">
              <div
                v-for="item in filteredPortfolioItems"
                :key="item.id"
                :class="`col-lg-4 col-md-6 portfolio-item isotope-item ${item.categories
                  .map((cat) => `filter-${cat}`)
                  .join(' ')}`"
              >
                <div
                  class="portfolio-card"
                  :class="{
                    'image-only':
                      item.categories.includes('print') ||
                      item.categories.includes('graphics'),
                  }"
                >
                  <div class="card-image-wrapper">
                    <!-- Main visible image -->
                    <a
                      :href="`/assets/img/portfolio/${item.images[0]}`"
                      :data-gallery="`portfolio-gallery-${item.id}`"
                      class="glightbox"
                    >
                      <img
                        :src="`/assets/img/portfolio/${item.images[0]}`"
                        class="card-image"
                        :alt="item.title"
                        loading="lazy"
                        decoding="async"
                      />
                      <div class="card-overlay">
                        <i class="bi bi-zoom-in"></i>
                      </div>
                    </a>
                    <!-- Hidden links for additional images in the gallery -->
                    <a
                      v-for="(image, index) in item.images.slice(1)"
                      :key="index"
                      :href="`/assets/img/portfolio/${image}`"
                      :data-gallery="`portfolio-gallery-${item.id}`"
                      class="glightbox hidden-gallery-item"
                    ></a>
                    <!-- Image count badge -->
                    <div v-if="item.images.length > 1" class="image-badge">
                      <i class="bi bi-images"></i>
                      <span>{{ item.images.length }}</span>
                    </div>
                  </div>
                  <div
                    class="card-body"
                    v-if="
                      !item.categories.includes('print') &&
                      !item.categories.includes('graphics')
                    "
                  >
                    <div class="card-tags">
                      <span
                        v-for="cat in item.categories"
                        :key="cat"
                        class="card-tag"
                      >
                        {{ cat }}
                      </span>
                    </div>
                    <h4 class="card-title">{{ item.title }}</h4>
                    <p class="card-description">{{ item.description }}</p>
                    <!-- Project Links -->
                    <div
                      class="card-links"
                      v-if="item.githubLink || item.websiteLink"
                    >
                      <a
                        v-if="item.githubLink"
                        :href="item.githubLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card-link github"
                        @click.stop
                      >
                        <i class="bi bi-github"></i>
                        <span>GitHub</span>
                      </a>
                      <a
                        v-if="item.websiteLink"
                        :href="item.websiteLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card-link demo"
                        @click.stop
                      >
                        <i class="bi bi-globe"></i>
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
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
  name: "PortfolioPage",
  components: {
    Header,
    Footer,
    ScrollTop,
  },
  data() {
    return {
      activeFilter: "*",
      filters: [
        { label: "Website Application", value: ".filter-web" },
        { label: "Graphics Design", value: ".filter-graphics" },
        { label: "Brand Design", value: ".filter-branding" },
        { label: "Layout Design", value: ".filter-print" },
      ],
      portfolioItems: [
        {
          id: 1,
          title: "CampusThreads University Merchandise Store",
          images: [
            "merchandise.png",
            "merchandise1.png",
            "merchandise2.jpg",
            "merchandise3.jpg",
            "merchandise4.jpg",
          ],
          categories: ["web"],
          description:
            "CampusThreads is an online merchandise store designed specifically for university students and alumni. The platform offers a wide range of university-branded apparel and accessories, allowing users to easily browse, select, and purchase their favorite items.",
          githubLink: "https://github.com/inguitobrian/CampusThreads",
          websiteLink: "https://campus-thread.vercel.app/",
        },
        {
          id: 2,
          title: "AerialThreat Detection System",
          images: ["aerial.png", "aerial1.png"],
          categories: ["web"],
          description:
            "An AerialThreat Detection System webpage developed using Vue3, with machine learning model trained in Roboflow. This project focuses on identifying and mitigating potential aerial threats through advanced detection algorithms and real-time monitoring.",
          githubLink: "https://github.com/inguitobrian/aerialthreat-detection",
          websiteLink: "https://github.com/inguitobrian/aerialthreat-detection",
        },
        {
          id: 3,
          title: "SpearAI",
          images: ["spear.png", "spear1.png", "spear2.png"],
          categories: ["web"],
          description:
            "SPEAR AI is an AI and machine learning–based phishing intelligence system designed to analyze URLs, email content, and SMS messages to identify potential phishing and malicious threats in near real time.",
          githubLink: "https://github.com/inguitobrian/SPEAR-AI",
          websiteLink: "https://github.com/inguitobrian/SPEAR-AI",
        },
        {
          id: 4,
          title: "Coffee Shop",
          images: ["proj5.jpg", "proj6.jpg"],
          categories: ["web"],
          description:
            "A coffee shop online order system designed to offer a wide variety of coffee beverages and desserts. Customers can create an account, browse through an extensive menu, and place orders.",
          githubLink: "",
          websiteLink: "",
        },
        {
          id: 5,
          title: "ABC Locksmith",
          images: ["proj8.jpg"],
          categories: ["web", "group"],
          description:
            "ABC Locksmith is a simple webpage project created using HTML and CSS. It features key sections such as home, about, contact, and services.",
          githubLink: "",
          websiteLink: "",
        },
        {
          id: 6,
          title: "Brand Identity Package",
          images: ["branding-1.jpg"],
          categories: ["branding"],
          description:
            "Complete brand identity design including logo, color palette, typography, and brand guidelines. This project showcases comprehensive branding solutions.",
          githubLink: "",
          websiteLink: "",
        },
        {
          id: 7,
          title: "Marketing Graphics",
          images: ["faith.png"],
          categories: ["graphics"],
        },
        {
          id: 11,
          title: "Marketing Graphics",
          images: ["LILY.png"],
          categories: ["graphics"],
        },
        {
          id: 12,
          title: "Marketing Graphics",
          images: ["freefall.png"],
          categories: ["graphics"],
        },
        {
          id: 13,
          title: "Marketing Graphics",
          images: ["orange.png"],
          categories: ["graphics"],
        },
        {
          id: 14,
          title: "Marketing Graphics",
          images: ["bike.png"],
          categories: ["graphics"],
        },
        {
          id: 8,
          title: "T-Shirt Layout Design",
          images: ["tshirt.png", "tshirt1.png"],
          categories: ["print"],
        },
        {
          id: 9,
          title: "T-Shirt Layout Design",
          images: ["tshirt2.png", "tshirt3.png"],
          categories: ["print"],
        },
        {
          id: 10,
          title: "Logo Design Portfolio",
          images: ["lcd2.png"],
          categories: ["graphics"],
        },
        {
          id: 15,
          title: "Logo Design Portfolio",
          images: ["day3.png"],
          categories: ["graphics"],
        },
      ],
    };
  },
  computed: {
    filteredPortfolioItems() {
      if (this.activeFilter === "*") {
        return this.portfolioItems;
      }
      const filterCategory = this.activeFilter.replace(".filter-", "");
      return this.portfolioItems.filter((item) =>
        item.categories.includes(filterCategory),
      );
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeAOS();
      this.initializeGLightbox();
    });
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
    initializeGLightbox() {
      let attempts = 0;
      const maxAttempts = 50;

      const checkGLightbox = () => {
        if (window.GLightbox) {
          // Destroy any existing instances first
          const existingLightbox = document.querySelectorAll(".glightbox");

          window.GLightbox({
            selector: ".glightbox",
            touchNavigation: true,
            loop: true,
            closeButton: true,
            autoplayVideos: true,
            openEffect: "zoom",
            closeEffect: "fade",
            cssEfects: {
              fade: { in: "fadeIn", out: "fadeOut" },
              zoom: { in: "zoomIn", out: "zoomOut" },
            },
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
    initializeAOS() {
      let attempts = 0;
      const maxAttempts = 50;

      const checkAOS = () => {
        if (window.AOS) {
          window.AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
            mirror: false,
          });
          return true;
        }
        return false;
      };

      if (checkAOS()) return;

      const waitForAOS = () => {
        attempts++;
        if (checkAOS() || attempts >= maxAttempts) {
          return;
        }
        setTimeout(waitForAOS, 100);
      };

      setTimeout(waitForAOS, 100);
    },
  },
};
</script>

<style scoped>
/* Ensure content is visible even if AOS isn't loaded */
[data-aos] {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

.portfolio-page {
  padding-top: 80px;
}

.section-header-wrapper {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 20px;
}

.section-title-content {
  display: flex;
  flex-direction: column;
}

.section-title-content .description-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent-color, #0d6efd);
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 8px;
  position: relative;
  display: inline-block;
}

.section-title-content .description-title::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-color, #0d6efd), transparent);
  border-radius: 2px;
}

.section-title-content h2 {
  font-size: 3.5rem;
  font-weight: 800;
  color: #222;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #222 0%, #555 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  color: #666;
  font-size: 1.15rem;
  max-width: 650px;
  margin-bottom: 40px;
  line-height: 1.7;
}

.btn-back {
  width: 55px;
  height: 55px;
  border-radius: 16px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  flex-shrink: 0;
  background: linear-gradient(135deg, #333 0%, #555 100%);
  color: #fff;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.btn-back:hover {
  background: linear-gradient(
    135deg,
    var(--accent-color, #0d6efd) 0%,
    #0056b3 100%
  );
  color: #fff;
  transform: translateX(-8px) scale(1.05);
  box-shadow: 0 12px 35px rgba(13, 110, 253, 0.3);
}

/* Portfolio Card Styles */
.portfolio-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.portfolio-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-card:hover .card-image {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 215, 72, 0.8) 0%,
    rgba(255, 215, 72, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card-overlay i {
  font-size: 2.5rem;
  color: #fff;
  transform: scale(0.5);
  transition: transform 0.4s ease;
}

.portfolio-card:hover .card-overlay {
  opacity: 1;
}

.portfolio-card:hover .card-overlay i {
  transform: scale(1);
}

.image-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 8px 12px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #333;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.image-badge i {
  color: var(--accent-color, #0d6efd);
}

.card-body {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.card-tag {
  background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%);
  color: var(--accent-color, #0d6efd);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-links {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.card-link.github {
  background: #24292e;
  color: #fff;
}

.card-link.github:hover {
  background: #000;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-link.demo {
  background: linear-gradient(
    135deg,
    var(--accent-color, #0d6efd) 0%,
    #0056b3 100%
  );
  color: #fff;
}

.card-link.demo:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(13, 110, 253, 0.4);
}

.card-link i {
  font-size: 1rem;
}

.hidden-gallery-item {
  display: none;
}

/* Image-only cards for print/layout items */
.portfolio-card.image-only {
  border-radius: 16px;
  overflow: hidden;
}

.portfolio-card.image-only .card-image-wrapper {
  aspect-ratio: 1/1;
  height: 100%;
}

.portfolio-card.image-only .card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}
</style>
