<script lang="ts">
import Slider from "@vueform/slider";
export default {
  components: {
    Slider,
  },
  data() {
    return {
      price: [0, 100],
      rating: [0.0, 5.0],
    };
  },
};
</script>

<template>
  <div class="filter">
    <div class="filter__price">
      <div class="filter__title">Price pange</div>
      <Slider v-model="price" :lazy="false" :tooltips="false" class="slider" />
      <div class="filter__ranges">
        <div class="filter__from">{{ price[0] }},000RWF</div>
        <div class="filter__to">{{ price[1] }},000RWF</div>
      </div>
    </div>
    <div class="filter__rating">
      <div class="filter__title">Rating</div>
      <Slider
        v-model="rating"
        :lazy="false"
        :tooltips="false"
        :step="0.1"
        :min="0.0"
        :max="5.0"
        class="slider"
      />
      <div class="filter__ranges">
        <div class="filter__from">{{ rating[0] }}</div>
        <div class="filter__to">{{ rating[1] }}</div>
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
