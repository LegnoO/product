import { Routes, Route } from "react-router-dom";
import Main from "./../pages/Main";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import Product from "./../components/Product";
import ProductAPI from "./../components/ProductAPI";
const Routing = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/ProductAPI" element={<ProductAPI />} />
        <Route path='/Product' element={<Product />} />
        <Route path="/" element={<Login />} />
        <Route path='/Register' element={<Register />} />
        
      </Routes>
    </div>
  );
};

export default Routing;
