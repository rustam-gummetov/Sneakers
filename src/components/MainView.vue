<script setup lang="ts">
import ProductView from "./ProductView.vue";
import Details from "@/components/Details.vue";
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/categories";
import { ref, watch } from "vue";
import type { Product } from "@/types/product";
import Loader from "./Loader.vue";

const route = useRoute();
const store = useCategoryStore();
const { category } = storeToRefs(store);
const productStore = useProductStore();
const { fetchProductsInSpecificCategory } = productStore;
const { productsInSpecificCategory, isLoad } = storeToRefs(productStore);
const chosen = ref({} as Product);
const isOpen = ref(false);

watch([route], () => {
  fetchProductsInSpecificCategory(category.value);
});

const body = document.querySelector("body");

function handleProduct(product: Product) {
  chosen.value = product;
  isOpen.value = true;
  body?.scrollIntoView();
  document.body.style.overflow = "hidden";
}

body?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (
    target?.classList[0] === "details" ||
    target?.classList[0] === "details__btn"
  ) {
    isOpen.value = false;
    document.body.style.overflow = "scroll";
  }
});
</script>

<template>
  <div class="main">
    <teleport v-if="isLoad" to="body">
      <Loader />
    </teleport>
    <h1 class="main__title">
      {{ category.charAt(0).toUpperCase() + category.slice(1) }}
    </h1>
    <div class="main__products">
      <ProductView
        v-for="product in productsInSpecificCategory"
        :product="product"
        :key="product.id"
        @click="handleProduct(product)"
      />
    </div>
    <teleport v-if="isOpen" to="body">
      <Details :id="chosen.id" :key="chosen.id" />
    </teleport>
  </div>
</template>

<style scoped>
.main {
  padding-bottom: 100px;
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
  min-height: 500px;
}
</style>
