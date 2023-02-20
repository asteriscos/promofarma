import { Product, CartAction } from '../../types/types'
import { ADD_TO_CART, REMOVE_FROM_CART } from './cart-action-types'


//AddToCart Action
export const addToCart = (product: Product): CartAction => {
  return {
    type: ADD_TO_CART,
    product
  }
}
//Remove item action
export const removeFromCart = (product: Product): CartAction => {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}