import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AllPlatforms from "@/components/AllPlatforms";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";

const ProductPage = ({ Product, Products }) => {
    const [NavbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setNavbarHeight(NavbarHeight);
        } catch (e) {}
    }, []);

    useEffect(() => {
        axios.get(
            "https://api.countapi.xyz/hit/fiverxottproduct/85ff71e4-b14b-4d77-a1f9-90efd2eac344"
        );
        try {
            const visited = localStorage.getItem("pvisited");
            if (!visited) {
                localStorage.setItem("pvisited", true);
                axios.get(
                    "https://api.countapi.xyz/hit/fiverxottproductunique/562159af-3f7d-4be6-b390-8db4f33b5ef2"
                );
            }
        } catch (e) {}
        return () => {};
    }, []);

    const PriceCardRender = () =>
        Product.items.map((item, index) => {
            return (
                <div className="pricing-card" key={index}>
                    <Head>
                        <meta
                            name="description"
                            content={`Get ${
                                Product.name
                            } account  at a cheaper price of just       ₹${
                                item.price
                            }/${
                                item.count > 1
                                    ? item.count + item.period
                                    : item.count + item.period.slice(0, -1)
                            }  with one device login. Get it now.`}
                        />
                        <meta
                            name="keywords"
                            content="OTT services, premium content, affordable pricing, online streaming, fiberxott"
                        />
                        <meta name="robots" content="index, follow" />
                        <meta
                            property="og:title"
                            content={`${Product.name} - get it at cheap prices by FiberXOTT`}
                        />
                        <meta
                            property="og:description"
                            content={`Get ${
                                Product.name
                            } account  at a cheaper price of just       ₹${
                                item.price
                            }/${
                                item.count > 1
                                    ? item.count + item.period
                                    : item.count + item.period.slice(0, -1)
                            }  with one device login. Get it now.`}
                        />
                        <meta property="og:type" content="website" />
                        <meta
                            property="og:url"
                            content="https://www.fiberxott.com/"
                        />
                        <meta
                            name="twitter:title"
                            content={`${Product.name} - get it at cheap prices by FiberXOTT`}
                        />
                        <meta
                            name="twitter:description"
                            content={`Get ${
                                Product.name
                            } account  at a cheaper price of just       ₹${
                                item.price
                            }/${
                                item.count > 1
                                    ? item.count + item.period
                                    : item.count + item.period.slice(0, -1)
                            }  with one device login. Get it now.`}
                        />

                        <meta
                            name="twitter:card"
                            content="summary_large_image"
                        />
                        <title>
                            {Product.name} - get it at cheap prices by FiberXOTT
                        </title>
                    </Head>
                    <div className="header">
                        <h2>{item.name}</h2>
                        <h1>
                            ₹{item.price}/
                            {item.count > 1
                                ? item.count + item.period
                                : item.count + item.period.slice(0, -1)}
                        </h1>
                        <p className="my-2">
                            Duration:{" "}
                            <span>
                                {item.count > 1
                                    ? item.count + item.period
                                    : item.count + item.period.slice(0, -1)}
                            </span>
                        </p>
                        <p className="my-2">
                            No. of devices: <span>1 Device</span>
                        </p>
                        <p className="my-2">
                            Description: <span>{item.description}</span>
                        </p>
                        <Link
                            href={`https://wa.me/${
                                process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                            }?text=Hi%2C%20I%20want%20${
                                Product.name
                            }%20available%20on%20your%20website.%0A*Plan%20details*%0A*Name*%3A%20${
                                item.name
                            }%0A*Price*%3A%20${item.price}%0A*Duration*%3A%20${
                                item.count > 1
                                    ? item.count + item.period
                                    : item.count + item.period.slice(0, -1)
                            }%0A*Description%3A*%20${
                                item.description
                            }%0A%0AIs%20it%20available%3F`}
                        >
                            <button>Get this Deal</button>
                        </Link>
                    </div>
                </div>
            );
        });

    return (
        <section id="ProductPage">
            <Navbar />
            <div className="main-container">
                <div className="image">
                    <img
                        src={Product.banner}
                        alt="banner"
                        style={{ top: NavbarHeight + 50 + "px" }}
                    />
                </div>

                <div className="content my-4">
                    <h1 className="text-2xl font-bold text-center">
                        {Product.name}
                    </h1>
                    <p className="text-sm font-medium text-gray-400 my-4 text-center">
                        {Product.description}
                    </p>

                    <div className="plans">
                        <h1 className="text-center text-2xl font-bold ">
                            Our plans
                        </h1>
                        <div className="pricing-cards">
                            <PriceCardRender />
                        </div>
                    </div>
                    <div className="fraud-report ">
                        <p className="text-[12px] bg-yellow-300 p-2 rounded text-center">
                            <i className="bx bx-info-circle mr-2"></i>
                            This website is under monitoring of{" "}
                            <Link
                                href="https://deepdevelopers.in"
                                className="text-[#673ee6] font-bold underline"
                            >
                                {" "}
                                deepdevelopers.in
                            </Link>{" "}
                            for any issue related to seller contact us at{" "}
                            <a
                                className="text-[#673ee6] font-bold underline"
                                href="#"
                            >
                                jashandeep1659@gmail.com
                            </a>{" "}
                            we will resolve it.
                        </p>
                    </div>
                </div>
            </div>

            <AllPlatforms Products={Products} />
            <Footer />
        </section>
    );
};
export async function getServerSideProps(context) {
    let Products = await axios.get(process.env.NEXT_PUBLIC_DATABASE_URL);
    Products = Products.data;
    const Product = Products.find((item) => item.slug === context.query.slug);
    if (!Product) {
        return { notFound: true };
    }

    return {
        props: {
            Products,
            Product,
        }, // will be passed to the page component as props
    };
}
export default ProductPage;
