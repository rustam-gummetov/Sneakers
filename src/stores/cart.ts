import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        products: [],
    }),

    getters: {},
    actions: {
        addProductToCart(product: object, count: number) {
            const newProduct = {
                product: product,
                count: count,
            }
            this.products.push(newProduct);
            console.log(this.products);
        },

        changeCount(product: object, count: number) {
            this.products.filter((el) => el.product.id === product.id).map((product) => { product.count = count });
        }
    },
});
