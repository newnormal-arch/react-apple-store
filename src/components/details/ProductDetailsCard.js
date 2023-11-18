import React from 'react';
import "./ProductDetailsCard.css";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cartSlice';
// import { FaShoppingBag } from "react-icons/fa";

function ProductDetailsCard({data}) {
    // const dispatch = useDispatch();
    return (
        <div className='productDetailsCard'>
            <div className='productDetailsTopSection'>
                <img src={data.imageUrl} alt='' />
                <div className='productDetailsTopDescription'>
                    <h5>{data.name}</h5>
                    <p className='productDetailsModel'>{data.short_description}</p>
                    {/* <p className='productDetailsRating'>{rating} / 5</p> */}
                    <p className='productDetailsPrice'>R {data.price}</p>
                    {/* <p className='productDetailsDescription'>{description}</p> */}
                    {/* <button className='bag-btn' onClick={() => dispatch(addToCart({ title, image, id, description, model, rating, price}))}><FaShoppingBag /> Add To Bag</button> */}
                </div>

            </div>
            <div className='productDetailsBottomSection'>
                <h4 className='productDetailsDescriptionTitle'>Description</h4>
                <p className='productDetailsDescription'>{data.long_description}</p>
            </div>
        </div>
    )
}

export default ProductDetailsCard;