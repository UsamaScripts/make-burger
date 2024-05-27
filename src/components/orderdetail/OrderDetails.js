import "./OrderDetail.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addIngredient,
  removeIngredient,
} from "../../redux/slices/burgerBuilderSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutModal from "../dialog/Dialog";
function OrderDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
  const burgerIngredients = ["salad", "bacon", "cheese", "meat"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalPrice, addedIngredients } = useSelector(
    (state) => state.BurgerBuilderSlice
  );

  function handleAddIngridiant(Ingredients) {
    dispatch(addIngredient(Ingredients));
  }
  function handleRemoveIngridiant(Ingredients) {
    dispatch(removeIngredient(Ingredients));
  }
  return (
    <>
      <CheckoutModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="footer-background">
        <p>{totalPrice}</p>
        {burgerIngredients.map((Ingredients, id) => (
          <div className="ingridiant" key={id}>
            <div>{Ingredients}</div>
            <button
              className="less-button"
              onClick={() => handleRemoveIngridiant(Ingredients)}
              disabled={!addedIngredients.find((item) => item === Ingredients)}
            >
              Less
            </button>
            <button
              className="more-button"
              onClick={() => handleAddIngridiant(Ingredients)}
            >
              More
            </button>
          </div>
        ))}
        {isLoggedIn ? (
          <button className="order-button" onClick={() => openModal()}>
            Click To Place Order
          </button>
        ) : (
          <button className="order-button" onClick={() => navigate("/auth")}>
            Please Login To Place Order
          </button>
        )}
      </div>
    </>
  );
}

export default OrderDetails;
