import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { IoStarSharp } from 'react-icons/io5';

interface CardProps {
    isOpen: boolean;
    onClose: boolean;
    im: string;
    na: string;
}

const Profile: React.FC<CardProps> = ({ isOpen, onClose, im, na }) => {
    if (!isOpen) return null;
    return (
        <div className='w-screen h-screen fixed top-0 right-0 left-0 z-50 bg-white drop-shadow-lg'>

            <div onClick={onClose} className='fixed top-2 right-5'> X </div>

            <div className='w-full h-[35%] bg-blue-200 flex justify-between pt-16 pb-4'>
                <div className='w-[50%] ml-3  '>
                    <h1 className='text-xl '>{na}</h1>
                    <p className='font-light text-[12px]'>Dentist,Implantologist,Pediatric Dentist,Cosmetic/Aesthetic Dentist</p>
                    <p className='font-light text-[12px] mt-3'>BDS,MDS - Paedodontics And Preventive Dentistry</p>
                    <h3 className='text-sm font-bold'>25 Year Experience</h3>
                </div>
                <div className='w-[30%]'>
                    <img className='w-full px-2 rounded-full ' src={im} alt="" />
                </div>
            </div>

            <div className='w-full flex pt-3'>
                <div className='flex w-[50%] flex-col justify-center items-center'>
                    <div className=' text-black rounded-lg flex items-center px-2'>
                        <FaThumbsUp className='mx-1 text-green-500' /> 97%
                    </div>
                    <div className='mx-2 text-[10px]'>
                        Patient Recommendation
                        <p className='underline text-center'>2015 Patient Stories </p>
                    </div>
                </div>
                <div className='border  border-gray-300'></div>
                <div className='flex w-[50%] flex-col justify-center items-center'>
                    <div className=' text-black rounded-lg flex items-center px-2'>
                        <IoStarSharp className='mx-1' /> 4.9 / 5
                    </div>
                    <div className='mx-2 text-[10px]'>
                        Clinic Excellence Rating
                        <p className='underline text-center'>Based on Audit </p>
                    </div>
                </div>
            </div>

            <div className='w-full flex  justify-center items-center mt-6 ' >
                <div className='w-[92%] flex flex-col items-center justify-center rounded-2xl shadow-[0_0_10px] pb-4 '>
                        <div className='bg-blue-200 w-full h-14 rounded-t-2xl flex justify-between px-3 items-center'>
                            <div className='flex items-center gap-2'> <ImHome className="text-blue-400"/> Clinic Appointment </div>
                            <div className='text-sm font-bold'>&#x20B9;300 fees</div>
                        </div>
                        <div className='w-full px-2 border-b-2 pb-2 '>
                            <h2 className='font-bold '>Chisel Dental</h2>
                            <p>Koramangala</p>
                            <p className='text-sm font-light'>Max. 15 min wait +Verified Details</p>
                            <p className='flex text-sm gap-1 font-light'><p className='text-green-600 font-bold'>Next Opens today at 09:00 AM</p> Updated today</p>
                        </div>
                        <div className='w-full flex justify-around mt-4'>
                            <div className='w-[26%] px-1  py-1 bg-blue-500 text-white flex justify-center mt-2 rounded-md'>
                                09:00 AM
                            </div>
                            <div className='w-[26%] px-1 py-1 bg-blue-500 text-white flex justify-center mt-2 rounded-md'>
                                04:00PM
                            </div>
                            <div className='w-[26%] px-1 py-1 bg-blue-500 text-white flex justify-center mt-2 rounded-md'>
                                07:00PM
                            </div>
                        </div>
                        <div className='w-full mt-3 text-blue-500 flex  justify-center items-center '>
                            View all Slots
                        </div>
                </div>
            </div>

            <div className='h-14 w-full bg-white fixed bottom-0 left-0 right-0 flex justify-between px-2' >
                <div className='w-[40%] ' >
                    <p>Clinic appointment</p>
                    <p className='text-green-600'>Available Today</p>
                </div>
                <div className='w-[40%] py-1 mr-4 bg-blue-500 h-10 rounded-lg text-white  text-xm flex flex-col justify-center items-center'>
                    Book Clinic Visit
                </div>
            </div>
        </div>
    )
}

export default Profile