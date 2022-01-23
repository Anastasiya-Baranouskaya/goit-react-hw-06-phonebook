// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { productReducer } from './contacts/reducers';

import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistore = persistStore(store);

// export const store = createStore(productReducer, composeWithDevTools());
// export const store = configureStore({
//   reducer: productReducer,
// });
