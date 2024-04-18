import React,{useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import {useParams} from "react-router-dom";
import { TimePicker, DatePicker, message } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';

const BookingPage = () => {
    const { user } = useSelector( state => state.user)
    const dispatch = useDispatch();
    const params = useParams();
    const [doctors, setDoctors] = useState([]);
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [isAvailable, setIsAvailable] = useState()
    //login user data
  const getUserData = async() => {
    try {
      const res = await axios.post("http://localhost:3002/doctor/getDoctorById",{ doctorId : params.doctorId},{
        headers :{
          Authorization : `Bearer ${localStorage.getItem("token")}`,
        }
      }) ;
      if( res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUserData()
  },[])
//=================booking function===========
    const handleBooking = async() => {
        try {
            setIsAvailable(true)
            if(!date && !time){
                return alert("Date & Time required.")
            }
            dispatch(showLoading());
            const res = await axios.post("http://localhost:3002/user/book-appointment",
            {
                userId : user._id,
                doctorId : params.doctorId,
                doctorInfo : doctors,
                userInfo : user,
                date : date,
                time : time,
            },{
              headers :{
                Authorization : `Bearer ${localStorage.getItem("token")}`,
              }
            }) ;
            dispatch(hideLoading());
            if( res.data.success) {
              message.success(res.data.message)
            }
          } catch (error) {
            dispatch(hideLoading())
            console.log(error);
        }
    }
//=================booking function===========

//=================Available Cheking==========
const handleAvailability = async() => {
    try {
        dispatch(showLoading())
        const res = await axios.post('http://localhost:3002/user/booking-availbility', 
        {
            doctorId : params.doctorId,
            date,
            time,
        },
        {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        dispatch(hideLoading())
        if(res.data.success){
            setIsAvailable(true);
            console.log(isAvailable)
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }

    } catch (error) {
        dispatch(hideLoading());
        console.log(error);
    }
}

//=================Available Cheking==========
    return(
        <>
            <Navbar/>
            <h1>Booking Page</h1>
            <div>
                {doctors && (
                    <div>
                        <p> Dr.{doctors.firstName} {doctors.lastName} </p>
                        <p> Fees : {doctors.feesPerConsultaion} {doctors.lastName} </p>
                        <p> Timings : {doctors.timings && doctors.timings[0]} - {" "} {doctors.timings && doctors.timings[1]}</p>
                        <div>
                            <DatePicker 
                                format = "DD-MM-YYYY" 
                                onChange={(value) => {
                                        // setIsAvailable(false)
                                        setDate(moment(value).format("DD-MM-YYYY"))
                                    }
                                }
                            />
                            <TimePicker 
                                format = "HH:mm" 
                                onChange={(value) => {
                                        // setIsAvailable(true)
                                        setTime(moment(value).format("HH:mm"))
                                    }
                                }
                            />
                            <button onClick={handleAvailability}>Check Availability</button>  
                            {/* { !isAvailable && (<button onClick={handleBooking}> Book Now</button> )}  */}
                            <button onClick={handleBooking}> Book Now</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default BookingPage;