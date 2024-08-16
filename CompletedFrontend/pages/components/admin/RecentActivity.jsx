import React,{ useState , useEffect } from 'react';
import { FaUser, FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';
import axios from 'axios';

function RecentActivity() {

  const [recentactivity, setrecentactivity] = useState(null);
  const activity = async () => {
    console.log("call");
    try {
        const response = await axios.get("http://localhost:8080/getrecentactivity",);
        setrecentactivity(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    useEffect(() => {
    activity();
    },[])

  return (
    <div className="bg-white border border-zinc-100 p-6 rounded-lg shadow-sm">
      <div className="text-2xl font-bold font-montserrat text-blue-600 mb-4">Recent Activity</div>
      <div className="text-2xl gap-3 font-bold text-blue-600 mb-4 font-montserrat">Notifications and Alerts</div>
      <div className='grid gap-5 px-5'>
       {
  recentactivity && recentactivity.length > 0 ? (
    recentactivity.map((n, i) => (
      // <div className=''>
      <div key={i + 1} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
        {/* <FaBell className="text-blue-600 text-xl" /> */}
        <FaRegCheckCircle className="text-blue-600 text-xl font-montserrat" />
        <div className="font-montserrat grid ">
          <div className='flex font-montserrat'><p className='text-gray-500'>Mobile Number : </p>{n.number}</div>
          <div className='flex font-montserrat'> <p className='text-gray-500'>Amount Paid:</p>  {n.amount}</div>
          <div className='flex font-montserrat'><p className='text-gray-500'>Provider: </p> {n.provider}</div>
          <div className='flex font-montserrat'><p className='text-gray-500'>{n.status} </p></div>
        </div>
      </div>
      // </div>
    ))
  ) : (
    <div className='font-montserrat text-lg'>No Recent Activity available</div>
  )}
    </div>
    </div>
  );
}

export default RecentActivity;

//   <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
//     <span className='font-nunito'>User JohnDoe made a transaction</span>
//   </li>
//   <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
//     <FaUser className="text-blue-600 text-xl" />
//     <span className='font-nunito'>User JaneDoe registered</span>
//   </li>
//   <li className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
//     <FaRegTimesCircle className="text-blue-600 text-xl font-montserrat" />
//     <span className='font-nunito'>Transaction #1191 failed</span>
//   </li>
// </ul> 