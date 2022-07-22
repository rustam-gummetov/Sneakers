import type { Product } from "@/types/product";
import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [] as Product[],
    product: null,
    productsInSpecificCategory: [],
  }),

  getters: {},

  actions: {
    async fetchProducts() {
      this.products = [];
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        this.products = data;
      } catch {
        this.products = [];
      }
    },

    async fetchProduct(id: number) {
      this.product = null;
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        this.product = data;
      } catch {
        this.product = null;
      }
    },

    async fetchProductsInSpecificCategory(category: string) {
      this.productsInSpecificCategory = [];
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );

        this.productsInSpecificCategory = data;
      } catch {
        this.productsInSpecificCategory = [];
      }
    },
  },
});
