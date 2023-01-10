import React from 'react'
import emo2 from '../../assets/Emojis/image 1367.png'


const Trending = () => {
  return (
    <div className='my-32 mx-6 md:mx-16 font-gilroy text-white '>
      <div className='flex
                      my-16 px-8 py-3 text-4xl
                      w-fit
                      bg-gradient-to-r from-slate-600 to-[#161313] rounded-full justify-around
                      font-[600] drop-shadow-[0px_4px_4px_rgba(255,255,255,0.25)]'>
            <img className='bg-transparent  mr-2' src={emo2} alt='tired emoji'/>
            Trending
      </div>
      <div className='block md:flex'>
        <div className='w-full md:w-1/2'>
          <div className='my-10 pt-32
                          w-full aspect-[5/3]
                          bg-[#FF0000] rounded-3xl
                          text-[4rem] text-white text-center
                          font-bebas-neue font-[400] '>
            NEGATIVE REVIEWS
          </div>
          <div className=''>
            <div className='my-10 text-3xl  md:text-[2.5rem] font-[600] line-clamp-2 '>
            How to avoid review bombing
            </div>
            <div className='text-xl md:text-2xl font-[500] line-clamp-3'>
            As an eCommerce seller, it's important to understand the power of customer reviews. In today's digital age, consumers rely heavily on reviews from previous buyers before making a purchase. In fact, a survey ......
            </div>
          </div>
          <button className='my-8 px-10 py-2 text-[#0D0D0D] text-[1.5rem] font-[600] rounded-full bg-[#FFFFFF] '>
            Read More
          </button>
        </div>

      <div className='md:ml-10 w-full md:w-1/2'>
          <div className='my-10 pt-32
                          w-full aspect-[5/3]
                          bg-[#4C40F7] rounded-3xl
                          text-[4rem] text-white text-center
                          font-bebas-neue font-[400] '>
          ondc
          </div>
          <div className=''>
            <div className='my-10 text-3xl  md:text-[2.5rem] font-[600] line-clamp-2 '>
            The new digital e-commerce- “ONDC”
            </div>
            <div className='text-xl md:text-2xl font-[500] line-clamp-3'>
            The Open Network for Digital Commerce (ONDC) is a new initiative aimed at promoting small business owners and preventing .....
            </div>
          </div>
          <button className='my-8 px-10 py-2 text-[#0D0D0D] text-[1.5rem] font-[600] rounded-full bg-[#FFFFFF] '>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Trending