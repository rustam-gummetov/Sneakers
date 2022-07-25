<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import type { Product } from "@/types/product";
import { useProductStore } from "@/stores/products";
import Loader from "./Loader.vue";

const props = defineProps<{
  id: number;
}>();

const productStore = useProductStore();
const { isLoad } = storeToRefs(productStore);
const { getProductById } = useProductStore();

const product = ref<Product>({} as Product);
onMounted(async () => {
  product.value = await getProductById(props.id);
});

const { addProductToCart } = useCartStore();
const counter = ref(1);

const handleEditMinus = () => {
  if (counter.value > 1) {
    counter.value--;
  }
};

const handleEditPlus = () => {
  counter.value++;
};

const addToCart = (product: Product) => {
  addProductToCart(product, counter.value);
  document.body.style.overflow = "scroll";
};
</script>

<template>
  <div class="details" id="details">
    <div class="details__content">
      <div class="details__loading" v-if="!isLoad">
        <div class="details__view">
          <div class="details__head">
            <span class="details__title">{{ product?.title }}</span>
            <div class="details__like">
              <img src="@/assets/icons/heart.svg" alt="like" />
            </div>
          </div>
          <span class="details__price">{{ product?.price }}RWF</span>
          <div class="details__picture">
            <img
              :src="product?.image"
              :alt="product?.title"
              width="350"
              height="350"
              style="object-fit: scale-down"
            />
          </div>
        </div>
        <div class="details__add">
          <div class="details__topBlock">
            <div class="details__head">
              <span class="details__description">Description</span>
              <div class="details__arrowUP">
                <img src="@/assets/icons/arrowUp.svg" alt="aroowUP" />
              </div>
            </div>
            <div class="details__text">
              {{ product?.description }}
            </div>
          </div>
          <div class="details__addToCard">
            <button class="details__edit" @click="handleEditMinus()">-</button>
            <span class="details__count">{{ counter }}</span>
            <button class="details__edit" @click="handleEditPlus()">+</button>
            <button class="details__btn" @click="product && addToCart(product)">
              Add to cart
            </button>
            <teleport v-if="isLoad" to="details__content">
              <Loader />
            </teleport>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
}

.details__content {
  position: absolute;
  display: flex;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
}

.details__loading {
  display: flex;
}

.details__view {
  padding-left: 65px;
  padding-right: 65px;
  width: 100%;
}

.details__head {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.details__title {
  margin-top: 95px;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: #000000;
}

.details__like {
  margin-top: 95px;
  padding: 10px;
}

.details__price {
  margin-top: 25px;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.65);
}

.details__picture {
  margin-top: 25px;
  text-align: center;
}

.details__add {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 65px 150px 65px;
  width: 500px;
  right: 0;
}

.details__description {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.details__text {
  margin-top: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);
}

.details__edit {
  width: 50px;
  height: 50px;
  font-size: 25px;
  border: 0;
  background: #ffffff;
}

.details__count {
  width: 50px;
  height: 50px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.details__addToCard {
  display: flex;
}

.details__btn {
  width: 135px;
  height: 50px;
  padding: 10px auto;
  margin-left: 35px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: #d90429;
  border: 0;
}
</style>
