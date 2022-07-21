<script setup lang="ts">
import FilterView from "@/components/FilterView.vue";
import MainView from "@/components/MainView.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main class="page">
    <FilterView />
    <div class="page__content">
      <MainView />
      <Footer />
    </div>
  </main>
</template>

<style scoped>
.page {
  display: flex;
}

.page__content {
  padding-right: 60px;
  width: 100%;
  height: 100vh;
}
</style>
