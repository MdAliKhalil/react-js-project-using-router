import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();

    const showMap = () => {
        navigate('map');
    }

    return (
        <div className='container flex justify-start items-start px-[8%] py-[15px] w-full h-[89.5vh]'>
            <div className='flex flex-col w-full justify-between h-full'>
                <div className='text-center'>
                    <button className='bg-black text-white py-[8px] px-[25px] border-0 outline-0 rounded-[30px] text-[16px] cursor-pointer' onClick={showMap}>See Map</button>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Contact