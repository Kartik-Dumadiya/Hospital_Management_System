import React from 'react'
import logo from "../../public/media/logo.png"
import linkedin from '../../public/media/linkedin.svg';
import instagram from '../../public/media/instagram.svg';
import microsoft from '../../public/media/Microsoft.svg';
import twitter from '../../public/media/twitter.svg';

const Footter = () => {
    let social = "h-[1.5rem] w-[1.5rem] cursor-pointer";
    let titles = "font-bold text-orange-400";
    let titles_content = "hover:text-zinc-400 ease-in duration-100 cursor-pointer";
  return (
    <div className='w-[100%] bg-[#060822] h-72 flex'>
      <div className='bg-[#060822] h-18 flex relative flex-col w-[250px]  h-[90px] mt-4 ml-4'>
        <div className=' cursor-pointer bg-[#060822] flex justify-start relative w-[250px]'>
            <img src={logo} alt="Logo" className='w-[150px]'/>
            <p className=' fondamento-regular text-white text-3xl font-bold absolute bottom-3 right-[3.3rem]'>.Care</p>
        </div>
        <div className='absolute bottom-2 left-5'>
            <div className='text-white font-sans text-lg flex gap-3'><p>Your</p><p className=' text-orange-400'>Health</p><p>,Our Priority!</p></div>
        </div>
        <div className='flex gap-[0.6rem] pl-5 pt-4'>
            <img src={linkedin} alt="Ln" className={social}/>
            <img src={instagram} alt="Ins" className={social}/>
            <img src={microsoft} alt="Mic" className={social}/>
            <img src={twitter} alt="Twi" className={social}/>
        </div>
      </div>

      <div className='text-white flex gap-48 p-6 leading-10 ml-4'>
            <div className=''>
                <p className={titles}>Quick Links</p>
                <p className={titles_content}>About us</p>
                <p className={titles_content}>Services</p>
                <p className={titles_content}>Blog</p>
            </div>
            <div>
                <p className={titles}>I want to:</p>
                <p className={titles_content}>Find a doctor</p>
                <p className={titles_content}>Requist an Appointment</p>
                <p className={titles_content}>Find a Location</p>
                <p className={titles_content}>Get a Opinion</p>
            </div>
            <div>
                <p className={titles}>Support</p>
                <p className={titles_content}>Donet</p>
                <p className={titles_content}>Contact Us</p>
                <p className={titles_content}>Get a Opinion</p>
            </div>
      </div>
    </div>
  )
}

export default Footter
