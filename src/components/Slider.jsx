import React, { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Slider = () => {

    const slideImages = [
        {
          url: 'https://myexam.allen.in/wp-content/uploads/2024/06/ALLEN-Scholarships-2025-Based-on-NEET-UG-2024-Score.jpg',
          caption: 'Slide 1'
        },
        {
          url: 'https://i.ytimg.com/vi/S_SkmY8b2r4/sddefault.jpg',
          caption: 'Slide 2'
        },
        {
          url: 'https://myexam.allen.in/wp-content/uploads/2022/09/ALLEN-NEET-UG-2022-AIR-1_01.jpg',
          caption: 'Slide 3'
        },
        {
          url: 'https://i.ytimg.com/vi/AgydiqrRV-0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA58qtcDFuZGPkQqd18orSPsiBFeA',
          caption: 'Slide 4'
        },
      ];
      let [currentIndex,setcurrentIndex]=useState(0);

    const interval=  useEffect(()=>{
        setInterval(()=>{
                setcurrentIndex((currentIndex)=>(currentIndex+1)% slideImages.length);
        },6000);
        return ()=>clearInterval(interval)
        
      },[slideImages.length])
      

  return (
    <div className="relative w-[300px] h-[400px] overflow-hidden ">
    {/* Display the current image */}
    {slideImages.map((slideImage, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentIndex ? 'opacity-100' : 'opacity-0' 
        } rounded-full`}
      >
        <img
          src={slideImage.url}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-contain rounded-lg"
        />
        {/* Caption */}
        <span className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-md">
          {slideImage.caption}
        </span>
      </div>
    ))}
  </div>
  )
}

export default Slider