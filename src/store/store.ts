import { cartReducer } from './';
import { CartStore, CartAction, DispatchType } from '../types/types';
import { createStore, Store } from 'redux';

const store: Store<CartStore, CartAction> & {
  dispatch: DispatchType
} = createStore(cartReducer)

export default store;