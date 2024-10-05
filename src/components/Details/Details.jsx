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
  const [limit, setLimit] = useState(6);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState(""); // State for the message text
  const detailsRef = useRef(null);
  const [count, setCount] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
    if (detailsRef.current) {
      detailsRef.current.scrollTop = 0;
    }
    const findProduct = Data.find(item => item.id === parseInt(productId));
    setProduct(findProduct);
    setLoading(false);
  }, [productId]);

  const handleBuyNow = (product) => {
    navigate('/address', { state: { product: product } });
  };

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

  const handleFavoriteClick = (product) => {
    handleAddToFavorite(product);
    const isFavorite = favoriteList.some(item => item.id === product.id);
    setMessageText(isFavorite ? "Removed from favorites!" : "Added to favorites!");
    setShowMessage(true); // Show the message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 2 seconds
    }, 2000);
  };

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
    <div className='bg-gray-100 min-h-[95vh] flex items-center justify-center pb-7 poppins-regular'>
      <div className='bg-white w-[95%] md:w-[85%] gap-5 h-full m-auto p-5 flex md:flex-row flex-col rounded-xl mt-6'>
        {/* Image Compartment */}
        <div className='w-[99%] md:w-[40%] md:h-[600px] h-[320px] border border-gray-400 p-5 flex justify-center items-center rounded-xl bg-gray-100'>
          <img src={product.image} alt={product.title} className='max-w-full max-h-full rounded-xl' />
        </div>

        {/* Details Compartment */}
        <div ref={detailsRef} className='w-[99%] md:w-[60%] border p-5  flex flex-col rounded-xl border-gray-400 md:h-[600px] overflow-scroll scroll-smooth hide-scrollbar'>
          <h1 className='text-2xl font-bold -mb-1'>{product.title}</h1>
          <div className="flex items-center gap-3 h-[65px]">
            <span className='text-lg '>₹{product.price}</span>
            <span className='text-lg  line-through text-gray-400'>₹{product.price + 2000}</span>
            <img className="w-28 md:w-40 mt-[-5px] " src={Star} alt="Rating" />
          </div>
          <div className="mb-5 md:mb-6 w-[100%] md:ml-[-10px]">
            <Service textSize="md:text-sm text-[5px]" iconSize="text-sm md:text-2xl" gap="gap-1 md:gap-3" />
          </div>
          <p className='mb-4 p-2 rounded-xl text-gray-500 text-sm md:text-normal'><span className="font-bold text-gray-700 pr-3">Description: </span>{product.description}</p>
          <p className='mb-4 p-2 rounded-xl text-gray-500 text-sm md:text-normal'><span className="font-bold text-gray-700 pr-3">Features: </span>{product.features}</p>
          <p className='mb-4 p-2 rounded-xl text-gray-500 text-sm md:text-normal'><span className="font-bold text-gray-700 pr-3">Details: </span>{product.details}</p>

          {/* Buttons */}
          <div className="flex md:flex-row flex-col md:gap-5 md:mb-8 mb-5">
            <button onClick={() => handleFavoriteClick(product)} className='bg-red-500 text-white px-4 py-2 rounded-md mt-5'>
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <button onClick={() => handleBuyNow(product)} className='bg-yellow-500 text-white px-4 py-2 rounded-md mt-5'>Buy Now</button>
          </div>

          {/* Suggestions */}
          <div>
            <h1 className="font-bold mb-5 text-xl">Similar products</h1>
            {data.length > 0 && (
              <div className='flex flex-wrap justify-around items-center'>
                {data.slice(0, limit).map(item => (
                    <li onClick={() => navigate(`/details/${item.id}`)} className='relative border w-[10.5rem] md:w-56 h-72 md:h-[330px] flex flex-col justify-start items-start mb-2 md:p-2 p-1 rounded-3xl shadow-md bg-slate-100 poppins-regular '>
                    <div className='flex flex-col justify-center   border p-5 rounded-3xl shadow-lg '>
                        <img className='md:w-40 w-40 h-32 md:h-40' src={item.image} alt={item.id} />
                       
                    </div>
                    <div className='flex flex-col justify-start md:p-3 p-2 w-[100%] '>
                        <h2 className='font-bold overflow-hidden w-36 h-7 '>{item.title}</h2>
                        <div className='flex justify-between w-[100%]'>
                            <h1 >₹{item.price}</h1>
                            <button className='bg-red-500 text-white text-[10px] md:text-[13px] md:px-6 font-semibold px-3 rounded-md' onClick={() => navigate(`/details/${item.id}`)}>Details</button>
                        </div>
                        <img className='mt-[-25px] md:mt-[-28px] ml-[-14px] md:ml[-17px] w-28 md:w-32 ' src={Star} alt="Star" />
                        <div className=' flex absolute bottom-2 md:bottom-1.5 items-center -ml-1'>
                            <img className=' z-10 w-4 md:w-5  animate-none' src={Assured} alt="AssuredLogo" />
                            <span className='text-[10px] text-gray-500'>100% Garanteed</span>
                        </div>
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
      {/* Message */}
      {showMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-2 md:p-4 w-60 text-center rounded-md shadow-lg z-50">
          {messageText}
        </div>
      )}
    </div>
  );
};

export default Details;
