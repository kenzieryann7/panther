<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <img src="assets/panther.png" class="img-fluid">
      <div
        class="pr-3 mr-3 pl-3 border-left border-secondary d-none d-sm-block text-light"
      >
        <h1 class="h5 m-0 p-0 text-uppercase font-weight-bold">
          <span class="title-course">Panther</span
          >ESO Wiki
        </h1>
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
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { NavData } from '@/data/NavData.js';

export default {
  name: 'BaseHead',
  components: {},
  data: function() {
    return {
      api: process.env.VUE_APP_API_URL,
      links: NavData
    };
  },
  computed: {}
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
