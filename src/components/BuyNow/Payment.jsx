import React, { useState, useRef, useEffect } from 'react';
import { BiCreditCard, BiDownArrow, BiRupee, BiWallet } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [showPriceDetails, setShowPriceDetails] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showUpiDetails, setShowUpiDetails] = useState(false);
  const priceDetailsRef = useRef(null);
  const cardDetailsRef = useRef(null);
  const upiDetailsRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = (setter, ref) => {
    setter(prev => !prev);
    if (ref.current) {
      ref.current.style.height = ref.current.scrollHeight ? '0px' : `${ref.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (priceDetailsRef.current) {
      priceDetailsRef.current.style.height = showPriceDetails ? `${priceDetailsRef.current.scrollHeight}px` : '0px';
    }
    if (cardDetailsRef.current) {
      cardDetailsRef.current.style.height = showCardDetails ? `${cardDetailsRef.current.scrollHeight}px` : '0px';
    }
    if (upiDetailsRef.current) {
      upiDetailsRef.current.style.height = showUpiDetails ? `${upiDetailsRef.current.scrollHeight}px` : '0px';
    }
  }, [showPriceDetails, showCardDetails, showUpiDetails]);


  const handleOrderedProduct = () => {
    let savedProducts = JSON.parse(localStorage.getItem("orderedProducts")) || [];
    product.date= new Date().toISOString();

    if (!Array.isArray(savedProducts)) {
      console.error("Saved products is not an array, resetting to an empty array");
      savedProducts = [];
    }

    savedProducts.push(product);
    localStorage.setItem("orderedProducts", JSON.stringify(savedProducts));
    navigate("/orderplaced", { state: { product } });
  };

  return (
    <div>
      {/* Dots */}
      <div className='flex justify-center items-center w-[80%] md:w-[50%] m-auto mt-5'>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] text-center flex items-center justify-center"><TiTick /></span>
        <span className='bg-blue-400 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] flex items-center justify-center"><TiTick /></span>
        <span className='bg-blue-400 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-gray-200 text-[10px] flex items-center justify-center">3</span>
      </div>

      {/* Pricing */}
      <div className='md:w-[60%] w-[95%] border rounded-lg m-auto mt-10 md:mt-20'>
        <div onClick={() => handleToggle(setShowPriceDetails, priceDetailsRef)} className='flex justify-between items-center px-4 cursor-pointer'>
          <div className='flex items-center text-[12px]'>
            <strong className='text-[16px] md:text-lg mr-3 font-bold'>Total Amount</strong>
            <BiDownArrow />
          </div>
          <span className='text-[14px]'>₹{product.price}</span>
        </div>

        <div ref={priceDetailsRef} className={`details ${showPriceDetails ? 'show' : ''}`}>
          <div className='flex justify-between px-4 mt-2'>
            <div>Price (1 item)</div>
            <div className='text-[14px]'>₹{product.price + 2000}</div>
          </div>
          <div className='flex justify-between px-4 mt-2'>
            <div>Discount</div>
            <div className='text-[14px]'>-₹2,000</div>
          </div>
        </div>
      </div>

      {/* Payment Options */}

      {/* Cards */}
      <div className='md:w-[60%] w-[95%] border rounded-lg m-auto mt-10 min-h-[12px]'>
        <div onClick={() => handleToggle(setShowCardDetails, cardDetailsRef)} className='flex items-center justify-between px-4 cursor-pointer'>
          <strong className='text-[16px] md:text-lg mr-3 font-bold flex items-center gap-2'>
            <span><BiCreditCard /></span>Credit / Debit / ATM Card
          </strong>
          <span><BiDownArrow /></span>
        </div>

        <div ref={cardDetailsRef} className={`details ${showCardDetails ? 'show' : ''} flex flex-col md:flex-row w-[90%] m-auto rounded-lg mb-4 mt-2`}>
          <div className='px-4'>
            <div className='text-[13px] mb-1'>Card Number</div>
            <input className='border rounded-sm px-2 w-[284px] md:w-[248px]' type="number" placeholder='XXXX XXXX XXXX XXXX' />
          </div>
          <div className='flex'>
            <div className='px-4 pb-4'>
              <div className='text-[13px] mb-1'>Valid Thru</div>
              <input className='border rounded-sm px-2 w-[126px] md:w-[120px]' type="number" placeholder='MM / YY' />
            </div>
            <div className='px-4 pb-4'>
              <div className='text-[13px] mb-1'>CVV</div>
              <input className='border rounded-sm px-2 w-[126px] md:w-[120px]' type="number" placeholder='CVV' />
            </div>
          </div>
          <div className='mt-5 justify-center items-center ml-20 hidden md:block'>
            <div className='text-3xl opacity-50'><BiCreditCard /></div>
          </div>
        </div>
      </div>

      {/* UPI */}
      <div className='md:w-[60%] w-[95%] border rounded-lg m-auto mt-10 min-h-[32px]'>
        <div onClick={() => handleToggle(setShowUpiDetails, upiDetailsRef)} className='flex items-center justify-between px-4 cursor-pointer'>
          <strong className='text-[16px] md:text-lg mr-3 font-bold flex items-center gap-2'>
            <span><BiWallet /></span>UPI
          </strong>
          <span><BiDownArrow /></span>
        </div>

        <div ref={upiDetailsRef} className={`details ${showUpiDetails ? 'show' : ''} flex flex-col md:flex-row w-[90%] m-auto rounded-lg mb-4 mt-2`}>
          <div className='text-[13px] mb-1 mr-3 py-2'>UPI ID</div>
          <input className='border rounded-sm px-2 w-[284px] py-2' placeholder='Enter your UPI ID' />
        </div>

      </div>

      {/* C.O.D */}
      <div className='md:w-[60%] w-[95%] border rounded-lg m-auto mt-10 min-h-[32px]'>
        <div className='flex items-center justify-between px-4 cursor-pointer'>
          <strong className='text-[16px] md:text-lg mr-3 font-bold flex items-center gap-2'>
            <span><BiRupee /></span>Cash on Delivery
          </strong>
          <span><input className='border rounded-sm px-2' type='checkbox' /></span>
        </div>
      </div>

      {/* Button */}
      <div className='w-[100%] justify-center flex mt-10'>
        <button onClick={handleOrderedProduct} className='bg-yellow-500 text-white px-1 py-2 md:px-4 md:py-2 rounded-md mt-5 text-[16px] md:text-lg md:mt-12 md:w-[60%] w-[95%]'>Place Order</button>
      </div>
    </div>
  );
};

export default Payment;
