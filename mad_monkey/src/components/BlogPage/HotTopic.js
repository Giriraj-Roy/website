import React from 'react'
import { Link } from 'react-router-dom'
import emo1 from '../../assets/Emojis/image 111.png'


const HotTopic = () => {
  return (
    <div className='my-32 mx-6 md:mx-16 font-gilroy'>
        <div className='flex
                        my-16 px-8 py-3
                        w-fit 
                        bg-gradient-to-r from-slate-600 to-[#161313] rounded-full justify-around
                        text-4xl text-white
                        font-[600] drop-shadow-[0px_4px_4px_rgba(255,255,255,0.25)] '>
            <img className='bg-transparent mr-2' src={emo1} alt='tired emoji'/>
            Hot Topic
        </div>
        <div className='block md:flex'>
            <div className='pt-20
                            w-full md:w-1/2 aspect-[4/3]
                            rounded-3xl bg-[#FF6E1A]
                            text-[6rem] text-center
                            font-bebas-neue '>
                    SELLING ON INSTAGRAM
            </div>
            <div className=' md:ml-10
                            w-full md:w-1/2
                            text-white'>
                <div className='my-10 text-3xl md:text-[2.5rem] font-[600] '>
                What do you know about selling on Instagram ?
                </div>
                <div className='text-xl md:text-2xl font-[500] line-clamp-2 md:line-clamp-none'>
                Selling on Instagram has become a great way to connect with potential customers and grow your business. There are several tools and techniques you can use to sell your products on the platform, and it's important to keep a few key things in mind before taking your business to Instagram.
                </div>
                <Link to='/blogs/content' className='bg-transparent'>
                    <button className='my-8 px-10 py-2 text-[#0D0D0D] text-[1.5rem] font-[600] rounded-full bg-[#FFFFFF] '>
                        Read More
                    </button>
                </Link>
            </div>
        </div>


    </div>
  )
}

export default HotTopic