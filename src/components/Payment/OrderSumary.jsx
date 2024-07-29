import React from 'react'
const OrderSummary = ({product}) => {
  return (
    <div className='poppins-regular'>
      <h2 className='font-semibold text-xl text-center'>Order Summary</h2>
      <div className='flex flex-col justify-center items-center text-lg'>
        <div className='w-[300px] h-[300px]'>
        <img src={product.image} alt="Food" width={200} className='m-auto mt-8' />
        </div>
        <div className='mt-[-20px]'>{product.title}</div>
        <div className='font-bold  text-2xl'>₹{product.price}</div>
      </div>
      <div className='mt-10 flex flex-col justify-between h-[200px] px-2'>
        <div className='flex justify-between'>
          <div>Delivery time:</div>
          <div className=''>2 days</div>
        </div>
        <div className='flex justify-between'>
          <div>Quantity:</div>
          <div className=''>1</div>
        </div>
        <div className='flex justify-between'>
          <div>Discount:</div>
          <div className='text-green-500 '>`-25%`</div>
        </div>
        <div className='w-[100%] h-[1px] bg-gray-300'></div>
        <div className='flex justify-between'>
          <div className='font-bold text-xl'>Total:</div>
          <div className='font-bold text-xl '>₹{product.price - (product.price *0.25)}</div>
        </div>
        <div className='w-[100%] h-[1px] bg-gray-300'></div>
      </div>
    </div>
  )
}

export default OrderSummary