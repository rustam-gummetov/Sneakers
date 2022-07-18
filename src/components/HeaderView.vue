<script setup lang="ts">
import { useCategoryStore } from "@/stores/categories";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import MainView from "@/components/MainView.vue";
import { useRoute } from "vue-router";
import router from "@/router";

const { fetchCategories } = useCategoryStore();
const { categories } = storeToRefs(useCategoryStore());
onMounted(() => fetchCategories());

const route = useRoute();

const store = useCategoryStore();
const { category } = storeToRefs(store);
const { setCategory } = store;

const handleClick = (category: string) => {
  setCategory(category);
};

const isActive = (category: string) => route.query.category === category;
</script>

<template>
  <header class="header">
    <router-link :to="`/`" :class="['header__logo']">
      <img src="@/assets/icons/logo.svg" alt="logo" width="32" height="32" />
      <div class="header__text">SC.</div>
    </router-link>
    <nav class="nav header__nav">
      <ul>
        <router-link
          v-for="category in categories"
          :to="`/products?category=${category}`"
          :key="category"
          :class="['header__item', { active: isActive(category) }]"
          @click="handleClick(category)"
          >{{
            category.charAt(0).toUpperCase() + category.slice(1)
          }}</router-link
        >
      </ul>
    </nav>

    <div class="header__icons">
      <div class="header__icon">
        <img
          src="@/assets/icons/basket.svg"
          alt="basket"
          width="20"
          height="20"
        />
      </div>
      <div class="header__icon">
        <img
          src="@/assets/icons/heart.svg"
          alt="basket"
          width="20"
          height="20"
        />
      </div>
      <div class="header__icon">
        <img
          src="@/assets/icons/user.svg"
          alt="basket"
          width="20"
          height="20"
        />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.header__logo {
  display: flex;
  margin-left: 65px;
  align-self: center;
  text-decoration: none;
}

.header__text {
  margin-left: 8px;
  font-family: "Google Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
}

.nav {
  display: flex;
}

.nav ul {
  display: flex;
  padding-left: 0;
  align-self: center;
  margin: 0 -15px;
}

.header__item {
  text-decoration: none;
  margin: 0 15px;
  list-style-type: none;
  font-family: "Google Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  cursor: pointer;
  &.active {
    border-bottom: 1px solid #000;
  }
}

.underline {
  border-bottom: 2px solid #000000;
}

.header__icons {
  display: flex;
  align-self: center;
  margin: 0 50px 0 -15px;
}

.header__icon {
  width: 20px;
  height: 20px;
  margin: 0 15px;
}
</style>
