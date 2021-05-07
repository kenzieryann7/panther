<template>
  <div id="app">
    <BaseHeader />
    <div class="row">
      <div class="col"></div>

      <div class="col-10 contentBackdrop p-0 rounded shadow shadow-lg">
        <router-view />
      </div>

      <div class="col"></div>
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
    background-color: rgb(148, 148, 148);
    height: 100vw;
}
</style>
