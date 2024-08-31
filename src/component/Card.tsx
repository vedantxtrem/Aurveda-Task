import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
interface CardProps {
    images: string;
    name: string;
  }
  
const Card: React.FC<CardProps> = ({ images, name }) => {
    return (
        <div className="w-[80%] md:h-48 flex mb-3 mt-5">

            <div className=' lg:w-[20%] md:h-full p-5'>
                <img className='rounded-full w-full' src={images} alt="doctorimg" />

                <div >
                    <img className='rounded-lg -mt-4 ml-1  z-50' src="https://www.practostatic.com/marketplace-api/doctor-listing/pcd_logo_bordered.png" alt="" />
                </div>
            </div>
            <div className='w-full flex flex-col'>
                <div className='px-10 pt-5 '>
                    <h3 className='text-blue-500 text-2xl'>{name}</h3>
                    <h4 className='text-gray-400'>Dentist</h4>
                    <h5 className='text-gray-400 text-xs '>29 year experience overall</h5>
                    <h5 className='text-xm'>Indiranagar,Banglore</h5>
                    <h6 className='font-light text-xs'>All Care Dental Center -since 1969 + 1 more</h6>
                    <h6 className='text-sm font-light'> &#x20B9;300 Consultation fee at clinic </h6>
                    <div className='border-b-2 border-dashed mt-2'></div>
                </div>
                <div className='w-full 
                 flex justify-between mt-2 ml-5' >
                    <div className='w-[70%] flex items-center '>
                        <div className='bg-green-500 text-white rounded-sm flex items-center '> <FaThumbsUp className='mx-1' /> 97%</div>
                        <div className='underline mx-2 text-[16px]'>
                            300 Patient Stories
                        </div>
                    </div>
                    <div className='w-[25%]  flex flex-col justify-center '>
                        <div className='w-full text-center text-sm text-green-600 font-bold'>Available Today</div>
                        <div className='w-full py-1 bg-blue-500 rounded-lg text-white  text-center text-xm'>
                            Book clinic Visit 
                            <p className='text-sm'>no Bookin Fee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card