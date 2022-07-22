// import { useProductStore } from "@/stores/products";
// import type { Product } from "@/types/product";
// import axios from "axios";
// import { storeToRefs } from "pinia";
// const productStore = useProductStore();
// const { load } = storeToRefs(productStore);

// export async function getProductById(id: number) {
//   try {
//     const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
//     return data;
//   } catch (e: any) {
//     console.error(e.message);
//   } finally {
//     load.value = false;
//   }
// }
