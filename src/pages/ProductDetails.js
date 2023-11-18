import React from "react";
import SideNavBar from "../components/navbar/SideNavBar";
import CartSideBar from "../components/cart/CartSideBar";
import { useParams } from 'react-router-dom';
import { productList } from "../data/products";
import ProductDetailsCard from "../components/details/ProductDetailsCard";

function ProductDetails() {
    const params = useParams();
    return (
        <div>
            <SideNavBar />
            <CartSideBar />
            <div className="productDetail">
                {productList.map(item => {
                    if (item.id == params.id) {
                        return (
                            <div key={item.id}>
                                <ProductDetailsCard data={item} />
                            </div>
                        )
                    }
                }
                )}
            </div>
        </div>
    )
}

export default ProductDetails;