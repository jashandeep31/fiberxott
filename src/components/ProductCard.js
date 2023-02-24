import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
    const [NewBadge, setNewBadge] = useState(false);

    const newItems = [
        "netflix-premium-account",
        "amazon-prime",
        "youtube-premium",
    ];

    useEffect(() => {
        for (let i = 0; i < newItems.length; i++) {
            if (product.slug === newItems[i]) {
                setNewBadge(true);
            }
        }
        return () => {
            setNewBadge(false);
        };
    }, []);
    return (
        <Link
            href={`/product/${product.slug}`}
            className="card"
            id="ProductCard"
        >
            <div className="relative">
                {NewBadge ? (
                    <img
                        src="/images/new.png"
                        className="new-badge"
                        alt="new"
                    />
                ) : null}
                <img src={product.img} alt="netflix" />
            </div>
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
