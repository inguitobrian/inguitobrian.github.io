<template>
  <section id="contacts" class="contact-section">
    <div class="container">
      <h2 class="text-center mb-4">Contact Me</h2>
      <div class="row">
        <div class="col-md-6">
          <div
            v-for="contact in contactMethods"
            :key="contact.id"
            class="contact-item"
          >
            <i :class="`bi ${contact.icon}`"></i>
            <a :href="contact.link" :target="contact.target">{{
              contact.label
            }}</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-cta">
            <h3>DM for Commission!</h3>
            <a
              href="https://www.instagram.com/yangoghh?igsh=cTgxZDh0cnEyZGVm"
              target="_blank"
            >
              <i class="bi bi-instagram"></i>@yangoghh
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      contactMethods: [
        {
          id: 1,
          icon: "bi-linkedin",
          label: "LinkedIn Profile",
          link: "https://www.linkedin.com/in/brian-inguito-449b3b282/",
          target: "_blank",
        },
        {
          id: 2,
          icon: "bi-envelope",
          label: "inguitobrian6@gmail.com",
          link: "mailto:inguitobrian6@gmail.com",
          target: "_self",
        },
        {
          id: 3,
          icon: "bi-telephone",
          label: "+9203919743",
          link: "tel:+9203919743",
          target: "_self",
        },
      ],
    };
  },
};
</script>
