import React from 'react';
import { FaUser, FaTrashAlt, FaEdit } from 'react-icons/fa';

function UserManagement() {
  return (
    <div className="bg-white border border-zinc-100 p-6 rounded-lg shadow-sm">
      <div className="text-2xl font-bold font-montserrat text-blue-600 mb-4">User Management</div>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-blue-50">
            <th className="p-4 font-montserrat text-blue-600">Name</th>
            <th className="p-4 font-montserrat text-blue-600">Email</th>
            <th className="p-4 font-montserrat text-blue-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-blue-100 transition duration-300">
            <td className="p-4 font-nunito">John Doe</td>
            <td className="p-4 font-nunito">john@example.com</td>
            <td className="p-4 flex space-x-4">
              <FaEdit className="text-blue-600 cursor-pointer" />
              <FaTrashAlt className="text-red-600 cursor-pointer" />
            </td>
          </tr>
          <tr className="hover:bg-blue-100 transition duration-300">
            <td className="p-4 font-nunito">Jane Doe</td>
            <td className="p-4 font-nunito">jane@example.com</td>
            <td className="p-4 flex space-x-4">
              <FaEdit className="text-blue-600 cursor-pointer" />
              <FaTrashAlt className="text-red-600 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
