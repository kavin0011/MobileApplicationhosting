import React,{ useState } from 'react'
import {Instagram, Mail,Phone} from 'lucide-react'
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import toast, { Toaster } from 'react-hot-toast';
// import SaveIcon from '@mui/icons-material/Save';
// import Stack from '@mui/material/Stack';
const Support = () => {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [query, setquery] = useState("")

    const [isloading, setisloading] = useState(false)
    const HandleSub= async (e)=>{
      e.preventDefault();
        const Query={
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "number":number,
            "query":query
        }
        try{
          setisloading(true);
            await axios.post('http://localhost:8080/postquery',Query);
            setemail("");
            setfirstname("");
            setlastname("");
            setquery("");
            setnumber("");
            setisloading(false);
            toast.success("Query Posted Succesfully",{duration:2000});
        }catch(e){
            console.log(e);
        }
    }
  return (
    <div className="felx justify-center w-11/12 sm:pl-20 py-20">
      <Toaster/>
        <div className=" shadow-3xl border w-11/full rounded-md">
        <div className="grid grid-cols-2">
            <div className="col-span-1"> 
                <div className="pl-24 pt-16"><p className="font-poppins font-bold text-3xl">For Any Query</p></div>
                <div className="pl-24"><p className="font-rajdhani font-normal text-sm">Have any question or need assistance ? Contact Us</p></div>
                <div className="pl-24 pt-20"><Mail color="blue"/></div>
                <div className="pl-24 pt-2"><p className="font-montserrat text-lg">customersupport@pulse.com</p></div>
                <div className="pl-24 pt-4"><Phone color="blue"/></div>
                <div className="pl-24 pt-2"><p className="font-montserrat text-lg">+91 9344177248</p></div>
                <div className="pl-24 pt-4"><Instagram color="blue"/></div>
                <div className="pl-24 pt-2"><p className="font-montserrat text-lg">PulseTopup_Support</p></div>
            </div>
            <div className='col-span-1'>
                <div className="py-14">

                <form onSubmit={HandleSub}>
                    <div className="flex">
                        <div><p className="font-poppins ">First name</p>
                        <input value={firstname} onChange={(e)=>setfirstname(e.target.value)} type="text" className="border border-black rounded-sm py-2 pr-16 pl-2 font-montserrat" required/>
                        </div>
                        <div className="pl-12"><p className="font-poppins">Last name</p>
                        <input value={lastname} onChange={(e)=>setlastname(e.target.value)} type="text" className="border border-black rounded-sm py-2 pr-16 pl-2 font-montserrat" required />
                        </div>
                    </div>
                    <div className="flex pt-7">
                        <div className=""><p className="font-poppins">Email</p>
                        <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" className="border border-black rounded-sm py-2 pr-16 pl-2 font-montserrat" required/>
                        </div>
                        <div className="pl-12"><p className="font-poppins">Phone number</p>
                        <input type="text" value={number} onChange={(e)=>setnumber(e.target.value)} className="border border-black rounded-sm py-2 pl-2 pr-16 font-montserrat" required />
                        </div>
                    </div>
                    <div className="flex pt-7 w-full ">
                        <div className=""><p className="font-poppins">Query</p>
                        <textarea value={query} onChange={(e)=>setquery(e.target.value)} placeholder="Type your query" className="border border-black rounded-sm py-2 font-montserrat pl-2 md:w-[36rem] md:h-full sm:w-[18rem] sm:h-11/12" required />
                        </div>
                    </div>
                    <div className="flex pt-20">
                    {/* <Stack direction="row" spacing={2}> */}
                    {!isloading&&
                      (<button  type="submit" className="border  px-6 py-2 rounded-md bg-blue-700 text-white font-montserrat hover:bg-blue-900">
                        Submit
                        </button>)
                    }
                    {isloading&&(
                      // <div className='border border-blue-700'>
                        <LoadingButton className='border border-blue-700' color='primary' loading variant="contained">
                        Loading
                       </LoadingButton>)
                        // </div>)
                    }
      {/* <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton> */}
    {/* </Stack> */}
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Support