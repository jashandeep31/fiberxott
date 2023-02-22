import React, { useState } from "react";
import ProductCard from "./ProductCard";
const AllPlatforms = ({ Products }) => {
    const [CategorySelected, setCategorySelected] = useState("all");

    // function shuffle(array) {
    //     let currentIndex = array.length,
    //         randomIndex;

    //     // While there remain elements to shuffle.
    //     while (currentIndex != 0) {
    //         // Pick a remaining element.
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex--;

    //         // And swap it with the current element.
    //         [array[currentIndex], array[randomIndex]] = [
    //             array[randomIndex],
    //             array[currentIndex],
    //         ];
    //     }

    //     return array;
    // }

    // // Used like so
    // var arr = [2, 11, 37, 42];
    // shuffle(arr);

    const ProductsRender = () =>
        Products.map((product, index) => {
            if (CategorySelected === "all") {
                return <ProductCard key={index} product={product} />;
            }
            if (CategorySelected === product.category) {
                return <ProductCard key={index} product={product} />;
            }
        });
    return (
        <div className="all-platforms">
            <h1 className="text-xl font-black text-center">Our Services</h1>
            <ul className="filters">
                <li
                    className={`${CategorySelected === "all" ? "active" : ""}`}
                    onClick={() => setCategorySelected("all")}
                >
                    All
                </li>
                <li
                    className={`${CategorySelected === "ott" ? "active" : ""}`}
                    onClick={() => setCategorySelected("ott")}
                >
                    OTT
                </li>
                <li
                    className={`${
                        CategorySelected === "music" ? "active" : ""
                    }`}
                    onClick={() => setCategorySelected("music")}
                >
                    Music
                </li>
            </ul>
            <div className="cards">
                <ProductsRender />
            </div>
        </div>
    );
};

export default AllPlatforms;
