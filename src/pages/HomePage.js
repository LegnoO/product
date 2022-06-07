import React from "react";
import "../assets/bg.css";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import Contact from "../components/Contact/Contact";
// import Product from "../components/Product/Product";
// import Detail from "../components/detail/DetailProduct";


const HomePage = () => {
  const info = localStorage.getItem("userInfo");
  const name = info ? JSON.parse(info) : null;
  console.log(name);

  return (
    <div>
      {/* <Contact/> */}
      {/* <Header /> */}
      {/* <p>{name.name}</p> */}
      <div className="background-layers">
        <img src="https://cms.curnonwatch.com/uploads/pc_d3524c03ae.jpg" />
      </div>
      {/* <Product />

      <Footer /> */}
    </div>
  );
};

export default HomePage;
