import React from 'react'
import { BsFillAspectRatioFill } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero() {
  return (
    <>
      <div className='mt-16 h-[90vh] w-full bg-gradient-to-r from-[#ee7724] via-[#d8363a] to-[#b44593] p-5 items-center flex flex-col md:justify-evenly md:flex-row'>
        <div className='text-white font-Roboto max-w-md'>
          <h1 className='text-5xl md:text-7xl font-medium '>DevFinder</h1>
          <p className='text-2xl md:text-3xl font-light text-gray-100'>A Place to connect with awesome developers</p>
        </div>

        <div className='h-[60vh] w-[60vh]'>
          <Carousel showArrows={false} autoPlay={true} interval={4000} axis={'horizontal'} showThumbs={false} infiniteLoop={true} dynamicHeight={false} showStatus={false}>
            <div>
              <img
                className='h-[50vh] w-[50vw] lg:h-[60vh] lg:w-[50vh] '
                src="https://i.imgur.com/UgWJNF7.png" />
            </div>
            <div>
              <img
                className='h-[50vh] w-[50vw] lg:h-[60vh] lg:w-[50vh] '
                src="https://i.imgur.com/zSEaexq.png" />
            </div>
            <div>
              <img
                className='h-[50vh] w-[50vw] lg:h-[60vh] lg:w-[50vh] '
                src="https://i.imgur.com/4d5hGRM.png" />
            </div>
            <div>
              <img
                className='h-[50vh] w-[50vw] lg:h-[60vh] lg:w-[50vh] '
                src="https://i.imgur.com/BuXmlQT.png" />
            </div>
          </Carousel>
        </div>
      </div>
    </>

  )
}

export default Hero