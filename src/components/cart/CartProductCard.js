import React from "react";
import "./CartProductCard.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/slice/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

function CartProductCard({data}) {
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(data?.quantity)
    const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity)

    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
        setQuantity(value)
    }

    const handleRemove = () => {
        dispatch(removeItem({id: data?.id}))
    }

    useEffect(() => {
        setTotalPrice(data?.price * quantity)
        dispatch(updateQuantity({id: data?.id, quantity}))
    }, [quantity, data?.price, data?.id, dispatch])

    return (
        <div className="cart-product-card">
            <img src={data.imageUrl} alt="" />
            <div>
                <h4>{data.name}</h4>
                {/* <p>{model}</p> */}
                {/* <p>{description}</p> */}
                {/* <p>{rating} / 5</p> */}
                <p>$ {data.price}</p>
            </div>
            <div className="quantity-counter">
            <button onClick={handleRemove}><FaTrashAlt /></button>
                <p>Total Price: $ {totalPrice}</p>
                <button onClick={() => {
                        if (quantity > 1) {
                            setQuantity(pre => pre - 1)
                        }
                    }}>-</button>
                <input type="number" value={quantity} onChange={handleChange} />
                <button onClick={() => setQuantity(pre => pre + 1)}>+</button>
            </div>
        </div>
    );
}

export default CartProductCard;