import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  ingredientPrices: {
    salad: 10,
    bacon: 20,
    cheese: 15,
    meat: 14,
  },
  addedIngredients: [],
  totalPrice: 20,
};

export const burgerBuilderSlice = createSlice({
  initialState,
  name: "burgerBuilderSlice",
  reducers: {
    addIngredient: (state, action) => {
      const ingredient = action.payload;
      state.ingredients[ingredient] += 1;
      state.totalPrice += state.ingredientPrices[ingredient];
      state.addedIngredients.push(ingredient);
    },
    removeIngredient: (state, action) => {
      const ingredient = action.payload;
      if (state.ingredients[ingredient] <= 0) return;
      state.ingredients[ingredient] -= 1;
      state.totalPrice -= state.ingredientPrices[ingredient];
      const index = state.addedIngredients.indexOf(ingredient);
      if (index !== -1) {
        state.addedIngredients.splice(index, 1);
      }
    },
  },
});

export const { addIngredient, removeIngredient } = burgerBuilderSlice.actions;
export default burgerBuilderSlice.reducer;
