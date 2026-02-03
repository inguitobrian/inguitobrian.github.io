<template>
  <section id="about" class="about sectionabout">
    <!-- Section Title -->
    <div class="container-fluid"></div>
    <div
      class="container section-title about-page"
      data-aos="fade-up-right"
      data-aos-delay="100"
    >
      <span class="description-title">ABOUT ME</span>
      <h2>BIT MORE ABOUT ME</h2>
    </div>
    <!-- End Section Title -->

    <div
      class="container-fluid about-me"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="row gy-4 justify-content-center">
        <div div class="col-12 position-relative">
          <img
            src="/assets/img/DSCF4324.JPG"
            class="img-fluid custom-landscape-img"
            alt=""
          />
          <h1
            class="anime position-absolute bottom-0 start-0 h1 display-3 text-white p-4"
          >
            <span ref="aboutTypedElement" class="typed"></span>
            <span class="typed-cursor typed-cursor--blink" aria-hidden="true"
              >|</span
            >
            <span class="dot">.</span>
          </h1>
        </div>
        <div>
          <br />
        </div>

        <div class="row gx-5">
          <div
            class="col-lg-5 left-content"
            data-aos="fade-up-left"
            data-aos-delay="100"
          >
            <div class="d-flex justify-content-center">
              <img
                src="/assets/img/webpicNOcolor.png"
                class="profilecircle img-fluid"
                alt="Profile Image"
                id="profile"
              />
            </div>
            <br /><br />
          </div>

          <div
            class="col-lg-7 right-content content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <!-- Personal Introduction Section -->
            <div class="info-container">
              <h2 class="aboutpersonal text-center">Brian Perez Inguito</h2>
              <br />
              <div>
                Hi, I'm <strong>Brian Inguito</strong>, an IT student at
                <strong>Caraga State University</strong>, and I'm super
                passionate about creating art and creative projects. I love to
                draw and play different musical instruments. I'm also really
                into web design and graphics design, where I get to blend my
                tech skills with my creativity!
              </div>
              <br />
              <hr class="hr1" />
            </div>

            <!-- Academic Highlights Section -->
            <div class="info-container">
              <h3 class="aboutpersonal text-center">Academic Highlights</h3>
              <br />
              <div class="row">
                <div class="col-lg-12">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      Bachelor of Science in Information Technology at Caraga
                      State University (CSU).
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      Vice President's List honoree in BS Information Technology
                      at Caraga State University – Main Campus, in second-year
                      first semester.
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      Dean's List honoree in BS Information Technology at Caraga
                      State University – Main Campus, from the first semester of
                      the first year to the second semester.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack Section -->
        <div class="container-fluid py-5">
          <h3 class="text-center tech">Tech Stack Ratings</h3>
          <br />
          <br />
          <div class="row row-cols-2 row-cols-md-4 g-5 justify-content-center">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              class="col d-flex justify-content-center align-items-end"
            >
              <div class="stack-item text-center">
                <img
                  class="svg-icon"
                  :src="`/assets/img/${tech.icon}`"
                  height="60px"
                  :alt="tech.name"
                />
                <div class="percentage mt-2">{{ tech.percentage }}%</div>
                <div class="tech-name mt-2">{{ tech.name }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interests Section -->
        <div class="myinterest">
          <div class="container" data-aos="fade-up-right" data-aos-delay="100">
            <h3 class="text-center mb-5">Interests</h3>
            <div class="row justify-content-center">
              <div
                v-for="interest in interests"
                :key="interest.id"
                class="col-lg-3 col-md-4 col-sm-6 mb-4"
              >
                <div class="interest-card">
                  <div class="interest-icon">
                    <i :class="`bi ${interest.icon}`"></i>
                  </div>
                  <h4>{{ interest.name }}</h4>
                </div>
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
  name: "AboutSection",
  data() {
    return {
      techStack: [
        { name: "HTML", icon: "Html.svg", percentage: 98 },
        { name: "CSS", icon: "Css.svg", percentage: 90 },
        { name: "JavaScript", icon: "Javascript.svg", percentage: 85 },
        { name: "PHP", icon: "Php.svg", percentage: 75 },
        { name: "Figma", icon: "Figma.svg", percentage: 85 },
        { name: "Photoshop", icon: "Photoshop.svg", percentage: 80 },
        { name: "PostgreSQL", icon: "Vector.svg", percentage: 70 },
        { name: "Cisco", icon: "Cisco.svg", percentage: 65 },
      ],
      interests: [
        { id: 1, name: "Photography", icon: "bi-camera" },
        { id: 2, name: "Playing Instruments", icon: "bi-music-note" },
        { id: 3, name: "Drawing", icon: "bi-brush" },
        { id: 4, name: "Coding", icon: "bi-code-slash" },
      ],
    };
  },
  mounted() {
    this.loadTypedJS();
  },
  methods: {
    async loadTypedJS() {
      if (!window.Typed) {
        await this.loadScript("/assets/vendor/typed.js/typed.umd.js");
      }

      if (window.Typed && this.$refs.aboutTypedElement) {
        new window.Typed(this.$refs.aboutTypedElement, {
          strings: [
            "BRIAN INGUITO",
            "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
          ],
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
  },
};
</script>
