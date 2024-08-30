import React from 'react'

function Card() {
    return (
        <div className="w-[80%] flex ">

            <div className='w-[15%] p-5'>
                <img className='rounded-full  w-full' src="https://imagesx.practo.com/providers/dr-venkatesh-m-j-orthodontist-bangalore-ee5cbcc5-c408-4b69-99ef-abeae7307239.jpg?i_type=t_70x70" alt="doctorimg" />

                <div >
                    <img className='rounded-lg -mt-7 ml-3  z-50' src="https://www.practostatic.com/marketplace-api/doctor-listing/pcd_logo_bordered.png" alt="" />
                </div>
            </div>

            <div className='w-[75%] p-7 '>
                <h3 className='text-blue-500 text-xl'>Dr.Abcd </h3>
                <h4 className='text-gray-400'>specialtizatioin</h4>
                <h5 className='text-gray-400'>Experience</h5>
                <h5>address</h5>
                <h6>fees</h6>
            </div>
        </div>
    )
}

export default Card