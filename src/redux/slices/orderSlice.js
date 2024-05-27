import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    order: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { order } = orderSlice.actions;
export default orderSlice.reducer;
