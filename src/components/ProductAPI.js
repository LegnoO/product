import React from "react";
import { useState, useEffect } from "react";
import "./../assets/product.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductAPI = () => {
  const [data, setData] = useState([]);

  const ServiceCallAPI = async (endpoint, method, data = null, id = null) => {
    const base_url = "http://khanh.tokyo/api/";
    const url = id ? base_url + endpoint + id : base_url + endpoint;
    const result = await axios({
      method: method,
      url,
      data,
    });
    setData(result.data.data.data);
    console.log(result.data.data.data)
    return result;
  }; 

  const navigate = useNavigate();

  useEffect(() => {
    ServiceCallAPI("products/", "GET", data);
  }, []);

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

      <div className="bg-main bg-main-api container border border-5 border-dark shadow-lg">
        <div className="row product-store d-flex justify-content-center">
          {data.map((item, index) => (
            <div className="col-3 p-3 text-center product" key={index}>
              <img src={item.avatar} />
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

export default ProductAPI;
