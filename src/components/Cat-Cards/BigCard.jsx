import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const BigCard = ({ bgColor, textColor, sub, title, title2, cardimg, width, right, mdwidth, top, category }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/search?category=${category}`);
  };

  return (
    <div className='w-[173px] md:w-[600px] flex mb-6 md:mb-2 justify-center items-center poppins-regular'>
      <div className={`flex ${bgColor} ${textColor} w-[95%] m-auto rounded-3xl relative h-[137px] md:h-[300px] shadow-md`}>
        <div className={`flex flex-col justify-start items-center gap-1 md:gap-6 w-[95%] m-auto rounded-3xl ml-[-10px] md:ml-[-30px] `}>
          <h1 className='font-bold text-sm opacity-55 md:text-3xl'>{sub}</h1>
          <h1 className='font-extrabold opacity-55 text-xl md:text-7xl z-1'>{title}</h1>
          <h1 className='font-bold opacity-55 text-sm md:text-3xl'>{title2}</h1>
          <div>
            <Button text="Shop Now" bgColor="bg-red-700" textColor="text-gray-300" px="px-2 md:px-5" py="py-0 md:py-1 text-[10px] md:text-[15px]" handler={handleButtonClick} />
          </div>
        </div>
        <div className='flex'>
          <img className={`m-auto z-100 object-contain absolute imge ${right} ${width} ${mdwidth} ${top}`} src={cardimg} alt="Images" height={100} />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
