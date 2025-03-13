import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import ReactPlayer from 'react-player';

const Carousel = () => {
  const slides = [
    { type: 'video', videoUrl: "https://images.samsung.com/is/content/samsung/assets/in/home/HOME_S24_Series_Main-KV_1440x640_pc.mp4" },
    { type: 'video', videoUrl: "https://images.samsung.com/is/content/samsung/assets/in/galaxy-tab-s9/feature/galaxy-tab-s9-experience-pc.webm" } ,
    { type: 'video', videoUrl: "https://images.samsung.com/in/smartphones/galaxy-s24/videos/galaxy-s24-highlights-form-factor.webm?imbypass=true" } , 
    { type: 'image', url: "https://www.samsung.com/global/galaxy/events/unpacked/2024-1h/images/galaxy-unpacked_2024-1h-share.jpg" },
    { type: 'image', url: "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/desk2.jpg" },
    { type: 'image', url: "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Green_PC_0527_final.jpg" },
    { type: 'image', url: "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/desk.png" },
    // Example video slide
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="max-w-[1300px] h-[700px] w-full mb-16 px-6 py-12 relative group">
        {slides[currentIndex].type === 'image' ? (
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
        ) : (
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <ReactPlayer
              url={slides[currentIndex].videoUrl}
              playing
              loop
              muted
              width="100%"
              height="100%"
            />
          </div>
        )}
        <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mb-24">
        <img src="ad1.png" alt="" />
      </div>
    </>
  );
};

export default Carousel;
