import React from 'react'
import MasterCard from "../../images/MasterCard.png"

const Card = ({ CardFr, CardTo, CardEf }) => {
    return (
        <div className={`card relative  rounded-md overflow-hidden w-[92px] md:w-[80%] flex flex-col justify-between h-12 md:h-40 p-[3.5px] md:p-4 bg-gradient-to-r ${CardFr} ${CardTo} text-white mt-8`}>
            <div className={`absolute opacity-65 rounded-full top-[-30px] right-[-30px] h-[4rem] w-[4rem] md:h-44 md:w-44 ${CardEf}`}></div>
            <div className={`absolute opacity-65 rounded-full bottom-[-48px] md:bottom-[-120px] left-[-30px] md:left-[-50px] h-[4rem] w-[4rem] md:h-44 md:w-44 ${CardEf}`}></div>
            <div className='flex justify-between'>
                <div>
                    <div className='md:text-[10px] text-[6px]'>Current Balance</div>
                    <div className='font-semibold text-[10px] md:text-xl'>₹2,43,000</div>
                </div>
                <div className='z-10 flex flex-col items-center'>
                    <img className='w-[15px] md:w-[30px]' src={MasterCard} alt="" />
                    <div className='text-[4px] md:text-[6px]'>MasterCard</div>
                </div>
            </div>
            <div className='flex justify-between z-10'>
                <div className='text-[6px] md:text-[14px]'>8765 9374 3734 4993</div>
                <div className='text-[6px] md:text-[14px]'>12/29</div>
            </div>
        </div>
    )
}

export default Card
