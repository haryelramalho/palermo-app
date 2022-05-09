import axios from 'axios';
import axiosRetry from 'axios-retry';

import AppConfig from '../../Config/AppConfig';
import ProductsApi from './ProductsApi';

const axiosClient = axios.create({
  baseURL: AppConfig.API_BASE,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
  },
});

axiosRetry(axiosClient, {
  retries: 4,
  retryDelay: axiosRetry.exponentialDelay,
});

export default {
  product: ProductsApi.createProductInstanceApi(axiosClient),
};
