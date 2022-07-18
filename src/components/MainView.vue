<script setup lang="ts">
import ProductView from "./ProductView.vue";
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/categories";
import { watch } from "vue";

const route = useRoute();

const store = useCategoryStore();
const { category } = storeToRefs(store);

const productStore = useProductStore();
const { fetchProductsInSpecificCategory } = productStore;
const { productsInSpecificCategory } = storeToRefs(productStore);

watch([route], () => {
  fetchProductsInSpecificCategory(category.value);
  console.log(productsInSpecificCategory);
});
</script>

<template>
  <main class="main">
    <h1 class="main__title">
      {{ category.charAt(0).toUpperCase() + category.slice(1) }}
    </h1>
    <div class="main__products">
      <ProductView
        v-for="product in productsInSpecificCategory"
        :product="product"
        :key="product.id"
      />
    </div>
  </main>
</template>

<style scoped>
.main {
  padding-bottom: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.main__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-top: 30px;
  color: #000000;
  text-align: left;
}
.main__products {
  display: flex;
  flex-wrap: wrap;
}
</style>
