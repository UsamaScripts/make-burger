import Header from "./components/header/Header";
// import OrderDetails from "./components/orderdetail/OrderDetails";
// import MakeBurger from "./components/makeburger/MakeBurger";
import BurgerBuilder from "./layout/burgerBuilder";
import Auth from "./components/auth/Auth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BurgerBuilder />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
