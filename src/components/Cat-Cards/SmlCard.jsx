import React from 'react'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const SmlCard = ({ bgColor, textColor, sub, title, title2, cardimg, width, right, mdwidth,category}) => {
    const navigate = useNavigate()

    const handleButtonClick=()=>{
        navigate(`/search?category=${category}`)
    }
    return (
        <div className='w-[173px] md:w-[418px] flex mb-6 md:mb-2 poppins-regular'>
            <div className={`flex ${bgColor} ${textColor} w-[95%] m-auto rounded-3xl relative h-[137px] md:h-[300px] justify-between shadow-md`}>
                <div className={`flex flex-col justify-start items-center gap-1 md:gap-6 w-[95%] m-auto rounded-3xl ml-[-15px] md:ml-[-30px] `}>
                    <h1 className='font-bold text-sm opacity-55 md:text-3xl'>{sub}</h1>
                    <h1 className='font-extrabold opacity-55 text-xl md:text-5xl   z-1'>{title}</h1>
                    <h1 className='font-bold opacity-55 text-sm md:text-3xl'>{title2}</h1>
                    <div>
                        <Button text="Shop Now" bgColor="bg-red-700" textColor="text-gray-300" px="px-2 md:px-5" py="py-0 md:py-1 text-[10px] md:text-[15px]" handler={handleButtonClick}/>
                    </div> 
                </div>
                {/* For images */}
                <div className='flex'>
                    <img className={`h-[80%]  md:h-[80%] m-auto z-100 object-contain absolute imge ${right} top-5 bg-cover ${width} ${mdwidth} animate-float `} src={cardimg} alt="Images" height={100} />
                </div>
            </div>
        </div>
    )
}

export default SmlCard
