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
      <div
        class="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <ul
          class="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay="100"
        >
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

        <div
          class="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            v-for="item in filteredPortfolioItems"
            :key="item.id"
            :class="`col-lg-4 col-md-6 portfolio-item isotope-item ${item.categories
              .map((cat) => `filter-${cat}`)
              .join(' ')}`"
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
                <h4>
                  <router-link
                    to="/portfolio-details"
                    :title="`${item.title} - More Details`"
                  >
                    {{ item.title }}
                  </router-link>
                </h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioSection",
  data() {
    return {
      activeFilter: "*",
      filters: [
        { label: "All", value: "*" },
        { label: "Website Application", value: ".filter-web" },
        { label: "Graphics Design", value: ".filter-graphics" },
        { label: "Brand Design", value: ".filter-branding" },
        { label: "Print Design", value: ".filter-print" },
        { label: "Group Projects", value: ".filter-group" },
      ],
      portfolioItems: [
        {
          id: 1,
          title: "Library Home Page",
          image: "proj1.jpg",
          categories: ["web", "group"],
          description:
            "\"A library homepage project built using Laravel, PHP, CSS, and HTML. The application includes key sections such as the home page, borrowers page, books catalog, and a 'borrow a book' functionality. It showcases efficient handling of library operations with a focus on backend functionality and a user-friendly interface.",
        },
        {
          id: 2,
          title: "Dictionary",
          image: "proj3.jpg",
          categories: ["web", "group"],
          description:
            "A Dictionary webpage built using HTML, CSS, and JavaScript. This project provides users with a simple interface to search for word definitions and meanings. The use of JavaScript enables dynamic content updates, enhancing the user experience by delivering search results efficiently.",
        },
        {
          id: 3,
          title: "Weather Forecast",
          image: "proj4.jpg",
          categories: ["web", "group"],
          description:
            "A Weather Forecast webpage developed using HTML, CSS, and JavaScript. This project allows users to view current weather conditions and forecasts for different locations. JavaScript is used to fetch and display real-time weather data, providing an interactive and informative user experience.",
        },
        {
          id: 4,
          title: "Coffee Shop",
          image: "proj5.jpg",
          categories: ["web", "group"],
          description:
            "A coffee shop online order system designed to offer a wide variety of coffee beverages and desserts. Customers can create an account, browse through an extensive menu, place orders, and enjoy a seamless ordering experience.",
        },
        {
          id: 5,
          title: "ABC Locksmith",
          image: "proj8.jpg",
          categories: ["web", "group"],
          description:
            "ABC Locksmith is a simple webpage project created using HTML and CSS. It features key sections such as home, about, contact, and services, providing a basic yet effective online presence for a locksmith business. This project demonstrates foundational web development skills in creating structured, static webpages.",
        },
        {
          id: 6,
          title: "Brand Identity Package",
          image: "branding-1.jpg",
          categories: ["branding", "solo"],
          description:
            "Complete brand identity design including logo, color palette, typography, and brand guidelines. This project showcases comprehensive branding solutions from concept to final implementation.",
        },
        {
          id: 7,
          title: "Marketing Graphics",
          image: "branding-2.jpg",
          categories: ["graphics", "solo"],
          description:
            "Collection of marketing materials including social media graphics, promotional banners, and digital advertisements. Designed to maintain brand consistency across multiple platforms.",
        },
        {
          id: 8,
          title: "Event Poster Design",
          image: "branding-3.jpg",
          categories: ["print", "graphics", "solo"],
          description:
            "Eye-catching poster designs for various events and promotions. Combines typography, imagery, and layout design to create compelling visual communications.",
        },
        {
          id: 9,
          title: "T-Shirt Design Collection",
          image: "product-1.jpg",
          categories: ["print", "graphics", "solo"],
          description:
            "Creative t-shirt designs featuring unique graphics and layouts. From concept sketches to print-ready files, showcasing versatility in apparel design.",
        },
        {
          id: 10,
          title: "Logo Design Portfolio",
          image: "product-2.jpg",
          categories: ["graphics", "branding", "solo"],
          description:
            "A collection of logo designs for various clients and industries. Each design reflects the unique identity and values of the brand while maintaining professional standards.",
        },
        {
          id: 11,
          title: "Print Advertisement Campaign",
          image: "product-3.jpg",
          categories: ["print", "graphics", "group"],
          description:
            "Comprehensive print advertising campaign including magazine ads, flyers, and brochures. Collaborated with marketing team to create cohesive visual messaging.",
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
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
  },
  mounted() {
    // Initialize GLightbox for portfolio images
    this.initializeGLightbox();
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
    async initializeGLightbox() {
      // Wait for GLightbox to be available
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

      // Try to initialize immediately
      if (checkGLightbox()) return;

      // If not available, wait and retry
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
