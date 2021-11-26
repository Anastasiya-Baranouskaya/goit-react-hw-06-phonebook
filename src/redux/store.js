// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { productReducer } from './contacts/reducers';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistore = persistStore(store);

// export const store = createStore(productReducer, composeWithDevTools());
// export const store = configureStore({
//   reducer: productReducer,
// });
