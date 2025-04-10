import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/adminSlice";
import userReducer from "./features/userSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
