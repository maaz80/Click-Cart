import React, { useEffect, useState } from 'react';
import { BiSolidChevronsRight } from 'react-icons/bi';
import { FaDotCircle } from 'react-icons/fa';

const MyOrders = () => {
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('orderedProducts'));
    if (savedProducts && Array.isArray(savedProducts)) {
      setOrderedProducts(savedProducts);
    }
  }, []);

  return (
    <div className='min-h-[284px]'>
      <div className='text-2xl text-gray-500 font-semibold marker:l-0 md:ml-2 '>
        My Orders
      </div>
      <div className='h-1 w-[100%] bg-gray-500 mt-3'></div>
      <div className='flex gap-1 md:gap-3 mt-5 text-[8px] md:text-sm'>
        <div className='border border-red-600 text-red-600 rounded-md px-2'>All</div>
        <div className='border rounded-md px-2'>In Progress</div>
        <div className='border rounded-md px-2'>Delivered</div>
        <div className='border rounded-md px-2'>Canceled</div>
      </div>
      {orderedProducts.length > 0 ? (
        orderedProducts.map((product) => (
          <div key={product.id} className='w-[100%] md:w-[90%] border rounded-md mt-10 p-1 md:p-3'>
            <div className='flex gap-5 mb-3 text-[9px] md:text-[12px]'>
              <div className='border-r px-2 flex items-center bg-red-300 rounded-md'>
                <FaDotCircle /> In Progress
              </div>
              <div>{product.date ? new Date(product.date).toLocaleDateString() : "No date"}</div>
            </div>
            <div className='flex justify-between items-start'>
              <div className='flex'>
                <div>
                  <img className="w-[40px] md:w-[60px] rounded-md" src={product.image} alt="Product" />
                </div>
                <div className='text-[10px] md:text-sm ml-4'>
                  <div className='font-bold text-red-900'>Order ID: {product.id}</div>
                  <div>{product.title}</div>
                  <div className='font-bold'>₹{product.price}</div>
                </div>
              </div>
              <div className='mt-2'>
                <BiSolidChevronsRight />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='flex justify-center items-center h-[377px]'>
          <p>No orders found.</p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
