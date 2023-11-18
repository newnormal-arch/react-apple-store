import React from "react";
import { Link } from "react-router-dom";

function Payment() {
    return (
        <div className="payment-container">
            <div className="select-card">
                <h4>Select A Card</h4>
                <p>Mastercard ending in 4125</p>
                <p>VISA Debit ending in 4125</p>
            </div>
            <div className="add-card">
                <h4>Add A New Card</h4>
                <label> Cardholder Name</label>
                <input placeholder="John Maker"></input>

                <label> Card Number</label>
                <input placeholder="5789 7894 6321 4561"></input>

                <div className="expiry-cvc">
                    <label> Expiry Date</label>
                    <input placeholder="MM/YY"></input>

                    <label> CVC</label>
                    <input placeholder="123"></input>
                </div>

                <button>Add Payment Method</button>
                <div className="shipping-footer">
                    <Link to="/checkout">Back</Link>
                    <p>Secure Connection</p>
                </div>
            </div>
        </div>
    );
}

export default Payment;