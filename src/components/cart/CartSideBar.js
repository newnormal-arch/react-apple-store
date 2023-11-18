import React from "react";
import "./CartSideBar.css"
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

function CartSideBar() {
    return (
        <div className="cart-side-bar">
            <h4 className="cart-title">Bag</h4>
            <div className="cart-items"></div>
            <Link to="/cart" className="cart-btn"><FaShoppingBag /> View Bag</Link>
        </div>
    );
}

export default CartSideBar;