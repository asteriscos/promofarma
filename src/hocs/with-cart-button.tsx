import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store';
import { Icon } from '../components/icon/icon';

export default (WrappedComponent: FC<any>) => {

  const Component = ({ isInCart, product, ...props }: any) => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
      isInCart ? dispatch(removeFromCart(product)) : dispatch(addToCart(product))
    }, [isInCart])
    return <div className='with-button-wrapper'>
      <WrappedComponent isInCart={isInCart} product={product} {...props} />
      <button title="Agregar al carrito" className='icon-button' data-incart={isInCart} onClick={handleClick}>
        <Icon color='#fff' />
      </button>
    </div>
  }

  return Component;
}
