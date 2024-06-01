import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../Data/Data";
import Service from "../Servicee/Service";
import Star from "../../images/Star.webp";
import { BiChat } from "react-icons/bi";
import Assured from "../../images/Assured.png";

const Details = ({ handleAddToFavorite, favoriteList }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [limit, setLimit] = useState(4);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const detailsRef = useRef(null); // Ref for the details compartment

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever productId changes
    if (detailsRef.current) {
      detailsRef.current.scrollTop = 0; // Scroll details compartment to top
    }
    const findProduct = Data.find(item => item.id === parseInt(productId));
    setProduct(findProduct);
    setLoading(false);
  }, [productId]);

  const handleBuyNow = (product) => {
    navigate('/address', { state: { product: product } })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(Data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const isFavorite = favoriteList.some(item => item.id === product.id);

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center pb-7'>
      <div className='bg-white w-[95%] md:w-[85%] gap-5 h-full m-auto p-5 flex md:flex-row flex-col rounded-xl mt-6'>
        {/* Image Compartment */}
        <div className='w-[99%] md:w-[40%] md:h-[600px] h-[320px] border border-gray-400 p-5 flex justify-center items-center rounded-xl bg-gray-100'>
          <img src={product.image} alt={product.title} className='max-w-full max-h-full rounded-xl' />
        </div>

        {/* Details Compartment */}
        <div ref={detailsRef} className='w-[99%] md:w-[60%] border p-5 flex flex-col rounded-xl border-gray-400 md:h-[600px] overflow-scroll scroll-smooth hide-scrollbar'>
          <h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
          <div className="flex gap-3 ">
            <span className='text-lg mb-4'>₹{product.price}</span>
            <span className='text-lg mb-4 line-through text-gray-400'>₹{product.price + 2000}</span>
            <img className="w-28 mt-[-23px]" src={Star} alt="Rating" />
          </div>
          <div className="mb-5 md:my-6 w-[100%] md:ml-[-10px]">
            <Service textSize="md:text-sm text-[5px]" iconSize="text-sm md:text-2xl" gap="gap-1 md:gap-3" />
          </div>
          <p className='mb-4 p-2 rounded-xl text-gray-500 text-sm md:text-normal'><span className="font-bold text-gray-700 pr-3">Description: </span>{product.description}</p>
          <p className='mb-4 p-2 rounded-xl text-gray-500 text-sm md:text-normal'><span className="font-bold text-gray-700 pr-3">Features: </span>{product.features}</p>
          <p className='mb-4 p-2 rounded-xl text-gray-500 text-sm md:text-normal'><span className="font-bold text-gray-700 pr-3">Details: </span>{product.details}</p>

          {/* Buttons */}
          <div className="flex md:flex-row flex-col md:gap-5 md:mb-8 mb-5">
            <button onClick={() => handleAddToFavorite(product)} className='bg-red-500 text-white px-4 py-2 rounded-md mt-5'>
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <button onClick={()=>handleBuyNow(product)} className='bg-yellow-500 text-white px-4 py-2 rounded-md mt-5'>Buy Now</button>
          </div>

          {/* Suggestions */}
          <div>
            <h1 className="font-bold mb-5 text-xl">Similar products</h1>
            {data.length > 0 && (
              <div className='flex flex-wrap justify-around items-center'>
                {data.slice(0, limit).map(item => (
                  <li key={item.id} onClick={() => navigate(`/details/${item.id}`)} className='relative border w-[7.5rem] md:w-80 h-[14rem] md:h-[480px] flex flex-col justify-start items-start mb-5 md:p-5 p-1 rounded-3xl shadow-lg bg-slate-100'>
                    <div className='flex flex-col justify-center border p-5 rounded-3xl shadow-lg'>
                      <img className='md:w-60 w-40 h-[5rem] md:h-64 ' src={item.image} alt={item.title} />
                      <div className='absolute flex bottom-2 left-2 items-end md:left-10'>
                        <img className='z-10 w-5' src={Assured} alt="AssuredLogo" />
                        <span className='md:text-[10px] text-[8px] text-gray-500'>100% Guaranteed</span>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start md:p-5 p-2'>
                      <h2 className='font-bold text-sm md:text-xl overflow-hidden w-24 md:w-40 h-5 md:h-7 md:mb-1'>{item.title}</h2>
                      <div className='flex gap-3 md:gap-20 text-[10px] md:text-[17px] mt-1'>
                        <h1>₹{item.price}</h1>
                        <button className='bg-red-500 text-white text-[7px] md:text-[15px] md:px-9 font-bold px-3 rounded-xl'>Details</button>
                      </div>
                      <img className='mt-[-20px] md:mt-[-24px] ml-[-11px] md:ml[-17px] w-28 md:w-36' src={Star} alt="Star" />
                    </div>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Floating Icon */}
      <div className="fixed bottom-7 right-7 md:bottom-14 md:right-14 bg-red-400 p-4 rounded-[50%] text-xl ic-float z-500">
        <BiChat />
      </div>
    </div>
  );
};

export default Details;
