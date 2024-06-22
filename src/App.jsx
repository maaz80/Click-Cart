import React, { useEffect, useState } from "react";
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

export default function App() {
  const [favoriteList, setFavoriteList] = useState(() => {
    const storedFavorite = localStorage.getItem("favoriteList")
    return storedFavorite ? JSON.parse(storedFavorite) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList))
  }, [favoriteList])

  const handleAddToFavorite = (product) => {
    setFavoriteList((prevList) => {
      const isFavorite = prevList.some(item => item.id === product.id);
      if (isFavorite) {
        return prevList.filter(item => item.id !== product.id);
      } else {
        return [...prevList, product];
      }
    });
  };

  const handleRemoveFromFavorites = (productId) => {
    setFavoriteList((prevList) => prevList.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:productId" element={<Details handleAddToFavorite={handleAddToFavorite} favoriteList={favoriteList} />} />
        <Route path="/favorites" element={<Favorite favoriteList={favoriteList} handleRemoveFromFavorites={handleRemoveFromFavorites} />} />
        <Route path="/address" element={<Address/>}/>
        <Route path="/confirmation" element={<Confirmation/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/orderplaced" element={<OrderPlaced/>}/>
        <Route path="/search" element={<SearchPro/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
      </Routes>
    </div>
  );
}
