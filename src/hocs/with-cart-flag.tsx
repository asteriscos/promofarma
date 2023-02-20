import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CartStore } from '../types/types';

export default (WrappedComponent: FC<any>) => {

  const Component = ({ product, ...props }: any) => {
    const isInCart = useSelector((cartStore: CartStore) => cartStore.cartItems.some((item) => item.id === product.id));
    return <WrappedComponent isInCart={isInCart} product={product} {...props} />
  }

  return Component;
}
