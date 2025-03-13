// // import React from 'react';
// // import { useCart } from 'react-use-cart';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { data } from 'autoprefixer';

// // const Cart = () => {
// //   const { isEmpty, totalUniqueItems, items, cartTotal, removeItem, inCart } = useCart();

// //   const removeCart = (itemId) => {
// //     removeItem(itemId);
// //     if (inCart(itemId)) {
// //       toast.error(`Item removed from cart`);
// //     }
// //   };

// //   const handlePayment = async () => {
// //     try {
// //       const response = await fetch('/api/createOrder', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ amount: cartTotal }),
// //       })
// //       .then((t)=>
// //           t.json()
// //       );

// //       console.log(t.json());
     

// //       const options = {
// //         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // add this to your .env.local
// //         amount: data.amount,
// //         currency: data.currency,
// //         name: "E-commerce Website",
// //         description: `Payment for ${totalUniqueItems} items`,
// //         image: "https://your-logo-url.com/logo.png",
// //         order_id: data.id,
// //         handler: function (response) {
// //           alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
// //           // Handle post-payment actions (e.g., empty cart, update order status, etc.)
// //         },
// //         prefill: {
// //           name: "Customer Name",
// //           email: "customer@example.com",
// //           contact: "9999999999",
// //         },
// //         notes: {
// //           address: "Customer Address",
// //         },
// //         theme: {
// //           color: "#3399cc",
// //         },
// //       };

// //       const rzp1 = new window.Razorpay(options);
// //       rzp1.open();
// //     } catch (error) {
// //       console.error('Error creating Razorpay order:', error);
// //     }
// //   };

// //   if (isEmpty) {
// //     return <p>Your cart is empty.</p>;
// //   }

// //   return (
// //     <div>
// //       <ToastContainer />
// //       <h1>Shopping Cart</h1>
// //       <p>Total Items: {totalUniqueItems}</p>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Image</th>
// //             <th>Product Name</th>
// //             <th>Product Price</th>
// //             <th>Delete</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {items.map((item) => (
// //             <tr key={item.id}>
// //               <td className="p-10"><img src={item.imageUrl} className="h-14 w-26" alt={item.name} /></td>
// //               <td className="p-10"><h1>{item.name}</h1></td>
// //               <td className="p-10"><h1>{item.price}</h1></td>
// //               <td className="p-10"><button onClick={() => { removeCart(item.id); }}>Remove</button></td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <div className="mt-4">
// //         <button onClick={handlePayment} className="bg-blue-950 w-full h-10 text-stone-200 rounded-md">
// //           Pay with Razorpay
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;
// import React, { useState, useEffect } from 'react';
// import { useCart } from 'react-use-cart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cart = () => {
//   const { isEmpty, totalUniqueItems, items, cartTotal, removeItem, inCart, emptyCart } = useCart();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const removeCart = (itemId) => {
//     removeItem(itemId);
//     if (!inCart(itemId)) {
//       toast.error(`Item removed from cart`);
//     }
//   };

//   const handlePayment = async () => {
//     try {
//       const response = await fetch('/api/createOrder', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount: cartTotal }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create order');
//       }

//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // add this to your .env.local
//         amount: data.amount,
//         currency: data.currency,
//         name: "E-commerce Website",
//         description: `Payment for ${totalUniqueItems} items`,
//         image: "https://your-logo-url.com/logo.png",
//         order_id: data.id,
//         handler: function (response) {
//           alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
//           emptyCart();
//         },
//         prefill: {
//           name: "Customer Name",
//           email: "customer@example.com",
//           contact: "9999999999",
//         },
//         notes: {
//           address: "Customer Address",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error('Error creating Razorpay order:', error);
//     }
//   };

//   if (!isClient) {
//     return null;
//   }

//   if (isEmpty) {
//     return <p>Your cart is empty.</p>;
//   }

//   return (
//     <div>
//       <ToastContainer />
//       <h1>Shopping Cart</h1>
//       <p>Total Items: {totalUniqueItems}</p>
//       <table>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Product Name</th>
//             <th>Product Price</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td className="p-10">
//                 <img src={item.imageUrl} className="h-14 w-26" alt={item.name} style={{ width: 'auto', height: 'auto' }} />
//               </td>
//               <td className="p-10">
//                 <h1>{item.name}</h1>
//               </td>
//               <td className="p-10">
//                 <h1>{item.price}</h1>
//               </td>
//               <td className="p-10">
//                 <button onClick={() => removeCart(item.id)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-4">
//         <button onClick={handlePayment} className="bg-blue-950 w-full h-10 text-stone-200 rounded-md">
//           Pay with Razorpay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
// import React, { useState, useEffect } from 'react';
// import { useCart } from 'react-use-cart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cart = () => {
//   const { isEmpty, totalUniqueItems, items, cartTotal, removeItem, updateItemQuantity, emptyCart } = useCart();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const removeCart = (itemId) => {
//     removeItem(itemId);
//     toast.error(`Item removed from cart`);
//   };

//   const handlePayment = async () => {
//     try {
//       const response = await fetch('/api/createOrder', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount: cartTotal }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create order');
//       }

//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // add this to your .env.local
//         amount: data.amount,
//         currency: data.currency,
//         name: "E-commerce Website",
//         description: `Payment for ${totalUniqueItems} items`,
//         image: "https://your-logo-url.com/logo.png",
//         order_id: data.id,
//         handler: function (response) {
//           alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
//           emptyCart();
//         },
//         prefill: {
//           name: "Customer Name",
//           email: "customer@example.com",
//           contact: "9999999999",
//         },
//         notes: {
//           address: "Customer Address",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error('Error creating Razorpay order:', error);
//     }
//   };

//   if (!isClient) {
//     return null;
//   }

//   if (isEmpty) {
//     return <p>Your cart is empty.</p>;
//   }

//   return (
//     <div>
//       <ToastContainer />
//       <h1>Shopping Cart</h1>
//       <p>Total Items: {totalUniqueItems}</p>
//       <table>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Product Name</th>
//             <th>Quantity</th>
//             <th>Product Price</th>
//             <th>Total Price</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td className="p-10">
//                 <img src={item.imageUrl} className="h-14 w-26" alt={item.name} style={{ width: 'auto', height: 'auto' }} />
//               </td>
//               <td className="p-10 text-xl font-bold">
//                 <h1>{item.name}</h1>
//               </td>
//               <td className="p-10 ">
//                 <div className="border-4 border-black">
//                 <button className = "p-4" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button className = "p-4" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
//                 </div>
//               </td>
//               <td className="p-10">
//                 <h1>{item.price}</h1>
//               </td>
//               <td className="p-10">
//                 <h1>{item.price * item.quantity}</h1>
//               </td>
//               <td className="p-10">
//                 <button onClick={() => removeCart(item.id)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-4">
//         <button onClick={handlePayment} className="bg-blue-950 w-full h-10 text-stone-200 rounded-md">
//           Pay with Razorpay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
// import React, { useState, useEffect } from 'react';
// import { useCart } from 'react-use-cart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cart = () => {
//   const { isEmpty, totalUniqueItems, items, cartTotal, removeItem, updateItemQuantity, emptyCart } = useCart();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const removeCart = (itemId) => {
//     removeItem(itemId);
//     toast.error(`Item removed from cart`);
//   };

//   const handlePayment = async () => {
//     try {
//       const response = await fetch('/api/createOrder', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount: cartTotal }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create order');
//       }

//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // add this to your .env.local
//         amount: data.amount,
//         currency: data.currency,
//         name: "E-commerce Website",
//         description: `Payment for ${totalUniqueItems} items`,
//         image: "https://your-logo-url.com/logo.png",
//         order_id: data.id,
//         handler: function (response) {
//           alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
//           emptyCart();
//         },
//         prefill: {
//           name: "Customer Name",
//           email: "customer@example.com",
//           contact: "9999999999",
//         },
//         notes: {
//           address: "Customer Address",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error('Error creating Razorpay order:', error);
//     }
//   };

//   if (!isClient) {
//     return null;
//   }

//   if (isEmpty) {
//     return <p className="text-center text-2xl mt-10">Your cart is empty.</p>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <ToastContainer />
//       <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
//       <p className="text-xl mb-4 text-center">Total Items: {totalUniqueItems}</p>
//       <table className="w-full table-auto border-collapse">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-4 border">Image</th>
//             <th className="p-4 border">Product Name</th>
//             <th className="p-4 border">Quantity</th>
//             <th className="p-4 border">Product Price</th>
//             <th className="p-4 border">Total Price</th>
//             <th className="p-4 border">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id} className="text-center">
//               <td className="p-4 border">
//                 <img src={item.imageUrl} className="h-14 w-26 mx-auto" alt={item.name} />
//               </td>
//               <td className="p-4 border text-xl font-bold">
//                 <h1>{item.name}</h1>
//               </td>
//               <td className="p-4 border">
//                 <div className="flex justify-center items-center">
//                   <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
//                   <span className="px-4">{item.quantity}</span>
//                   <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
//                 </div>
//               </td>
//               <td className="p-4 border">
//                 <h1>₹{item.price}</h1>
//               </td>
//               <td className="p-4 border">
//                 <h1>₹{item.price * item.quantity}</h1>
//               </td>
//               <td className="p-4 border">
//                 <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={() => removeCart(item.id)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-between items-center mt-6">
//         <h2 className="text-2xl font-bold">Total Amount: ${cartTotal}</h2>
//         <button onClick={handlePayment} className="py-3 px-6 bg-blue-500 text-white rounded-lg text-xl font-semibold hover:bg-blue-600">
//           Pay with Razorpay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Navbar2 from './Navbar2';

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, cartTotal, removeItem, updateItemQuantity, emptyCart } = useCart();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const removeCart = (itemId) => {
    removeItem(itemId);
    toast.error(`Item removed from cart`);
  };

  const proceedToCheckout = () => {
    router.push('Checkout');
  };

  if (!isClient) {
    return null;
  }

  if (isEmpty) {
    router.push('EmptyCart')
  }

  return (
    <>
    <Navbar2></Navbar2> 
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      <p className="text-xl mb-4 text-center">Total Items: {totalUniqueItems}</p>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 border">Image</th>
            <th className="p-4 border">Product Name</th>
            <th className="p-4 border">Quantity</th>
            <th className="p-4 border">Product Price</th>
            <th className="p-4 border">Total Price</th>
            <th className="p-4 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="p-4 border">
                <img src={item.imageUrl} className="h-14 w-26 mx-auto" alt={item.name} />
              </td>
              <td className="p-4 border text-xl font-bold">
                <h1>{item.name}</h1>
              </td>
              <td className="p-4 border">
                <div className="flex justify-center items-center">
                  <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </td>
              <td className="p-4 border">
                <h1>₹{item.price}</h1>
              </td>
              <td className="p-4 border">
                <h1>₹{item.price * item.quantity}</h1>
              </td>
              <td className="p-4 border">
                <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={() => removeCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-6 mb-[200px]">
        <h2 className="text-2xl font-bold">Total Amount: ₹{cartTotal}</h2>
        <button onClick={proceedToCheckout} className="py-3 px-6 bg-blue-500 text-white rounded-lg text-xl font-semibold hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
    </> 
  );
};

export default Cart;


