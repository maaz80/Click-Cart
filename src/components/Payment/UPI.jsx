import React, { useState } from 'react';
import UPI from "../../images/UPI.png";
import { useLocation, useNavigate } from 'react-router-dom';

const UPIPayment = ({handleOrderedProduct}) => {
    const location = useLocation()
    const { product } = location.state || {}
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false)
    const [UpiId, setUpiId] = useState('')

    const handlePay = (e) => {
        e.preventDefault()
        if (UpiId.trim() && isChecked) {
            handleOrderedProduct();
        } 
    }
    const handleUpi = (e) => {
        let value = e.target.value;
        setUpiId(value)
        if (value === '') {
            setIsChecked(false)
        }
    }
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked)
    }
    const handleCheckBoxClick = () => {
            setIsChecked(!isChecked)
    }


    return (
        <div className={`w-[100%] mt-8 poppins-regular flex flex-col justify-around h-[250px] md:h-[200px] `}>
            <h2 className='font-semibold'>Pay Using UPI</h2>
            <div className='flex gap-8 h-7 mt-5'>
                <img src={UPI} alt="UPI" width='60' height='20px' />
            </div>
            <div>
                <div className='w-[100%] mt-10'>
                    <div className='text-sm text-gray-300 mb-3'>UPI ID</div>
                    <input type="text" placeholder='Enter UPI ID' className='w-[90%] border-b-2 border-gray-300' required value={UpiId} onChange={handleUpi} />
                </div>
                <div className='flex justify-between mt-10 items-center'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" required onChange={handleCheckboxChange} onClick={handleCheckBoxClick} checked={isChecked} disabled={!UpiId.trim()}/>
                        <div className='text-[13px] md:text-[18px]'>Save UPI ID</div>
                    </div>
                    <div>
                        <button className={`bg-black py-1 px-10 border-none rounded-md text-white cursor-pointer ${isChecked && 'hover:scale-110'} text-[13px] md:text-[18px] ${!isChecked && 'opacity-50 cursor-not-allowed'}`} onClick={handlePay} disabled={!isChecked}>
                            Pay with UPI
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UPIPayment;
