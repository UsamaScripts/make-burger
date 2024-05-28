import React, { useState } from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { odrDeliveryDetail } from "./../../redux/slices/orderDerliveryDetails";
import { order } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function AddressForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderData = useSelector((state) => state.BurgerBuilderSlice);
  // const curr = useSelector((state) => state.orderSlice);
  const formik = useFormik({
    initialValues: {
      name: "",
      street: "",
      postalcode: "",
      country: "",
      email: "",
      deliveryMethod: "",
    },
    onSubmit: (values) => {
      dispatch(odrDeliveryDetail(values));
      dispatch(order(orderData));
      navigate("/order");
    },
  });

  return (
    <div className="order-container">
      <div>Please Enter The Details To Complete The Order</div>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter Your Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          id="street"
          name="street"
          type="text"
          placeholder="Enter Your Street"
          onChange={formik.handleChange}
          value={formik.values.street}
        />
        <input
          id="postalcode"
          name="postalcode"
          type="text"
          placeholder="Enter Your Postal Code"
          onChange={formik.handleChange}
          value={formik.values.postalcode}
        />
        <input
          id="country"
          name="country"
          type="text"
          placeholder="Country"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <select
          id="deliveryMethod"
          name="deliveryMethod"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.deliveryMethod}
        >
          <option value="fastest">Fastest</option>
          <option value="cheapest">Cheapest</option>
        </select>
        <button type="submit">Complete Order</button>
      </form>
    </div>
  );
}

function Checkout({ element }) {
  const [isContinue, setIsContinue] = useState(false);
  const navigate = useNavigate();
  const igridiant = useSelector(
    (state) => state.BurgerBuilderSlice.addedIngredients
  );
  const price = useSelector((state) => state.BurgerBuilderSlice.totalPrice);

  function handleContinu() {
    setIsContinue(true);
  }
  function handleCancel() {
    setIsContinue(false);

    navigate("/");
  }
  return (
    <div>
      <p>We Hope it Taste Greate</p>
      {element}
      <div className="btn">
        <button
          className="continue"
          disabled={igridiant.length === 0}
          onClick={() => handleContinu()}
        >
          Continue
        </button>

        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
      {isContinue && (
        <>
          <AddressForm igridiant={(igridiant, price)} />
        </>
      )}
    </div>
  );
}

export default Checkout;
