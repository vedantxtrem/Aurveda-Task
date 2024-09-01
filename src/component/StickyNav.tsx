'use client'
import React, { useEffect, useRef, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

function StickyNav() {
    const [gendermenu,setGendermenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    function handlemenu(){
        setGendermenu(true);
    }

    function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setGendermenu(false);
        }
    }

    useEffect(() => {
        // Add event listener for clicks outside of the menu
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    

    return (
        <div className='w-full hidden md:block'>
            <div className="bg-blue-800 w-full h-12 flex justify-center items-center sticky top-0 ">
                <div onClick={handlemenu} ref={menuRef} className='mx-2 text-xm md:w-[12%] lg:w-[8%] py-[2px] text-white bg-white bg-opacity-20 px-2 rounded-sm flex justify-between items-center relative'> Gender 
                {gendermenu === true && (<div className='w-full h-[5rem] bg-white  flex flex-col justify-center items-center absolute -right-0 top-10  z-20 '>
                    <div  className='w-full py-1 hover:bg-gray-200 text-gray-700 text-xl flex justify-center items-center border-b-2  border-gray-300'>
                        Male
                    </div>
                    <div  className='w-full py-1 hover:bg-gray-200 text-gray-700 text-xl flex justify-center items-center'>
                        Female
                    </div>
                </div>) }

                     <RiArrowDropDownLine className="text-xl" /> </div>
               
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