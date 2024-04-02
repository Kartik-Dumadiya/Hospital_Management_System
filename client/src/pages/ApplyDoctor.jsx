import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';



const ApplyDoctor = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();
  return (
    <>
        <Navbar/>
        <div className=' bg-[#ECF4FF] h-[600px] w-[1200px] m-auto rounded-2xl mt-9 shadow-lg shadow-black'>
            <div className='font-bold text-2xl text-center p-4 underline underline-offset-8'>Apply as Doctor</div>
            <form /*method="POST"*/ className='mt-4 flex flex-wrap gap-6 mx-auto'>

                <div className='flex flex-col'>
                    <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                        <img src="../../media/user.png" alt="Name" className='h-[25px] w-[25px] ml-2' />
                        <input required type="text" placeholder='First name' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: "*This field is required.",
                                }
                            })}
                        />
                    </div>
                    {errors.username && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.username.message}</div>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex h-[40px] bg-[#eaeaea] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                        <img src="../../media/key.png" alt="Password" className='h-[25px] w-[25px] ml-2' />
                        <input type="password" placeholder='Password' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "*This field is required.",
                                }
                            })}
                        />
                    </div>
                    {errors.password && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.password.message}</div>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex h-[40px] bg-[#eaeaea] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                        <img src="../../media/user.png" alt="Name" className='h-[25px] w-[25px] ml-2' />
                        <input required type="text" placeholder='Username' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "*This field is required.",
                                }
                            })}
                        />
                    </div>
                    {errors.username && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.username.message}</div>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex h-[40px] bg-[#eaeaea] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                        <img src="../../media/user.png" alt="Name" className='h-[25px] w-[25px] ml-2' />
                        <input required type="text" placeholder='Username' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "*This field is required.",
                                }
                            })}
                        />
                    </div>
                    {errors.username && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.username.message}</div>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex h-[40px] bg-[#eaeaea] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                        <img src="../../media/user.png" alt="Name" className='h-[25px] w-[25px] ml-2' />
                        <input required type="text" placeholder='Username' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "*This field is required.",
                                }
                            })}
                        />
                    </div>
                    {errors.username && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.username.message}</div>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex h-[40px] bg-[#eaeaea] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                        <img src="../../media/user.png" alt="Name" className='h-[25px] w-[25px] ml-2' />
                        <input required type="text" placeholder='Username' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "*This field is required.",
                                }
                            })}
                        />
                    </div>
                    {errors.username && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.username.message}</div>}
                </div>
                
            </form> 
        </div>
    </>
  )
}

export default ApplyDoctor
