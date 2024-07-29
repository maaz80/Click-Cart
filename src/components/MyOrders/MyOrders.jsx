import React, { useEffect, useState } from 'react';
import { BiSolidChevronsRight } from 'react-icons/bi';
import { FaDotCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('orderedProducts'));
    if (savedProducts && Array.isArray(savedProducts)) {
      const reversedProducts = savedProducts.reverse();
      setOrderedProducts(reversedProducts);
      setFilteredProducts(reversedProducts);
    }
  }, []);

  useEffect(() => {
    filterOrders();
  }, [filter, orderedProducts]);

  const filterOrders = () => {
    let filtered = orderedProducts;
    const currentDate = new Date();

    if (filter === 'In Progress') {
      filtered = orderedProducts.filter((product) => {
        const orderDate = new Date(product.date);
        const deliveryDate = new Date(orderDate.getTime() + 2 * 24 * 60 * 60 * 1000);
        return currentDate < deliveryDate;
      });
    } else if (filter === 'Delivered') {
      filtered = orderedProducts.filter((product) => {
        const orderDate = new Date(product.date);
        const deliveryDate = new Date(orderDate.getTime() + 2 * 24 * 60 * 60 * 1000);
        return currentDate >= deliveryDate;
      });
    } else if (filter === 'Canceled') {
      filtered = orderedProducts.filter((product) => product.status === 'Canceled');
    }

    setFilteredProducts(filtered);
  };

  const getOrderStatus = (product) => {
    const currentDate = new Date();
    const orderDate = new Date(product.date);
    const deliveryDate = new Date(orderDate.getTime() + 2 * 24 * 60 * 60 * 1000);

    if (product.status === 'Canceled') {
      return 'Canceled';
    } else if (currentDate < deliveryDate) {
      return 'In Progress';
    } else {
      return 'Delivered';
    }
  };

  const handleOrderClick = (product) => {
    // Set flag to suppress victory effect
    sessionStorage.setItem('suppressVictoryEffect', 'true');

    navigate('/orderplaced', { 
      state: { 
        product: { ...product }, 
        paymentMethod: product.paymentMethod || 'Not Available', 
        address: product.address || 'Not Available' 
      } 
    });
  };

  return (
    <div className='min-h-[284px]'>
      <div className='text-2xl text-gray-500 font-semibold marker:l-0 md:ml-2'>
        My Orders
      </div>
      <div className='h-1 w-[100%] bg-gray-500 mt-3'></div>
      <div className='flex gap-1 md:gap-3 mt-5 text-[8px] md:text-sm mb-7'>
        <div className={`border cursor-pointer ${filter === 'All' && 'border-red-600 text-red-600'} rounded-md px-2`} onClick={() => setFilter('All')}>All</div>
        <div className={`border cursor-pointer ${filter === 'In Progress' && 'border-red-600 text-red-600'} rounded-md px-2`} onClick={() => setFilter('In Progress')}>In Progress</div>
        <div className={`border cursor-pointer ${filter === 'Delivered' && 'border-red-600 text-red-600'} rounded-md px-2`} onClick={() => setFilter('Delivered')}>Delivered</div>
        <div className={`border cursor-pointer ${filter === 'Canceled' && 'border-red-600 text-red-600'} rounded-md px-2`} onClick={() => setFilter('Canceled')}>Canceled</div>
      </div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id || product.date} className='w-[100%] md:w-[90%] border rounded-md mt-3 p-1 md:p-3 cursor-pointer' onClick={() => handleOrderClick(product)}>
            <div className='flex gap-5 mb-3 text-[9px] md:text-[12px]'>
              <div className={`border-r px-2 flex items-center ${getOrderStatus(product) === 'In Progress' ? 'bg-red-300' : getOrderStatus(product) === 'Delivered' ? 'bg-green-300' : 'bg-gray-300'} rounded-md gap-2`}>
                <FaDotCircle /> {getOrderStatus(product)}
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
