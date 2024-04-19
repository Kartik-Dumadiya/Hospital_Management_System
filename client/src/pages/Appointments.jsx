import React, { useState, useEffect } from "react"; 
import axios from "axios";
import moment from "moment"
import { Table } from "antd";


const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const getAppointments = async () => {
        try{
            const res = await axios.get("http://localhost:3002/user/user-appointments", { 
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if(res.data.success){
                setAppointments(res.data.data);
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAppointments()
    },[])

    const columns = [
        {
            title : "ID",
            dataIndex: "_id",
        },
        // {
        //     title: "Name",
        //     dataIndex : "name",
        //     render: (text, record) => (
        //         <span>
        //             {record.doctorId.firstName} {record.doctorId.lastName}
        //         </span>
        //     )
        // },
        // {
        //     title: "Phone",
        //     dataIndex : "mobile",
        //     render: (text, record) => (
        //         <span>
        //             {record.doctorInfo.phone} 
        //         </span>
        //     ) 
        // },
        {
            title: "Date & Time",
            dataIndex : "date",
            render: (text, record) => (
                <span>
                    {moment(record.date).format('DD-MM-YYYY')} &nbsp;
                    {moment(record.time).format('HH:mm')}
                </span>
            ) 
        },
        {
            title: "Status",
            dataIndex : "status",
        }
    ]
    return (
        <div>
            <h1>
                Appointment List
            </h1>
            <Table columns = {columns} dataSource = {appointments}>

            </Table>
        </div>
    );
};

export default Appointments;