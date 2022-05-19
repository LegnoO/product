import React from "react";
import { useState, useEffect } from "react";
import "./../assets/product.css";
import product from "../data/product.json";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState(product);

  const navigate = useNavigate();

  const DeleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const LogoutPage = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="text-center">
        <button
          className="btn btn-success d-inline-block fs-5 mt-1"
          onClick={() => LogoutPage()}
        >
          Logout
        </button>
      </div>
      <div className="mt-3"></div>

      <div className="bg-main container border border-5 border-dark shadow-lg">
        <div className="row product-store d-flex justify-content-center">
          {data.map((item, index) => (
            <div className="col-3 p-3 text-center product" key={index}>
              <img src={item.image} />
              <h5>{item.name}</h5>
              <div className="fw-bold fs-6">{item.price}$</div>
              <div className="mt-2"></div>
              <button
                className="btn btn-danger btn-delete-item"
                onClick={() => DeleteItem()}
              >
                Delete Item
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-5"></div>
    </div>
  );
};

export default Product;
