<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-brand d-none d-sm-block">
        <BrandSVG />
      </div>

      <div
        class="pr-3 mr-3 pl-3 border-left border-secondary d-none d-sm-block text-light"
      >
        <h1 class="h5 m-0 p-0 text-uppercase font-weight-bold">
          <span class="title-course">{{ title }}</span
          >{{ subtitle }}
        </h1>
      </div>

      <div class="border-secondary d-block d-sm-none text-light">
        <div class="h5 m-0 p-0 text-uppercase font-weight-bold">
          <span class="title-course">xx{{ title }}</span
          >{{ subtitle }}
        </div>
      </div>
      <!-- Below is where it populates the nav links -->
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li v-for="link in links" :key="link.label">
            <router-link
              class="nav-link text-white"
              :to="{ name: link.name }"
              >{{ link.label }}</router-link
            >
          </li>
          <div role="separator" class="dropdown-divider"></div>

          <div v-if="isAdmin">
            <li class="nav-item">
              <a class="nav-link d-block d-sm-none" href="admin.html">Admin</a>
            </li>
            <div role="separator" class="dropdown-divider"></div>
          </div>
          <!-- isAdmin -->

          <li class="nav-item">
            <a
              class="nav-link d-block d-sm-none"
              target="_blank"
              href="https://main.oregonstate.edu/digital-millennium-copyright-act-contact-information"
              >Copyright</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link d-block d-sm-none"
              target="_blank"
              href="https://oregonstate.edu/official-web-disclaimer"
              >Disclaimer</a
            >
          </li>

          <div role="separator" class="dropdown-divider"></div>

          <li class="nav-item">
            <span class="nav-link d-block d-sm-none"
              >&copy; 2020 - Oregon State University</span
            >
          </li>
        </ul>

        <ul class="nav nav-pills extra-menu d-none d-sm-block">
          <li class="nav-item dropdown dropleft">
            <a
              class="nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <DotsSVG />
            </a>
            <div class="dropdown-menu">
              <div v-if="isAdmin">
                <a class="dropdown-item" href="admin.html">Admin</a>
                <div role="separator" class="dropdown-divider"></div>
              </div>
              <a
                class="dropdown-item"
                target="_blank"
                href="https://main.oregonstate.edu/digital-millennium-copyright-act-contact-information"
                >Copyright</a
              >
              <a
                class="dropdown-item"
                target="_blank"
                href="https://oregonstate.edu/official-web-disclaimer"
                >Disclaimer</a
              >
              <div role="separator" class="dropdown-divider"></div>
              <small
                ><span class="dropdown-item">
                  &copy; 2020 - Oregon State University</span
                ></small
              >
            </div>
          </li>
        </ul>
      </div>

      <!-- isEmbed -->
      <div v-if="isEmbed">
        <button class="btn js-window float-right">
          <EmbeddedSVG />
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { NavData } from '@/data/NavData.js';
import BrandSVG from '@/assets/brand.svg';
import DotsSVG from '@/assets/dots.svg';
import EmbeddedSVG from '@/assets/embedded.svg';

export default {
  name: 'BaseHead',
  components: {
    BrandSVG,
    DotsSVG,
    EmbeddedSVG
  },
  data: function() {
    return {
      title: process.env.VUE_APP_TITLE,
      subtitle: process.env.VUE_APP_SUBTITLE,
      api: process.env.VUE_APP_API_URL,
      links: NavData
    };
  },
  computed: {
    isEmbed() {
      return false;
    },
    ...mapGetters(['isAdmin']),
    ...mapState(['auth'])
  }
};
</script>

<style scoped>
.title-course {
  font-size: 0.6em;
  position: absolute;
  top: 7px;
  padding-left: 1px;
}
</style>
