import React from 'react';
import { useForm , Controller} from 'react-hook-form';
import Navbar from '../components/Navbar';
import { TimePicker } from 'antd';


const ApplyDoctor = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async(data) => {
        console.log(data);
    }
  return (
    <>
        <Navbar/>
        <div className=' bg-[#ECF4FF] h-[600px] w-[1200px] m-auto rounded-2xl mt-9 shadow-lg shadow-black'>
            <div className='font-bold text-2xl text-center p-4 underline underline-offset-8'>Apply as Doctor</div>
            <form /*method="POST"*/ className='mt-4 flex flex-col gap-4 mx-auto px-8' onSubmit={handleSubmit(onSubmit)}>
                <div className=' text-2xl font-semibold'>Personal Details :</div>
                <div className='flex gap-4 w-full justify-between'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="fname" className='flex gap-1'><p className=' text-red-600'>*</p>First Name</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='fname' id='fname' required type="text" placeholder='Your First name' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                                {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    }
                                })}
                            />
                        </div>
                        {errors.firstName && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.firstName.message}</div>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="lname" className='flex gap-1'><p className=' text-red-600'>*</p>Last Name</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='lname' id='lname' required type="text" placeholder='Your Last name' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                                {...register("lastName", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    }
                                })}
                            />
                        </div>
                        {errors.lastName && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.lastName.message}</div>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="mobile" className='flex gap-1'><p className=' text-red-600'>*</p>Mobile Number</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='mobile' id='mobile' type="number" placeholder='Your Mobile Number' className='w-[250px] h-full bg-[transparent] px-2 rounded-md remove-arrow' style={{ border: "none", outline: "none" }}
                                {...register("mobile", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    },
                                    // minLength :{
                                    //     value : 10,
                                    //     message : "*Fill proper mobile number.",
                                    // },
                                    // maxLength :{
                                    //     value : 10,
                                    //     message : "*Fill proper mobile number.",
                                    // }
                                })}
                            />
                        </div>
                        {errors.mobile && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.mobile.message}</div>}
                    </div>
                </div>
                <div className='flex gap-4 w-full justify-between'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='flex gap-1'><p className=' text-red-600'>*</p>Email</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='email' id='email' required type="email" placeholder='Your Email address' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    }
                                })}
                            />
                        </div>
                        {errors.email && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.email.message}</div>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="website" className='flex gap-1'>Website</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='website' id='website' required type="text" placeholder='Your Website' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                                {...register("website", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    }
                                })}
                            />
                        </div>
                        {errors.website && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.website.message}</div>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="address" className='flex gap-1'><p className=' text-red-600'>*</p>Address</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='address' id='address' required type="text" placeholder='Your Address' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    }
                                })}
                            />
                        </div>
                        {errors.address && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.address.message}</div>}
                    </div>
                </div>


                <div className=' text-2xl font-semibold'>Proffesional Details :</div>
                <div className='flex gap-4 w-full justify-between'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="specialization" className='flex gap-1'><p className=' text-red-600'>*</p>Specialization</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='specialization' id='specialization' required type="text" placeholder='Your specialization' className='w-[250px] h-full bg-[transparent] px-2 rounded-md' style={{ border: "none", outline: "none" }}
                                {...register("specialization", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    }
                                })}
                            />
                        </div>
                        {errors.specialization && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.specialization.message}</div>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="experience" className='flex gap-1'><p className=' text-red-600'>*</p>Experience</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='experience' id='experience' required type="number" placeholder='Your experience in years' className='w-[250px] h-full bg-[transparent] px-2 rounded-md remove-arrow' style={{ border: "none", outline: "none" }}
                                {...register("experience", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    }
                                })}
                            />
                        </div>
                        {errors.experience && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.experience.message}</div>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="feesPerCunsaltation" className='flex gap-1'><p className=' text-red-600'>*</p>Fees Per Cunsaltation</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                            <input name='feesPerCunsaltation' id='feesPerCunsaltation' type="number" placeholder='Your Fees Per Cunsaltation' className='w-[250px] h-full bg-[transparent] px-2 rounded-md remove-arrow' style={{ border: "none", outline: "none" }}
                                {...register("feesPerCunsaltation", {
                                    required: {
                                        value: true,
                                        message: "*This field is required.",
                                    },
                                })}
                            />
                        </div>
                        {errors.feesPerCunsaltation && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.feesPerCunsaltation.message}</div>}
                    </div>
                </div>
                <div className='flex gap-4 w-full justify-between'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="timing" className='flex gap-1'><p className=' text-red-600'>*</p>Timing</label>
                        <div className='flex h-[40px] bg-[#ffffff] border-[2px] w-[320px] rounded m-auto justify-start items-center gap-5'>
                        <Controller
                            control={control} 
                            name="timing"
                            render={({ field }) => (
                            <TimePicker.RangePicker
                                className='w-full h-full'
                                format="HH:mm"
                                onChange={field.onChange}
                                value={field.value} 
                            />
                            )}
                        />
                        </div>
                        {errors.timing && <div className=' ml-12 text-red-600 text-sm font-mono'>{errors.timing.message}</div>}
                    </div>
                </div>
                <div className='flex w-full justify-center'>
                    <button type='submit' className=' bg-orange-400 px-9 py-2 rounded-md font-mono hover:bg-orange-500'>Save</button>
                </div>
            </form> 
        </div>
    </>
  )
}

export default ApplyDoctor
