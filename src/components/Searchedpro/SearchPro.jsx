import React from 'react';
import { useLocation } from 'react-router-dom';
import Data from '../Data/Data'; 
import Assured from "../../images/Assured.png";
import Star from "../../images/Star.webp";


const SearchPro = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category')?.toLowerCase() || '';

    const filteredData = Data.filter(item => 
        item.category?.toLowerCase().includes(category)
    );

    return (
        <div className='poppins-regular'>
            <h1 className='text-center font-serif text-lg md:text-2xl my-4 trade-winds-regular'>
                Search Results for "{category}"
            </h1>
            <div className='flex flex-wrap justify-around items-center'>
                {filteredData.length > 0 ? (
                    filteredData.map(item => (
                        <li key={item.id} className='relative border w-[10.5rem] md:w-80 h-72 md:h-[450px] flex flex-col justify-start items-start mb-5 md:p-5 p-1 rounded-3xl shadow-lg bg-slate-100'>
                            <div className='flex flex-col justify-center border p-5 rounded-3xl shadow-lg'>
                                <img className='md:w-60 w-40 h-32 md:h-60' src={item.image} alt={item.title} />
                                <div className='absolute flex bottom-2 left-2 items-end md:left-10'>
                                    <img className=' z-10 w-5 animate-none' src={Assured} alt="AssuredLogo" />
                                    <span className='text-[10px] text-gray-500'>100% Guaranteed</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-start md:p-5 p-2'>
                                <h2 className='font-bold overflow-hidden w-36 h-7'>{item.title}</h2>
                                <div className='flex gap-7 md:gap-20'>
                                    <h1>₹{item.price}</h1>
                                    <button className='bg-red-500 text-white text-[10px] md:text-[15px] md:px-9 font-bold px-3 rounded-xl'>
                                        Details
                                    </button>
                                </div>
                                <img className='mt-[-28px] ml-[-14px] md:ml[-17px] w-28 md:w-36' src={Star} alt="Star" />
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
