import Card from "@/component/Card";
import { FaCheckCircle } from "react-icons/fa";
import doctorData from '@/data/doctor_data.json'

export default function Home() {
  return (
    <main className="flex w-[100%] min-h-screen flex-col ">

      <div className="w-full mt-4 p-4 flex flex-col justify-center items-center ">
        <img className="mt-0 w-[90%]" src="https://images.ctfassets.net/a5lr4xmo2i3k/2MRHKTu9BKsuZO0NxRoOPH/67e7b6130177275a4b4bf0adcf0ea23b/PDC_Listing_banner_June_24_DWeb_Listing_Delay_No_More_Campaign_Jun_23_copy_3.png" alt="" />
      </div>

      <div className="w-full flex flex-col justify-center items-center ">
        <div className="font-bold text-xl md:text-2xl text-center"> 792 doctors available in Bangalore</div>
        <div className="flex px-2 gap-2 text-xs md:text-sm mt-3  "><FaCheckCircle /> <p> Book appointments with minimum wait-time & verified doctor details</p></div>
      </div>
      <div className="w-full flex flex-col gap-24 items-center">
        {doctorData.doctors.map((doctor, index) => (
          <Card key={index}
          images={doctor.img}
          name={doctor.name}
          />
        ))}
      </div>
    </main>
  );
}
