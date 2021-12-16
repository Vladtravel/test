import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(authPersistConfig, reducers.contacts),
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

const persistore = { store, persistor };
export default persistore;
