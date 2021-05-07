<template>
  <div id="app">
    <BaseHeader />
    <div class="row">
      <div class="col-2"></div>

      <div class="col-8 contentBackdrop p-0 rounded shadow shadow-lg">
        <router-view />
      </div>

      <div class="col-2"></div>
    </div>

  </div>
</template>


<style>
body {
  padding: 0;
  font-family: 'Open Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.contentBackdrop {
    background-color: whitesmoke;
    height: 100vw;
}
</style>
