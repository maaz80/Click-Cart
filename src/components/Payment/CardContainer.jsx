import React from 'react'
import Card from '../Payment/Card'
import { BiPlusCircle } from 'react-icons/bi'

const CardContainer = () => {
    return (
        <div className='w-[100%] md:w-[40%]  flex flex-row md:flex-col justify-between'>
            <Card CardFr="from-blue-600 " CardTo="to-blue-400" CardEf="bg-blue-800" />
            <Card CardFr="from-pink-600 " CardTo="to-pink-400" CardEf="bg-pink-800" />
            <div className={`card relative  rounded-md overflow-hidden w-[92px] md:w-[80%] flex  justify-center items-center h-12 md:h-40 p-4 bg-gray-100 text-gray-500 mt-8`}>
                <div className={`absolute opacity-65 rounded-full top-[-30px] right-[-30px] h-[4rem] w-[4rem] md:h-44 md:w-44 bg-gray-200`}></div>
                <div className={`absolute opacity-65 rounded-full bottom-[-48px] md:bottom-[-120px] left-[-30px] md:left-[-50px] h-[4rem] w-[4rem] md:h-44 md:w-44 bg-gray-200`}></div>
                <div className='text-gray-800 flex z-10 items-center justify-center gap-1'>
                    <span className='md:text-sm font-semibold flex items-center text-[6px]'>Add New</span><BiPlusCircle />
                    </div>
            </div>
        </div>
    )
}

export default CardContainer
