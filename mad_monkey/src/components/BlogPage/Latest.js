import React from 'react'
import emo3 from '../../assets/Emojis/image 1382.png'


const Latest = () => {
  return (
    <div className='my-32 mx-6 md:mx-16 font-gilroy text-white '>
        <div className='flex
                        my-16 px-8 py-3
                        w-fit rounded-full bg-gradient-to-r from-slate-600 to-[#161313] justify-around
                        text-4xl text-white  font-[600]
                        drop-shadow-[0px_4px_4px_rgba(255,255,255,0.25)]'>
            <img className='bg-transparent  mr-2' src={emo3} alt='tired emoji'/>
            Latest
        </div>
        <div className='block  md:grid grid-cols-3'>
          <div className='w-full md:w-4/5 flex md:block '>
            <div className='my-3 md:my-10 pt-20
                            w-2/5 md:w-full aspect-[5/3] md:aspect-[4/3]
                            bg-[#E63946] rounded-3xl
                            text-[3rem] text-white text-center
                            font-bebas-neue font-[400] '>
            BRANDING
            </div>
            <div className='w-3/5 md:w-auto'>
              <div className='ml-5 md:ml-0 mt-3 md:mt-0 md:my-10 text-xl md:text-3xl  md:text-[2.5rem] font-[600] line-clamp-2 '>
              Building a Brand, are you?
              </div>
              <div className=' hidden md:block text-xl md:text-2xl font-[500] '>

              Are you tired of researching how to start your journey of making your business a brand ?


              </div>
              <button className='ml-5  md:ml-0 my-2 md:my-8 md:px-10 md:py-2 underline md:no-underline text-white md:text-[#0D0D0D] md:text-[1.5rem] md:font-[600] md:rounded-full md:bg-[#FFFFFF] '>
                Read More
              </button>
            </div>
            {/* <button className='md:my-8 md:px-10 md:py-2 text-white md:text-[#0D0D0D] md:text-[1.5rem] font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button> */}
          </div>
          <div className='w-full md:w-4/5 flex md:block'>
            <div className='my-3 md:my-10 pt-20
                            w-2/5 md:w-full aspect-[5/3] md:aspect-[4/3]
                            bg-[#00916E] rounded-3xl
                            text-[3rem] text-white text-center
                            font-bebas-neue font-[400] '>
              SOCIAL MEDIA
            </div>
            <div className='w-3/5 md:w-auto'>
              <div className='ml-5 md:ml-0 mt-3 md:mt-0 md:my-10 text-xl md:text-3xl  md:text-[2.5rem] font-[600] line-clamp-2 '>
              It's social media strategy, not rocket science :)
              </div>
              <div className=' hidden md:block text-xl md:text-2xl font-[500] '>
              Are you looking to develop a social media strategy for your business but don't know where to start? You're not alone.....
              </div>
              <button className='ml-5  md:ml-0 my-2 md:my-8 md:px-10 md:py-2 underline md:no-underline text-white md:text-[#0D0D0D] md:text-[1.5rem] md:font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button>
            </div>
            {/* <button className='md:my-8 md:px-10 md:py-2 text-white md:text-[#0D0D0D] md:text-[1.5rem] font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button> */}
          </div>
          <div className='w-full md:w-4/5 flex md:block'>
            <div className='my-3 md:my-10 pt-20
                            w-2/5 md:w-full aspect-[5/3] md:aspect-[4/3]
                            bg-[#E63946] rounded-3xl
                            text-[3rem] text-white text-center
                            font-bebas-neue font-[400] '>
              REVIEWS
            </div>
            <div className='w-3/5 md:w-auto'>
              <div className='ml-5 md:ml-0 mt-3 md:mt-0 md:my-10 text-xl md:text-3xl  md:text-[2.5rem] font-[600] line-clamp-2 '>
              Customer reviews are Important!
              </div>
              <div className=' hidden md:block text-xl md:text-2xl font-[500] '>
              Customer reviews are an important aspect of any business. In today's digital age, customers often rely......
              </div>
              <button className='ml-5  md:ml-0 my-2 md:my-8 md:px-10 md:py-2 underline md:no-underline text-white md:text-[#0D0D0D] md:text-[1.5rem] md:font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button>
            </div>
            {/* <button className='md:my-8 md:px-10 md:py-2 text-white md:text-[#0D0D0D] md:text-[1.5rem] font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button> */}
          </div>
          <div className='w-full md:w-4/5 flex md:block'>
            <div className='my-3 md:my-10 pt-20
                            w-2/5 md:w-full aspect-[5/3] md:aspect-[4/3]
                            bg-[#00916E] rounded-3xl
                            text-[3rem] text-white text-center
                            font-bebas-neue font-[400] '>
              CONENT
            </div>
            <div className='w-3/5 md:w-auto'>
              <div className='ml-5 md:ml-0 mt-3 md:mt-0 md:my-10 text-xl md:text-3xl  md:text-[2.5rem] font-[600] line-clamp-2 '>
              Content! Content! Content!
              </div>
              <div className=' hidden md:block text-xl md:text-2xl font-[500] '>
              In recent years, the importance of content in social media marketing has grown significantly.  As more and .......
              </div>
              <button className='ml-5  md:ml-0 my-2 md:my-8 md:px-10 md:py-2 underline md:no-underline text-white md:text-[#0D0D0D] md:text-[1.5rem] md:font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button>
            </div>
            {/* <button className='md:my-8 md:px-10 md:py-2 text-white md:text-[#0D0D0D] md:text-[1.5rem] font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button> */}
          </div>
          <div className='w-full md:w-4/5 flex md:block'>
            <div className='my-3 md:my-10 pt-20
                            w-2/5 md:w-full aspect-[5/3] md:aspect-[4/3]
                            bg-[#E63946] rounded-3xl
                            text-[3rem] text-white text-center
                            font-bebas-neue font-[400] '>
            E-COMMERCE
            </div>
            <div className='w-3/5 md:w-auto'>
              <div className='ml-5 md:ml-0 mt-3 md:mt-0 md:my-10 text-xl md:text-3xl  md:text-[2.5rem] font-[600] line-clamp-2 '>
              You say sales, We say E-commerce !!
              </div>
              <div className=' hidden md:block text-xl md:text-2xl font-[500] '>
              With the advent of the eCommerce boom, every business is trying to come up with it’s e-commerce stores.....
              </div>
              <button className='ml-5  md:ml-0 my-2 md:my-8 md:px-10 md:py-2 underline md:no-underline text-white md:text-[#0D0D0D] md:text-[1.5rem] md:font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button>
            </div>
            {/* <button className='md:my-8 md:px-10 md:py-2 text-white md:text-[#0D0D0D] md:text-[1.5rem] font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button> */}
          </div>
          <div className='w-full md:w-4/5 flex md:block'>
            <div className='my-3 md:my-10 pt-10
                            w-2/5 md:w-full aspect-[5/3] md:aspect-[4/3]
                            bg-[#00916E] rounded-3xl
                            text-[3rem] text-white text-center
                            font-bebas-neue font-[400] '>
              INFLUENCER MARKETING
            </div>
            <div className='w-3/5 md:w-auto'>
              <div className='ml-5 md:ml-0 mt-3 md:mt-0 md:my-10 text-xl md:text-3xl  md:text-[2.5rem] font-[600] line-clamp-2 '>
              Influencer Marketing, the new buzz…..
              </div>
              <div className=' hidden md:block text-xl md:text-2xl font-[500] '>
              Influencer marketing is a form of marketing in which brands collaborate with individuals who have a large following......
              </div>
              <button className='ml-5  md:ml-0 my-2 md:my-8 md:px-10 md:py-2 underline md:no-underline text-white md:text-[#0D0D0D] md:text-[1.5rem] md:font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button>
            </div>
            {/* <button className='md:my-8 md:px-10 md:py-2 text-white md:text-[#0D0D0D] md:text-[1.5rem] font-[600] md:rounded-full md:bg-[#FFFFFF] '>
              Read More
            </button> */}
          </div>
        </div>
    </div>
  )
}

export default Latest