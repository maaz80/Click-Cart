import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CODPayment = ({handleOrderedProduct}) => {
  const location = useLocation();
  const { product } = location.state || {};
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handlePay = (e) => {
    e.preventDefault();
    if (isChecked) {
      handleOrderedProduct();
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    };

  return (
    <div className='w-[100%] mt-8 poppins-regular flex flex-col justify-around h-[250px]'>
      <h2 className='font-semibold'>Cash on Delivery</h2>
      <p className='mt-5 text-gray-500'>Pay with cash upon delivery. Please ensure you have the exact amount ready as our delivery personnel may not carry change.</p>
      <div className='flex justify-between mt-10 items-center'>
        <div className='flex items-center gap-1'>
          <input type="checkbox" required onChange={handleCheckboxChange} />
          <div className='text-[10px] md:text-[16px]'>Confirm COD Payment</div>
        </div>
        <div>
          <button
            className={`bg-black py-1 px-10 border-none rounded-md text-white cursor-pointer ${isChecked && 'hover:scale-110'} text-[13px] md:text-[20px] ${!isChecked && 'opacity-50 cursor-not-allowed ' }`}
            onClick={handlePay}
            disabled={!isChecked}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CODPayment;
