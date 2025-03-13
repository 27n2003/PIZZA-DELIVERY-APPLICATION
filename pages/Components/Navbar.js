import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black">
      <div className="flex justify-between items-center py-4 px-8 lg:px-16">
        <div className="text-white font-bold text-xl">
          EcoTech Shopping Platform
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:flex-row lg:gap-16 lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <li className='text-white font-bold text-md hover:text-blue-700 py-2'>
            <Link href="/">Home</Link>
          </li>
          <li className="text-white font-bold text-md  hover:text-blue-700 py-2">
            <Link href="/Components/About">About</Link>
          </li>
          <li className="text-white font-bold text-md  hover:text-blue-700 py-2">
            <Link href="/Components/Contact">Contact</Link>
          </li>
          <li className="text-white font-bold text-md  hover:text-blue-700 py-2">
            <Link href="/Components/Login">Login</Link>
          </li>
          <li className="text-white font-bold text-md  hover:text-blue-700 py-2">
            <Link href="/Components/Register">Register</Link>
          </li>
          {/* <li className="text-white font-bold text-md hover:bg-white hover:text-black py-2">
            <Link href="/Components/Product">Product</Link>
          </li> */}
          {/* <li className="text-white font-bold text-md hover:bg-white hover:text-black py-2">
            <Link href="/Components/Cart">Cart</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
