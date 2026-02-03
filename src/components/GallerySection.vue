<template>
  <section id="Illustrations" class="gallery section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <span class="description-title">Gallery</span>
      <h2>Illustrations</h2>
    </div>
    <!-- End Section Title -->

    <div class="container-fluid" data-aos="fade-up" data-aos-delay="50">
      <div class="row g-0">
        <div
          v-for="image in galleryImages"
          :key="image.id"
          class="col-lg-3 col-md-4"
        >
          <div class="gallery-item">
            <a
              :href="`/assets/img/gallery/${image.filename}`"
              class="glightbox"
              data-gallery="images-gallery"
            >
              <img
                :src="`/assets/img/gallery/${image.filename}`"
                :alt="image.alt"
                class="img-fluid"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GallerySection",
  data() {
    return {
      galleryImages: [
        { id: 1, filename: "graph1.jpeg", alt: "Digital Art 1" },
        { id: 2, filename: "graph5.jpeg", alt: "Digital Art 2" },
        { id: 3, filename: "graph6.jpeg", alt: "Digital Art 3" },
        { id: 4, filename: "graph4.jpeg", alt: "Digital Art 4" },
        { id: 5, filename: "digi1.jpg", alt: "Digital Art 5" },
        { id: 6, filename: "digi2.jpg", alt: "Digital Art 6" },
        { id: 7, filename: "digi3.jpg", alt: "Digital Art 7" },
        { id: 8, filename: "digi4.jpg", alt: "Digital Art 8" },
      ],
    };
  },
  mounted() {
    // Initialize GLightbox for gallery images after external scripts load
    this.initializeGLightbox();
  },
  methods: {
    async initializeGLightbox() {
      // Wait for GLightbox to be available
      let attempts = 0;
      const maxAttempts = 50;

      const checkGLightbox = () => {
        if (window.GLightbox) {
          window.GLightbox({
            selector: '.glightbox[data-gallery="images-gallery"]',
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
