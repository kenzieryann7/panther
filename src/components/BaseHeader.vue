<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
      <img src="@/assets/panther.jpg" alt="Panther Logo" class="img-fluid mr-3" width="80px" height="80px">
      <div
        class="pr-3 mr-3 pl-3 border-left border-secondary d-none d-sm-block text-light"
      >
        <h1 class="h5 m-0 p-0 text-uppercase font-weight-bold">
          <span class="title-course">Panther</span
          >Elder Scrolls Online Wiki
        </h1>
      </div>

      <!-- Below is where it populates the nav links -->
      <div class="collapse navbar-collapse mainNav" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item navText">
            <router-link :to="{ name: 'Home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle navText" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Crafting
          </a>
          <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <router-link :to="{ name: 'Crafting' }" class="dropdown-item text-white"
              >Crafting</router-link>  
            </li>
            <li>
              <router-link :to="{ name: 'CraftedSets' }" class="dropdown-item text-white"
              >Crafted Sets</router-link> 
            </li>
            <li>
              <router-link :to="{ name: 'Alchemy' }" class="dropdown-item text-white"
              >Alchemy</router-link> 
            </li>
            <li>
              <router-link :to="{ name: 'Blacksmithing' }" class="dropdown-item text-white"
              >Blacksmithing</router-link> 
            </li>
            <li>
              <router-link :to="{ name: 'Clothier' }" class="dropdown-item text-white"
              >Clothier</router-link> 
            </li>
            <li>
              <router-link :to="{ name: 'Enchanting' }" class="dropdown-item text-white"
              >Enchanting</router-link> 
            </li>
            <li>
              <router-link :to="{ name: 'Provisioning' }" class="dropdown-item text-white"
              >Provisioning</router-link> 
            </li>
            <li>
              <router-link :to="{ name: 'Jewelcrafting' }" class="dropdown-item text-white"
              >Jewelcrafting</router-link> 
            </li>
          </ul>
        </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'BaseHead',
  components: {},
  data: function() {
    return {
      api: process.env.VUE_APP_API_URL,
      links: Array
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
