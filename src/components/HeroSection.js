import React from "react";
import { FaFacebook } from "react-icons/fa";
import Slider from "react-slick";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from '@react-hook/window-size'

const HeroSection = () => {
  const [selected, setSelected] = useState("TR");

  const windowWidth = useWindowWidth()

  const phones = {
    US: "+45",
    DE: "+65",
    TR: "+90",
    GB: "+256",
    FR: "+82",
    IT: "+27",
  };

  const settings = {
    dots: false,
    infinite: true,
    Speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
           {windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt="getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            alt="getir"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="getir"
          />
        </div>
      </Slider>}
      
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img
            className="h-48 w-48"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="getir"
          />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-4">
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={(code) => setSelected(code)}
              selected={selected}
              className="flag-select"
            />
            <label className="flex-1 relative group block cursor-pointer">
              <input required className="outline-none h-14 px-4 border-[3px] border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color peer text-sm pt-2" />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color hover:bg-primary-brand-color hover:text-brand-yellow transition-colors">
                Telefon numarası ile devam et
          </button>
          
          <hr className="h-[1px] bg-gray-300 my-2" />
          
          <button className="bg-blue-800 bg-opacity-10 text-blue-800 text-opacity-80 px-4 h-12 flex items-center rounded-md w-full text-sm font-semibold hover:bg-blue-800 hover:text-white transition-colors">
                <FaFacebook size={24} className="" />
                <span className="mx-auto">Facebook ile devam et</span>
          </button>
            
          </div>    
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
