import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Data from '../Data/Data'; // Assuming Data is your product list

const SearchPro = () => {
    const navigate = useNavigate()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category')?.toLowerCase() || '';

  const filteredData = Data.filter(item => {
    return item.category?.toLowerCase().includes(category);
  });

  return (
    <div>
      <h1 className='text-center font-serif text-xl bg-gray-300 my-4'>Search Results for "{category}"</h1>
      <div className='flex flex-wrap justify-around items-center'>
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <li onClick={()=>navigate(`/details/${item.id}`)} key={item.id} className='relative border w-[10.5rem] md:w-80 h-72 md:h-[450px] flex flex-col justify-start items-start mb-5 md:p-5 p-1 rounded-3xl shadow-lg bg-slate-100'>
              <div className='flex flex-col justify-center border p-5 rounded-3xl shadow-lg'>
                <img className='md:w-60 w-40 h-32 md:h-60' src={item.image} alt={item.id} />
                <div className='absolute flex bottom-2 left-2 items-end md:left-10'>
                  <span className='text-[10px] text-gray-500'>100% Guaranteed</span>
                </div>
              </div>
              <div className='flex flex-col justify-start md:p-5 p-2'>
                <h2 className='font-bold overflow-hidden w-36 h-7'>{item.title}</h2>
                <div className='flex gap-7 md:gap-20'>
                  <h1>₹{item.price}</h1>
                  <button  className='bg-red-500 text-white text-[10px] md:text-[15px] md:px-9 font-bold px-3 rounded-xl'>Details</button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchPro;
