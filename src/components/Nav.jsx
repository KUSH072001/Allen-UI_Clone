import {React} from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {

  return (
    <>
    <div className='flex justify-center items-center'>
        <div className=''>

           
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ALLEN_Career_Institute_logo.svg/2560px-ALLEN_Career_Institute_logo.svg.png" alt="" 
            className='w-24 mx-4'
            />
            </div>

           <div className=' '>
                <nav>
                    <Link className='mx-4 p-3  hover:border-b-8 hover:border-sky-600 transition-all ' to={'/'} >Courses</Link>
                    <Link className='mx-4 p-3 hover:border-b-8  hover:border-sky-600 transition-all  ' to={'/'}>Test Series</Link>
                    <Link className='mx-4 p-3 hover:border-b-8 hover:border-sky-600 transition-all  ' to={'/'}>Seholarships</Link>
                    <Link className='mx-4 p-3 hover:border-b-8 hover:border-sky-600 transition-all ' to={'/'}>Study Materials </Link>
                    <Link className='mx-4 p-3 hover:border-b-8 hover:border-sky-600 transition-all ' to={'/'}>Results</Link>
                    <Link className='mx-4 p-3 hover:border-b-8 hover:border-sky-600 transition-all ' to={'/'}>About Us</Link>
                </nav>
           </div>
      
            
            
        <div className='mx-8'>
            <button className='mx-3 px-3 py-2 hover:bg-blue-500 bg-blue-700 rounded-full text-white font-semibold'><FontAwesomeIcon icon={faPhone} />Talk to us</button>
            <button className='mx-3 px-3 py-2 hover:bg-slate-300 font-semibold border-2 rounded-full  border-blue-600'>Login</button>
        </div>
    </div>
    </>
  )
}



export default Nav