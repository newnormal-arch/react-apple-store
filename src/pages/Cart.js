import React from "react";
import SideNavBar from "../components/navbar/SideNavBar";
import { useSelector } from "react-redux";
import CartProductCard from "../components/cart/CartProductCard";
import CheckoutSideBar from "../components/cart/CheckoutSideBar";

function Cart() {
    const cart = useSelector(state => state.cart);
    return (
        <div>
            <SideNavBar />
            <CheckoutSideBar/>
            <div className="cart-container">
                <h3 className="cart-main-title">Check you bag items</h3>
                {cart?.list && cart?.list?.length > 0 ? (
                    <section>
                    {
                        cart?.list.map(item => {
                            return (
                                <CartProductCard key={item?.id}
                                data={item}/>
                            );
                        })
                    }
                </section>
                ) : <h1>Empty</h1>}
                
            </div>
        </div>
    );
}

export default Cart;