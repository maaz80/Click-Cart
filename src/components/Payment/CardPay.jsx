import React, { useState } from 'react'
import Visa from "../../images/Visa.png"
import MasterCard from "../../images/MasterCard.png"
import Credit from "../../images/Credit.png"
import { useLocation, useNavigate , } from 'react-router-dom'
const CardPay = ({handleOrderedProduct}) => {
 const location = useLocation()
 const {product} = location.state || {}
 const navigate = useNavigate()
 const [isChecked, setisCheck] = useState(false)
 const [CardNo, setCardNo] = useState('')
 const [Name, setName] = useState('')
 const [Expiry, setExpiry] = useState('')
 const [Cvv, setCvv] = useState('')
 const [ispassword, setispassword] = useState(true)

 const handlePay=(e)=>{
    e.preventDefault();
    if(CardNo.trim() && Name.trim() && Expiry.trim() && Cvv.trim() && isChecked) {
        handleOrderedProduct();
    }
 }
 const handleCardNoChange=(e)=>{
    let value = e.target.value;
    setCardNo(value)
    if(value === ''){
        setisCheck(false)
    }
 }
 const handleNameChange=(e)=>{
    let value = e.target.value;
    setName(value)
    if(value === ''){
        setisCheck(false)
    }
 }
 const handleExpiryChange=(e)=>{
    let value = e.target.value;
    setExpiry(value)
    if(value === ''){
        setisCheck(false)
    }
 }
 const handleCvvChange=(e)=>{
    let value = e.target.value;
    setCvv(value)
    if(value === ''){
        setisCheck(false)
    }
 }
 const handleCheckBoxChange=(e)=>{
    setisCheck(e.target.checked)
 }
 const handleCheckBoxClick=()=>{
setisCheck(!isChecked)
 }
 const handleNumber=()=>{
    setispassword(!ispassword)
 }
    
    return (
        <div className='w-[100%] mt-8 poppins-regular flex flex-col justify-around h-[450px]'>
            <h2 className='font-semibold'>Pay Using Credit Card</h2>
            <div className='flex gap-8 h-7 mt-5'>
                <img src={MasterCard} alt="Card" width='39' height='17px' />
                <img src={Visa} alt="Card" width='39' height='17px' />
                <img src={Credit} alt="Card" width='39' height='17px' />
            </div>
            <div>
                <div className='w-[100%] mt-10'>
                    <div className='text-sm text-gray-300 mb-3'>Credit Card</div>
                    <input type={`${ispassword ? 'password' : 'Number'}`} placeholder='XXXX XXXX XXXX XXXX' className=' w-[90%] ' required value={CardNo} onChange={handleCardNoChange}/>
                    <div className='w-[10%] relative'>
                    <img src={MasterCard} alt="" className='w-10 bottom-0 right-[-269px] md:right-[-385px] absolute' onClick={handleNumber}/>

                    </div>
                    <div className='w-[100%] h-[1px] bg-gray-300'></div>
                </div>
                <div className='w-[100%] mt-12'>
                    <div className='text-sm text-gray-300 mb-3'>Name</div>
                    <input type="text" placeholder='Holder Name' className=' w-[100%] border-none' required value={Name} onChange={handleNameChange}/>
                    <div className='w-[100%] h-[0.5px] bg-gray-300'></div>
                </div>
                <div className='w-[100%] mt-12 m-auto flex justify-between'>
                    <div className='w-[49%]'>
                        <div className='text-sm text-gray-300 mb-3'>Expiration Date</div>
                        <input type="text" placeholder='Month/Year' className=' w-[100%] border-none' required value={Expiry} onChange={handleExpiryChange}/>
                        <div className='w-[100%] h-[1px] bg-gray-300'></div>
                    </div>
                    <div className='w-[49%]'>
                        <div className='text-sm text-gray-300 mb-3'>CVV</div>
                        <input type="text" placeholder='CVV Number' className=' w-[100%] border-none' required value={Cvv} onChange={handleCvvChange}/>
                        <div className='w-[100%] h-[1px] bg-gray-300'></div>
                    </div>
                </div>
                <div className='flex justify-between mt-10 items-center'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" onChange={handleCheckBoxChange} onClick={handleCheckBoxClick} checked={isChecked} disabled={!CardNo.trim() || !Name.trim() || !Expiry.trim() || !Cvv.trim()} required  />
                        <div>Save Card</div>
                    </div>
                    <div>
                        <button className={`bg-black py-1 px-10 border-none rounded-md text-white cursor-pointer ${isChecked && 'hover:scale-110'} ${!isChecked && 'opacity-50 cursor-not-allowed '}`} disabled={!isChecked} onClick={handlePay}>Pay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPay