// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { toast,ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./Navbar";
// import Footer from "./Footer";




// export default function Login() {
//   const[email,setEmail] = useState("");
//   const[password,setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async(e) => {
//     e.preventDefault();
//     const response = await fetch("/api/login",{
//       method:'POST',
//       headers:{
//         "Content-type":"application/json"
//       },
//       body:JSON.stringify({email,password})
      
//   });
//   if(response.ok){
//       const { token }  = await response.json()
//       toast.success("Login Successfull");
//       router.push("Product");
      
//       localStorage.setItem('token',token);
//       console.log(localStorage.getItem('token'))
      
    
//   }
//   else{
//     alert("Invalid login credentials");
//   }
// }


//     return (
//       <>
//       <Navbar></Navbar>
//         <ToastContainer/>
//         {/*
//           This example requires updating your template:
  
//           ```
//           <html class="h-full bg-white">
//           <body class="h-full">
//           ```
//         */}
//         <div className="">
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-2 mt-12 mb-10">
//           {/* <div className="border-2 w-1/2 justify-center border-black shadow-3xl"> */}
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
//             <img
//               className="mx-auto h-10 w-auto"
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               alt="Your Company"
//             />
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               Sign in to your account
//             </h2>
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6 p-10" action="#" method="POST">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value = {email}
//                     onChange = {(e) => {setEmail(e.target.value)}}
//                     autoComplete="email"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                     Password
//                   </label>
//                   <div className="text-sm">
//                     <Link href="/Components/Otp" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                       Forgot password?
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     value = {password}
//                     onChange = {(e) =>{setPassword(e.target.value)}}
//                     autoComplete="current-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full mb-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                   onClick = {handleLogin}
//                 >
//                   Sign in
//                 </button>

//               </div>
//             </form>
  
          
          
//           </div>
//         </div>
//         </div>
        
//       </>
//     )
//   }
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      const { token } = await response.json();
      toast.success("Login Successful");
      router.push("Product");
      localStorage.setItem('token', token);
      console.log(localStorage.getItem('token'));
    } else {
      alert("Invalid login credentials");
    }
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-7 mb-7">
        <div className="sm:mx-auto sm:w-full sm:max-w-md border border-gray-300 rounded-lg shadow-2xl">
          <div className="px-6 py-8 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <Link href="/Components/Otp" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
