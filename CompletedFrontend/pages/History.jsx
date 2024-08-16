import React, { useContext, useEffect,useState } from 'react';
import { UserContext } from './UserdataContext';
import axios from 'axios';

const History = () => {
  const { user } = useContext(UserContext);
    // if(user!=null){
    if(user===null){
      return <>Login To save history</>
    }
      const { id } = user;
      
      // const{} = user;
      const fetchHistory = async () => {
              try {
                const response = await axios.get(`http://localhost:8080/gethistory?id=1`, {
                  headers: {
                    'Authorization': `Bearer ${user}`
                  }
                });
              setHistory(response.data);
            } catch (error) {
              console.error('Error fetching history:', error);
            }
          };
    const [history, setHistory] = useState(null);
    useEffect(()=>{
      fetchHistory();
    },[])
    
  //   useEffect(() => {
  //     const fetchHistory = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:8080/gethistory?id=${id}`);
  //       setHistory(response.data);
  //     } catch (error) {
  //       console.error('Error fetching history:', error);
  //     }
  //   };
    
  //   fetchHistory();
    
  //   const interval = setInterval(() => {
  //     fetchHistory();
  //     console.log("Game on")
  //   },[]); // Refresh every 5 seconds (adjust as needed)
    
  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [id]);
  // }
  // console.log(History1);
  
  if (!history) {
    return <div>No history available</div>;
  }
  return (
    <div className="bg-gray-100 text-black font-sans py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto rounded-md">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-8 font-montserrat">Recharge History</h1>
                <div className="w-full rounded-md">
                    <div className="grid grid-cols-1 sm:grid-cols-8 gap-4 p-4 bg-gray-400 rounded-t-md font-semibold">
                        <span className="text-lg font-montserrat">Name</span>
                        <span className="text-lg font-montserrat">Number</span>
                        <span className="text-lg font-montserrat">Amount</span>
                        <span className="text-lg font-montserrat">Provider</span>
                        <span className="text-lg font-montserrat">Type</span>
                        <span className="text-lg font-montserrat">Offers</span>
                        <span className="text-lg font-montserrat">Status</span>
                        {/* <span className="text-lg font-montserrat">Date&Time</span> */}
                    </div> 
                    {history.map((recharge, index) => (
                        <div 
                            key={index} 
                            className={`grid grid-cols-1 sm:grid-cols-8 gap-4 p-4 ${index % 2 === 0 ? 'bg-blue-200' : 'bg-white'} shadow-md`}
                        >
                            <div className=" font-montserrat  font-medium text-base">{recharge.name}</div>
                            <div className=" font-montserrat  font-medium text-base">{recharge.number}</div> 
                            <div className=" font-montserrat font-medium text-base">{recharge.amount}</div>
                            <div className=" font-montserrat font-medium text-base">{recharge.provider}</div>
                            <div className=" font-montserrat font-medium text-base">{recharge.type}</div>
                            <div className=" font-montserrat font-medium text-base">{recharge.offers}</div>
                            <div className=" font-montserrat font-medium text-base">{recharge.status}</div>
                            {/* <div className=" font-montserrat font-medium text-base">{recharge.date}</div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;
