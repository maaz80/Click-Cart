// Address.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Address = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { product, address: formData } });
  };

  return (
    <div className='poppins-regular'>
      
      {/* Dots */}
      <div className='flex justify-center items-center w-[80%] md:w-[50%] m-auto mt-5'>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-blue-400 text-[10px] text-center flex items-center justify-center">1</span>
        <span className='bg-gray-200 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-gray-200 text-[10px] flex items-center justify-center">2</span>
        <span className='bg-gray-200 md:h-2 h-1 w-[40%] m-auto rounded-sm'></span>
        <span className="dot1 w-4 h-4 md:w-6 md:h-6 rounded-[50%] bg-gray-200 text-[10px] flex items-center justify-center">3</span>
      </div>

      {/* Address Box */}
      <form onSubmit={handleSubmit} className='w-[90%] md:w-[80%] border m-auto mt-6 md:mt-10 p-5 gap-6 rounded-md'>
      <div className='text-2xl text-gray-500 font-semibold marker:l-0 md:ml-2'>
                            Shipping Address
                        </div>
                        <div className='h-1 w-[100%] bg-gray-500 mt-3 mb-10'></div>
        <div className="name flex flex-col md:flex-row w-[100%] mb-4 gap-4">
          <div className='flex flex-col gap-1 w-[90%] md:w-[50%]'>
            <span className='text-sm md:text-base'>First Name</span>
            <input
              className='border w-[110%] md:w-[95%] rounded-lg border-gray-400 pl-2 h-10'
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%] md:w-[50%]'>
            <span className='text-sm md:text-base'>Last Name</span>
            <input
              className='border w-[110%] md:w-[95%] rounded-lg border-gray-400 pl-2 h-10'
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Contact */}
        <div className="contact flex flex-col md:flex-row w-[100%] mb-4 gap-4">
          <div className='flex flex-col gap-1 w-[90%] md:w-[50%]'>
            <span className='text-sm md:text-base'>Email ID</span>
            <input
              className='border w-[110%] md:w-[95%] rounded-lg border-gray-400 pl-2 h-10'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%] md:w-[50%]'>
            <span className='text-sm md:text-base'>Phone Number</span>
            <input
              className='border w-[110%] md:w-[95%] rounded-lg border-gray-400 pl-2 h-10'
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="contact flex flex-col md:flex-row w-[100%] mb-4 gap-4">
          <div className='flex flex-col gap-1 w-[90%] md:w-[50%]'>
            <span className='text-sm md:text-base'>Address</span>
            <input
              className='border w-[110%] md:w-[95%] rounded-lg border-gray-400 pl-2 h-10'
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%] md:w-[50%]'>
            <span className='text-sm md:text-base'>Postal Code</span>
            <input
              className='border w-[110%] md:w-[95%] rounded-lg border-gray-400 pl-2 h-10'
              type="number"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Button */}
        <div className='w-[100%] flex justify-center'>
          <button type="submit" className='bg-yellow-500 text-white px-1 py-2 md:px-4 md:py-2 rounded-md mt-5 w-[100%] text-[16px] md:text-lg md:w-[130px]'>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
