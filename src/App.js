import Header from "./components/header/Header";
// import OrderDetails from "./components/orderdetail/OrderDetails";
// import MakeBurger from "./components/makeburger/MakeBurger";
import BurgerBuilder from "./layout/burgerBuilder";
import Auth from "./components/auth/Auth";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import MakeBurger from "./components/makeburger/MakeBurger";
import Order from "./components/order/order";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<BurgerBuilder />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/checkout"
          element={<Checkout element={<MakeBurger />} />}
        />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
