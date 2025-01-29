import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
const Page2Card = ({title,detail,url}) => {
  return (
    <>
    <div className='mt-20 mx-4'>
        <div className='relative w-[370px] h-[300px] border-2 border-gray-200 shadow-2xl  hover:border-blue-200 cursor-pointer'>
            <div className='text-left'>

                <h2 className='text-2xl px-5 py-5 font-semibold'>{title}</h2>
                <h2 className='text-xl px-5 py-5 font-semibold'>{detail}</h2>
            </div>
            <div className='flex '>
                <div>
                    
            <img src={url} alt=""
            className='absolute bottom-0 right-0 bg-black w-44'
             />
                </div>
                <div className='ml-14 mt-11'>
                    <h1><a href="">Register <FontAwesomeIcon icon={faArrowRight} /></a></h1>
                </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Page2Card