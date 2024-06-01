import ImageSlider from "../Slider/Slider";
import BigCard from "../Cat-Cards/BigCard";
import Headphone from "../../images/Headphone.png";
import Watch from "../../images/Watch.png";
import Laptop from "../../images/Laptop.png";
import Ps5 from "../../images/Ps5.png";
import Speaker from "../../images/Speaker.png";
import Vr from "../../images/Vr.webp";
import SmlCard from "../Cat-Cards/SmlCard";
import Service from "../Servicee/Service";
import Sale from "../Sale/Sale";
import Products from "../Products/Products";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  return (
    <div>
      <div className="block md:hidden">
        <SearchBar />
      </div>
      <div>
        <ImageSlider />
      </div>

      <div className="flex justify-around items-center mt-10 flex-wrap w-[97%] m-auto">
        <BigCard 
          bgColor="bg-gradient-to-r from-red-600 to-red-200" 
          textColor="text-white" 
          sub="Beats" 
          title="HEADSET" 
          title2="Listen" 
          cardimg={Headphone} 
          right="right-[0px]" 
          width="w-[200px]" 
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
          width="w-[100px]" 
          mdwidth="md:w-[200px]" 
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
          width="w-[190px]" 
          mdwidth="md:w-[250px]" 
          category="VR Headset" // Added category
        />
      </div>

      <div className="flex justify-around items-center flex-wrap w-[97%] m-auto">
        <SmlCard 
          bgColor="bg-gradient-to-r from-orange-600 to-orange-100" 
          textColor="text-white" 
          sub="World In Hand" 
          title="WATCH" 
          title2="Time Flies" 
          cardimg={Watch} 
          width="w-[150px]" 
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
          width="w-[150px]" 
          mdwidth="md:w-[300px]" 
          right="right-[0px] md:right-[-55px]" 
          category="Smartphones" // Added category
        />
        <BigCard 
          bgColor="bg-gradient-to-r from-purple-600 to-purple-200" 
          textColor="text-white" 
          sub="Change the World" 
          title="LAPTOP" 
          title2="Vision" 
          cardimg={Laptop} 
          right="right-[-5px]" 
          width="w-[200px]" 
          mdwidth="md:w-[250px]" 
          top="top-32 md:top-10" 
          category="Monitor" // Added category
        />
      </div>

      <div className="w-[97%] m-auto">
        <Service textSize="md:text-lg text-[7px]" iconSize="text-[20px] md:text-4xl" gap="gap-1 md:gap-4" />
      </div>

      <div className="w-[97%] m-auto">
        <Sale />
      </div>

      <div className="mt-10">
        <Products />
      </div>
    </div>
  );
}
