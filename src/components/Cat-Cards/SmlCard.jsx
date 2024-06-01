import React from 'react'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const SmlCard = ({ bgColor, textColor, sub, title, title2, cardimg, width, right, mdwidth,category}) => {
    const navigate = useNavigate()

    const handleButtonClick=()=>{
        navigate(`/search?category=${category}`)
    }
    return (
        <div className='w-[400px] flex mb-10 '>
            <div className={`flex ${bgColor} ${textColor} w-[95%] m-auto rounded-3xl relative h-[300px] justify-between shadow-xl`}>
                <div className={`flex flex-col justify-start items-center gap-6 w-[95%] m-auto rounded-3xl ml-[-30px] font-serif`}>
                    <h1 className='font-bold text-xl opacity-55 md:text-3xl'>{sub}</h1>
                    <h1 className='font-extrabold opacity-55 text-5xl   z-1'>{title}</h1>
                    <h1 className='font-bold opacity-55 text-3xl md:text-3xl'>{title2}</h1>
                    <div>
                        <Button text="Shop Now" bgColor="bg-red-700" textColor="text-gray-300" px="px-5" py="py-1" handler={handleButtonClick}/>
                    </div> 
                </div>
                {/* For images */}
                <div className='flex'>
                    <img className={`h-[100%] md:h-[80%] m-auto z-100 object-contain absolute imge ${right} top-5 bg-cover ${width} ${mdwidth} animate-float `} src={cardimg} alt="Images" height={100} />
                </div>
            </div>
        </div>
    )
}

export default SmlCard
