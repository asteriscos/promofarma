import React from 'react';
import { useProducts } from '../../hooks/use-products';
import { Product } from '../../types/types';
import ProductCard from '../product-card/product-card';
import Loading from '../loading/loading';
import withCartButton from '../../hocs/with-cart-button';
import withCartFlag from '../../hocs/with-cart-flag';
import './product-list.scss'


export default function ProductList() {
  const [products, loading] = useProducts();
  const ProductCardWithButton = withCartFlag(withCartButton(ProductCard));

  return (
    <div className='product-list'>
      {
        loading ? (
          <Loading />
        ) : (
          <ul data-testid='product-list'>
            {
              products.map((product: Product, key: number) => (
                <li key={key}><ProductCardWithButton product={product} /></li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}
