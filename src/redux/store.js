import { configureStore } from "@reduxjs/toolkit";
import BurgerBuilderSlice from "./slices/burgerBuilderSlice";
import authSlice from "./slices/authSlice";
import orderDeliveryDetalis from "./slices/orderDerliveryDetails";
import orderSlice from "./slices/orderSlice";
export const store = configureStore({
  reducer: {
    BurgerBuilderSlice: BurgerBuilderSlice,
    authSlice: authSlice,
    orderDeliveryDetalis: orderDeliveryDetalis,
    orderSlice: orderSlice,
  },
});
