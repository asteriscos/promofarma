import axios from 'axios';
import { Product } from '../types/types';

export default class ProductHandler {

  /**
   * Make request to get the products
   * @returns 
   */
  static async getProducts() {
    let products: Product[] = [];
    try {
      const { data } = await axios.get<Product[]>('./products.json');
      await new Promise((resolve)=>setTimeout(resolve, 1000));
      products = data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }
    } finally {
      return products;
    }
  }

}
