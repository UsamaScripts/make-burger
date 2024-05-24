import { configureStore } from "@reduxjs/toolkit";
import BurgerBuilderSlice from "./slices/burgerBuilderSlice";
import authSlice from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    BurgerBuilderSlice: BurgerBuilderSlice,
    authSlice: authSlice,
  },
});
