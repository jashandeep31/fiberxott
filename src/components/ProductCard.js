import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <Link
            href={`/product/${product.slug}`}
            className="card"
            id="ProductCard"
        >
            <img src={product.img} alt="netflix" />
            <div className="card-content">
                <h5>Starting from</h5>
                <h2>
                    ₹{product.items[0].price}/
                    {product.items[0].count > 1
                        ? product.items[0].count + product.items[0].period
                        : product.items[0].count +
                          product.items[0].period.slice(0, -1)}
                </h2>
                {product.items.length > 1 ? (
                    <h4>
                        +{product.items.length - 1}{" "}
                        {product.items.length > 2
                            ? "more plans"
                            : "another plan"}
                    </h4>
                ) : (
                    <h4>and more</h4>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;
