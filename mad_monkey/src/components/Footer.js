import React from 'react'
import linkedin from '../assets/vector.png'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'

const Footer = () => {
  return (
    <>
      <div className='bg-[#FFFFFF] flex w-full aspect-[3.5/1] text-black'>
        <div className='mx-auto mt-24 block bg-transparent'>
          <span className=' bg-transparent font-junkdog text-5xl text-[#FF6E1A]'>MAD MONKEY</span>
          <br/><br/>
          <span className='bg-transparent font-gilroy font-semibold text-2xl text-[#E63946] '>India’s Leading Product Marketing Agency</span>
        </div>
        <div className='mx-auto mt-24 block bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-2xl text-[#E63946] '>Navigation</span>
          <br/><br/>
          <div className='font-gilroy bg-transparent'>
            <ul className='bg-transparent '>
              <li className='bg-transparent text-[#0D0D0D] text-xl font-semibold'>Home</li>
              <br/>
              <li className='bg-transparent text-[#0D0D0D] text-xl font-semibold'>About Us</li>
              <br/>
              <li className='bg-transparent text-[#0D0D0D] text-xl font-semibold'>Case Studies</li>
              <br/>
              <li className='bg-transparent text-[#0D0D0D] text-xl font-semibold'>Contact Us</li>

            </ul>
          </div>
        </div>
        <div className='mx-auto mt-24 bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-2xl text-[#E63946] '>Reach Us</span>
          <br/><br/>
          <div className='font-gilroy bg-transparent'>
            <ul className='bg-transparent '>
              <li className='bg-transparent text-[#0D0D0D] text-xl font-semibold'>+91 123456789</li>
              <br/>
              <li className='bg-transparent text-[#0D0D0D] text-xl font-semibold'>hey@gmail.com</li>
              <br/>
            </ul>
          </div>
        </div>
        <div className='mx-auto mt-24 bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-2xl text-[#E63946] '>Connect With Us</span>
          <br/><br/>
          
            <span><img className='bg-transparent' src={linkedin} alt='linkedin'/></span>
            <span><img className='bg-transparent' src={insta} alt='insta'/></span>
            <span><img className='bg-transparent' src={facebook} alt='facebook'/></span>
          
        </div>
      </div>

        <div className='w-full h-[50px] flex justify-center bg-[#28D596] ' >
            <div className='mt-2 bg-transparent  text-black text-2xl font-gilroy font-semibold '>
              Designed & built with passion in India 🚀
            </div>
        </div>

    </>
  )
}

export default Footer