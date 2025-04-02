import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const jobData = async () => {
    const res = await fetch("http://localhost:5000/jobs");
    if (!res.ok) {
        throw Error("Could not found the job list");
    }
    return await res.json();
}

const Jobs = () => {
    const data = useLoaderData();

    return (
        <div className='flex flex-row flex-wrap gap-5 mt-10'>
            {
                data.map((item) => (
                    <Link to={item.id.toString()} key={item.id}>
                        <div className='w-[147px] bg-gray-200 p-2 h-[86.5px]'>
                            <h4 className='font-bold'>{item.title}</h4>
                            <p className='text-gray-700 text-[15px]'>{item.location}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Jobs