import { ReduxStore } from '../../types';

export const selectProducts = (state: ReduxStore) =>
  state.productReducer.products;

export const selectNews = (state: ReduxStore) => state.productReducer.news;

export const selectCategories = (state: ReduxStore) =>
  state.productReducer.categories;
