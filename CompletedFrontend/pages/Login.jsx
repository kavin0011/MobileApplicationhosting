import Image from 'next/image';
import React, { createContext, useContext,useEffect,useState } from 'react';
import axios from 'axios';
import images from '../img';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast, ToastBar, Toaster } from 'react-hot-toast';
// import { Toaster } from "react-hot-toast";
import { AuthContext } from './AuthContext';
import { json, useHistory } from 'react-router-dom';
import { UserContext } from './UserdataContext';
import {jwtDecode} from 'jwt-decode';
// import { useHistory } from 'react-router-dom';
// import { AuthContext } from './AuthContext';
// import { useHistory } from 'react-router-dom';
// import React, { useState, useContext } from 'react';

const AdminComponent= createContext();
const Login = () => {

  // const { login2 } = useContext(AuthContext);
  // const history = useHistory();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // const handleChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // login2(credentials);
  //   history.push('/admin-portal');
  // };

  const router = useRouter();

  const [loginOrReg, setLoginOrReg] = useState(false);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const [Admin,setAdmin]=useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  // const [islogedin, setislogedin] = useState(false)

  const [adminemail, setadminemail] = useState('')
  const [adminpass, setadminpass] = useState('')

  //UseContext
  const [isOpen, setIsOpen] = useState(false); 
  const { setUser,setid } = useContext(UserContext); 
  const{ setislogedin } = useContext(UserContext);
  const{ islogedin } = useContext(UserContext);
  const onClose=()=>{
    setAdmin(!Admin);
  }
  // const notifySuccess = (msg) => {toast.success(msg, { duration: 2000 })}

  const adminlog = async (e) => {
    e.preventDefault();
    try {
      const {data:admin} = await axios.get(`http://localhost:8080/admin?email=${adminemail}`);
      const user = admin;
      console.log(admin);
      if (user) {
        if (user.password === adminpass) {
          toast.success("Login Successful",{duration:2000});
          setTimeout(() => {
            console.log("delay")
          }, 2000);
          router.push('/components/Admin');
        } else {
          toast.error('Invalid password', { duration: 2000 });
        }
      } else {
        toast.error('Invalid email', { duration: 2000 });
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred', { duration: 2000 });
    }
  };
  // useEffect(()=>{
    const login1 = async (e) => {
      e.preventDefault();
      
      try {
        // const { data: id_user} = await axios.get(`http://localhost:8080/getuserinfo?email=${loginEmail}`);
        // setid(id_user.id);
        // console.log(id_user.id);
        const { data:user } = await axios.post(`http://localhost:8080/authenticate`,{
          username:loginEmail,
          password:loginPass
        });
        // console.log(user);
        if (user) {
          const decodetoken = jwtDecode(user);  
          console.log(decodetoken.Email);
          console.log(decodetoken.Role);
          console.log(user);
          // if (user.password === loginPass) {
            setUser(user);
            setislogedin(true);
            toast.success("Login Successful", { duration: 3000 });
            setTimeout(() => {
              if(decodetoken.Role==="User"){
                router.push('/Home');
              }
              else{
                router.push('/components/Admin');
              }
            }, 1500);
          // } else {
            // toast.error('Invalid password', { duration: 2000 });
          // }
        } else {
          toast.error('Invalid email', { duration: 2000 });
        }
      } catch (err) {
        console.error(err);
        toast.error('An error occurred, Retry!', { duration: 2000 });
      }
    };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
      if (!passwordPattern.test(password)) {
        toast.error('Password must be at least 8 characters long and contain at least one special character', { duration: 3000 });
        return;
      }
      const name1 = email.match(/^([^@]*)@/)[1];
      const user = {
        "email": email.trim(),
        "name": email.trim(),
        "phone": mobile,
        "password": password,
        "roles":"User"
      };
      setUser(user);
      const { data } = await axios.post('http://localhost:8080/postregisterdetails',user);
      setislogedin(true);
      console.log(islogedin);
      // notifySuccess('Account created');
      setTimeout(() => {
        router.push('/Home');
      }, 2000);
      
      toast.success("Created new user",{duration:2000});
      } catch (err) {
        console.log(err);
      toast.error('Info Already Exist', { duration: 2000 });
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-white flex justify-center items-center absolute top-0">
      <Toaster />
      <div>
        <p className="font-semibold font-montserrat cursor-pointer top-5 left-8 absolute">
          <Link href="/Home">Back</Link>
        </p>
      </div>
      <div className="h-[500px] sm:shadow-3xl rounded-lg sm:grid grid-cols-2">
        <div className="flex">
          <Image className="bg-blue-100 rounded-lg" src={images.loginpageimg} alt="Profile Image" height={500} width={500} />
        </div>
        <div className="col-span-1">
          <div className="flex justify-center">
            <div className="pt-20">
              <p className="font-montserrat font-bold text-2xl text-blue-900">
                Flat 50% Off on first 3 Recharge
              </p>
            </div>
          </div>
          <div className="hidden sm:flex justify-center pt-2">
            <p className="font-kanit text-sm text-gray-600">
              Sign up and enjoy a massive 50% discount on your first three <br />
            </p>
          </div>
              <p className="flex justify-center font-kanit text-sm text-gray-600 ">recharges. Don't miss out!</p>
          <div className="flex">
            <div className="justify-start font-roboto font-semibold text-base pl-28 pt-8 cursor-pointer">
              <p className={` ${!loginOrReg ? 'text-blue-700' : 'text-black'}`} onClick={() => setLoginOrReg(false)}>
                Login
              </p>
            </div>
            <div className="flex md:pl-20 lg:pl-44 pt-8 font-roboto font-semibold text-base cursor-pointer">
              <p className={`${loginOrReg ? 'text-blue-700' : 'text-black'}`} onClick={() => setLoginOrReg(true)}>
                Register
              </p>
            </div>
          </div>
          {/* Login form*/}
          {!loginOrReg && (
            <div className="pt-5 flex justify-center">
              <form className="grid grid-row-3 gap-y-4" onSubmit={login1}>
                <div>
                  <input
                    className="border py-1 pl-1 sm:pr-28 border-black rounded-md row-span-1"
                    placeholder="email"
                    type="email"
                    required
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>  
                <div>
                  <input
                    className="border py-1 pl-1 sm:pr-28 border-black rounded-md row-span-1"
                    placeholder="password"
                    type="password"
                    onChange={(e) => setLoginPass(e.target.value)}
                  />
                </div>
                <div>
                  <button type="submit" className="bg-blue-800 text-white font-kanit w-52 sm:w-full py-1 rounded-sm row-span-1">
                    Login
                  </button>
                </div>
              </form>
            </div>
          )}
          {loginOrReg && (
            <div className="pt-5 flex justify-center">
              <form className="grid grid-row-4 gap-y-4" onSubmit={signup}>
                <div>
                  <input
                    className="border py-1 pl-1 sm:pr-28 border-black rounded-md row-span-1"
                    placeholder="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="border py-1 pl-1 sm:pr-28 border-black rounded-md row-span-1"
                    placeholder="Mobile number"
                    type="text"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="border py-1 pl-1 sm:pr-28 border-black rounded-md row-span-1"
                    placeholder="Password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button type="submit" className="bg-blue-800 text-white font-kanit sm:w-full w-52 py-1 rounded-sm row-span-1">
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className='font-poppins flex justify-center'>or</div>
        <div className='flex justify-center text-blue-800 font-montserrat font-bold text-medium cursor-pointer' onClick={onClose}>Admin</div>
       {!Admin&&(<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <div className="flex justify-center font-rajdhani text-xl">
          <p className="text-black font-montserrat font-semibold pb-2">Login</p>
        </div>
        <button 
          className="absolute -top-5 right-2 bg-red-500 text-white p-2 rounded-full" 
          onClick={ onClose}>
          Close
        </button>
        <form className="flex flex-col space-y-4" onSubmit={adminlog}>
          <input
            type="text"
            name="username"
            placeholder="email"
            value={adminemail}
            onChange={(e)=>setadminemail(e.target.value)}
            className="block w-full mb-2 p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value={credentials.password}
            value={adminpass}
            onChange={(e)=>setadminpass(e.target.value)}
            className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
            required
          />
          
            <button 
            type="submit" 
            className="p-2 bg-blue-500 text-white rounded"
            >
            Login
          </button>
        </form>
      </div>
    </div>)}
        </div>
      </div>
    </div>
  );
};

export default Login;

{/* <div className='grid grid-cols-2 '>
    <div className='col-span-1'>

    </div>
    <div className='col-span-1  flex pl-16 relative top-28'>
        <div className="shadow-3xl h-96 w-80 rounded-2xl bg-white  "> 
            <div className='flex justify-center pt-5'>
                <h1 className="text-black text-5xl font-kanit ">Welcome</h1>
                </div>
                <div className='flex justify-center pt-5'>
                <h1 className="text-black text-sm  font-serif ">Log in to unlock a world of digital experiences.</h1>
                </div>
            <div className="pt-20">
                <form >
                <p className="">Mobile Number</p>
                <input placeholder="Enter your number " />
            </form>
            </div>
        </div>
    </div>
</div> */}



// export default Login;



// <div className='flex justify-center -top-20 z-50  bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen relative bottom-20 items-center'>
//     <div className='bg-white shadow-3xl p-10 rounded-lg'>
//         {reg && (
//             <div>
//                 <p className='text-3xl font-serif mb-5 text-center text-gray-800'>Login</p>
//                 <form className='grid grid-rows-3 gap-4'>
//                     <div><input type="email" className='w-full border border-gray-300 rounded-md p-2' placeholder='Email' /></div>
//                     <div><input type="password" className='w-full border border-gray-300 rounded-md p-2' placeholder='Password' /></div>
//                     <div><button className='w-full border border-blue-500 rounded-md bg-blue-500 text-white py-2 hover:bg-blue-600'>Sign in</button></div>
//                 </form>
//             </div>
//         )}
//         {!reg && (
//             <div>
//                 <p className='text-3xl font-serif mb-5 text-center text-gray-800'>Register</p>
//                 <form className='grid grid-rows-4 gap-4' onSubmit={() => { }}>
//                     <div><input type="text" className='w-full border border-gray-300 rounded-md p-2' placeholder='Name' /></div>
//                     <div><input type="date" className='w-full border border-gray-300 rounded-md p-2' placeholder='DOB' /></div>
//                     <div><input type="email" className='w-full border border-gray-300 rounded-md p-2' placeholder='Email' /></div>
//                     <div><input type="password" className='w-full border border-gray-300 rounded-md p-2' placeholder='Password' /></div>
//                     <div><button className='w-full border border-blue-500 rounded-md bg-blue-500 text-white py-2 hover:bg-blue-600'>Register</button></div>
//                 </form>
//             </div>
//         )}
//         {reg && (
//             <p className='text-1xl flex'>
//                 If you are a new user
//                 <span className='text-sm px-1 cursor-pointer text-blue-500 ml-2 underline' onClick={switchReg}>
//                 Register
//                 </span>
//             </p>
//         )}
//     </div>
// </div>