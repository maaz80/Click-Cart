import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const OrderPlaced = () => {
    const location = useLocation();
    const { product, paymentMethod, address } = location.state || {};

    const [showVictory, setShowVictory] = useState(true);

    useEffect(() => {
        // Check sessionStorage to determine if victory effect should be shown
        const suppressVictoryEffect = sessionStorage.getItem('suppressVictoryEffect');
        if (suppressVictoryEffect === 'true') {
            setShowVictory(false);
            sessionStorage.removeItem('suppressVictoryEffect'); 
        } else {
            const timer = setTimeout(() => {
                setShowVictory(false);
            }, 1000); 

            return () => clearTimeout(timer); 
        }
    }, []);

    const orderDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    
    const deliveryDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getOrderStatus = () => {
        const orderDate = new Date(product.date);
        const currentDate = new Date();
        const deliveryDate = new Date(orderDate.getTime() + 7 * 24 * 60 * 60 * 1000);

        if (currentDate < deliveryDate) {
            return 'In Progress';
        }
        return 'Delivered';
    };

    return (
        <div className="poppins-regular p-6 max-w-2xl mx-auto shadow-none md:shadow-lg rounded-lg bg-white">
            {showVictory && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
                    <div className="text-lg md:text-xl font-bold text-white bg-green-500 p-4 rounded-lg shadow-lg">
                        🎉 Order Placed Successfully! 🎉
                    </div>
                </div>
            )}
            <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600 underline">Order Summary</h1>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Details</h2>
                <div className="flex items-center mb-4 bg-gray-100 p-4 rounded-lg shadow-inner h-[75px] md:h-[152px]">
                    <img src={product.image} alt={product.title} className="w-16 md:w-32 h-16 md:h-32 rounded-lg mr-4 shadow-md p-1"  />
                    <div>
                        <p className="text-lg md:text-xl font-medium text-gray-800">{product.title}</p>
                        <p className="text-sm md:text-xl text-gray-600">₹{(product.price - (product.price * 0.25)).toFixed(2)}</p>
                        <p className="text-sm md:text-base text-gray-500">Quantity: 1</p>
                    </div>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order Information</h2>
                <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                    <p className="text-gray-700 text-sm md:text-base"><strong>Order Time:</strong> {orderDate(product.date)}</p>
                    <p className="text-gray-700 text-sm md:text-base"><strong>Delivery Time:</strong> {deliveryDate(new Date(new Date(product.date).getTime() + 2 * 24 * 60 * 60 * 1000))}</p>
                    <p className="text-gray-700 text-sm md:text-base"><strong>Payment Method:</strong> {paymentMethod}</p>
                    <p className="text-gray-700 text-sm md:text-base"><strong>Status:</strong> <span className={getOrderStatus() === 'In Progress' ? 'text-orange-500' : 'text-green-500'}>{getOrderStatus()}</span></p>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Delivery Address</h2>
                <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                    <p className="text-gray-700 text-sm md:text-base"><strong>First Name:</strong> {address.firstName}</p>
                    <p className="text-gray-700 text-sm md:text-base"><strong>Last Name:</strong> {address.lastName}</p>
                    <p className="text-gray-700 text-sm md:text-base"><strong>Email:</strong> {address.email}</p>
                    <p className="text-gray-700 text-sm md:text-base"><strong>Phone:</strong> {address.phone}</p>
                    <p className="text-gray-700 text-sm md:text-base"><strong>Address:</strong> {address.address}</p>
                    <p className="text-gray-700 text-sm md:text-base"><strong>Postal Code:</strong> {address.postalCode}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderPlaced;
