import React from "react";
import "./MakeBurger.css";
import { useSelector } from "react-redux";

function MakeBurger() {
  // const selector = useSelector();

  const ingrediants = useSelector(
    (state) => state.BurgerBuilderSlice.addedIngredients
  );

  return (
    <div className="burger">
      <div className="burger-top"></div>
      {ingrediants.length <= 0 && (
        <div className="pleaseadd">Please Add ingrediant </div>
      )}
      {ingrediants.map((ingrediant, id) => (
        <div key={id} className={ingrediant}></div>
      ))}
      <div className="burger-bottom"></div>
    </div>
  );
}

export default MakeBurger;
