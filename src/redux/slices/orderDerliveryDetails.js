import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

export const orderDeliveryDetalis = createSlice({
  initialState,
  name: "orderDeliveryDetalis",
  reducers: {
    odrDeliveryDetail: (state, actions) => {
      const formData = actions.payload;
      return { ...state, ...formData };
    },
  },
});

export const { odrDeliveryDetail } = orderDeliveryDetalis.actions;
export default orderDeliveryDetalis.reducer;
