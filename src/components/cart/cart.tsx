import React, { useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store';
import { CartStore, Product } from '../../types/types';
import ProductCard from '../product-card/product-card';
import './cart.scss';

export default function Cart() {
  const dispatch = useDispatch();
  const removeItem = useCallback((product: Product) => dispatch(removeFromCart(product)), []);
  const cartState: CartStore = useSelector((cartStore: CartStore): CartStore => cartStore, shallowEqual);
  
  return (
    <div className='cart-container'>
      <div className='cart-wrapper'>
        <div className='cart-header'><h3>MI CESTA:</h3></div>
        <ul className='cart-list'>
          {
            cartState.cartItems.map((product: Product, key: number) => (
              <li onClick={() => removeItem(product)} key={key} title="Click para eliminar del carrito">
                <ProductCard product={product} withImage={true} />
              </li>
            ))
          }
        </ul>
        <div className='cart-footer'>
          <p className='font-size-big'>
            <label>TOTAL <span>({cartState.cartItems.length} Productos)</span></label>
            <b>{cartState.total.toLocaleString('es')} €</b>
          </p>
        </div>
      </div>
    </div>
  )
}
