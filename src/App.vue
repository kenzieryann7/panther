<template>
  <div id="app">
    <BaseHeader />
    <div class="row">
      <div class="col-2">wow</div>

      <div class="col-8">
        <router-view />
      </div>

      <div class="col-2">hi</div>
    </div>

  </div>
</template>


<style>

a.router-link-exact-active {
  /*  color: #42b983 !important; */
}

body {
  padding: 0;
  font-family: 'Open Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
