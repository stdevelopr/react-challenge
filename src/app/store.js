import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { tvmazeApi } from './services/tvmaze';

export const store = configureStore({
  reducer: {
    [tvmazeApi.reducerPath]: tvmazeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tvmazeApi.middleware),
});

setupListeners(store.dispatch)
