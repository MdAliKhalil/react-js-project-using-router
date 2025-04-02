import React from 'react'
import { useLoaderData } from 'react-router-dom';

export const jobDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:5000/jobs/' + id);
    return res.json();
}

const JobDetails = () => {
    const jobData = useLoaderData();

    return (
        <div className='mt-5 flex flex-col gap-5'>
            <p><b>Job Title: </b>{jobData.title}</p>
            <p><b>Job Salary: </b>{jobData.salary}</p>
            <p><b>Job Location: </b>{jobData.location}</p>
            <p><b>Job Description: </b>Are you passionate about creating exciting and user-friendly websites? We're looking
                for a friendly and talented Web Developer to join our vibrant team! In this role, you'll collaborate closely with
                designers and other developers to bring innovative web solutions to life. Your expertise will play a crucial role
                in enhancing our online presence and creating engaging user experiences.</p>
            <div>
                <button className='bg-black text-white py-[8px] px-[25px] border-0 outline-0 rounded-[30px] text-[16px] cursor-pointer'>Apply Now</button>
            </div>
        </div>
    )
}

export default JobDetails