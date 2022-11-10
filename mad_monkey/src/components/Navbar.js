import React from 'react'
import { Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex'>
        <Link className='p-4 font-junkdog text-[#FF6E1A] text-[36px]' to='/'>Mad Monkey</Link>
        <Link className='p-4' to='/contact'>Contact</Link>
        <Link className='p-4' to='/casestudies'>CaseStudies</Link>
    </div>
  )
}

export default Navbar