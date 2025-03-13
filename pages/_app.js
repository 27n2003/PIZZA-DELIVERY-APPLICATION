import '@/styles/globals.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from './Components/Product';
import { CartProvider } from 'react-use-cart';
import LoadingBar from 'react-top-loading-bar';
import { useState,useEffect } from 'react';








export default function App({ Component, pageProps }) {
  
  return(
  <>
  
   
  <CartProvider>
  
  
  
  <Component {...pageProps} />

  
  
  
  </CartProvider>
  
  </>
  )
};
