import React, { useState, useEffect, useRef } from 'react';

const Page3Slider = () => {
  const Slider = [
    { url: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1736170548/uyqbvehogy2pgpkj09jj.png?_upload_ref=ic_img_tool&__ar__=4.03" },
    { url: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1736170548/uyqbvehogy2pgpkj09jj.png?_upload_ref=ic_img_tool&__ar__=4.03" },
    { url: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1733313377/s25vxza3uawoxbnbddtq.png?_upload_ref=ic_img_tool" },
    { url: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1733150702/xwhr7rag5n2q1hfavikq.webp?_upload_ref=ic_img_tool" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Use interval to cycle images every 9 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Slider.length); // Loop through the images
    }, 9000); // Change image every 9 seconds

    return () => clearInterval(intervalRef.current); // Clean up interval
  }, []);

  return (
    <>
    <div className='flex items-center justify-center mt-16 mb-0 font-bold'><h1 className='text-3xl font-serif '>What's Trending</h1></div>


    <div className="relative w-[1000px] h-[300px] mt-16 ml-[5%]">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          <img
            src={Slider[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full  rounded-lg" // Ensure image covers the area without breaking
            style={{ marginBottom: '20px' }} // Add gap between images
            />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {Slider.map((_, index) => (
          <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex
            ? 'bg-blue-600 animate-pulse' // Active dot with animation
            : 'bg-gray-400'
          }`}
          style={{
            transition: 'background-color 0.3s ease',
          }}
          />
        ))}
      </div>
    </div>
        </>
  );
};

export default Page3Slider;
