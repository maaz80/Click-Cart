// Confirmation.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';

const Confirmation = () => {
    const location = useLocation();
    const { product, address } = location.state || {};
    const navigate = useNavigate();

    const handleSubmit=(item)=>{
navigate('/payment' , {state:{product:item ,address}})
    }
    return (
        <div className='poppins-regular'>
            {/* Dots */}
            <div className='flex justify-center items-center w-[80%] md:w-[50%] m-auto mt-5'>
                <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] text-center flex items-center justify-center"><TiTick /></span>
                <span className='bg-blue-400 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
                <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-gray-200 text-[10px] flex items-center justify-center">2</span>
                <span className='bg-gray-200 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
                <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-gray-200 text-[10px] flex items-center justify-center">3</span>
            </div>

            {/* Price Details */}
            {product && address && (
                <div className='w-[90%] flex flex-col md:flex-row m-auto h-[50%] mt-5 gap-4 '>
                    <div className='h-[50%] w-[100%] md:w-[30%] border rounded-xl p-3'>
                        <img className='' src={product.image} alt="Product" />
                    </div>
                    <div className='border rounded-xl gap-5 flex flex-col text-sm md:text-2xl p-4 md:w-[70%]'>
                        <h1 className='font-extrabold text-lg md:text-3xl'>Price Details</h1>
                        <div className='flex justify-between'>
                            <div>Price (1 item)</div>
                            <div>₹{product.price + 2000}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Discount</div>
                            <div>-₹2,000</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Delivery Charges</div>
                            <div>₹<span className='line-through'>40</span> <span className='text-green-600'>FREE Delivery</span></div>
                        </div>
                        <div className='flex justify-between font-bold border-t border-b'>
                            <div className='py-2'>Total Amount</div>
                            <div className='py-2'>₹{product.price}</div>
                        </div>

                        {/* Button Lap */}
                        <div className='w-[100%]  justify-center hidden md:block'>
                            <button onClick={()=>handleSubmit(product)} className='bg-yellow-500 text-white px-1  py-1 md:px-4 md:py-2 rounded-md mt-5 w-[100%] text-sm md:text-lg md:mt-12'>Continue</button>
                        </div>
                    </div>
                </div>
            )}
            {/* Address Details */}
            <div className='w-[90%] flex flex-col  m-auto h-[50%] mt-5 gap-4 border p-4 rounded-xl'>
                <h1 className='font-extrabold text-lg md:text-3xl '>Address Details</h1>
                <div className='text-sm md:text-lg'>
                    <p><strong>First Name:</strong> {address.firstName}</p>
                    <p><strong>Last Name:</strong> {address.lastName}</p>
                    <p><strong>Email:</strong> {address.email}</p>
                    <p><strong>Phone:</strong> {address.phone}</p>
                    <p><strong>Address:</strong> {address.address}</p>
                    <p><strong>Postal Code:</strong> {address.postalCode}</p>
                </div>

                {/* Button  Mobile*/}
                <div className='w-[100%] flex justify-center md:hidden'>
                    <button onClick={()=>handleSubmit(product)} className='bg-yellow-500 text-white px-1 py-2 md:px-4 md:py-2 rounded-md mt-5 w-[100%] text-[16px] md:text-lg md:w-[130px]'>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
