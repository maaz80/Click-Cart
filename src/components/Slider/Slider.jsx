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
        title2: "Wardrobe Essentials"
    },
    {
        id: 2,
        img: Sliderimg2,
        subtitle: "Stunning Looks",
        title: "Makeup Essentials",
        title2: "Glamour Picks"
    },
    {
        id: 3,
        img: Sliderimg3,
        subtitle: "Sweet Indulgence",
        title: "Pure Bliss",
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
                        <div className='flex flex-col md:flex-row bg-gradient-to-r from-gray-400 to-gray-100 w-[93%] mx-auto rounded-3xl md:mt-10 mt-0 justify-around h-[500px] md:h-[350px]'>
                            {/* For heading */}
                            <div className='flex flex-col justify-center items-center md:gap-6 gap-3 text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-500'>
                                <h1 className='leckerli-one-regular text-xl md:text-3xl'>{item.subtitle}</h1>
                                <h1 className='trade-winds-regular font-extrabold text-45xl md:text-8xl'>{item.title}</h1>
                                <h1 className='leckerli-one-regular text-xl md:text-3xl'>{item.title2}</h1>
                                <div>
                                    <Button text="Shop Now" bgColor="bg-red-700" textColor="text-gray-300" px="px-5" py="py-1"/>
                                </div>
                            </div>
                            {/* For images */}
                            <div className='flex'>
                                <img className='h-[100%] md:h-[80%] m-auto animate-rotate-3d' src={item.img} alt="Images" width={350} height={250} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}

export default ImageSlider;
