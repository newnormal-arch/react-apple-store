import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../components/cart/CartProductCard";
import { Link } from "react-router-dom";

function Checkout() {
    const cart = useSelector(state => state.cart);
    return (
        <div className="checkout-container">
            <div className="order-summary-main">
                <section className="shipping-section">
                    <h4>Shipping Address</h4>
                    <div className="payment-column">
                        <div>
                            <p>John Maker</p>
                            <p>123 Plae Grond Street</p>
                            <p>Centurion, Pretoria</p>
                        </div>
                        <Link to="/shipping" className="change-btn">Change</Link>
                    </div>
                </section>
                <section className="payment-section">
                    <h4>Payment Method</h4>
                    <div className="payment-column">
                        <div>
                            <p><strong>Mastercard</strong> ending in 1252</p>
                            <p><strong>$ 0.00</strong> giftcard balance</p>
                            <p><strong>Billing Address same as shipping address</strong></p>
                        </div>
                        <Link to="/payment" className="change-btn">Change</Link>
                    </div>
                </section>
                <section className="review-products-section">
                    <h4>Review your bag</h4>
                    {
                        cart?.list.map(item => {
                            return (
                                <CartProductCard key={item?.id}
                                data={item}/>
                            );
                        })
                    }
                </section>
            </div>
            <div className="order-summary">
                <div className="order-summary-card">
                    <h4>Order Summary</h4>
                    <p>Items : {cart?.list.length}</p>
                    <p>Shipping : $ 6.99</p>
                    <p>Estimated GST : 15 %</p>
                    <p>Gift Card : $ 0.00</p>
                    <p>Order Total : $ {cart?.total}</p>
                    <Link to="/success" className="order-btn">Place Your Order</Link>
                </div>
                <Link to="/cart" className="back-btn">Back</Link>
            </div>
        </div>
    );
}

export default Checkout;