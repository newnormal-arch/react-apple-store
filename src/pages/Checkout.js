import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../components/cart/CartProductCard";
import { Link } from "react-router-dom";
import { user } from "../data/user";


function Checkout() {
    const cart = useSelector(state => state.cart);
    const userInfo = user[0];
    const getUserPaymentInfo = JSON.parse(localStorage.getItem('userPaymentInfo')) || userInfo;
    const getUserShippingInfo = JSON.parse(localStorage.getItem('userShippingInfo')) || userInfo;
    const subTotal = (cart?.total-(cart?.total * 0.15));
    const taxValue = (cart?.total - subTotal);
    
    return (
        <div className="checkout-container">
            <div className="order-summary-main">
                <section className="shipping-section">
                    <h4>Shipping Address</h4>
                    <div className="payment-column">
                        <div>
                            <p>{getUserShippingInfo.name}</p>
                            <p>{getUserShippingInfo.shippingAddress.street}</p>
                            <p>{getUserShippingInfo.shippingAddress.city}, {getUserShippingInfo.shippingAddress.state}</p>
                        </div>
                        <Link to="/shipping" className="change-btn">Change</Link>
                    </div>
                </section>
                <section className="payment-section">
                    <h4>Payment Method</h4>
                    <div className="payment-column">
                        <div>
                            <p><strong>Card Type</strong> MasterCard</p>
                            <p><strong>Card Number</strong> {getUserPaymentInfo.paymentMethod.cardNumber}</p>
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
                    <p>Items : $ {subTotal.toFixed(2)}</p>
                    <p>Shipping : $ 6.99</p>
                    <p>Tax (15%) : $ {taxValue.toFixed(2)}</p>
                    <p>Gift Card : $ 0.00</p>
                    <p className="order-total">Order Total : $ {cart?.total}</p>
                    <Link to="/success" className="order-btn">Place Your Order</Link>
                </div>
                <Link to="/cart" className="back-btn">Back</Link>
            </div>
        </div>
    );
}

export default Checkout;