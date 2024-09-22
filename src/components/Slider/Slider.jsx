import React, { useRef } from 'react';
import Slider from "react-slick";
import Sliderimg1 from "../../images/Sliderimg1.png";
import Sliderimg2 from "../../images/Sliderimg2.png";
import Sliderimg3 from "../../images/Sliderimg3.png";
import Sliderimg4 from "../../images/Sliderimg4.png";
import Button from '../Button/Button';

const SliderData = [
    {
        id: 1,
        img: Sliderimg4,
        subtitle: "Style Update",
        title: "Fashion Trends",
        title2: "Wardrobe Essens"
    },
    {
        id: 2,
        img: Sliderimg2,
        subtitle: "Stunning Looks",
        title: "Makeup Essential",
        title2: "Glamour Picks"
    },
    {
        id: 3,
        img: Sliderimg3,
        subtitle: "Sweet Indulgence",
        title: "Pure Blissess",
        title2: "Gourmet Treats"
    },
    {
        id: 4,
        img: Sliderimg1,
        subtitle: "Fresh & Clean",
        title: "Personal Care",
        title2: "Home Cleaners"
    },
];

function AutoPlayMethods(sliderRef) {
    const play = () => {
        sliderRef.current.slickPlay();
    };
    const pause = () => {
        sliderRef.current.slickPause();
    };
    return { play, pause };
}


const ImageSlider = () => {
    const sliderRef = useRef(null);
    const { play, pause } = AutoPlayMethods(sliderRef);

    let settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {SliderData.map(item => {
                return (
                    <div className='flex' key={item.id}>
                        <div className='flex flex-row bg-gradient-to-r from-gray-400 to-gray-100 w-[93%] mx-auto rounded-3xl md:mt-2 mt-0 justify-around h-[120px] md:h-[280px]'>
                            {/* For heading */}
                            <div className='flex flex-col justify-center items-center md:gap-3 gap-1 text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-500'>
                                <h1 className='leckerli-one-regular text-sm md:text-3xl'>{item.subtitle}</h1>
                                <h1 className='trade-winds-regular font-extrabold text-xl md:text-8xl'>{item.title}</h1>
                                <h1 className='leckerli-one-regular text-sm md:text-3xl'>{item.title2}</h1>
                                <div className='poppins-regular'>
                                    <Button text="Shop Now" bgColor="bg-red-700" textColor="text-gray-300" px="px-3 md:px-5" py="py-0.5 md:py-1 text-[10px] md:text-[15px]"/>
                                </div>
                            </div>
                            {/* For images */}
                            <div className='flex'>
                                <img className='h-[85%] md:h-[80%] w-[150px] md:w-[350px] m-auto animate-rotate-3d' src={item.img} alt="Images"  height={250} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}

export default ImageSlider;
