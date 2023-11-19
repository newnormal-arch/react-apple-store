import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function SuccessfullOrder(){
    const navigate = useNavigate();

    const handleReload = (e) => {
        e.preventDefault();
        navigate('/');
        window.location.reload();
    }
    return (
        <div className="success-card">
            <i><TiTickOutline /></i>
            <h2>Thank You</h2>
            <p>Your order has been confirmed</p>
            <button className="success-btn" onClick={handleReload}>Back To Homepage</button>
        </div>
    );
}

export default SuccessfullOrder;