<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeaderView from "./components/HeaderView.vue";
import FilterView from "./components/FilterView.vue";
import MainView from "./components/MainView.vue";

// export default {
//   components: {
//     HeaderView,
//   },
// };
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->

  <HeaderView />

  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
