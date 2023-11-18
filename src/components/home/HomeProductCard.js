import React from "react";
import "./HomeProductCard.css"
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

function HomeProductCard({data}) {
    return (
        <div className='productCard'>
            <div className="imgContainer">
                <img src={data.imageUrl} alt='' />
            </div>
            <div>
                <h5>{data.name}</h5>
                <p>{data.short_description}</p>
                <Link to={`/productDetails/${data.id}`} className="product-details-btn"><FaShoppingBag /></Link>
                <p>R {data.price}</p>
            </div>
            
        </div>
    );
}

export default HomeProductCard;