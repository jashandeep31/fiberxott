import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
    const [TopPaddingForBanner, setTopPaddingForBanner] = useState(0);
    useEffect(() => {
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setTopPaddingForBanner(NavbarHeight);
        } catch (e) {}
        return () => {};
    }, []);

    const ProductsRender = () =>
        props.Products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
        });

    return (
        <section id="Home">
            <Navbar />
            <div
                className="main-banner"
                style={{ paddingTop: TopPaddingForBanner + "px" }}
            >
                <div className="img-container">
                    <img src="/images/banner.png" alt="banner" />
                </div>
                <div className="container flex items-center flex-col">
                    <p className="text-center font-medium text-gray-400 text-sm w-3/4">
                        Are you still paying Hundreds in Premium of OTT
                        platform?
                    </p>
                    <h1 className="w-3/4 text-center">Fiberxott.com</h1>
                    <h2 className="w-3/4 text-center text-lg font-bold">
                        Subscriptions starting from ₹19/month
                    </h2>
                    <ul>
                        <li>
                            <i className="bx bx-check-shield"></i>{" "}
                            <p>30days warranty</p>
                        </li>
                        <li>
                            <i className="bx bx-revision"></i>
                            <p>30days free replacement</p>
                        </li>
                        <li>
                            <i className="bx bx-time-five"></i>
                            <p>24h Customer support</p>
                        </li>
                    </ul>
                    <div className="button">
                        <button>Claim 50% off on Netflix</button>
                        <p className="text-[10px] text-gray-400 text-right">
                            only for limited users
                        </p>
                    </div>
                </div>
            </div>
            <div className="all-platforms">
                <h1 className="text-xl font-black text-center">Our Services</h1>
                <ul className="filters">
                    <li className="active">All</li>
                    <li>OTT</li>
                    <li>Music</li>
                </ul>
                <div className="cards">
                    <ProductsRender />
                </div>
            </div>
            <Footer />
        </section>
    );
};

export async function getServerSideProps(context) {
    let Products = await axios.get(process.env.NEXT_PUBLIC_DATABASE_URL);
    Products = Products.data;
    return {
        props: {
            Products,
        }, // will be passed to the page component as props
    };
}

export default Home;
