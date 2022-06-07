import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import "../Header/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Header = () => {
  const { isEmpty, totalUniqueItems, emptyCart } = useCart();
  return (
    <div>
      <section className="header-section">
        <div className="nav">
          <div className="nav-content">
            <div className="nav-menu justify-content-center">
              <a>HOME</a>
              <a>PRODUCT</a>
              <a>ABOUT</a>
            </div>
            <div className="nav-logo justify-content-center ">
              <div>LOGO</div>
            </div>

            <div className="nav-icon">
              <AiOutlineSearch className="icon-search" />

              <div className='shopping-cart'>
                <AiOutlineShoppingCart className="icon-search " />
                <div className='count-cart'>{totalUniqueItems}</div>
              </div>

              <Link to="/">
                <AiOutlineUser className="icon-search" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
