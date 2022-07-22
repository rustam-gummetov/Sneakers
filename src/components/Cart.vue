<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import ProductCart from "./ProductCart.vue";

const store = useCartStore();
const { products } = storeToRefs(store);
const { clearStore } = useCartStore();

const caclulateTotalPrice = () => {
  const sum = products.value.reduce(
    (sum, el) => el.product.price * el.count + sum,
    0
  );
  return sum;
};
</script>

<template>
  <main class="main">
    <div class="main__cart">
      <h1 class="main__title">Your shopping cart</h1>
      <div class="main__products">
        <ProductCart
          v-for="product in products"
          :product="product"
          :key="product.id"
        />
      </div>
    </div>
    <div class="main__order">
      <span class="order__title">Order summary</span>
      <div class="order__price">
        <div class="main__price">
          <span class="total__title">Sub total</span>
          <span class="total__price">{{ caclulateTotalPrice() }}RWF</span>
        </div>
        <div class="main__devilery">
          <span class="delivery__title">Delivery fee</span>
          <span class="delivery__sum">0RWF</span>
        </div>
      </div>
      <span class="main__total">{{ caclulateTotalPrice() }}RWF</span>
      <router-link :to="`/`">
        <button class="main__btn" @click="clearStore()">
          Proceed to checkout
        </button>
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 600px;
  padding: 30px 65px;
}

.main__cart {
  width: 1400px;
  height: 500px;
}

.main__title {
  text-align: left;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
}

.main__products {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.main__order {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-left: 70px;
}

.order__title {
  text-align: left;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.75);
}

.order__price {
  padding: 20px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.main__price {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

.total__title {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);
}

.total__price {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 30px;
  color: #000000;
}

.main__devilery {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.delivery__title {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);
}

.delivery__sum {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 30px;
  color: #000000;
}

.main__total {
  text-align: right;
  margin-right: 35px;
  margin-top: 25px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.main__btn {
  width: 220px;
  height: 45px;
  padding: 10px auto;
  margin-top: 65px;
  margin-left: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #d90429;
  border: 0;
}
</style>
