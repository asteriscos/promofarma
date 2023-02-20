import React from 'react';
import { ReactComponent as addToCart } from '../../assets/icons/add-to-cart.svg';

interface IconProps {
  color?: string,
  className?: string
}

export const Icon = ({ className = '', color = '' }: IconProps) => {
  
  return React.createElement(addToCart, {
    className: `icon ${className}`,
    fill: color
  })
}