import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
    return (
        <div className='container flex flex-col justify-center items-center px-[8%] py-[15px] w-full h-[89.5vh]'>
            <div>
                <h2 className='text-4xl font-semibold'>Job Openings</h2>
                <p className='text-gray-600 font-normal'>List of current job opening in our company.</p>
                <Outlet />
            </div>
        </div>
    )
}

export default JobsLayout