import type { Product } from "@/types/product";
import axios from "axios";

export async function getProductById(id: number) {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (e: any) {
    console.error(e.message);
  }
}
