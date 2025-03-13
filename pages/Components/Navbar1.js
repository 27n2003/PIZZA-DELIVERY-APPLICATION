import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <>
      <div className="flex h-40 space-x-96 w-full bg-white pt-10">
        <div className="relative left-96 w-11/12">
        <img src="pkt.jpeg" class="h-20"/>
        </div>
        <div className="w-2/12">
          <button className="font-Poppins h-20 w-36 border-4 border-purple-800 rounded-2xl">Sign up/Login</button>
        </div>
      </div>
      <div className="bg-white">
        <ul className="flex font-Poppins text-md font-medium mx-20">
        <Link href="/Components/Home"><li className="mx-15 px-5 py-5">Home</li></Link>
        <Link href=""><li className="px-5 py-5">Travel</li></Link>  
        <Link href=""><li className="px-5 py-5">Technology</li></Link>
        <Link href=""><li className="px-5 py-5">Health</li></Link>
        <Link href=""><li className="px-5 py-5">News</li></Link>
        <Link href=""><li className="px-5 py-5">Entertainment</li></Link>
        <Link href=""><li className="px-5 py-5">Sports</li></Link>
        <Link href=""><li className="px-5 py-5">Spirituality</li></Link>
        <Link href=""><li className="px-5 py-5">Business</li></Link>
        <Link href=""><li className="px-5 py-5">Environment</li></Link>
        <Link href=""><li className="px-5 py-5 font-extrabold">...</li></Link>
        <Link href=""><li className="px-5 py-5"></li></Link>

        </ul>
        <hr className="h-1 bg-black"/>
        </div>
        <h3 className="mx-20 mt-6">HOME / Blogs Home</h3>
        <hr className="h-1 bg-slate-500"/>
      </>      
    </div>
  )
}
