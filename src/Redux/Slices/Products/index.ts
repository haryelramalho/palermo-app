/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import Api from '../../../Service/Api';
import { Product } from '../../../Service/Api/ProductsApi/types';
import { InitialStateProductSlice } from './types';

const initialState = {
  products: null,
  news: null,
  fetching: null,
  categories: null,
} as InitialStateProductSlice;

const productApi = Api.product;

export const getProducts = createAsyncThunk(
  '@Product/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productApi.getProducts();

      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ?? 'An error has ocurred',
      );
    }
  },
);

export const getProductsByCategory = createAsyncThunk(
  '@Product/getProductsByCategory',
  async (category: string, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductsByCategory(category);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ?? 'An error has ocurred',
      );
    }
  },
);

export const getCategories = createAsyncThunk(
  '@Product/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await productApi.getCategories();

      const categories = ['ultimas', ...response.data];

      return categories;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data?.message ?? 'An error has ocurred',
      );
    }
  },
);

const productSlice = createSlice({
  name: '@Product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, draft => {
        draft.fetching = true;
      })
      .addCase(
        getProducts.fulfilled,
        (draft, action: PayloadAction<Product[]>) => {
          draft.fetching = false;
          draft.products = action.payload.splice(4);
          draft.news = action.payload.splice(0, 4);
        },
      )
      .addCase(getProducts.rejected, draft => {
        draft.fetching = false;
      });

    builder
      .addCase(getProductsByCategory.pending, draft => {
        draft.fetching = true;
      })
      .addCase(
        getProductsByCategory.fulfilled,
        (draft, action: PayloadAction<Product[]>) => {
          draft.fetching = false;
          draft.products = action.payload.splice(4);
          draft.news = action.payload.splice(0, 4);
        },
      )
      .addCase(getProductsByCategory.rejected, draft => {
        draft.fetching = false;
      });

    builder
      .addCase(getCategories.pending, draft => {
        draft.fetching = true;
      })
      .addCase(
        getCategories.fulfilled,
        (draft, action: PayloadAction<string[]>) => {
          draft.fetching = false;
          draft.categories = action.payload;
        },
      )
      .addCase(getCategories.rejected, draft => {
        draft.fetching = false;
      });
  },
});

export default productSlice.reducer;
