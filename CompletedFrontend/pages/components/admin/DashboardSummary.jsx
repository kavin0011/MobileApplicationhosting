import React from 'react';
import { FaUser, FaDollarSign, FaChartLine } from 'react-icons/fa';

function DashboardSummary() {
  return (
    <div className="bg-white border border-zinc-100 p-6 rounded-lg shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
        <FaUser className="text-blue-600 text-2xl mr-4" />
        <div>
          <div className="text-lg font-bold font-montserrat text-blue-600">Users</div>
          <div className="font-nunito">1,234</div>
        </div>
      </div>
      <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
        <FaDollarSign className="text-blue-600 text-2xl mr-4" />
        <div>
          <div className="text-lg font-bold font-montserrat text-blue-600">Revenue</div>
          <div className="font-nunito">$12,345</div>
        </div>
      </div>
      <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
        <FaChartLine className="text-blue-600 text-2xl mr-4" />
        <div>
          <div className="text-lg font-bold font-montserrat text-blue-600">Transactions</div>
          <div className="font-nunito">567</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSummary;
