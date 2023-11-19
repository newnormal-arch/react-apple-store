import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../data/user";

function Payment() {
    const userInfo = user[0];
    const navigate = useNavigate();

    const [cardHolder, setCardHolder] = useState(userInfo.paymentMethod.cardHolder);
    const [cardNumber, setCardNumber] = useState(userInfo.paymentMethod.cardNumber);
    const [expirationDate, setExpirationDate] = useState(userInfo.paymentMethod.expirationDate);
    const [cvv, setCVV] = useState(userInfo.paymentMethod.cvv);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form...");
        const updatedUser = {
          ...user,
          paymentMethod: {
            cardHolder,
            cardNumber,
            expirationDate,
            cvv,
          },
        };
        localStorage.setItem('userPaymentInfo', JSON.stringify(updatedUser));
        navigate('/checkout');
      };

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
                <input placeholder="John Maker" onChange={(e) => setCardHolder(e.target.value)}></input>

                <label> Card Number</label>
                <input placeholder="5789 7894 6321 4561" onChange={(e) => setCardNumber(e.target.value)}></input>

                <div className="expiry-cvc">
                    <label> Expiry Date</label>
                    <input placeholder="MM/YY" onChange={(e) => setExpirationDate(e.target.value)}></input>

                    <label> CVC</label>
                    <input placeholder="123" onChange={(e) => setCVV(e.target.value)}></input>
                </div>

                <button onClick={handleSubmit}>Add Payment Method</button>
                <div className="shipping-footer">
                    <Link to="/checkout">Back</Link>
                    <p>Secure Connection</p>
                </div>
            </div>
        </div>
    );
}

export default Payment;