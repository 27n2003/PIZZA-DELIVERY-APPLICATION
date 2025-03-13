import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Carousel = () => {
  const slides = [
    {url:"https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/yellow-1600x864.png"},
    {url:"https://www.samsung.com/global/galaxy/events/unpacked/2024-1h/images/galaxy-unpacked_2024-1h-share.jpg"},
    {url:"https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/desk2.jpg"},
    {url:"https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Green_PC_0527_final.jpg"},
    {url:"https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/desk.png"}    
    
    // Add more image URLs as needed
  ];

  const[currentIndex,setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex); 
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <>

    <div className = "max-w-[1300px] h-[700px] w-full m-auto py-16 px-4 relative group">
      <div style = {{backgroundImage:`url(${slides[currentIndex].url})`}} className=" w-full h-full rounded-2xl bg-center bg-cover duration-500 ">
      
      </div>
      <div className = "hidden group-hover:block  absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick = {prevSlide}   size = {30} />
        
      </div>
      <div className = "hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick = {nextSlide}  size = {30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {
            slides.map((slide,slideIndex)=>{
              <div key = {slideIndex} onClick = {() => {goToSlide(slideIndex)}} className="text-2xl cursor-pointer">
                <RxDotFilled/>
              </div>
            })
        }
      </div>
    </div>
    <div className="flex justify-center items-center mb-24">
      <img src="ad1.png" alt="" />
    </div>
    </>
  );
};

export default Carousel;
