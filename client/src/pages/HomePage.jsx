import React,{useEffect} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footter from '../components/Footter';
import homepg from "../../media/Homepg.svg";
import { Link } from 'react-router-dom';

const HomePage = () => {
  let tag_style = "h-[360px] w-[320px] rounded-lg px-3 text-center bg-slate-200 flex flex-col";
  let tag_text = "font-bold text-[#2B2A29] text-xl leading-10";

  //login user data
  const getUserData = async() => {
    try {
      const res = await axios.post("http://localhost:3002/user/getUserdata",{}, {
        headers :{
          Authorization : "Bearer " + localStorage.getItem("token"),
        }
      }) 
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(()=>{
    getUserData()
  },[])
  return (
    <div>
      <Navbar/>
      <div style={{ backgroundImage : `url(${homepg})` , overflow: "hidden"}} className=' w-[100%] flex justify-center h-[485px]'>
            <div className='flex flex-col justify-start items-center gap-6'>
                <div className='flex flex-col justify-center items-center pt-12'>
                    <p className='text-white font-sans text-5xl p-1 font-bold'>Seamless Care, Effortless Management</p>
                    <div className='text-white font-sans text-5xl p-1 font-bold flex gap-3'><p>Your</p><p className=' text-orange-400'>Health</p><p>,Our Priority!</p></div>
                </div>
                <Link to='http:localhost:5173\appointments' className=' w-[250px] h-10 cursor-pointer flex text-[#28328C] justify-center font-bold items-center bg-orange-400 rounded-lg p-1 mr-3 hover:bg-[#FFC828] duration-200 ease-in'>
                    Book Appointment Now !
                </Link>
            </div>
       </div>
       <div className='flex flex-col'>
            <div className='p-6 m-auto w-[500px] text-center'>
                <p className='text-5xl font-bold font-sans leading-[3.5rem] text-[#2B2A29]'>Providing the best medical services</p>
                <p className=' tracking-wider font-sans text-[#2B2A29]'>World-class care for evertyone. Our health System offers unmatched, expert health care.</p>
            </div>

            <div className='w-full p-10 flex justify-around'>
                <div className={tag_style}>
                    <img src="..\media\find_doc.png" alt="Find Doc" className='h-[200px] w-[220px] mx-auto'/>
                    <p className={tag_text}>Find a Doctor</p>
                    <p className='font-sans text-[#2B2A29]'>World-class care for evertyone. Our health System offers unmatched, expert health care.From the lab to the clinic.</p>
                </div>
                <div className={tag_style}>
                    <img src="..\media\know_doc.png" alt="Find Doc" className='h-[200px] w-[220px] mx-auto'/>
                    <p className={tag_text}>Find a Location</p>
                    <p className='font-sans text-[#2B2A29]'>World-class care for evertyone. Our health System offers unmatched, expert health care.From the lab to the clinic.</p>
                </div>
                <div className={tag_style}>
                    <img src="..\media\book_doc.png" alt="Find Doc" className='h-[200px] w-[200px] mx-auto mt-1'/>
                    <p className={tag_text}>Book an Appoointment</p>
                    <p className='font-sans text-[#2B2A29]'>World-class care for evertyone. Our health System offers unmatched, expert health care.From the lab to the clinic.</p>
                </div>
            </div>
        </div>
        <Footter/>
    </div>
  )
}

export default HomePage
