import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AllPlatforms from "@/components/AllPlatforms";
import Link from "next/link";
import MainSwiper from "@/components/MainSwiper";
import DefaultMetaTags from "@/components/DefaultMetaTags";

const Home = (props) => {
    const [NavbarHeight, setNavbarHeight] = useState(0);
    const [TopBannerHeight, setTopBannerHeight] = useState(0);
    const [MainBannerHeight, setMainBannerHeight] = useState();

    useEffect(() => {
        axios.get(
            "https://api.countapi.xyz/hit/fiverxott/e74ebe4f-4c0b-4da0-a62d-d1e915da349c"
        );
        try {
            const visited = localStorage.getItem("visited");
            if (!visited) {
                localStorage.setItem("visited", true);
                axios.get(
                    "https://api.countapi.xyz/hit/fiberxottunique/a63f0cb8-cbaa-4783-aaca-3713157bfda2"
                );
            }
        } catch (e) {}
        return () => {};
    }, []);

    useEffect(() => {
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setNavbarHeight(NavbarHeight);
            const TopBannerHeight =
                document.querySelector("#TopBanner").clientHeight;
            setTopBannerHeight(TopBannerHeight);
            const totalPageHeight = window.innerHeight;
            if (window.innerWidth < 768) {
                setMainBannerHeight(
                    totalPageHeight - NavbarHeight - TopBannerHeight
                );
            }
        } catch (e) {}

        return () => {};
    }, []);

    return (
        <section id="Home">
            <h1
                className="font-bold text-sm  py-2 text-center bg-[#a6a6ff] text-white"
                id="TopBanner"
            >
                Your trust is our worth
            </h1>
            <DefaultMetaTags />
            <Navbar />
            <div
                className="main-banner"
                style={{
                    minHeight: MainBannerHeight + "px",
                }}
            >
                <div className="img-container">
                    <MainSwiper />
                </div>
                <div className="text-container flex items-center flex-col w-full">
                    <p className="text-center font-medium text-gray-400 text-sm w-3/4">
                        Are you still paying Hundreds in Premium of OTT
                        platform?
                    </p>
                    <h1 className="w-3/4 text-center">Fiberxott.com</h1>
                    <h2 className="w-3/4 text-center text-lg font-bold">
                        For new customer YouTube premium ₹99/4months
                    </h2>
                    <ul>
                        <li>
                            <i className="bx bx-revision"></i>
                            <p>100% Replacement warranty</p>
                        </li>
                        <li>
                            <i className="bx bx-check-shield"></i>{" "}
                            <p>Premium quality accounts</p>
                        </li>
                        <li>
                            <i className="bx bx-time-five"></i>
                            <p>24h Customer support</p>
                        </li>
                    </ul>
                    <div className="button">
                        <Link
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi%2C%0A*Coupon%20code%3A*%23FirstTime%0AI%20want%20Youtube%20Premium%20account.%20Is%20discount%20still%20available%20on%20your%20website.%0A`}
                        >
                            <button>Save 30% on YT premium</button>
                        </Link>
                        <p className="text-[10px] text-gray-400 text-right">
                            only for limited users
                        </p>
                    </div>
                </div>
            </div>
            <AllPlatforms Products={props.Products} />
            <Footer />
        </section>
    );
};

export async function getStaticProps(context) {
    let Products = await axios.get(process.env.NEXT_PUBLIC_DATABASE_URL);
    Products = Products.data;
    return {
        props: {
            Products,
        }, // will be passed to the page component as props
    };
}

export default Home;
