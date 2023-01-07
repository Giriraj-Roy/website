import React from 'react'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-[#FFFFFF] flex w-full aspect-[3.5/1] text-black'>
        <div className='md:mx-auto mt-1 md:mt-24 hidden md:block bg-transparent'>
          <span className=' bg-transparent font-junkdog text-xl md:text-5xl text-[#FF6E1A]'>MAD MONKEY</span>
          <br/><br/>
          <span className=' bg-transparent font-gilroy font-semibold text-sm md:text-2xl text-[#E63946] '>India’s Leading Product Marketing Agency</span>
        </div>
        <div className='mx-2 md:mx-auto mt-1 md:mt-24 block bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-sm md:text-2xl text-[#E63946] '>Navigation</span>
          <br className='hidden md:block'/>
          <br className='hidden md:block'/>
          <div className='font-gilroy bg-transparent'>
            <ul className='bg-transparent '>
              <Link to='/'>
                  <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>Home</li>
              </Link>
              <br className='hidden md:block'/>
              <Link to='/services'>
                  <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>Services</li>
              </Link>
              <br className='hidden md:block'/>
              <Link to='/casestudies'>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>Case Studies</li>
              </Link>
              <br className='hidden md:block'/>
              <Link to='/vision'>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>Our Vision</li>
              </Link>

            </ul>
          </div>
        </div>
        <div className='mx-2 md:mx-auto mt-1 md:mt-24 bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-sm md:text-2xl text-[#E63946] '>Reach Us</span>
          <br className='hidden md:block'/>
          <br className='hidden md:block'/>
          <div className='font-gilroy bg-transparent'>
            <ul className='bg-transparent '>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>+91 91106 60335</li>
              <br className='hidden md:block'/>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>hey@madmonkey.in</li>
              <br className='hidden md:block'/>
            </ul>
          </div>
        </div>
        <div className='mx-2 md:mx-auto mt-1 md:mt-24 bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-sm md:text-2xl text-[#E63946] '>Connect With Us</span>
          <br className='hidden md:block'/>
          <br className='hidden md:block'/>
          <div className='bg-transparent flex'>
            <img className='bg-transparent w-[3.25rem] h-[3.25rem]' src={linkedin} alt='linkedin'/>
            <img className='bg-transparent m-[0.4rem] w-10 h-10' src={insta} alt='insta'/>
            <img className='bg-transparent m-[0.4rem] w-10 h-10' src={facebook} alt='facebook'/>

          </div>

        </div>
      </div>

        <div className='w-full  md:h-[50px] flex justify-center bg-[#FF6E1A] ' >
            <div className='mt-2 bg-transparent  text-white text-sm md:text-2xl font-gilroy font-semibold '>
              Designed & built with passion in India 🚀
            </div>
        </div>

    </>
  )
}

export default Footer