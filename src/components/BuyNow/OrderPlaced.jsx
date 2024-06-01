import React from 'react'
import { TiTick } from 'react-icons/ti'

const OrderPlaced = () => {
  return (
    <div>

          {/* Dots */}
          <div className='flex justify-center items-center w-[80%] md:w-[50%] m-auto mt-5'>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] text-center flex items-center justify-center"><TiTick /></span>
        <span className='bg-blue-400 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] flex items-center justify-center"><TiTick /></span>
        <span className='bg-blue-400 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] flex items-center justify-center"><TiTick/></span>
      </div>

      <div className='flex justify-center items-center mt-[250px] font-serif text-xl gap-1 scaleup'>
        <div className=''>Order Placed</div>
        <div className='h-7 w-7 relative flex items-center justify-center' >
          <img className='ic-rotate' src="https://www.pngfind.com/pngs/b/224-2240817_sale-vector-star-price-tag-in-png-transparent.png" alt="" />
          <span className='z-auto top-[4px] font-extralight text-lg  absolute'><TiTick /></span>
        </div>
      </div>
    </div>
  )
}

export default OrderPlaced
