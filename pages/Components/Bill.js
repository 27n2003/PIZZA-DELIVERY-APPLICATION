import React from 'react';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Navbar2 from './Navbar2';


const Bill = () => {
  const { items, cartTotal, emptyCart, totalUniqueItems } = useCart();
  const router = useRouter();
  const handlePayment = async () => {
    try {
      const response = await fetch('/api/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: cartTotal }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // add this to your .env.local
        amount: data.amount,
        currency: data.currency,
        name: "E-commerce Website",
        description: `Payment for ${totalUniqueItems} items`,
        image: "https://your-logo-url.com/logo.png",
        order_id: data.id,
        handler: function (response) {
          alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
          emptyCart();
          router.push('Bill')
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Customer Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
    }
  };

  const download = () => {
    print();
  }

  const empty = () => {
    emptyCart();
    router.push('Product');
    
  }

  return (
    <>
    <Navbar2></Navbar2>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center">Payment Receipt</h1>
      <table className="w-full table-auto border-collapse mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 border">Product Name</th>
            <th className="p-4 border">Quantity</th>
            <th className="p-4 border">Product Price</th>
            <th className="p-4 border">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="p-4 border text-xl font-bold">{item.name}</td>
              <td className="p-4 border">{item.quantity}</td>
              <td className="p-4 border">₹{item.price}</td>
              <td className="p-4 border">₹{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Total Amount: ₹{cartTotal}</h2>
      </div>
      <div className="flex justify-between ">
        <button className = "py-3 px-6 bg-blue-500 text-white rounded-lg text-xl font-semibold hover:bg-blue-600" onClick={download}>
            Download Bill
        </button>
        <button onClick={empty} className="py-3 px-6 bg-blue-500 text-white rounded-lg text-xl font-semibold hover:bg-blue-600">
            Go Back
        </button>
      </div>
    </div>
    </>
  );
};

export default Bill;
