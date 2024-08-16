import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect , useState} from 'react';
import { FaBell, FaTools } from 'react-icons/fa';

 function  NotificationsAlerts() {

  const [notifiaction, setnotification] = useState(null);
  const notification = async () => {
    try {
        const response = await axios.get("http://localhost:8080/getquerynotification",);
        setnotification(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    useEffect(() => {
    notification();
    },[])
  //   const interval = setInterval(() => {
  //     notification();
  //     console.log("Game on")
  //   }, 5000); // Refresh every 5 seconds (adjust as needed)

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // },);

  return (
    <div className="bg-white border border-zinc-100 p-6 rounded-lg shadow-sm">
      <div className="text-2xl gap-3 font-bold text-blue-600 mb-4 font-montserrat">Notifications and Alerts</div>
      <div className='grid gap-5 px-5'>
       {
  notifiaction && notifiaction.length > 0 ? (
    notifiaction.map((n, i) => (
      // <div className=''>
      <div key={i + 1} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
        <FaBell className="text-blue-600 text-xl" />
        <div className="font-montserrat ">
          <div>{n.firstname}</div>
          <div>{n.email}</div>
          <div>{n.number}</div>
          <div className='flex '><p className='text-gray-500'>Raised Query "</p>{n.query}<p className='text-gray-500'>"</p></div>
        </div>
      </div>
      // </div>
    ))
  ) : (
    <div>No notifications available</div>
  )
}



      </div>
    </div>
  );
}

export default NotificationsAlerts;
// <div className="bg-white p-6 rounded-lg shadow-sm border-zinc-100">
//   <ul className="space-y-4">
//     <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
//       <FaTools className="text-blue-600 text-xl" />
//       <span className='font-nunito'>Suspesious activity by John</span>
//     </li>
    // <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
    //   <FaBell className="text-blue-600 text-xl" />
    //   <span className='font-nunito'>Payment issue resolved for Joe</span>
    // </li>
//   </ul>
// </div>