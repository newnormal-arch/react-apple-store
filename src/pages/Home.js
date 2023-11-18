import React from "react";
import productList from "../data/products.json"
import SideNavBar from "../components/navbar/SideNavBar";
import HomeProductCard from "../components/home/HomeProductCard";


function Home() {
    return (        
        <div className="home-page">
            <SideNavBar />
            {productList.map(item => {
                    return (
                        <div key={item.id}>
                            <HomeProductCard data={item} />
                        </div>
                    )
                })}
        </div>
    );
}

export default Home;