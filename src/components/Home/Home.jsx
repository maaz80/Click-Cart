import ImageSlider from "../Slider/Slider";
import BigCard from "../Cat-Cards/BigCard";
import Headphone from "../../images/Headphone.png";
import Watch from "../../images/Watch.png";
import Laptop from "../../images/Laptop.png";
import Assured from "../../images/Assured.png";
import Up from "../../images/Up.png";
import Star from "../../images/Star.webp"
import MainImage from "../../images/MainImage.webp"
import Data from '../Data/Data'
import Ps5 from "../../images/Ps5.png";
import Speaker from "../../images/Speaker.png";
import Vr from "../../images/Vr.webp";
import SmlCard from "../Cat-Cards/SmlCard";
import Service from "../Servicee/Service";
import Sale from "../Sale/Sale";
import Products from "../Products/Products";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

import gsap from "gsap"
import WheelSlide from "../WheelSlide/WheelSlide";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [limit, setLimit] = useState(5)
  const [loading, setLoading] = useState(true)
  const [error, seterror] = useState(null)
  const [data, setdata] = useState([])
  const navigate = useNavigate()

  async function fetchData() {
    setLoading(true)
    try {
      setdata(Data);
    } catch (error) {
      seterror(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    function moving(event) {
      if (event.deltaY > 0) {
        gsap.to(".marque", {
          x: "-200%",
          duration: 3,
          repeat: -1,
          ease: "none"
        });
        gsap.to(".marque img", {
          rotate: 180
        })
      } else {
        gsap.to(".marque", {
          x: "0%",
          duration: 3,
          repeat: -1,
          ease: "none"
        });
        gsap.to(".marque img", {
          rotate: 0
        })
      }
    }
    function handleTouchMove(event) {
      const touch = event.touches[0];
      if (touch.clientY > window.innerHeight / 2) {

        gsap.to(".marque", {
          x: "-200%",
          duration: 4,
          repeat: -1,
          ease: "none"
        });
        gsap.to(".marque img", {
          rotate: 180
        })
      } else {
        gsap.to(".marque", {
          x: "0%",
          duration: 4,
          repeat: -1,
          ease: "none"
        });
        gsap.to(".marque img", {
          rotate: 0
        })
      }
    }

    window.addEventListener("wheel", moving);
    window.addEventListener("touchmove", handleTouchMove);

  }, []);

  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div>
      <img src={Up} alt="Up" className=" bottom-5 right-5 z-40 fixed w-[35px] md:w-[50px] " onClick={handleUp} />
      <div className="block md:hidden">
        <SearchBar />
      </div>

      {/* <div className="w-[97%] mt-2 h-[91vh] rounded-xl bg-transparent m-auto relative z-10">
        <div></div>
        <div className=" right-0 ">
          <img src={MainImage} alt="Main"  className="absolute right-0 w-[40%] bottom-0"/>
        </div>
      </div> */}

      <div>
        <ImageSlider />
      </div>
      <div className="flex flex-row md:flex-col overflow-x-auto overflow-y-hidden  mx-2 md:mx-6 mt-2 md:mt-2 mb-2 md:mb-5 ">
        <div className="flex space-x-0.5">
          <BigCard
            bgColor="bg-gradient-to-r from-red-600 to-red-200"
            textColor="text-white"
            sub="Beats"
            title="HEADSET"
            title2="Listen"
            cardimg={Headphone}
            right="right-[0px]"
            width="w-[90px]"
            mdwidth="md:w-[250px]"
            category="Headphones" // Added category
          />
          <SmlCard
            bgColor="bg-gradient-to-r from-blue-400 to-blue-50"
            textColor="text-white"
            sub="Beats"
            title="SPEAKER"
            title2="Loud"
            cardimg={Speaker}
            right="right-[0px]"
            width="w-[80px]"
            mdwidth="md:w-[133px]"
            category="Speakers" // Added category
          />
          <SmlCard
            bgColor="bg-gradient-to-r from-green-600 to-green-200"
            textColor="text-white"
            sub="Vision"
            title="VR-BOX"
            title2="See The World"
            cardimg={Vr}
            right="right-[0px]"
            width="w-[80px]"
            mdwidth="md:w-[250px]"
            category="VR Headset" // Added category
          />
        </div>

        <div className="flex space-x-0.5">
          <SmlCard
            bgColor="bg-gradient-to-r from-orange-600 to-orange-100"
            textColor="text-white"
            sub="World In Hand"
            title="WATCH"
            title2="Time Flies"
            cardimg={Watch}
            width="w-[60px]"
            mdwidth="md:w-[150px]"
            right="right-[15px]"
            category="Wearable" // Added category
          />
          <SmlCard
            bgColor="bg-gradient-to-r from-black to-gray-200"
            textColor="text-white"
            sub="Gaming"
            title="P-Station"
            title2="Enjoyment"
            cardimg={Ps5}
            width="w-[90px]"
            mdwidth="md:w-[200px]"
            right="right-[0px] md:right-[5px]"
            category="Mobiles" // Added category
          />
          <BigCard
            bgColor="bg-gradient-to-r from-purple-600 to-purple-200"
            textColor="text-white"
            sub="Change the World"
            title="LAPTOP"
            title2="Vision"
            cardimg={Laptop}
            right="right-[5px]"
            width="w-[90px]"
            mdwidth="md:w-[250px]"
            top="top-32 md:top-10"
            category="Monitor" // Added category
          />
        </div>
      </div>

      <div className="w-[97%] mt-5 md:m-auto ml-2 md:ml-0">
        <Service textSize="md:text-lg text-[7px]" iconSize="text-[20px] md:text-4xl" gap="gap-1 md:gap-4" />
      </div>

      <div className="w-[97%] m-auto mt-[-10px]">
        <Sale />
      </div>

      <div className="poppins-regular mt-5 md:mt-10">
        <h2 className="poppins-regular text-gray-400 text-xl md:text-2xl ml-2 md:ml-8">Trending</h2>
        <div className="flex justify-start items-center ml-2 md:ml-8">
          <h1 className="poppins-bold text-4xl md:text-7xl">Electronics</h1>
          <svg className="w-10 md:w-24 h-10 md:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#5f6368"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
        </div>
        {loading && <div>Loading plaese wait......</div>}
        {error && <div>Error:{error.message}</div>}
        {
          !loading && !error && data.length > 0 && (
            <div className=' flex flex-wrap justify-around items-center mt-2 px-2 md:px-6'>
              {
                data.slice(0, limit).map(item => (
                  <li onClick={() => navigate(`/details/${item.id}`)} className='relative border w-[10.5rem] md:w-72 h-72 md:h-[410px] flex flex-col justify-start items-start mb-2 md:p-2 p-1 rounded-3xl shadow-md bg-slate-100 poppins-regular '>
                    <div className='flex flex-col justify-center   border p-5 rounded-3xl shadow-lg '>
                      <img className='md:w-60 w-40 h-32 md:h-60' src={item.image} alt={item.id} />

                    </div>
                    <div className='flex flex-col justify-start md:p-3 p-2 w-[100%] '>
                      <h2 className='font-bold overflow-hidden w-36 h-7 '>{item.title}</h2>
                      <div className='flex justify-between w-[100%]'>
                        <h1 >₹{item.price}</h1>
                        <button className='bg-red-500 text-white text-[10px] md:text-[13px] md:px-6 font-semibold px-3 rounded-md' onClick={() => navigate(`/details/${item.id}`)}>Details</button>
                      </div>
                      <img className='mt-[-25px] md:mt-[-35px] ml-[-14px] md:ml[-17px] w-28 md:w-36 ' src={Star} alt="Star" />
                      <div className=' flex absolute bottom-2 md:bottom-1.5 items-center -ml-1'>
                        <img className=' z-10 w-4 md:w-5  animate-none' src={Assured} alt="AssuredLogo" />
                        <span className='text-[10px] text-gray-500'>100% Garanteed</span>
                      </div>
                    </div>
                  </li>
                ))
              }
            </div>
          )
        }
      </div>

      <div className="page  bg-emerald-300  poppins-regular mt-0 md:mt-5">
        <WheelSlide />
      </div>
      <div className="mt-2 md:mt-6">
        <h2 className="poppins-regular text-gray-400 text-xl md:text-2xl ml-2 md:ml-8">Top</h2>
        <div className="flex justify-start items-center ml-2 md:ml-8">
          <h1 className="poppins-bold text-4xl md:text-7xl">Sellings</h1>
          <svg className="w-10 md:w-24 h-10 md:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#5f6368"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
        </div>
        <Products />
      </div>
      <div className="mb-[-23px]">
        <Footer />
      </div>
    </div>
  );
}
