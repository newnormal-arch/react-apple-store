import React from "react";
import "./CartSideBar.css"
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";

function CheckoutSideBar() {
    const cart = useSelector(state => state.cart)
    return (
        <div className="cart-side-bar">
            <h4 className="cart-title">Bag</h4>
            <div className="cart-items">
            {cart.list.map(item => {
                return (
                    <div className="cart-img">
                        <img src={item.imageUrl} alt=""/>
                    </div>
                );
            })}
            </div>
            <p>Total : {cart?.total.toFixed(2)}</p>
            <Link to="/checkout" className="cart-btn"><FaShoppingBag /> Checkout</Link>
        </div>
    );
}

export default CheckoutSideBar;