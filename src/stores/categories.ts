import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    categories: [] as string[],
    category: "",
  }),
  getters: {},
  actions: {
    async fetchCategories() {
      this.categories = [];
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products/categories");
        this.categories = data;
        return this.categories;
      } catch {
        this.categories = [];
      }
    },
    setCategory(category: string) {
      this.category = category;
    },
  },
});
