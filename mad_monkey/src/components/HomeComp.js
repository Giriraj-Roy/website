import React from 'react'
import img1 from '../assets/astronaut.png'


const HomeComp = () => {
  return (
    <div  className='ml-12'>
        <div className='sm:flex'>
          <div className='mt-32 w-full sm:w-2/5 font-gilroy'>
            <h1 className='text-6xl font-extrabold text-[#FFFF00]'>India's Leading Product Marketing Agency</h1>
            <br/>
            <h5 className='text-lg font-normal text-[#FFFFFF] w-3/4'>With Mad Monkey by its side, Recognition goes bananas for your brand!</h5>
            <br></br>
            <button className='pl-8 pr-8 pt-4 pb-4 text-xl rounded-xl bg-gradient-to-br from-[#FFA51E] to-[#FA5A92] text-white'>Get in Touch</button>
          </div>
          <div className='mt-5 mr-[3rem] sm:flex  sm:m-auto w-[] md:w-[587px] aspect-square content-center rounded-full bg-[#FF6E1A]'>
          <br/>
            <img className='bg-transparent mx-auto content-center object-scale-down' src={img1} alt='monkey'/>
          </div>
        </div>
    </div>
  )
}

export default HomeComp