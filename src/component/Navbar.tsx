
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
    return (
        <div className="w-screen h-fit flex flex-col ">
            <div className="bg-white w-full">
                <div className="w-full h-20 flex  justify-between items-center  border-b-2 border-gray-200">
                    <div className="w-fit px-5 lg:ml-5 flex items-center gap-0">
                        <div className="lg:hidden w-12">
                            <IoMdMenu />
                        </div>
                        <div><img src="https://askgyne.com/wp-content/uploads/2022/07/Practo-Logo-1024x258.webp" className='w-32 md:w-40' alt="logo" /></div>
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
                    <div className='mr-4 md:mr-8 flex items-center justify-around'>
                        <div className='lg:hidden border  p-1 text-sm border-blue-500 text-blue-500 rounded-sm py-2  px-2'> signin</div>
                        <div className='hidden lg:block border border-gray-400 p-1 text-xs text-gray-400 hover:border-blue-600 hover:text-blue-500 rounded-sm'> Login/Signup</div>
                    </div>
                </div>
                <div className="w-full h-16 md:h-24  flex justify-center ">
                    <div className="mt-4 flex w-full md:w-[75%] lg:w-[50%] justify-center">
                        <div className=" border border-gray-400 h-10 outline-none px-2 flex w-[80%]  md:w-[50%] lg:w-[40%]  items-center rounded-sm md:rounded-none">
                            <CiLocationOn /> <input type="text" className="px-2 outline-none" name="city" placeholder="Banglore" id="" />
                        </div>
                        <div className="hidden md:block border border-gray-400 h-10 outline-none px-2  lg:w-[60%]  items-center ">
                            <div className="w-full h-full flex items-center">
                                <CiSearch /> <input type="text" className="px-2 outline-none text-sm mr-3 " name="city" placeholder="search doctor,clinic,hospital,etc" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="ml-2 mt-3 hidden lg:block">
                        <p className="text-[10px] text-gray-400">Feed up end less wait?</p>
                        <p className="text-[12px] mt-3 flex items-center">Look for clinic with <p className="text-purple-900 px-1"> Prime </p> <FaCheckCircle className="text-purple-900" /> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar