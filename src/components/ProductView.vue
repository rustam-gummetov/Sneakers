<script lang="ts" setup>
import { useFilterStore } from "@/stores/filter";
import { storeToRefs } from "pinia";

defineProps({
  product: Object,
});

const store = useFilterStore();
const { priceFrom } = storeToRefs(store);
const { priceTo } = storeToRefs(store);
const { ratingFrom } = storeToRefs(store);
const { ratingTo } = storeToRefs(store);
</script>

<template>
  <div
    class="product"
    v-if="
      product?.price >= priceFrom &&
      product?.price <= priceTo &&
      product?.rating.rate >= ratingFrom &&
      product?.rating.rate <= ratingTo
    "
  >
    <img :src="product?.image" alt="picture" width="310" height="310" />
    <div class="product__name">{{ product?.title }}</div>
    <div class="product__cost">{{ product?.price }}RWF</div>
  </div>
</template>

<style>
.product {
  padding: 20px;
  width: 33.33%;
  height: 350px;
  margin-top: 40px;
  margin-bottom: 30px;
}

.product__name {
  text-align: left;
  margin-top: 20px;
}

.product__cost {
  text-align: left;
}
</style>
