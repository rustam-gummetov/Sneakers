<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import type { Product } from "@/types/product";

const { changeCount } = useCartStore();

defineProps({
  product: Object,
});

const handleEditMinus = (product: Product, count: number) => {
  if (count > 1) {
    changeCount(product, count - 1);
  }
};

const handleEditPlus = (product: Product, count: number) => {
  changeCount(product, count + 1);
};
</script>

<template>
  <div class="product">
    <div class="picture">
      <img
        :src="product?.product.image"
        :alt="product?.product.title"
        width="70"
        height="70"
        style="object-fit: scale-down"
      />
    </div>
    <div class="product__info">
      <div class="product__title">{{ product?.product.title }}</div>
      <div class="product__price">{{ product?.product.price }}RWF</div>
    </div>
    <div class="product__rightBloc">
      <div class="product__counter">
        <button
          class="product__edit"
          @click="handleEditMinus(product?.product, product?.count)"
        >
          -
        </button>
        <div class="product__count">{{ product?.count }}</div>
        <button
          class="product__edit"
          @click="handleEditPlus(product?.product, product?.count)"
        >
          +
        </button>
      </div>
      <span class="product__sum">
        {{ product?.product.price * product?.count }}RWF
      </span>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  height: 130px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.04);
}

.picture {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 80px;
  align-self: center;
  background: #ffffff;
  border-radius: 8px;
  margin-right: 30px;
}

.product__info {
  width: 600px;
  align-self: center;
}

.product__title {
  text-align: left;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
}

.product__price {
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);
}

.product__rightBloc {
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin-right: 30px;
}

.product__counter {
  display: flex;
  align-self: center;
}

.product__edit {
  width: 50px;
  height: 50px;
  font-size: 25px;
  border: 0;
  background: transparent;
}

.product__count {
  width: 50px;
  height: 50px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;
}

.product__sum {
  align-self: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
}
</style>
