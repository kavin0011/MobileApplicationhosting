import React from 'react';
import { FaBell } from 'react-icons/fa';

function SystemNotifications() {
  return (
    <div className="bg-white border border-zinc-100 p-6 rounded-lg shadow-sm">
      <div className="text-2xl font-bold font-montserrat text-blue-600 mb-4">System Notifications</div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaBell className="text-blue-600 text-xl" />
          <div>
            <div className="font-nunito">Server maintenance scheduled for 3:00 AM</div>
            <div className="font-nunito text-sm text-gray-500">July 30, 2024</div>
          </div>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaBell className="text-blue-600 text-xl" />
          <div>
            <div className="font-nunito">New feature released: Dark Mode</div>
            <div className="font-nunito text-sm text-gray-500">July 25, 2024</div>
          </div>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <FaBell className="text-blue-600 text-xl" />
          <div>
            <div className="font-nunito">System update completed successfully</div>
            <div className="font-nunito text-sm text-gray-500">July 20, 2024</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SystemNotifications;
