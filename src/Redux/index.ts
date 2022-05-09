import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import ReduxPersistConfig from '../Config/ReduxPersist';
import productReducer from './Slices/Products';
import cartReducer from './Slices/Cart';

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

const persistedReducer = persistReducer(ReduxPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
