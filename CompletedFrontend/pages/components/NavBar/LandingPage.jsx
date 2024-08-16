// pages/index.js

import Head from 'next/head';
import { useState, useContext } from 'react';
import Image from 'next/image';
import { UserContext } from '../../UserdataContext';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import images from '../../../img';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';

const LandingPage = () => {
  // UseContext
  const { user,id } = useContext(UserContext);
  const router = useRouter();
  const [fiber, setFiber] = useState(false);

  const [formData, setFormData] = useState({
    type: 'prepaid',
    mobileNumber: '',
    operator: '',
    offer: '',
    amount: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(user===null){
      router.push('./Login');
      return ;
    }
    // router.push('./components/Payment');
    const decodetoken = jwtDecode(user);
    console.log(decodetoken.Ids)
    const currentDate = new Date();
    const name1 = decodetoken.Email.match(/^([^@]*)@/)[1];
    const history = {
        name: name1,
        number: formData.mobileNumber,
        amount: formData.amount,
        status: 'Success',
        provider: formData.operator,
        type: formData.type,
        offers: formData.offer,
        // date: currentDate.toISOString().split('T')[0] + currentDate.toTimeString().split(' ')[0],
        user: {
          id: 1// Use decoded token's id
        }
      };
      console.log('Payload being sent:', history);
      console.log(user);
    try {
        const response = await axios.post('http://localhost:8080/posthistory', history,{
            headers: {
                'Authorization': `Bearer ${user}` // Include the JWT token in the request headers
            }
        });
      console.log('Response:', response);
      toast.success('Recharge successful', { duration: 2000 });
    } catch (error) {
      console.error('Error posting history:', error.response ? error.response.data : error.message);
      toast.error('Something went wrong', { duration: 2000 });
    }
    console.log('Form Data:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="h-[31rem]">
      <Toaster />
      <div className="flex flex-row">
        <div className="flex">
          <h1 className="absolute md:left-40 left-12 font-poppins text-3xl font-bold text-white pt-7">
            Instant Mobile Recharge at Your Fingertips!! <br />
          </h1>
        </div>
        <div className="flex">
          <h1 className="absolute md:left-40 left-12 font-poppins text-2xl font-extralight text-white pt-7 mt-[60px]">
            ReCharge Now... <br />
          </h1>
        </div>
      </div>
      <div className="bg-blue-950 lg:h-56 grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="md:col-span-6 col-span-10 relative sm:top-20 top-24 md:h-[19rem] bg-white shadow-3xl rounded-lg md:relative md:top-24 mt-10">
          <div className="p-4 flex justify-start">
            <h1 className="text-2xl font-poppins font-bold pl-7">
              Mobile Recharge & Bill Payments
            </h1>
          </div>

          <div className="flex justify-start pl-12">
            <label className="mr-4 text-sm font-montserrat">
              <input
                type="radio"
                name="type"
                value="prepaid"
                checked={formData.type === 'prepaid'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              Prepaid
            </label>
            <label className="mr-4 text-sm font-montserrat">
              <input
                type="radio"
                name="type"
                value="postpaid"
                checked={formData.type === 'postpaid'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              Postpaid
            </label>
            <div className="flex justify-end pl-80 -mt-1">
              <p
                onClick={() => setFiber(false)}
                className={`${!fiber ? 'border border-blue-600 text-white rounded-md bg-blue-600 font-montserrat px-2 cursor-pointer' : 'text-black rounded-md font-montserrat px-2 cursor-pointer text-xl'}`}
              >
                Mobile
              </p>
              <p className="mr-2 ml-2"> / </p>
              <p
                onClick={() => setFiber(true)}
                className={`${fiber ? 'border border-blue-600 text-white rounded-md bg-blue-600 font-montserrat px-2 cursor-pointer' : 'text-black rounded-md font-montserrat px-2 cursor-pointer text-xl'}`}
              >
                Fiber
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {!fiber && (
              <div className="grid grid-cols-2 grid-rows-2 gap-3 px-4 pt-5">
                <div className="mb-4">
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-montserrat"
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="operator"
                    value={formData.operator}
                    onChange={handleChange}
                    className="w-full p-2 border font-kanit border-gray-300 rounded-md"
                    required
                  >
                    <option value="">Select Your Operator</option>
                    <option value="Airtel">Airtel</option>
                    <option value="Jio">Jio</option>
                    <option value="BSNL">BSNL</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="NTLN">NTLN</option>
                  </select>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="amount"
                    placeholder="Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-montserrat"
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="offer"
                    value={formData.offer}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-kanit"
                    required
                  >
                    <option value="">Select offers</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                  </select>
                </div>
              </div>
            )}
            {fiber && (
              <div className="grid grid-cols-2 grid-rows-1 gap-3 px-4 pt-5">
                <div className="mb-4">
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Fiber Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-montserrat"
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="operator"
                    value={formData.operator}
                    onChange={handleChange}
                    className="w-full p-2 border font-kanit border-gray-300 rounded-md"
                    required
                  >
                    <option value="">Select Your Operator</option>
                    <option value="Airtel">Airtel</option>
                    <option value="Jio">Jio</option>
                    <option value="BSNL">BSNL</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="NTLN">NTLN</option>
                  </select>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="amount"
                    placeholder="Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-montserrat"
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="offer"
                    value={formData.offer}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md font-kanit"
                    required
                  >
                    <option value="">Select offers</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                  </select>
                </div>
              </div>
            )}
            <div className="flex justify-center md:pt-2 bottom-3 relative">
              <button type="submit" className="bg-blue-700 hover:bg-blue-900 text-white p-2 rounded-md font-montserrat">
                Continue recharge
              </button>
            </div>
          </form>
        </div>
        <div className="sm:col-span-4 md:left-12 md:top-8 lg:flex justify-center relative hidden">
          <Image src={images.add} width={400} height={400} alt="Advertisement" />
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="pt-56 flex justify-center p-9">
        {/* <div className="border rounded-md border-tb  border-tb-black text-3xl text-stroke border-slate-500 w-full py-4 font-poppins font-extrabold text-gray-600">
          <marquee>5% Off on Every Recharge, Enjoy Immediate savings on all your recharges. Monthly discount vouchers for partner services like streaming or shopping. Extra 2GB of data added to your plan during weekends.</marquee>
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;

// <div className="font-sans bg-gray-50">
//   <Head>
//     <title>Mobile Recharge App</title>
//     <meta name="description" content="Recharge your mobile in seconds - Anytime, Anywhere!" />
//   </Head>

//   {/* Hero Section */}
//   <header className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
//     <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-4">Recharge Your Mobile in Seconds</h1>
//         <p className="text-lg mb-8">Fast, Secure, and Hassle-Free Mobile Recharges</p>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300">Get Started</button>
//       </div>
//     </div>
//   </header>

//   {/* Key Features Section */}
//   <section className="py-16">
//     <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
//     <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[
//         { title: "Instant Recharges", icon: "⚡" },
//         { title: "Multiple Payment Options", icon: "💳" },
//         { title: "User-Friendly Interface", icon: "📱" },
//         { title: "Special Offers", icon: "🎉" },
//         { title: "24/7 Customer Support", icon: "🕒" },
//       ].map((feature) => (
//         <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6 text-center">
//           <div className="text-4xl mb-4">{feature.icon}</div>
//           <h3 className="text-xl font-semibold">{feature.title}</h3>
//         </div>
//       ))}
//     </div>
//   </section>

//   {/* How It Works Section */}
//   <section className="bg-gray-100 py-16">
//     <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
//     <ol className="list-decimal pl-8 space-y-4 max-w-2xl mx-auto">
//       <li>Download the app</li>
//       <li>Sign up or log in</li>
//       <li>Choose your mobile provider and enter the amount</li>
//       <li>Complete the payment</li>
//     </ol>
//   </section>

//   {/* User Testimonials Section */}
//   <section className="py-16">
//     <h2 className="text-3xl font-bold text-center mb-8">User Testimonials</h2>
//     <div className="max-w-4xl mx-auto space-y-6">
//       {[
//         { text: "This app is amazing! I can recharge my phone in seconds!", user: "User A" },
//         { text: "Fast and reliable service. Highly recommended!", user: "User B" },
//       ].map((testimonial) => (
//         <blockquote key={testimonial.user} className="bg-white p-6 rounded-lg shadow-lg">
//           <p className="mb-4">"{testimonial.text}"</p>
//           <cite className="font-bold">- {testimonial.user}</cite>
//         </blockquote>
//       ))}
//     </div>
//   </section>

//   {/* Download Section */}
//   <section className="bg-gray-100 py-16">
//     <h2 className="text-3xl font-bold text-center mb-8">Download Our App</h2>
//     <div className="flex justify-center space-x-4">
//       <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300">App Store</a>
//       <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300">Google Play</a>
//     </div>
//   </section>

//   {/* Footer */}
//   <footer className="bg-gray-800 text-white py-8 text-center">
//     <p className="mb-2">Contact us: support@mobilerchargeapp.com</p>
//     <p className="text-sm">Privacy Policy | Terms of Service</p>
//   </footer>
// </div>