<script lang="ts" setup>
defineProps({
  product: Object,
});
</script>

<template>
  <div class="product">
    <img :src="product?.image" alt="picture" width="310" height="310" />
    <div class="product__name">{{ product?.title }}</div>
    <div class="product__cost">{{ product?.price }},000RWF</div>
  </div>
</template>

<style>
.product {
  padding: 20px;
  width: 33.33%;
  height: 350px;
  margin-top: 30px;
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
