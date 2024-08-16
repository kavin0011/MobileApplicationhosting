import React from 'react'
import { FaBell, FaTools } from 'react-icons/fa';

const Security = () => {
  return (
    <div className='flex flex-col'>
        <div className='grid grid-rows-1 grid-cols-4 gap-10 pl-5 pt-20 min-w-full'> 
            <div className='border border-black px-10 py-5 rounded-lg font-montserrat font-bold bg-blue-600 text-white'>Remove Users</div>
            <div className='border border-black px-10 py-5 rounded-lg font-montserrat font-bold pl-14 bg-red-600 text-white'>Warn User</div>
            <div className='border border-black px-10 py-5 rounded-lg font-montserrat font-bold bg-green-600 text-white'>Payment Issues</div>
            <div className='border border-black px-10 py-5 rounded-lg font-montserrat  font-bold pl-14 bg-violet-600 text-white'>Verification</div>
        </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border-zinc-100">
      <div className="text-2xl font-bold text-blue-600 mb-4 font-montserrat">Notifications and Alerts</div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaTools className="text-blue-600 text-xl" />
          <span className='font-nunito'>Suspesious activity by John</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaTools  className="text-blue-600 text-xl" />
          <span className='font-nunito'>Inaccurate Payment ID</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaTools  className="text-blue-600 text-xl" />
          <span className='font-nunito'>Mis-use of regulation</span>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Security