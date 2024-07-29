import React, { useState, useEffect } from 'react';
import { PiPencil } from 'react-icons/pi';

const ShipAddress = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    useEffect(() => {
        const savedAddress = localStorage.getItem('address');
        if (savedAddress) {
            const address = JSON.parse(savedAddress);
            setAddressLine1(address.addressLine1 || '');
            setAddressLine2(address.addressLine2 || '');
            setCity(address.city || '');
            setState(address.state || '');
            setZipCode(address.zipCode || '');
        }
    }, []);

    const toggleEditing = () => {
        if (isEditing) {
            const address = {
                addressLine1,
                addressLine2,
                city,
                state,
                zipCode
            };
            localStorage.setItem('address', JSON.stringify(address));
        }
        setIsEditing(!isEditing);
    };

    return (
        <div>
            <div className='w-[100%]  rounded-md m-auto p-2 flex gap-5 poppins-regular'>
                <div className="bg-white rounded-md w-[100%]  text-[15px] md:text-lg p-0 md:p-0">
                    <div>
                        <div className='text-2xl text-gray-500 font-semibold marker:l-0 md:ml-2'>
                            Shipping Address
                        </div>
                        <div className='h-1 w-[100%] bg-gray-500 mt-3'></div>
                        <div className='flex items-center justify-end'>
                            <button
                                className='text-blue-500 flex items-center justify-end gap-1 md:gap-3 text-[13px] md:text-[18px]'
                                onClick={toggleEditing}
                            >
                                <PiPencil />{!isEditing ? "Change Information" : "Save"}
                            </button>
                        </div>
                        <div className='mt-5'>
                            <div className='mb-4'>
                                <label className='block'>Address Line 1</label>
                                <input
                                    type="text"
                                    value={addressLine1}
                                    onChange={(e) => setAddressLine1(e.target.value)}
                                    className='border rounded-md w-full px-2 py-1'
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block'>Address Line 2</label>
                                <input
                                    type="text"
                                    value={addressLine2}
                                    onChange={(e) => setAddressLine2(e.target.value)}
                                    className='border rounded-md w-full px-2 py-1'
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block'>City</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className='border rounded-md w-full px-2 py-1'
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block'>State</label>
                                <input
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className='border rounded-md w-full px-2 py-1'
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block'>Zip Code</label>
                                <input
                                    type="text"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className='border rounded-md w-full px-2 py-1'
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShipAddress;
