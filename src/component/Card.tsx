'use client';
import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';
import Profile from '@/component/Profile';

interface CardProps {
    images: string;
    name: string;
}

const Card: React.FC<CardProps> = ({ images, name }) => {
    
    const [model, setModel] = useState(false);

    return (
        <div className="w-full md:w-[80%] md:h-48 flex flex-col  md:my-20 z-20 bg-white pb-7 py-4">
            <div className='w-full flex'>
                <div className='w-[50%] lg:w-[20%] md:h-full p-5'>
                    <img className='rounded-full w-full' src={images} alt="doctor-img" />
                    <div>
                        <img className='rounded-lg -mt-4 ml-1 z-50' src="https://www.practostatic.com/marketplace-api/doctor-listing/pcd_logo_bordered.png" alt="Clinic logo" />
                    </div>
                </div>

                <div className='w-full flex flex-col'>
                    <div className='px-10 pt-5'>
                        <h3 className='text-blue-500 text-2xl'>{name}</h3>
                        <h4 className='text-gray-400'>Dentist</h4>
                        <h5 className='text-gray-400 text-xs'>29 years experience overall</h5>
                        <h5 className='text-sm hidden md:block'>Indiranagar, Bangalore</h5>
                        <h6 className='font-light text-xs hidden md:block'>All Care Dental Center - since 1969 + 1 more</h6>
                        <h6 className='text-sm font-light hidden md:block'> &#x20B9;300 Consultation fee at clinic</h6>
                        <div className='border-b-2 border-dashed mt-2 hidden md:block'></div>
                    </div>
                    <div className='w-full hidden md:block'>
                        <div className='w-full flex justify-between mt-2 ml-2'>
                            <div className='w-[70%] flex items-center'>
                                <div className='bg-green-500 text-white rounded-sm flex items-center'>
                                    <FaThumbsUp className='mx-1' /> 97%
                                </div>
                                <div className='underline mx-2 text-[16px]'>
                                    300 Patient Stories
                                </div>
                            </div>
                            <div className='w-[30%] flex flex-col justify-center'>
                                <div className='w-full text-center text-sm text-green-600 font-bold'>Available Today</div>
                                <div className='w-full py-1 bg-blue-500 rounded-lg text-white text-center text-sm'>
                                    Book Clinic Visit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:hidden'>
                <div className='w-full flex justify-center flex-col gap-4'>
                    <div className='w-full px-3 pl-4 flex items-center '>
                        <div className='flex w-[50%]'>
                            <div className='bg-green-500 text-white rounded-lg flex items-center px-2'>
                                <FaThumbsUp className='mx-1' /> 97%
                            </div>
                            <div className='mx-2 text-[10px]'>
                                Patient Recommendation
                            </div>
                        </div>
                        <div className='flex w-[50%]'>
                            <div className='bg-blue-950 text-white rounded-lg flex items-center px-2'>
                                <IoStarSharp className='mx-1' /> 4.9
                            </div>
                            <div className='mx-2 text-[10px]'>
                                Clinic Excellence Rating
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-5 '>
                        <h5 className='text-sm flex'>
                            <p className='font-bold'>Indiranagar</p>, Bangalore
                        </h5>
                        <h6 className='font-light text-xs'>All Care Dental Center - since 1969 + 1 more</h6>
                        <h6 className='text-sm font-bold flex'>
                            ~ &#x20B9;300 <p className='font-light pl-2'>Consultation fee at clinic</p>
                        </h6>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-full text-sm text-green-600 font-bold mb-3 ml-5 px-3'>Next Available AT</div>
                        <div className='w-full flex justify-around'>
                            <div
                                onClick={() => setModel(true)}
                                className='w-[40%] h-10 py-1 border border-black rounded-lg text-black text-sm flex flex-col justify-center items-center'>
                                View Profile
                            </div>
                            <div className='w-[40%] py-1 bg-blue-500 h-10 rounded-lg text-white text-sm flex flex-col justify-center items-center'>
                                Book Clinic Visit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Profile
                isOpen={model}
                isClose={() => setModel(false) }
                im={images}
                na={name}
            />
        </div>
    );
};

export default Card;
