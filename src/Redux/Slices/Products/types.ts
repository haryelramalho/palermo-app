import { Product } from '../../../Service/Api/ProductsApi/types';

export type InitialStateProductSlice = {
  products: Product[] | null;
  news: Product[] | null;
  categories: string[] | null;
  fetching: boolean | null;
};
