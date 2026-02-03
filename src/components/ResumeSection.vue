<template>
  <section id="resume" class="resume">
    <div class="container-fluid">
      <div class="container">
        <div class="container section-title" data-aos="fade-up">
          <span class="description-title">My Resume</span>
          <h2>My Resume</h2>
        </div>

        <div class="row mb-5" data-aos="fade-up-right" data-aos-delay="10">
          <div class="col-lg-6">
            <h3 class="resume-title text-center">Certifications</h3>
            <div
              v-for="cert in certifications"
              :key="cert.id"
              class="resume-item"
            >
              <h4>{{ cert.title }}</h4>
              <h5>{{ cert.date }}</h5>
              <p>
                <em>
                  <b>{{ cert.organization }}</b>
                </em>
              </p>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up-right" data-aos-delay="10">
            <h3 class="resume-title text-center">Education</h3>
            <div v-for="edu in education" :key="edu.id" class="resume-item">
              <h4>{{ edu.degree }}</h4>
              <h5>{{ edu.period }}</h5>
              <p>
                <b>{{ edu.institution }}</b>
              </p>
              <p>{{ edu.location }}</p>
            </div>

            <hr />
            <h3 class="resume-title text-center">Affiliation</h3>
            <div
              v-for="affil in affiliations"
              :key="affil.id"
              class="resume-item"
            >
              <h4>{{ affil.organization }}</h4>
              <h5>{{ affil.period }}</h5>
              <p>
                <em>
                  <b>{{ affil.role }}</b>
                </em>
              </p>
              <p>{{ affil.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificate Gallery -->
    <div
      class="container-fluid gallery"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="row gy-4 justify-content-center">
        <div
          v-for="cert in certificateImages"
          :key="cert.id"
          class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
        >
          <div class="gallery-item h-100">
            <img
              :src="`/assets/img/${cert.image}`"
              class="img-fluid"
              :alt="cert.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResumeSection",
  data() {
    return {
      certifications: [
        {
          id: 1,
          title: "SoloLearn Introduction to Javascript",
          date: "August 29, 2024",
          organization: "SoloLearn",
        },
        {
          id: 2,
          title: "SoloLearn Introduction to HTML",
          date: "August 20, 2024",
          organization: "SoloLearn",
        },
        {
          id: 3,
          title: "SoloLearn Introduction to CSS",
          date: "August 20, 2024",
          organization: "SoloLearn",
        },
        {
          id: 4,
          title: "DICT-GD002 Canva for Graphic Design",
          date: "July 05, 2024",
          organization:
            "Department of Information and Communications Technology",
        },
      ],
      education: [
        {
          id: 1,
          degree: "Bachelor of Science in Information Technology",
          period: "On-going",
          institution: "Caraga State University",
          location: "Brgy. Ampayon, Butuan City, Philippines",
        },
      ],
      affiliations: [
        {
          id: 1,
          organization: "CSU Society of Information Technology Students",
          period: "2022-2024",
          role: "Member",
          location: "Brgy. Ampayon, Butuan City, Philippines",
        },
        {
          id: 2,
          organization: "CSU Robotics Enthusiasts Club",
          period: "2022-2023",
          role: "Member",
          location: "Brgy. Ampayon, Butuan City, Philippines",
        },
      ],
      certificateImages: [
        { id: 1, image: "DICT1.png", alt: "DICT Certificate" },
        {
          id: 2,
          image: "Introduction to CSS_certificate.jpg",
          alt: "CSS Certificate",
        },
        {
          id: 3,
          image: "Introduction to HTML_certificate (2).jpg",
          alt: "HTML Certificate",
        },
        {
          id: 4,
          image: "Introduction to JavaScript_certificate.jpg",
          alt: "JavaScript Certificate",
        },
      ],
    };
  },
};
</script>
