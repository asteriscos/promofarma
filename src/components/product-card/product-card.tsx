import React from 'react';
import { Product } from '../../types/types';
import './product-card.scss'

interface ProductCardProps {
  product: Product
  isInCart?: boolean
  withImage?: boolean
}

function ProductCard({ product, isInCart, withImage }: ProductCardProps) {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  return (
    <div className='card-wrapper'>
      {withImage && <div className='image-container'><img src={`./images/${product.id}.jpg`} alt={product.name} /></div>}

      <h3>{product.name}</h3>
      <div className='price font-size-heavy' data-in-cart={!!isInCart}>{product.price.toLocaleString('es', options)} €</div>
    </div>
  )
}

export default ProductCard;