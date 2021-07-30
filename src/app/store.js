import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { tvmazeApi } from './services/tvmaze';
import searchReducer from './features/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [tvmazeApi.reducerPath]: tvmazeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tvmazeApi.middleware),
});

setupListeners(store.dispatch)
