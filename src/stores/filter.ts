import { defineStore } from "pinia";

export const useFilterStore = defineStore({
    id: "filter",
    state: () => ({
        priceFrom: 0,
        priceTo: 1000,
        ratingFrom: 0.0,
        ratingTo: 5.0,
    }),

    getters: {},
    actions: {
        setPriceRange(priceFrom: number, priceTo: number) {
            this.priceFrom = priceFrom;
            this.priceTo = priceTo;
        },

        setRatingRange(ratingFrom: number, ratingTo: number) {
            this.ratingFrom = ratingFrom;
            this.ratingTo = ratingTo;
        }
    },
});
