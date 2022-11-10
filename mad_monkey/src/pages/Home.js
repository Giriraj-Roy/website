import React from 'react'
import About from '../components/About'
import Process from '../components/Process'
import ResultDriven from '../components/ResultDriven'
import Services from '../components/Services'
import img1 from '../assets/astronaut.png'

const Home = () => {
  return (
    <div>
      <div>
        <div className=' sm:flex'>
          <div className='m-5 w-2/5 font-gilroy'>
            <h1 className='text-6xl font-semibold text-[#FFFF00]'>India's Leading Product Marketing Agency</h1>
            <br/>
            <h5 className='text-lg font-normal text-[#FFFFFF] w-3/4'>With Mad Monkey by its side, Recognition goes bananas for your brand!</h5>
            <br></br>
            <button className='pl-8 pr-8 pt-4 pb-4 text-xl rounded-xl bg-gradient-to-br from-[#E1467C] to-[#205284] text-white'>Get in Touch</button>
          </div>

          <div className='sm:flex m-auto  aspect-square content-center rounded-full bg-[#FF6E1A]'>
            <img className='bg-transparent mx-auto content-center object-scale-down' src={img1} alt='monkey'/>
          </div>
        </div>
        <About/>
        <Services/>
        <Process/>
        <ResultDriven/>
      </div>
    </div>
  )
}

export default Home

