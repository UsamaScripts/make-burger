import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import "./Dialog.css";
import { useNavigate } from "react-router-dom";
Modal.setAppElement("#root");
const CheckoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.BurgerBuilderSlice.ingredients);
  const totalPrice = useSelector(
    (state) => state.BurgerBuilderSlice.totalPrice
  );

  return (
    <div className="model">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Order Summary"
      >
        <h2>Order Summary</h2>
        <p>A delicious burger with the following ingredients</p>
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <em>{key}:</em> {value}
            </li>
          ))}
        </ul>
        <p> Total Price : PKR {totalPrice}</p>
        <button onClick={() => navigate("./checkout")}>
          CheckOut To Place Order
        </button>
      </Modal>
    </div>
  );
};
export default CheckoutModal;
