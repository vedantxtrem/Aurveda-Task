
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Navbar() {
    return (
        <div className="w-screen h-fit flex flex-col ">
            <div className="bg-white w-full">
                <div className="w-full h-20 flex  justify-around  items-center  border-b-2 border-gray-200">
                    <div className="w-fit ml-4 flex items-center justify-around">
                        <div><img src="/logo.png" className='w-40' alt="logo" /></div>
                    </div>
                    <div className="hidden lg:block w-[70%] ">
                        <div className="w-full flex justify-between">
                            <div className="w-[40%] flex justify-evenly">
                                <div className='font-bold '>Find Doctors</div>
                                <div className='font-bold '>Video Consult</div>
                                <div className='font-bold '>Surguries</div>
                            </div>
                            <div className="w-[35%] flex justify-evenly">
                                <div className='text-xs flex items-center '> <div className="bg-blue-600 text-white rounded-full text-[10px] mr-1 px-1 inline">new</div> For Corporates  <RiArrowDropDownLine className="text-xl" /> </div>
                                <div className='text-xs flex items-center'>For Provider <RiArrowDropDownLine className="text-xl" /> </div>
                                <div className='text-xs flex items-center'>Security & help <RiArrowDropDownLine className="text-xl" /> </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-around'>
                        <div className='border border-gray-400 p-1 text-xs text-gray-400 hover:border-blue-600 hover:text-blue-500 rounded-sm'> Login/Signup</div>
                    </div>
                </div>
                <div className="w-full h-24  flex justify-center ">
                    <div className="mt-4 flex w-[50%]">
                        <div className=" border border-gray-400 h-10 outline-none px-2 flex w-[40%]  items-center ">
                            <CiLocationOn /> <input type="text" className="px-2 outline-none" name="city" placeholder="Banglore" id="" />
                        </div>
                        <div className=" border border-gray-400 h-10 outline-none px-2 flex w-[60%]  items-center ">
                            <CiSearch /> <input type="text" className="px-2 outline-none text-sm mr-3" name="city" placeholder="search doctor,clinic,hospital,etc" id="" />
                        </div>
                    </div>
                    <div className="ml-2 mt-3">
                        <p className="text-[10px] text-gray-400">Feed up end less wait?</p>
                        <p className="text-[12px] mt-3 flex items-center">Look for clinic with <p className="text-purple-900 px-1"> Prime </p> <FaCheckCircle className="text-purple-900" /> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar