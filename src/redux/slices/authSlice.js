import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
};
export const authSlice = createSlice({
  initialState,
  name: "Auth",
  reducers: {
    Login: (state, action) => {
      return { ...state, isLoggedIn: true };
    },
    logout: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { Login, logout } = authSlice.actions;
export default authSlice.reducer;
