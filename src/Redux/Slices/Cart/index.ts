/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../../Service/Api/ProductsApi/types';
import { InitialStateCartSlice } from './types';

const initialState = {
  cart: {
    products: [],
    total: 0,
    totalItems: 0,
  },
} as InitialStateCartSlice;

const ITEM_NOT_FOUND_INDEX = -1;

const cartSlice = createSlice({
  name: '@Cart',
  initialState,
  reducers: {
    addItem: (draft, action: PayloadAction<Product>) => {
      const itemIndex = draft.cart.products.findIndex(
        item => item.id === action.payload.id,
      );

      if (itemIndex !== ITEM_NOT_FOUND_INDEX) {
        draft.cart.products[itemIndex].quantity! += 1;
      } else {
        const product = {
          ...action.payload,
          quantity: 1,
        };

        draft.cart.products.push(product);
      }

      draft.cart.total += action.payload.price;
      draft.cart.totalItems += 1;
    },
    removeItem: (draft, action: PayloadAction<number>) => {
      const itemIndex = draft.cart.products.findIndex(
        item => item.id === action.payload,
      );

      if (itemIndex !== ITEM_NOT_FOUND_INDEX) {
        draft.cart.total -= draft.cart.products[itemIndex].price;
        draft.cart.totalItems -= 1;

        draft.cart.products.splice(itemIndex, 1);
      }
    },
    incrementItemQuantity: (draft, action: PayloadAction<number>) => {
      const itemIndex = draft.cart.products.findIndex(
        item => item.id === action.payload,
      );

      if (itemIndex !== ITEM_NOT_FOUND_INDEX) {
        draft.cart.products[itemIndex].quantity! += 1;
        draft.cart.total += draft.cart.products[itemIndex].price;
        draft.cart.totalItems += 1;
      }
    },
    decrementItemQuantity: (draft, action: PayloadAction<number>) => {
      const itemIndex = draft.cart.products.findIndex(
        item => item.id === action.payload,
      );

      if (itemIndex !== ITEM_NOT_FOUND_INDEX) {
        const item = draft.cart.products[itemIndex];

        if (item.quantity === 1) {
          draft.cart.products.splice(itemIndex, 1);
        } else {
          draft.cart.products[itemIndex].quantity! -= 1;
          draft.cart.total -= draft.cart.products[itemIndex].price;
          draft.cart.totalItems -= 1;
        }
      }
    },
    cleanCart: draft => {
      draft.cart.products = [];
      draft.cart.total = 0;
      draft.cart.totalItems = 0;
    },
  },
});

export const {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  cleanCart,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
