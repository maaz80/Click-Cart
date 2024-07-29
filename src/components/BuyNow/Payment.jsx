import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { useLocation, useNavigate } from 'react-router-dom';
import CardContainer from '../Payment/CardContainer';
import CardPay from '../Payment/CardPay';
import PayPalPayment from '../Payment/Paypal';
import UPIPayment from '../Payment/UPI';
import CODPayment from '../Payment/COD';
import OrderSummary from '../Payment/OrderSumary';

const Payment = () => {
  const location = useLocation();
  const { product, address } = location.state || {}; // Corrected
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');

  const handleOrderedProduct = () => {
    let savedProducts = JSON.parse(localStorage.getItem('orderedProducts')) || [];
    const orderDate = new Date().toISOString();
    product.date = orderDate;

    if (!Array.isArray(savedProducts)) {
      console.error('Saved products is not an array, resetting to an empty array');
      savedProducts = [];
    }
    product.address = address; // Ensure address is from the correct source
    product.paymentMethod = selectedPaymentMethod;

    savedProducts.push(product);
    localStorage.setItem('orderedProducts', JSON.stringify(savedProducts));
    localStorage.setItem('orderDate', orderDate);
    navigate('/orderplaced', { state: { product, paymentMethod: selectedPaymentMethod, address } });

  };

  const renderPaymentComponent = () => {
    switch (selectedPaymentMethod) {
      case 'creditCard':
        return <CardPay handleOrderedProduct={handleOrderedProduct} />;
      case 'paypal':
        return <PayPalPayment handleOrderedProduct={handleOrderedProduct} />;
      case 'upi':
        return <UPIPayment handleOrderedProduct={handleOrderedProduct} />;
      case 'cod':
        return <CODPayment handleOrderedProduct={handleOrderedProduct} />;
      default:
        return <CardPay handleOrderedProduct={handleOrderedProduct} />;
    }
  };

  return (
    <div className='poppins-regular'>
      {/* Dots */}
      <div className='flex justify-center items-center w-[80%] md:w-[50%] m-auto mt-5'>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] text-center flex items-center justify-center"><TiTick /></span>
        <span className='bg-blue-400 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] flex items-center justify-center"><TiTick /></span>
        <span className='bg-blue-400 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-gray-200 text-[10px] flex items-center justify-center">3</span>
      </div>

      {/* Payment Options */}
      <div className='w-[95%] rounded-md border m-auto mt-10 poppins-regular'>
        <div className='w-[100%] p-5 flex m-auto gap-3 flex-col-reverse md:flex-row'>
          <div className='w-[100%] md:w-[69%] rounded-md bg-white mt-[50px] md:mt-0'>
            <h2 className='font-bold '>Select Payment Method</h2>
            <div className='flex font-medium gap-8 text-[13px] md:text-[18px] md:gap-16 mt-7 '>
              <span
                className={`cursor-pointer hover:scale-110 ${selectedPaymentMethod === 'creditCard' ? 'text-blue-500 underline' : ''}`}
                onClick={() => setSelectedPaymentMethod('creditCard')}
              >
                Credit Card
              </span>
              <span
                className={`cursor-pointer hover:scale-110 ${selectedPaymentMethod === 'paypal' ? 'text-blue-500 underline' : ''}`}
                onClick={() => setSelectedPaymentMethod('paypal')}
              >
                PayPal
              </span>
              <span
                className={`cursor-pointer hover:scale-110 ${selectedPaymentMethod === 'upi' ? 'text-blue-500 underline' : ''}`}
                onClick={() => setSelectedPaymentMethod('upi')}
              >
                UPI
              </span>
              <span
                className={`cursor-pointer hover:scale-110 ${selectedPaymentMethod === 'cod' ? 'text-blue-500 underline' : ''}`}
                onClick={() => setSelectedPaymentMethod('cod')}
              >
                C.O.D
              </span>
            </div>
            <div className="flex">
              <div className='w-[100%] md:w-[90%] m-auto gap-5 flex flex-col md:flex-row'>
                <CardContainer />
                <div className='w-[100%] md:w-[50%]'>
                  {renderPaymentComponent()}
                </div>
              </div>
            </div>
          </div>
          <div className='w-[100%] md:w-[30%] p-2 rounded-md bg-gray-50 flex flex-col justify-between items-center mt-0'>
            <OrderSummary product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
