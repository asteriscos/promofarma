import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';
import { Icon } from '../components/icon/icon';

export default (WrappedComponent: FC<any>) => {

  const Component = ({ isInCart, product, ...props }: any) => {
    const dispatch = useDispatch();

    return <div className='with-button-wrapper'>
      <WrappedComponent isInCart={isInCart} product={product} {...props} />
      <button title="Agregar al carrito" className='icon-button' disabled={isInCart} onClick={() => dispatch(addToCart(product))}>
        <Icon color='#fff'/>
      </button>
    </div>
  }

  return Component;
}
