<script setup lang="ts">
import Slider from "@vueform/slider";
import { useFilterStore } from "@/stores/filter";
import { storeToRefs } from "pinia";

const store = useFilterStore();
const { priceFrom, priceTo, ratingFrom, ratingTo } = storeToRefs(store);
const { setPriceRange, setRatingRange } = store;

const price = [priceFrom.value, priceTo.value];
const rating = [ratingFrom.value, ratingTo.value];

const handlePriceSlider = (value: number[]) => {
  setPriceRange(value[0], value[1]);
};

const handleRatingSlider = (value: number[]) => {
  setRatingRange(value[0], value[1]);
};
</script>

<template>
  <div class="filter">
    <div class="filter__price">
      <span class="filter__title">Price pange</span>
      <Slider
        v-model="price"
        :lazy="false"
        :tooltips="false"
        :min="0"
        :max="1000"
        class="slider"
        @update="handlePriceSlider(price)"
      />
      <div class="filter__ranges">
        <span class="filter__from">{{ priceFrom }}RWF</span>
        <span class="filter__to">{{ priceTo }}RWF</span>
      </div>
    </div>
    <div class="filter__rating">
      <span class="filter__title">Rating</span>
      <Slider
        v-model="rating"
        :lazy="false"
        :tooltips="false"
        :step="0.1"
        :min="0.0"
        :max="5.0"
        class="slider"
        @update="handleRatingSlider(rating)"
      />
      <div class="filter__ranges">
        <span class="filter__from">{{ ratingFrom }}</span>
        <span class="filter__to">{{ ratingTo }}</span>
      </div>
    </div>
  </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
.filter {
  display: flex;
  flex-direction: column;
  width: 400px;

  --slider-height: 2px;
  --slider-handle-width: 18px;
  --slider-handle-height: 18px;
  --slider-handle-bg: rgb(0, 0, 0);
  --slider-connect-bg: #000000;
}

.filter__price {
  width: 300px;
  margin: 30px 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.filter__title {
  text-align: left;
  margin-left: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 25px;
  color: #000000;
}

.filter__ranges {
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  margin-top: 30px;
}

.slider {
  width: 240px;
  align-self: center;
}

.filter__rating {
  width: 300px;
  margin: 30px 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}
</style>
