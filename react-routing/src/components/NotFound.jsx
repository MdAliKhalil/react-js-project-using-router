import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    const backHandler = () => {
        navigate('/');
    }

    return (
        <div className='container flex flex-col gap-8 justify-center items-center w-full h-screen bg-gray-50'>
            <h1 className='text-3xl font-medium'>404<span className='mx-2'>|</span>Not Found</h1>
            <button className='bg-black text-white py-[8px] px-[25px] border-0 outline-0 rounded-[30px] text-[16px] cursor-pointer' onClick={backHandler}>Back to Home</button>
        </div>
    )
}

export default NotFound