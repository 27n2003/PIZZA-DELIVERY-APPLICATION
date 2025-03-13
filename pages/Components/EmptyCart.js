import Navbar2 from './Navbar2';
import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';




const EmptyCart = () => {
  const { isEmpty, totalUniqueItems, items, cartTotal, removeItem, updateItemQuantity, emptyCart } = useCart();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  useEffect(() => {
    toast.success("Shopping Cart is Empty");
  });

  return (
    <div>
       <Navbar2></Navbar2> 
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
     <ToastContainer></ToastContainer>
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
        
      </div>
    </div>
  </div>

)
}

export default EmptyCart;
