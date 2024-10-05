import React from 'react'
import { FaCarSide , FaHeadphones, FaWallet , FaCircleCheck  } from 'react-icons/fa6'

const Service = ({textSize , iconSize ,gap}) => {
    return (
        <div className='flex justify-around items-center poppins-regular gap-3'>
            <div className={`flex justify-center items-center text-red-600 ${gap}`}>
                {/* Icon  */}
                <div className={`${iconSize}`}>
                    <FaCarSide/>
                </div>
                {/* Text  */}
                <div className={`${textSize}`}>
                    <div className='text-black font-bold'>Free Shipping</div>
                    <div className='text-gray-400'>24*7 Services</div>
                </div>
            </div>
            <div className={`flex justify-center items-center text-red-600 ${gap}`}>
                {/* Icon  */}
                <div className={`${iconSize}`}>
                    <FaHeadphones/>
                </div>
                {/* Text  */}
                <div className={`${textSize}`}>
                    <div className='text-black font-bold'>Customer Care</div>
                    <div className='text-gray-400'>24*7 Services</div>
                </div>
            </div>
            <div className={`flex justify-center items-center text-red-600 ${gap}`}>
                {/* Icon  */}
                <div className={`${iconSize}`}>
                    <FaWallet/>
                </div>
                {/* Text  */}
                <div className={`${textSize}`}>
                    <div className='text-black font-bold'>C.O.D Available</div>
                    <div className='text-gray-400'>24*7 Services</div>
                </div>
            </div>
            <div className={`flex justify-center items-center text-red-600 ${gap}`}>
                {/* Icon  */}
                <div className={`${iconSize}`}>
                    <FaCircleCheck/>
                </div>
                {/* Text  */}
                <div className={`${textSize}`}>
                    <div className='text-black font-bold'>Certified </div>
                    <div className='text-gray-400'>24*7 Services</div>
                </div>
            </div>
        </div>
    )
}

export default Service
