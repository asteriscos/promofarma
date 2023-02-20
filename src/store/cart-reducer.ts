import { ADD_TO_CART, REMOVE_FROM_CART } from './actions/cart-action-types'
import { Product, CartStore, CartAction } from '../types/types'

const sessionCart: string | null = sessionStorage.getItem('cartStorage');
const initialState: CartStore = sessionCart ?
  JSON.parse(sessionCart) :
  {
    cartItems: [],
    total: 0
  }

const cartReducer = (state = initialState, action: CartAction): CartStore => {

  if (action.type === ADD_TO_CART) {
    // Simplified addition without taking care of the item stock or if it's repeated
    const newState = {
      cartItems: [...state.cartItems, action.product],
      total: parseFloat((state.total + action.product.price).toFixed(2))
    };
    sessionStorage.setItem('cartStorage', JSON.stringify(newState));
    return newState;
  }

  if (action.type === REMOVE_FROM_CART) {
    // Big O notation O(n)
    // Using reduce prevents filtering the items and then blindly sustracting the price of the item
    const newState = state.cartItems.reduce<CartStore>((reducedState: CartStore, item: Product) => {
      if (item.id !== action.product.id) {
        reducedState.cartItems.push(item);
        reducedState.total += item.price;
      }
      return reducedState;
    }, {
      cartItems: [],
      total: 0
    });

    sessionStorage.setItem('cartStorage', JSON.stringify(newState));
    return newState;
  }

  return state;
}

export default cartReducer;