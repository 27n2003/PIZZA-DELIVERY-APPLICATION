// pages/index.js
import React from 'react';
import ReactPlayer from 'react-player';
import Navbar from './Navbar';
import Carousel from './Carousel1';



export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Carousel></Carousel>
    {/* <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg w-full p-4">
        <h1 className="text-2xl font-bold mb-4">My Video</h1>
        <div className="relative">
          <ReactPlayer
            url ="https://images.samsung.com/is/content/samsung/assets/in/home/HOME_S24_Series_Main-KV_1440x640_pc.mp4"
            playing
            loop
            muted
            width="100%"
            height="100%"
            className="absolute top-0 left-0 rounded shadow-lg"
          />
        </div>
      </div>
    </div> */}
    </>
  );
}
