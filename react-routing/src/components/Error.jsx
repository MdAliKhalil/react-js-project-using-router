import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const buttonHandler = () => {
        navigate('/');
    }

    return (
        <div className='flex flex-col gap-3 justify-center items-center w-full h-[89.5vh]'>
            <h3>An error occured.</h3>
            <p>{error.message}</p>
            <div>
                <button className='bg-black text-white py-[8px] px-[25px] border-0 outline-0 text-[16px] cursor-pointer' onClick={buttonHandler}>Go to Homepage</button>
            </div>
        </div>
    )
}

export default Error