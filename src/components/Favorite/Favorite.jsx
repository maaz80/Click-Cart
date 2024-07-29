// Favorite.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Favorite = ({ favoriteList, handleRemoveFromFavorites }) => {
  const navigate = useNavigate()
  const handleRemoveClick = (productId) => {
    handleRemoveFromFavorites(productId);
  };
  const handleBuyNow = (item) => {
    navigate('/address', { state: { product: item } })
  }

  return (
    <div className='poppins-regular p-2 md:p-10'>
  <div className='text-2xl text-gray-500 font-semibold marker:l-0 md:ml-2'>
                    My Cart
                </div>
                <div className='h-1 w-[100%] bg-gray-500 mt-3'></div>
      <div className="flex flex-wrap justify-around items-center mt-10">
        {
          favoriteList && favoriteList.length > 0 ?
            favoriteList.map(item => (
              <div key={item.id} className=" border w-[10.5rem] md:w-80 h-72 md:h-[480px] flex flex-col justify-start items-start mb-5 md:p-5 p-1 rounded-3xl shadow-lg bg-slate-100">
                <div className='flex flex-col justify-center  border p-5 rounded-3xl shadow-lg '>
                  <img src={item.image} alt={item.title} className="md:w-60 w-40 h-32 md:h-60" />
                </div>
                <h2 className="font-bold overflow-hidden w-36 md:w-60 py-2 mx-2 md:text-xl">{item.title}</h2>
                <p className="text-gray-500 mx-2 text-[11px] md:text-base">₹{item.price} <span className='line-through ml-1 text-gray-400'>₹{item.price + 2000}</span></p>
                <div className="flex flex-row gap-1 md:gap-3 md:mb-2 mb-2 m-auto">
                  <button onClick={() => handleRemoveClick(item.id)} className='bg-red-500 text-white px-1 py-1 md:px-4 md:py-2 rounded-md mt-5 w-[70px] text-[13px] md:text-lg md:w-[130px]'>Remove</button>
                  <button onClick={()=>handleBuyNow(item)} className='bg-yellow-500 text-white px-1 py-1 md:px-4 md:py-2 rounded-md mt-5 w-[70px] text-[13px] md:text-lg md:w-[130px]'>Buy Now</button>
                </div>
              </div>
            )) :
            <div>Nothing is added!!!!</div>
        }
      </div>
    </div>
  )
}

export default Favorite;
