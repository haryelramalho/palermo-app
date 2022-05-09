import { Product } from '../../../Service/Api/ProductsApi/types';

export type InitialStateCartSlice = {
  cart: Cart;
};

type Cart = {
  products: Product[];
  total: number;
  totalItems: number;
};
