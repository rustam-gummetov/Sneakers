<script setup lang="ts">
import Cart from "@/components/Cart.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Cart />
  <Footer />
</template>

<style scoped>
.footer {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 65px;
  padding-top: 70px;
  padding-bottom: 70px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}
</style>
