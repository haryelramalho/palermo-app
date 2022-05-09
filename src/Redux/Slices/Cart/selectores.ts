import { ReduxStore } from '../../types';

export const selectCart = (state: ReduxStore) => state.cartReducer.cart;
