import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';
import { Doughnut, Bar,Line} from 'react-chartjs-2';
import NotificationsAlerts from './admin/NotificationAlerts';
import RecentActivity from './admin/RecentActivity';
import Security from './admin/Security';
import DashboardSummary from './admin/DashboardSummary';
import SystemNotifications from './admin/Systemnotification';
import UserManagement from './admin/UserManagementtool';

ChartJS.register(
    ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement
  );

const doughnutData = {
  labels: ['Active Users', 'Inactive Users', 'New Users'],
  datasets: [
    {
      label: '# of Users',
      data: [120, 50, 30],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
    },
  ],
};

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Website Usage',
        data: [50, 100, 150, 200, 250, 300, 350],
        fill: false,
        borderColor: '#4BC0C0',
        tension: 0.1,
      },
    ],
  };


const barData = {
  labels: ['Users Topped Up for Self', 'Users Topped Up for Others'],
  datasets: [
    {
      label: '# of Users',
      data: [200, 80],
      backgroundColor: ['#4BC0C0', '#FF9F40'],
      hoverBackgroundColor: ['#4BC0C0', '#FF9F40'],
    },
  ],
};


const notifications = [
    { id: 1, message: 'John raised a complaint about recharge delay.', time: '2 hours ago' },
    { id: 2, message: 'Joe requested a refund for an incorrect recharge.', time: '1 day ago' },
    { id: 3, message: 'Tom updated their payment method.', time: '3 days ago' },
  ];
const Admin=()=>{
//   const { logout } = useContext(AuthContext);
const[security,setsecurity] = useState(false);
const router = useRouter();

   const logout=()=>{
    router.push("/Login");
   }

   const change=()=>{
    setsecurity(!security);
   }
  return (
    // <div className="flex  top-0 absolute min-h-screen min-w-full items-center bg-gray-100">
    //   <div className='w-2/12 border min-h-screen  bg-slate-400'>
    //   <div className='flex justify-center pt-5 font-montserrat text-lg font-medium '>
    //     <h1>User Analysis</h1>
    //     </div>
    //   <div className='flex justify-center pt-1 font-montserrat text-lg font-medium'>
    //     <h1>Critical Issues</h1>
    //     </div>
    //   </div>
    //   <div className='flex'>
    
    //   </div>
    // </div>
    <div className="flex flex-col absolute top-0 min-h-screen min-w-full bg-white">
<div className='top-5 right-10 absolute'><button className='bg-red-600 font-montserrat text-white rounded-md px-2 py-1 ' onClick={logout}>Logout</button></div>
      <nav className="bg-gray-800 w-min-full p-6">
        <h2 className="text-white text-2xl mb-6 font-montserrat">Admin Dashboard</h2>
        <ul className='flex'>
          <li className="mb-4">
            <p className="text-white hover:text-gray-300 font-montserrat cursor-pointer pl-12" onClick={change} >User Analysis</p>
          </li>
          <li className="mb-4">
            <p className="text-white hover:text-gray-300 font-montserrat cursor-pointer pl-12" onClick={change}>Security Analysis</p>
          </li>
        </ul>
      </nav>
      <div>
        {!security&&
        <div>
      <UserManagement/>
      <DashboardSummary/>
      <RecentActivity/>
      <NotificationsAlerts />
      <SystemNotifications/>
      {/* <div className="flex-grow p-6">
        <h1 className="text-3xl mb-6 font-montserrat">User Analysis</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-4">Website Usage Over Time</h2>
            <Line data={lineData} />
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-4 font-nunito">Top-Up Analysis</h2>
            <Bar data={barData} />
          </div>
        </div>
      </div> */}
      </div>}

      {security&&<Security/>}
      {/* //Notification */}

        </div>

</div>
);
};

export default Admin;

{/* <div className="bg-white p-6 mt-6 rounded shadow">
    <h2 className="text-xl mb-4">Recent Notifications</h2>
    <ul>
      {notifications.map((notification) => (
          <li key={notification.id} className="mb-4">
          <div className="flex justify-between">
            <div>{notification.message}</div>
            <div className="text-gray-500 text-sm">{notification.time}</div>
          </div>
        </li>
      ))}
    </ul>
      </div> */}