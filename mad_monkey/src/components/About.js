import React from 'react'
import img from '../assets/tie2.png'

const About = () => {
  return (
    <div className='flex'>
      <div className='ml-10 p-32 bg-white rounded-xl w-1/3'>
            <div className=''>
              <img className='bg-transparent' src={img} alt='monkey'/>
            </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default About