import { useEffect, useState } from "react";
import { Product } from "../types/types";
import { ProductHandler } from "../services";

/**
 * Gets available products 
 * @returns Products
 */
export const useProducts = (): [Product[], boolean] => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    const products = await ProductHandler.getProducts();
    setProducts(products);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return [products, loading];
}