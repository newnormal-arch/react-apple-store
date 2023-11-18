import React from "react";
import {productList} from "../data/products";
import SideNavBar from "../components/navbar/SideNavBar";
import HomeProductCard from "../components/home/HomeProductCard";
import CartSideBar from "../components/cart/CartSideBar";


function Home() {
    return (        
        <div className="home-page">
            <SideNavBar />
            <CartSideBar />
            <div className="home-container">
                <div className="search-container">
                    <h6 className="search-heading">Search Item</h6>
                    <input className="search-input" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."></input>
                </div>
                <div className="product-list">
                {productList.map(item => {
                    return (
                        <div key={item.id}>
                            <HomeProductCard data={item} />
                        </div>
                    )
                })}
                </div>
            </div>
            
        </div>
    );
}

export default Home;