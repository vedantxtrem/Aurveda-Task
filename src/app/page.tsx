import Card from "@/component/Card";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">

      <div className="w-full mt-4 p-4 flex flex-col justify-center items-center ">
        <img className="mt-0 w-[90%]" src="https://images.ctfassets.net/a5lr4xmo2i3k/2MRHKTu9BKsuZO0NxRoOPH/67e7b6130177275a4b4bf0adcf0ea23b/PDC_Listing_banner_June_24_DWeb_Listing_Delay_No_More_Campaign_Jun_23_copy_3.png" alt="" />

      </div>
      <div className="w-full flex justify-center flex-col items-center mt-4">
        <h1 className="font-bold text-2xl"> 792 doctors available in Bangalore</h1>
        <div className="flex items-center mt-3"><FaCheckCircle /> <p> Book appointments with minimum wait-time & verified doctor details</p></div>
      </div>

      <div className="w-full flex justify-center items-center ">
        <Card/>
      </div>
    </main>
  );
}
