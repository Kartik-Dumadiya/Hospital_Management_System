import React,{useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import {useParams} from "react-router-dom"

const BookingPage = () => {
    const params = useParams();
    const [doctors, setDoctors] = useState([]);
    //login user data
    const getUserData = async () => {
        try {
            const res = await axios.get(
                "/api/v1/doctor/getAllDoctors",
                {doctorId : params.doctorId},
                {
                    headers:{
                        Authorization : "Bearer " + localStorage.getItem("token"),
                    },
                }
            );
            if(res.data.success){
                setDoctors(res.data.data);
            }
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return(
        <>
            <h1>Booking Page</h1>
            <div>
                {doctors && (
                    <div>
                        <p> Dr.{doctors.firstName} {doctors.lastName} </p>
                        <p> Fees : {doctors.feesPerConsultaion} {doctors.lastName} </p>
                        <p> Timings{doctors.firstName} {doctors.lastName} </p>
                        <div>
                            <DatePicker format = "DD-MM-YYYY"/>
                            <TImePicker.RangePicker format = "HH:mm" />
                            <button>Check Availability</button>  
                        </div>
                    </div>
                )}
            </div>
            <Navbar/>
        </>
    )
}