import React, { useRef } from 'react';
import Slider from "react-slick";
import Iphone from "../../images/Iphone.png";
import Dryer from "../../images/Dryer.png";
import Fridge from "../../images/Fridge.png";
import Sunglass from "../../images/Sunglass.png";

const SliderData = [
    {
        id: 1,
        img: Dryer,
        title: "50% Off",
        title2: "From 27th May"
    },
    {
        id: 2,
        img: Fridge,
        title: "30% Off",
        title2: "From 25th May"
    },
    {
        id: 3,
        img: Sunglass,
        title: "20% Off",
        title2: "From 29th May"
    },
    {
        id: 4,
        img: Iphone,
        title: "70% Off",
        title2: "From 30th May"
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


const Sale = () => {
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
                    <div className='flex relative' >
                        <div className='flex flex-col md:flex-row bg-gradient-to-r from-yellow-400 to-yellow-100 w-[97%] mx-auto rounded-3xl mt-10 justify-center h-[75px] md:h-[200px] px-3'>
                            <div className='flex  justify-between items-center gap-6 md:gap-[35.5rem] text-red-700 font-extrabold '>
                                <h1 className='leckerli-one-regular text-[20px] md:text-8xl opacity-90'>{item.title}</h1>
                                <img className='h-[100%]  m-auto animate-rotate-3d absolute right-[36%] md:right-[41%]' src={item.img} alt="Images" />
                                <h1 className='leckerli-one-regular text-[15px] md:text-5xl opacity-90'>{item.title2}</h1>
                            </div>  
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}

export default Sale;
