import React from "react";
import { Link } from "react-router-dom";

function Shipping(){
    return (
        <div className="shipping-container">
            <div className="add-address">
                <label> Shipping Name</label>
                    <input placeholder="John Maker"></input>
                
                <label> Street Name</label>
                    <input placeholder="123 Plae Ground Street"></input>
                
                <label> City</label>
                    <input placeholder="Centurion"></input>
                
                <label> State / Province</label>
                    <input placeholder="Gauteng"></input>
                
                <label> Country</label>
                    <input placeholder="South Africa"></input>
                
                <button>Add Address</button>
                <div className="shipping-footer">
                    <Link to="/checkout">Back</Link>
                    <p>Secure Connection</p>
                </div>
            </div>
        </div>
    );
}

export default Shipping;