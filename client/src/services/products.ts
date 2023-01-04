import axios from "axios";
import { Product } from "../model/Product";

const SERVER_URL = `https://king-prawn-app-zovdf.ondigitalocean.app/products`;

export const allProducts: Array<Product> = [];

export async function getAllProduct() {
  axios.get(`${SERVER_URL}/products`).then((res) => {
    if (!res || res.status !== 200) return;
    const { products } = res.data;

    products.forEach((product: Product) => {
      allProducts.push(product);
    });
  });
}
