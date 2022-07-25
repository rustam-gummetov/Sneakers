import type { Product } from "@/types/product";
import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    isLoad: false,
    products: [],
    product: null,
    productsInSpecificCategory: [] as Product[],
  }),

  actions: {
    async fetchProductsInSpecificCategory(category: string) {
      this.productsInSpecificCategory = [];
      this.isLoad = true;
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        this.productsInSpecificCategory = data;
      } catch (e) {
        console.warn(e);
      } finally {
        this.isLoad = false;
      }
    },

    async getProductById(id: number) {
      this.isLoad = true;
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        return data;
      } catch (e: any) {
        console.error(e.message);
      } finally {
        this.isLoad = false;
      }
    },
  },
});
