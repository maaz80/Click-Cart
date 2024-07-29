import React, { useEffect, useState } from 'react'
import PayPal from "../../images/PayPal.png"
import { useLocation, useNavigate } from 'react-router-dom';


const PayPalPayment = ({handleOrderedProduct}) => {
    const location = useLocation();
    const { product } = location.state || {};
    const navigate = useNavigate();
    const [email, setemail] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const handleemailchange = (e) => {
        let value = e.target.value
        setemail(value)
        if (value === '') {
            setIsChecked(false)
        }
    }
    const handlecheckboxchange = (e) => {
        setIsChecked(e.target.checked)
    }

    const handlePay = (e) => {
        e.preventDefault();
        if (email.trim() && isChecked) {
            handleOrderedProduct();
        }
    };

    const handleCheckbox = () => {
        setIsChecked(!isChecked)
    }


    return (
        <div className='w-[100%] mt-8 poppins-regular flex flex-col justify-around h-[300px] md:h-[200px]'>
            <h2 className='font-semibold'>Pay Using PayPal</h2>
            <div className='flex gap-8 h-12 mt-5'>
                <img src={PayPal} alt="PayPal" width='60' height='20px' />
            </div>
            <div>
                <div className='w-[100%] mt-10'>
                    <div className='text-sm text-gray-300 mb-3'>PayPal Email</div>
                    <input type="email" placeholder='Enter PayPal Email' className='w-[100%] border-b-2 border-gray-300' required value={email} onChange={handleemailchange} />
                </div>
                <div className='flex justify-between mt-10 items-center w-[100%]'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" checked={isChecked} onChange={handlecheckboxchange} disabled={!email.trim()} onClick={handleCheckbox} />
                        <div className='text-[10px]'>Save PayPal Account</div>
                    </div>
                    <div>
                        <button className={`bg-black py-1 md:px-10 px-4 text-[13px] md:text-[20px] border-none rounded-md text-white cursor-pointer ${isChecked && 'hover:scale-110'}'  ${!isChecked && 'opacity-50 cursor-not-allowed'}`} disabled={!isChecked} onClick={handlePay}>Pay with PayPal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayPalPayment