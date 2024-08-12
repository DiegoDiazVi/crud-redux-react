import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

const persistandStateMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("redux_state", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: { user: usersReducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistandStateMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
