import React from 'react'
import Slider from './Slider'

const Body = () => {
  return (
  <>
     <div className='flex justify-center items-center mt-24 bg-slate-100'>
            <div>
            <div >
                <h1 className='text-4xl text-left font-extrabold font-serif'>Online coaching that delivers <br />results</h1>
            </div>
                <div className='mt-14'><h3 className='text-[20px] text-left font-serif'>Explore our online courses</h3></div>
            <div className=' mt-10 text-left '>
                <button className='mx-4 px-6 py-3 border-[3px] hover:bg-slate-300 border-blue-400 rounded-full hover:border-2 hover:border-blue-500'>NEET</button>
                <button className='mx-4 px-7 py-3 border-[3px] hover:bg-slate-300 border-blue-400 rounded-full hover:border-2 hover:border-blue-500'>JEE</button>
                <button className='mx-4 px-4 py-3 border-[3px] hover:bg-slate-300 border-blue-400 rounded-full hover:border-2 hover:border-blue-500'>Class 6-9</button>
                <button className='mx-4 px-6 py-3 border-[3px] hover:bg-slate-300 border-blue-400 rounded-full hover:border-2 hover:border-blue-500'>CUET</button>
            </div>
            </div>
        <div className='ml-20'>
            {/* Slider */}
            <Slider/>
         </div>
    </div>
  </>
   
  )
}

export default Body