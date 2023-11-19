import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { user } from "../data/user";

function Shipping() {
    const userInfo = user[0];

    const [name, setName] = useState(userInfo.name);
    const [street, setStreet] = useState(userInfo.shippingAddress.street);
    const [city, setCity] = useState(userInfo.shippingAddress.city);
    const [state, setState] = useState(userInfo.shippingAddress.state);
    const [country, setCountry] = useState(userInfo.shippingAddress.country);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form...");
        const updatedUser = {
          ...user,
          name,
          shippingAddress: {
            street,
            city,
            state,
            country,
          },
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      };

    return (
        <div className="shipping-container">
            <div className="add-address">
                <label> Shipping Name</label>
                <input placeholder="John Maker" onChange={(e) => setName(e.target.value)}></input>

                <label> Street Name</label>
                <input placeholder="123 Plae Ground Street" onChange={(e) => setStreet(e.target.value)}></input>

                <label> City</label>
                <input placeholder="Centurion" onChange={(e) => setCity(e.target.value)}></input>

                <label> State / Province</label>
                <input placeholder="Gauteng" onChange={(e) => setState(e.target.value)}></input>

                <label> Country</label>
                <input placeholder="South Africa" onChange={(e) => setCountry(e.target.value)}></input>

                <button onClick={handleSubmit}><Link className='shipping-btn' to="/checkout">Add Address</Link></button>
                <div className="shipping-footer">
                    <Link to="/checkout">Back</Link>
                    <p>Secure Connection</p>
                </div>
            </div>
        </div>
    );
}

export default Shipping;