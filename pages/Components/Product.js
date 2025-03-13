// import React, { useState,useEffect } from 'react'
// import { useCart } from 'react-use-cart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaCartShopping } from "react-icons/fa6";
// import LoadingBar from 'react-top-loading-bar';
// import Carousel from './Carousel';
// import Navbar2 from './Navbar2';




// const products = [{
//     id : 1,
//     imageUrl:"https://m.media-amazon.com/images/I/71j6POXc0uL._SX569_.jpg",
//     name : "Samsung Galaxy S24+",
//     price: 79999
// },{
//     id : 2 ,
//     imageUrl:"https://m.media-amazon.com/images/I/71+0MKV37HL._SX679_.jpg",
//     name : "Samsung Galaxy A15 5G",
//     price:15000
// },{
   
//     id : 3 ,
//     imageUrl:"https://m.media-amazon.com/images/I/81juPhKSZJL._SX569_.jpg",
//     name : "Samsung A50",
//     price:20000
// },
// {
//   id : 4,
//   imageUrl:"https://m.media-amazon.com/images/I/81vxWpPpgNL._SX569_.jpg",
//   name:"Smasung A15",
//   price:25000
// },
// {
//   id : 5,
//   imageUrl:"https://m.media-amazon.com/images/I/51GwzNvduUL._SX569_.jpg",
//   name:"Smasung A15",
//   price:30000
// },{
//   id : 5,
//   imageUrl:"https://m.media-amazon.com/images/I/913EiorAS0L._SX569_.jpg",
//   name:"Smasung A15",
//   price:200
// },{
//   id : 6,
//   imageUrl:"https://m.media-amazon.com/images/I/71nj3tkXZXL._SX569_.jpg",
//   name:"Smasung A15",
//   price:200
// },
// {
//   id : 7,
//   imageUrl:"https://m.media-amazon.com/images/I/71f2I8cltBL._SX679_.jpg",
//   name:"Smasung A15",
//   price:200
// },
// {
//   id : 8,
//   imageUrl:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a20.jpg",
//   name:"Smasung A15",
//   price:200
// }]


// const Product = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
    
//     const simulateLoading = async () => {
//       for (let i = 0; i <= 100; i += 10) {
//         setProgress(i);
//         await new Promise((resolve) => setTimeout(resolve, 200));
//       }
//     };

//     simulateLoading();
//   }, []);

//     const { addItem,inCart }  = useCart();
    

    
  
    
//     const addToCart = async(product) => { 
//       const token = localStorage.getItem('token');
    
//       if (!token) {
//         toast.error("User has not logged in");
//       }

//       try {
//         const response = await fetch('/api/createOrder', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({itemId : product.id}),
//         });
  
//         const data = await response.json();
//         // Handle the response data
//         addItem(product);
//         if(!inCart(product.id)){
//           toast.success("Item added to the cart");
//       }
//       else{
//           toast.error("Item aldready exists in the cart");
//       } // Update the local cart state if needed
//       } catch (error) {
//         console.error('Error adding item to cart:', error);
//       }
//     }
        
    
  



//   return (
//     <>
//     <Navbar2/>
//     <ToastContainer/>
//     <Carousel/>
//     <div className="grid lg:grid-cols-3 sm:grid-cols-1">

        
//         {
//             products.map((item)=>(
//               <div className="bg-white border-4 shadow-2xl p-10 m-6 rounded-lg" key={item.id}>
//               <div className="flex items-center justify-center mb-4">
//                 <img src={item.imageUrl} alt={item.name} className="h-56 object-cover rounded-lg" />
//               </div>
//               <div className="text-center mb-4">
//                 <h1 className="text-2xl font-bold">{item.name}</h1>
//               </div>
//               <div className="text-center mb-4">
//                 <h2 className="text-xl text-gray-700">₹{item.price}</h2>
//               </div>
//               <div className="flex justify-center">
//               <button
//                 className="flex items-center justify-center bg-black w-1/2 h-10 text-stone-200 rounded-md"
//                 onClick={() => addToCart(item)}
//               >
//                 Add to Cart
//               </button>
//               </div>
//             </div>
                  
              
                            
//             ))
//         }
//     </div>      
//     </>
//   )
// }
// export default Product #1;

// import React, { useState } from 'react';
// import { useCart } from 'react-use-cart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar2 from './Navbar2';

// const products = [
//   {
//     id: 1,
//     imageUrl: "https://m.media-amazon.com/images/I/71j6POXc0uL._SX569_.jpg",
//     name: "Margherita Pizza",
//     basePrice: 200,
//   },
//   {
//     id: 2,
//     imageUrl: "https://m.media-amazon.com/images/I/81juPhKSZJL._SX569_.jpg",
//     name: "Pepperoni Pizza",
//     basePrice: 300,
//   },
//   {
//     id: 3,
//     imageUrl: "https://m.media-amazon.com/images/I/81vxWpPpgNL._SX569_.jpg",
//     name: "Veggie Supreme Pizza",
//     basePrice: 250,
//   },
// ];

// const customizationOptions = {
//   bases: [
//     { name: "Thin Crust", price: 50 },
//     { name: "Thick Crust", price: 70 },
//     { name: "Cheese Burst", price: 100 },
//     { name: "Gluten-Free", price: 80 },
//     { name: "Stuffed Crust", price: 120 },
//   ],
//   sauces: [
//     { name: "Tomato Basil", price: 20 },
//     { name: "Barbecue", price: 30 },
//     { name: "Pesto", price: 40 },
//     { name: "Alfredo", price: 35 },
//     { name: "Hot Sauce", price: 25 },
//   ],
//   cheeses: [
//     { name: "Mozzarella", price: 50 },
//     { name: "Cheddar", price: 60 },
//     { name: "Parmesan", price: 70 },
//     { name: "Vegan Cheese", price: 80 },
//   ],
//   veggies: [
//     { name: "Bell Peppers", price: 20 },
//     { name: "Olives", price: 30 },
//     { name: "Mushrooms", price: 25 },
//     { name: "Onions", price: 15 },
//     { name: "Spinach", price: 20 },
//   ],
// };

// const Product = () => {
//   const { addItem, inCart } = useCart();

//   const [selectedCustomizations, setSelectedCustomizations] = useState(
//     products.reduce((acc, product) => {
//       acc[product.id] = {
//         base: customizationOptions.bases[0],
//         sauce: customizationOptions.sauces[0],
//         cheese: customizationOptions.cheeses[0],
//         veggies: [],
//       };
//       return acc;
//     }, {})
//   );

//   const [modalProduct, setModalProduct] = useState(null);

//   const calculateCustomizationPrice = (customizations) => {
//     const { base, sauce, cheese, veggies } = customizations;
//     const veggiesPrice = veggies.reduce((total, veg) => total + veg.price, 0);
//     return base.price + sauce.price + cheese.price + veggiesPrice;
//   };

//   const handleAddToCart = (product) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       toast.error("User has not logged in");
//       return;
//     }

//     const customizations = selectedCustomizations[product.id];
//     const customizationPrice = calculateCustomizationPrice(customizations);
//     const totalPrice = product.basePrice + customizationPrice;

//     try {
//       addItem({
//         ...product,
//         customizations,
//         price: totalPrice,
//       });
//       toast.success("Customized pizza added to the cart");
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//     }
//   };

//   const handleCustomizationChange = (productId, type, value) => {
//     setSelectedCustomizations((prev) => ({
//       ...prev,
//       [productId]: {
//         ...prev[productId],
//         [type]: value,
//       },
//     }));
//   };

//   const toggleVeggieSelection = (productId, veggie) => {
//     setSelectedCustomizations((prev) => {
//       const currentVeggies = prev[productId].veggies;
//       const isSelected = currentVeggies.includes(veggie);
//       const updatedVeggies = isSelected
//         ? currentVeggies.filter((v) => v !== veggie)
//         : [...currentVeggies, veggie];
//       return {
//         ...prev,
//         [productId]: {
//           ...prev[productId],
//           veggies: updatedVeggies,
//         },
//       };
//     });
//   };

//   return (
//     <>
//       <Navbar2 />
//       <ToastContainer />
//       <div className="grid lg:grid-cols-3 sm:grid-cols-1">
//         {products.map((product) => (
//           <div className="bg-white border-4 shadow-2xl p-10 m-6 rounded-lg" key={product.id}>
//             <div className="flex items-center justify-center mb-4">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="h-56 object-cover rounded-lg"
//               />
//             </div>
//             <div className="text-center mb-4">
//               <h1 className="text-2xl font-bold">{product.name}</h1>
//               <h2 className="text-xl text-gray-700">Base Price: ₹{product.basePrice}</h2>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 className="bg-black text-white py-2 px-4 rounded"
//                 onClick={() => setModalProduct(product)}
//               >
//                 Customize
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {modalProduct && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
//           <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
//             <h2 className="text-2xl font-bold mb-4">Customize {modalProduct.name}</h2>

//             <div className="mb-4">
//               <label>Choose Base:</label>
//               <select
//                 className="w-full border rounded p-2"
//                 onChange={(e) =>
//                   handleCustomizationChange(
//                     modalProduct.id,
//                     'base',
//                     customizationOptions.bases[e.target.selectedIndex]
//                   )
//                 }
//               >
//                 {customizationOptions.bases.map((base, index) => (
//                   <option key={index} value={base.name}>{`${base.name} (+₹${base.price})`}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-4">
//               <label>Choose Sauce:</label>
//               <select
//                 className="w-full border rounded p-2"
//                 onChange={(e) =>
//                   handleCustomizationChange(
//                     modalProduct.id,
//                     'sauce',
//                     customizationOptions.sauces[e.target.selectedIndex]
//                   )
//                 }
//               >
//                 {customizationOptions.sauces.map((sauce, index) => (
//                   <option key={index} value={sauce.name}>{`${sauce.name} (+₹${sauce.price})`}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-4">
//               <label>Choose Cheese:</label>
//               <select
//                 className="w-full border rounded p-2"
//                 onChange={(e) =>
//                   handleCustomizationChange(
//                     modalProduct.id,
//                     'cheese',
//                     customizationOptions.cheeses[e.target.selectedIndex]
//                   )
//                 }
//               >
//                 {customizationOptions.cheeses.map((cheese, index) => (
//                   <option key={index} value={cheese.name}>{`${cheese.name} (+₹${cheese.price})`}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-4">
//               <label>Choose Veggies:</label>
//               <div className="grid grid-cols-2 gap-2">
//                 {customizationOptions.veggies.map((veggie, index) => (
//                   <div key={index} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="mr-2"
//                       checked={selectedCustomizations[modalProduct.id].veggies.includes(veggie)}
//                       onChange={() => toggleVeggieSelection(modalProduct.id, veggie)}
//                     />
//                     <label>{`${veggie.name} (+₹${veggie.price})`}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="text-center mb-4">
//               <h3 className="text-lg font-semibold">
//                 Customization Price: ₹{
//                   calculateCustomizationPrice(selectedCustomizations[modalProduct.id])
//                 }
//               </h3>
//               <h3 className="text-lg font-bold">
//                 Total Price: ₹{
//                   modalProduct.basePrice +
//                   calculateCustomizationPrice(selectedCustomizations[modalProduct.id])
//                 }
//               </h3>
//             </div>

//             <div className="flex justify-between">
//               <button
//                 className="bg-green-600 text-white py-2 px-4 rounded"
//                 onClick={() => {
//                   handleAddToCart(modalProduct);
//                   setModalProduct(null);
//                 }}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 className="bg-red-600 text-white py-2 px-4 rounded"
//                 onClick={() => setModalProduct(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Product #2;

import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from './Navbar2';
import Confetti from 'react-confetti';
import ConfettiExplosion from "react-confetti-explosion";

const products = [
  {
    id: 1,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/7eb2937b-ad12-46c5-a1b0-b7718de05304_FieryJalapenoPaprikaSideFullsize.jpg?ver=V0.0.1",
    name: "Fiery Jalapeno",
    basePrice: 250,
  },
  {
    id: 2,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/0b311b8b-1a00-41ec-985d-f2a7c1b45132_OnionPaprikaSideFullsize.jpg?ver=V0.0.1",
    name: "Blazing and Onion Paprika",
    basePrice: 250,
  },
  {
    id: 3,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/d7530589-1336-442b-aa6e-598680086abb_extravaganza_side_full.webp?ver=V0.0.1",
    name: "Veg Extravaganza",
    basePrice: 250,
  },
  {
    id: 4,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/8abd61ff-024b-45fe-a221-6b72d601cb49_indi_paneer_side_full.webp?ver=V0.0.1",
    name: "Indi Tandoori Paneer",
    basePrice: 250,
  },
  {
    id: 5,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/ff2e39b8-87cc-4f3f-a2f5-06198a85f3df_peppy_paneer_side.webp?ver=V0.0.1",
    name: "Peppy Paneer",
    basePrice: 250,
  },
  {
    id: 6,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/a52b70f2-01cb-42b8-ae4f-566df999115c_farmhouse_side.webp?ver=V0.0.1",
    name: "Farmhouse",
    basePrice: 250,
  },
 
  {
    id: 7,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/05e8ba85-4444-4c19-b085-8012f1baf0b4_margherita_side.webp?ver=V0.0.1",
    name: "Margherita",
    basePrice: 200,
  },
  {
    id: 8,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/7ed9c325-2b42-4824-a25a-367bb48332be_double_margherita_side.webp?ver=V0.0.1",
    name: "Double Cheese Margherita",
    basePrice: 300,
  },
  {
    id: 9,
    imageUrl: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/0bc1cfea-2868-4ebb-946c-de176708008d_PaneerSpiceSupremeFullSizeCards1080X1050.jpg?ver=V0.0.1",
    name: "Paneer Spice Supreme",
    basePrice: 250,
  },
 
  
];

const customizationOptions = {
  bases: [
    { name: "Thin Crust", price: 50 },
    { name: "Thick Crust", price: 70 },
    { name: "Cheese Burst", price: 100 },
    { name: "Gluten-Free", price: 80 },
    { name: "Stuffed Crust", price: 120 },
  ],
  sauces: [
    { name: "Tomato Basil", price: 20 },
    { name: "Barbecue", price: 30 },
    { name: "Pesto", price: 40 },
    { name: "Alfredo", price: 35 },
    { name: "Hot Sauce", price: 25 },
  ],
  cheeses: [
    { name: "Mozzarella", price: 50 },
    { name: "Cheddar", price: 60 },
    { name: "Parmesan", price: 70 },
    { name: "Vegan Cheese", price: 80 },
  ],
  veggies: [
    { name: "Bell Peppers", price: 20 },
    { name: "Olives", price: 30 },
    { name: "Mushrooms", price: 25 },
    { name: "Onions", price: 15 },
    { name: "Spinach", price: 20 },
  ],
};

const Product = () => {
  const { addItem, inCart } = useCart();
  // const [confettiActive, setConfettiActive] = useState(false);
  // const [numPieces, setNumPieces] = useState(300);
  const [isExploding, setIsExploding] = useState(false)

  const [selectedCustomizations, setSelectedCustomizations] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = {
        base: customizationOptions.bases[0],
        sauce: customizationOptions.sauces[0],
        cheese: customizationOptions.cheeses[0],
        veggies: [],
      };
      return acc;
    }, {})
  );

  const [modalProduct, setModalProduct] = useState(null);

  const calculateCustomizationPrice = (customizations) => {
    const { base, sauce, cheese, veggies } = customizations;
    const veggiesPrice = veggies.reduce((total, veg) => total + veg.price, 0);
    return base.price + sauce.price + cheese.price + veggiesPrice;
  };

  const handleAddToCart = (product, isCustomized = false) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("User has not logged in");
      return;
    }

    const customizations = selectedCustomizations[product.id];
    const customizationPrice = calculateCustomizationPrice(customizations);
    const totalPrice = isCustomized
      ? product.basePrice + customizationPrice
      : product.basePrice;

    try {
      addItem({
        ...product,
        customizations: isCustomized ? customizations : null,
        price: totalPrice,
      });
      toast.success(
        isCustomized
          ? "Customized pizza added to the cart"
          : "Pizza added to the cart"
      );
      setIsExploding(true);

    // Stop explosion after 2 seconds
      setTimeout(() => setIsExploding(false), 2000);
      // setConfettiActive(true);
      // setNumPieces(300); // High initial burst
      // setTimeout(() => setNumPieces(0), 800); // Reduce quickly for explosion effect
      // setTimeout(() => setConfettiActive(false), 3000);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleCustomizationChange = (productId, type, value) => {
    setSelectedCustomizations((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [type]: value,
      },
    }));
  };

  const toggleVeggieSelection = (productId, veggie) => {
    setSelectedCustomizations((prev) => {
      const currentVeggies = prev[productId].veggies;
      const isSelected = currentVeggies.includes(veggie);
      const updatedVeggies = isSelected
        ? currentVeggies.filter((v) => v !== veggie)
        : [...currentVeggies, veggie];
      return {
        ...prev,
        [productId]: {
          ...prev[productId],
          veggies: updatedVeggies,
        },
      };
    });
  };

  return (
    <>
      <Navbar2 />
      <ToastContainer />
      {/* /* {confettiActive && <Confetti width={window.innerWidth} height={window.innerHeight} />}  */}
      {/* Popper Explosion Effect from Bottom */}
      {isExploding && (
      <div style={{
        position: 'fixed',
        bottom: '10px',  // Adjust for better visibility
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999
      }}>
        <ConfettiExplosion 
          force={0.8} 
          duration={4000} 
          particleCount={200} 
          width={1600} 
          height = {2000}
        />
      </div>
    )}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1">
        {products.map((product) => (
          <div className="bg-white border-4 shadow-2xl m-8" key={product.id}>
            <div className="h-[300px] w-full overflow-hidden rounded-t-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover" 
              />
            </div>
            <div className="text-center mb-4 p-6">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <h2 className="text-xl mt-2 text-gray-700">Base Price: ₹{product.basePrice}</h2>
            </div>

            <div className="flex justify-between">
              <button
                className="bg-black text-white py-2 px-4 ml-8 mb-8 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="bg-gray-700 text-white py-2 px-4 mr-8 mb-8 rounded"
                onClick={() => setModalProduct(product)}
              >
                Customize
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
            <h2 className="text-2xl font-bold mb-4">Customize {modalProduct.name}</h2>

            <div className="mb-4">
              <label>Choose Base:</label>
              <select
                className="w-full border rounded p-2"
                onChange={(e) =>
                  handleCustomizationChange(
                    modalProduct.id,
                    'base',
                    customizationOptions.bases[e.target.selectedIndex]
                  )
                }
              >
                {customizationOptions.bases.map((base, index) => (
                  <option key={index} value={base.name}>{`${base.name} (+₹${base.price})`}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label>Choose Sauce:</label>
              <select
                className="w-full border rounded p-2"
                onChange={(e) =>
                  handleCustomizationChange(
                    modalProduct.id,
                    'sauce',
                    customizationOptions.sauces[e.target.selectedIndex]
                  )
                }
              >
                {customizationOptions.sauces.map((sauce, index) => (
                  <option key={index} value={sauce.name}>{`${sauce.name} (+₹${sauce.price})`}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label>Choose Cheese:</label>
              <select
                className="w-full border rounded p-2"
                onChange={(e) =>
                  handleCustomizationChange(
                    modalProduct.id,
                    'cheese',
                    customizationOptions.cheeses[e.target.selectedIndex]
                  )
                }
              >
                {customizationOptions.cheeses.map((cheese, index) => (
                  <option key={index} value={cheese.name}>{`${cheese.name} (+₹${cheese.price})`}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label>Choose Veggies:</label>
              <div className="grid grid-cols-2 gap-2">
                {customizationOptions.veggies.map((veggie, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCustomizations[modalProduct.id].veggies.includes(veggie)}
                      onChange={() => toggleVeggieSelection(modalProduct.id, veggie)}
                    />
                    <label>{`${veggie.name} (+₹${veggie.price})`}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">
                Customization Price: ₹{
                  calculateCustomizationPrice(selectedCustomizations[modalProduct.id])
                }
              </h3>
              <h3 className="text-lg font-bold">
                Total Price: ₹{
                  modalProduct.basePrice +
                  calculateCustomizationPrice(selectedCustomizations[modalProduct.id])
                }
              </h3>
            </div>

            <div className="flex justify-between">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded"
                onClick={() => {
                  handleAddToCart(modalProduct, true);
                  setModalProduct(null);
                }}
              >
                Add to Cart with Customizations
              </button>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => setModalProduct(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;

