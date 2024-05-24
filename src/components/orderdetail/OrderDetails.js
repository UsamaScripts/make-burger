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

// import React, { useState } from "react";
// import "./OrderDetail.css";

// const orderControl = [
//   {
//     name: "Salad",
//     price: 0.5,
//   },
//   {
//     name: "Bacon",
//     price: 0.6,
//   },
//   {
//     name: "Cheese",
//     price: 0.7,
//   },
//   {
//     name: "Meat",
//     price: 0.1,
//   },
// ];

// function OrderDetails() {
//   const [price, setPrice] = useState(0);
//   const [ingrediant, setIngrediant] = useState({});
//   console.log(ingrediant);
//   function handelLessButton(name) {
//     const ingridiant = orderControl.find((item) => item.name === name);

//     setPrice((pr) => pr - ingridiant.price);
//     setIngrediant(name);
//   }
//   function handelMoreButton(name) {
//     const ingridiant = orderControl.find((item) => item.name === name);

//     setIngrediant((pre) => ({ ...pre, [name]: pre[name] ? pre[name] + 1 : 1 }));
//     setPrice((pr) => pr + ingridiant.price);
//   }
//   return (
//     <div className="footer-background">
//       <p>{price}</p>
//       {orderControl.map((order, id) => (
//         <div className="ingridiant" key={id}>
//           <div>{order.name}</div>
//           <button
//             className="less-button"
//             onClick={() => handelLessButton(order.name)}
//             disabled={!ingrediant[order.name]}
//           >
//             Less
//           </button>
//           <button
//             className="more-button"
//             onClick={() => handelMoreButton(order.name)}
//           >
//             More
//           </button>
//         </div>
//       ))}
//       {/* <div className="ingridiant">
//         <div>Salad</div>
//         <button className="less-button">Less</button>
//         <button className="more-button">More</button>
//       </div>
//       <div className="ingridiant">
//         <div>Bacon</div>
//         <button className="less-button">Less</button>
//         <button className="more-button">More</button>
//       </div>
//       <div className="ingridiant">
//         <div>Cheez</div>
//         <button className="less-button">Less</button>
//         <button className="more-button">More</button>
//       </div>
//       <div className="ingridiant">
//         <div>Meat</div>
//         <button className="less-button">Less</button>
//         <button className="more-button">More</button>
//       </div> */}
//       <button className="order-button">SignIn To Please Order</button>
//     </div>
//   );
// }

// export default OrderDetails;
