import React from 'react'

const AboutCard = ({title,detail,url}) => {
  return (
  <>
   
            <div className=' w-[290px] h-[250px] bg-slate-200 relative m-1.5 border-2 border-blue-200 shadow-xl hover:border-2 hover:border-blue-300'>
                {/* card */}
                <div className='flex justify-center items-center'>
                    <img src={url} alt="" 
                    className=' w-16 right-[40%] '
                    />
                </div>
                <h1 className='mt-4 text-2xl font-serif font-semibold'>{title}</h1>
                <h1 className='mt-4 text-sm font-sans'>{detail}</h1>
            </div>
        
  </>
  )
}

export default AboutCard