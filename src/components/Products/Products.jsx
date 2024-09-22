import React, { useEffect, useState } from 'react'
import Data from '../Data/Data'
import Assured from "../../images/Assured.png"
import Star from "../../images/Star.webp"
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(null)
    const [data, setdata] = useState([])
    const [limit, setLimit] = useState(8)
    const navigate = useNavigate()

    async function fetchData() {
        setLoading(true)
        try {
            setdata(Data);
        } catch (error) {
            seterror(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])
    

    const loadmore = () => {
        setLimit(prevLimit => prevLimit + 20)
    }

    return (
        <div className='poppins-regular'>
            {loading && <div>Loading plaese wait......</div>}
            {error && <div>Error:{error.message}</div>}
            {
                !loading && !error && data.length > 0 && (
                    <div className=' flex flex-wrap justify-around items-center'>
                        {
                            data.slice(0, limit).map(item => (
                                <li onClick={() => navigate(`/details/${item.id}`)} className='relative border w-[10.5rem] md:w-80 h-72 md:h-[450px] flex flex-col justify-start items-start mb-2 md:p-5 p-1 rounded-3xl shadow-md bg-slate-100 poppins-regular '>
                                    <div className='flex flex-col justify-center   border p-5 rounded-3xl shadow-lg '>
                                        <img className='md:w-60 w-40 h-32 md:h-60' src={item.image} alt={item.id} />
                                        <div className='absolute flex bottom-2 left-2 items-end  md:left-10'>
                                            <img className=' z-10 w-5  animate-none' src={Assured} alt="AssuredLogo" />
                                            <span className='text-[10px] text-gray-500'>100% Garanteed</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-start md:p-5 p-2 '>
                                        <h2 className='font-bold overflow-hidden w-36 h-7 '>{item.title}</h2>
                                        <div className='flex gap-5 md:gap-20'>
                                            <h1 >₹{item.price}</h1>
                                            <button className='bg-red-500 text-white text-[10px] md:text-[15px] md:px-9 font-bold px-3 rounded-xl' onClick={() => navigate(`/details/${item.id}`)}>Details</button>
                                        </div>
                                        <img className='mt-[-28px] ml-[-14px] md:ml[-17px] w-28 md:w-36' src={Star} alt="Star" />
                                    </div>
                                </li>
                            ))
                        }
                    </div>
                )
            }
            {
                !loading && !error && limit < data.length && (
                    <div className='flex justify-center items-center'>
                        <button onClick={loadmore} className='bg-red-500 text-white rounded-xl text-[15px] px-10 py-1 font-bold mb-3'>Load More</button>
                    </div>
                )
            }
        </div>
    )
}

export default Products
