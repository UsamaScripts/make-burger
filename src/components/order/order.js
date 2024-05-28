import React from "react";
import { useSelector } from "react-redux";
function Order() {
  const totalPrice = useSelector((state) => state.orderSlice.totalPrice);
  const ingredients = useSelector((state) => state.orderSlice.addedIngredients);

  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
      <p>{totalPrice}</p>
    </div>
  );
}

export default Order;
