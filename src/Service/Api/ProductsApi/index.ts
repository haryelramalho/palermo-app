import { AxiosInstance } from 'axios';

import { ENDPOINTS } from '../../../Config/Endpoints';
import { Product } from './types';

const createProductInstanceApi = (instance: AxiosInstance) => {
  const getProducts = () =>
    instance.get<Product[]>(ENDPOINTS.PRODUCTS.getProducts);

  const getProductsByCategory = (category: string) =>
    instance.get<Product[]>(
      `${ENDPOINTS.PRODUCTS.getProductsByCategory}/${category}`,
    );

  const getCategories = () =>
    instance.get<string[]>(ENDPOINTS.PRODUCTS.getCategories);

  return {
    getProducts,
    getCategories,
    getProductsByCategory,
  };
};

export default {
  createProductInstanceApi,
};
