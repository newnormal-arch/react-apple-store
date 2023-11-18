import React from "react";
import { TiTickOutline } from "react-icons/ti";

function SuccessfullOrder(){
    return (
        <div className="success-card">
            <i><TiTickOutline /></i>
            <h2>Thank You</h2>
            <p>Your order has been confirmed</p>
        </div>
    );
}

export default SuccessfullOrder;