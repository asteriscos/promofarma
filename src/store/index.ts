import cartReducer from './cart-reducer';
import store from './store';
import { REMOVE_FROM_CART, ADD_TO_CART } from './actions/cart-action-types';
import { addToCart, removeFromCart } from './actions/cart-actions';

export {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  addToCart,
  removeFromCart,
  cartReducer,
  store,
}