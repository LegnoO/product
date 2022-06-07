import React, { useState, useEffect } from "react";
import "../Product/product.css";
import product from "../../data/product.json";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import serviceCallAPI from "../../services/ServicesCallAPI";

const Product = () => {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  const DeleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const GetItem = async () => {
    try {
      const result = await serviceCallAPI("products?id=12", "GET");
      console.log(result.data.message, "\n", result.data.data.data);
      setData(result.data.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetItem();
  }, []);

  const RenderItem = () => {
    return data.map((item, index) => (
      <div className="product-container col-3" key={index}>
        <Link to={`/${item.slug}/${item.id}`}>
          <div className="product-item">
            <div className="product-image">
              <img src={item.avatar} />
            </div>
            <div className="box-text">
              <div className="sub-product">{item.name}</div>
              <div className="name-product">{item.detail}</div>
              <div className="price-product">{item.price} ₫</div>
              <button className="buy-product">Add to cart</button>
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="">
      {/* <Header /> */}
      <section className="product-section">
        <div className="product-content row">
          <h1>Sản phẩm bán chạy</h1>
          {RenderItem()}
        </div>
      </section>
      <br />
    </div>
  );
};

export default Product;

// {data.map((item, index) => (
//   <div className="product-item col-3" key={index}>
//     <img src={item.image} />
//     <h5>{item.name}</h5>
//     <div className="">{item.price}$</div>
//     <div className=""></div>
//     <button className="" onClick={() => DeleteItem()}>
//       Delete Item
//     </button>
//   </div>
// ))}

{
  /* <div className='row'>
        <div className='col-2'><div className='ex'><div className='a'></div></div></div>
        <div className='col-2'><div className='ex'><div className='a'></div></div></div>
      </div> */
}
