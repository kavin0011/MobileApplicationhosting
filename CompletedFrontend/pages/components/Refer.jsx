import React from 'react'
import images from '../../img'
import Image from 'next/image'
import {UserPen,HandCoins} from 'lucide-react'
import { GoCrossReference } from "react-icons/go";
const Refer = () => {
  return (
    <div className="container mx-auto  py-16 flex items-center justify-center">
      <div className="flex w-full max-w-7xl shadow-md rounded-md ">
        {/* Left Section: Illustration */}
        <div className="w-1/2 flex items-center justify-center">
          <Image src={images.ReferImage} alt="Illustration" className="max-w-full h-auto" />
        </div>
        {/* Right Section: Content */}
        <div className="w-1/2 p-8">
          <h1 className="text-5xl font-bold font-poppins text-blue-700 mb-6">Refer & Earn</h1>
          <p className="text-lg text-gray-700 mb-8 font-poppins">
            Refer your friends and earn up to ₹50. 
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg mr-4">
                <div className="h-9 w-9 flex justify-center items-center rounded-md  bg-blue-400"><GoCrossReference className="bg-blue" size="20px" color="black"  /></div>
              
              </div>
              <div>
                <h3 className="text-xl font-semibold font-montserrat text-gray-900">Refer your friends</h3>
                <p className="text-gray-700 font-poppins">Share your referral link with friends. They get ₹50.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center  mr-4">
                <div className="h-9 w-9 flex justify-center items-center rounded-md  bg-blue-400"><UserPen className="bg-blue" color="black"  /></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold font-montserrat text-gray-900">Register your friends</h3>
                <p className="text-gray-700 font-poppins">Your friends register using your referral link.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center  rounded-lg mr-4">
              <div className="h-9 w-9 flex justify-center items-center rounded-md bg-blue-400"><HandCoins className="bg-blue" color="black"  /></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold font-montserrat text-gray-900">Earn you</h3>
                <p className="text-gray-700 font-poppins">₹50. You can use these credits to take recharge.</p>
              </div>
            </div>
          </div>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-montserrat">
            Get Started Earn
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Refer