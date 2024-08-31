import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

function StickyNav() {
    return (
        <div className='w-full hidden md:block'>
            <div className="bg-blue-800 w-full h-12 flex justify-center items-center sticky top-0 ">
                <div className='mx-2 text-xm md:w-[12%] lg:w-[8%] py-[2px] text-white bg-white bg-opacity-20 px-2 rounded-sm flex justify-between items-center'>Gender <RiArrowDropDownLine className="text-xl" /> </div>
                <div className='mx-2 text-xm md:w-[16%] lg:w-[10%] py-[2px] text-white bg-white bg-opacity-20 px-2 rounded-sm flex justify-between items-center'>Patient Stories <RiArrowDropDownLine className="text-xl" /> </div>
                <div className='mx-2 text-xm md:w-[14%] lg:w-[8%] py-[2px] text-white bg-white bg-opacity-20 px-2 rounded-sm flex justify-between items-center'>Experience <RiArrowDropDownLine className="text-xl" /> </div>
                <div className='mx-2 text-xm md:w-[14%] lg:w-[8%] py-[2px] text-white  bg-opacity-20 px-2 rounded-sm flex justify-between items-center'>All Fillter<RiArrowDropDownLine className="text-xl" /> </div>
                <p className="text-white text-xs inline-flex">Sort By</p>
                <div className='mx-2 text-xm md:w-[14%] lg:w-[8%] py-[2px] text-white bg-white bg-opacity-20 px-2 rounded-sm flex justify-between items-center'> Relevence<RiArrowDropDownLine className="text-xl" /> </div>
            </div>
        </div>
    )
}

export default StickyNav