import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Favorite from "./components/Favorite/Favorite";
import Address from "./components/BuyNow/Address";
import Confirmation from "./components/BuyNow/Confirmation";
import Payment from "./components/BuyNow/Payment";
import OrderPlaced from "./components/BuyNow/OrderPlaced";
import SearchPro from "./components/Searchedpro/SearchPro";
import Profile from "./components/Profile/Profile";
import MyOrders from "./components/MyOrders/MyOrders";
import ShipAddress from "./components/Address/ShipAddress";
import Support from "./components/Support/Support";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import first from "./images/1.png"
import second from "./images/2.png"
import third from "./images/3.webp"
import fourth from "./images/4.png"
import fifth from "./images/5.png"
import sixth from "./images/6.png"

export default function App() {
  const [favoriteList, setFavoriteList] = useState(() => {
    const storedFavorite = localStorage.getItem("favoriteList");
    return storedFavorite ? JSON.parse(storedFavorite) : [];
  });
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

  const handleAddToFavorite = (product) => {
    setFavoriteList((prevList) => {
      const isFavorite = prevList.some((item) => item.id === product.id);
      if (isFavorite) {
        return prevList.filter((item) => item.id !== product.id);
      } else {
        return [...prevList, product];
      }
    });
  };

  const handleRemoveFromFavorites = (productId) => {
    setFavoriteList((prevList) => prevList.filter((item) => item.id !== productId));
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoaderVisible(false),
    });
    tl.from(".loader .first", {
      x: -700,
      duration: 2,
      opacity: 0,
      stagger: -0.2,
    });
    tl.from(
      ".loader .second",
      {
        x: 700,
        duration: 2,
        opacity: 0,
        stagger: 0.2,
      },
      0
    );
    tl.from(
      ".firstimg",
      {
        x: -50,
        duration: 2,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.inOut",
      },
    );
    tl.from(
      ".secondimg",
      {
        y: -50,
        duration: 2,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.inOut",
      },
      3
    );
    tl.from(
      ".firstText",
      {
        x: -1500,
        duration: 2,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.inOut",
      },
      1
    );

    tl.to(loaderRef.current, {
      x: window.innerWidth,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <div>
      {isLoaderVisible && (
        <div ref={loaderRef} className="w-[100%] h-[100%] fixed  z-50 mainloader" >
          <div className="flex fixed top-5 left-5">
            <div className="firstText text-[5vw] md:text-[3vw] text-red-700 carter-one-regular">E</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-orange-700 carter-one-regular">-</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-yellow-700 carter-one-regular">C</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-green-700 carter-one-regular">O</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-blue-700 carter-one-regular">M</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-purple-700 carter-one-regular">M</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-pink-700 carter-one-regular">E</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-amber-800 carter-one-regular">R</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-cyan-600 carter-one-regular">C</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-teal-600 carter-one-regular">E</div>
          </div>
          <div className="flex fixed bottom-5 right-5 ">
            <div className="firstText text-[5vw] md:text-[3vw] text-red-700 carter-one-regular">M</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-orange-700 carter-one-regular">A</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-yellow-700 carter-one-regular">A</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-green-700 carter-one-regular">Z</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-blue-700 carter-one-regular">-</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-purple-700 carter-one-regular">S</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-pink-700 carter-one-regular">H</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-amber-800 carter-one-regular">A</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-cyan-600 carter-one-regular">K</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-teal-600 carter-one-regular">E</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-gray-700 carter-one-regular">E</div>
            <div className="firstText text-[5vw] md:text-[3vw] text-rose-500 carter-one-regular">L</div>
          </div>

          <div className="flex justify-center items-center w-[100%] h-[100%] carter-one-regular text-[10vw] loader">
            <h1 className="first inline-block overflow-hidden text-red-700">C</h1>
            <h1 className="first inline-block overflow-hidden text-orange-700">L</h1>
            <h1 className="first inline-block overflow-hidden text-yellow-700">I</h1>
            <h1 className="first inline-block overflow-hidden text-green-700">C</h1>
            <h1 className="first inline-block overflow-hidden text-blue-700">K</h1>
            <h1 className="second inline-block overflow-hidden text-purple-700">-</h1>
            <h1 className="second inline-block overflow-hidden text-pink-700">C</h1>
            <h1 className="second inline-block overflow-hidden text-amber-800">A</h1>
            <h1 className="second inline-block overflow-hidden text-cyan-600">R</h1>
            <h1 className="second inline-block overflow-hidden text-teal-600">T</h1>
          </div>
        </div>
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:productId" element={<Details handleAddToFavorite={handleAddToFavorite} favoriteList={favoriteList} />} />
        <Route path="/favorites" element={<Favorite favoriteList={favoriteList} handleRemoveFromFavorites={handleRemoveFromFavorites} />} />
        <Route path="/address" element={<Address />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
        <Route path="/search" element={<SearchPro />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/shipping" element={<ShipAddress />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/searchbar" element={<SearchBar />} />
      </Routes>
    </div>
  );
}
