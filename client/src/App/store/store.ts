import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import { postApi } from "../api/postApi";
import { authApi } from "../api/authApi";
import authReducer from "../feature/authSlice";
import searchReducer from "../feature/searchSlice";
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
import localStorage from "redux-persist/es/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
  [postApi.reducerPath]: postApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: "root",
  whitelist: ["auth", "user"],
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([postApi.middleware, authApi.middleware]),
});

export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
