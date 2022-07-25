import type { Product } from "@/types/product";
import type { ProductOrder } from "@/types/product";
import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    products: [] as ProductOrder[],
  }),

  getters: {},
  actions: {
    addProductToCart(product: Product, count: number) {
      const p = this.products.find((el) => el.product.id === product.id);
      if (p) {
        this.changeCount(product, p.count + count);
      } else {
        const newProduct = { product, count };
        this.products.push(newProduct);
      }
    },

    changeCount(product: Product, count: number) {
      this.products
        .filter((el) => el.product.id === product.id)
        .map((product) => {
          product.count = count;
        });
    },

    clearStore() {
      this.products = [] as ProductOrder[];
    },
  },
});
