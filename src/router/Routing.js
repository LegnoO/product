import { Routes, Route } from "react-router-dom";

import FormLogin from "./../pages/Login";
import Register from "./../pages/Register";
import HomePage from "./../pages/HomePage";
import Header from "./../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Product from "./../components/Product/Product";
import Detail from "../components/detail/DetailProduct";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/Product" element={<Product />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/:slug/:product_id" element={<Detail />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/" element={<FormLogin />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routing;
