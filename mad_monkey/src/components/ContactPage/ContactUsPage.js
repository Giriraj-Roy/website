import React from 'react'
import img1 from '../../assets/ContactUs/Message.png'
import img2 from '../../assets/ContactUs/Call.png'
import img3 from '../../assets/insta.png'
import img4 from '../../assets/linkedin.png'
import img5 from '../../assets/facebook.png'



const Contact = () => {
  return (
    <div className='block md:flex
                    mx-2  md:mx-0 my-20 md:my-10
                    px-0  md:px-16 md:py-20
                    w-[100%]
                    md:bg-[#E63946] rounded-[3rem]  ' >


      <div className='block
                      ml-8 md:ml-10
                      w-[80%] md:w-2/5
                      bg-transparent'>


        <div className='bg-transparent 
                        font-bebas-neue font-[400] 
                        text-5xl md:text-7xl text-shadow-2xl md:text-shadow-3xl
                        md:leading-[5rem] '>
          Be the brand that customers want & competitors envy.
        </div>

        <div className='hidden md:block
                        mt-72
                        bg-transparent'>

          <div className='bg-transparent'>

            <div className='flex
                            bg-transparent
                            text-[#FFFFFF] text-3xl
                            font-gilroy font-[600]'>

                <img className='mr-10 bg-transparent' src={img1} alt='email' />
                hey@madmonkey.in
            </div>
            <div className='flex
                            bg-transparent
                            text-[#FFFFFF] text-3xl
                            font-gilroy font-[600]'>
                <img className='mr-10 bg-transparent' src={img2} alt='phone' />
                +91 91106 60335
            </div>
          </div>
          <div className='mt-10 flex bg-transparent'>
            <img className='m-4 p-4 w-20 bg-[#FFFFFF] rounded-lg' src={img3} alt='instagram'/>
            <img className='m-4 p-4 w-20 bg-[#FFFFFF] rounded-lg' src={img4} alt='linkedin'/>
            <img className='m-4 p-4 w-20 bg-[#FFFFFF] rounded-lg' src={img5} alt='facebook'/>

          </div>
        </div>
      </div>










      <div className='mt-10 md:mt-0 ml-4 md:ml-20
                      py-2
                    bg-[#FFFFFF] rounded-3xl
                      w-[90%] md:w-1/2 '>
          <div className='bg-transparent'>

              <div className='mt-2 md:mt-12
                              bg-transparent
                              text-center text-[#FF5E19] text-2xl md:text-5xl 
                              font-gilroy font-[700]'>
                  Contact Us
              </div>
              <div className='my-2
                              bg-transparent
                              text-center text-[#00000080] text-xs md:text-base
                              font-gilroy font-[500] '>
                  We will connect with you in 24hrs
              </div>
          </div>
          <form className='bg-transparent'>
          <div className='mx-2 md:mx-12 my-3 bg-transparent'>
              <label
                    for="Name"
                    className='mb-1
                              bg-transparent
                              text-[#000000] text-base md:text-xl
                              font-gilroy font-[500] '>
                    Name *
              </label>
              <input  type="text" id="Name" name="Name" required
                      className='
                              w-full aspect-[10/1]
                              bg-[#FF5E191A] rounded-sm md:rounded-xl
                              text-[#000000] text-base md:text-xl
                              font-gilroy font-[500]
                            '/>

              {/* </input> */}
          </div>
          <div className='mx-2 md:mx-12 my-3 bg-transparent'>
              <label className='mb-1
                              bg-transparent
                              text-[#000000] text-base md:text-xl
                              font-gilroy font-[500] '>
                    Email *
              </label>
              <input  type="text" id="email" name="email" required
                      className='
                              w-full aspect-[10/1]
                              bg-[#FF5E191A] rounded-sm md:rounded-xl
                              text-[#000000] text-base md:text-xl
                              font-gilroy font-[500] '>

              </input>
          </div>
          <div className='mx-2 md:mx-12 my-3 bg-transparent'>
              <label className='mb-1
                              bg-transparent
                              text-[#000000] text-base md:text-xl
                              font-gilroy font-[500] '>
                    Number *
              </label>
              <input  type="number" id="number" name="number" required
                      className='
                              w-full aspect-[10/1]
                              bg-[#FF5E191A] rounded-sm md:rounded-xl
                              text-[#000000] text-base md:text-xl
                              font-gilroy font-[500]  '>

              </input>
          </div>
          <div className='mx-2 md:mx-12 my-3 bg-transparent'>
              <label className='mb-1
                              bg-transparent
                              text-[#000000] text-base md:text-xl
                              font-gilroy font-[500] '>
                    Message *
              </label>
              <input  type="text" id="message" name="message"
                      className='
                              w-full aspect-[5/1]
                              bg-[#FF5E191A] rounded-sm md:rounded-xl
                              text-[#000000] text-base md:text-xl
                              font-gilroy font-[500]  '>

              </input>
          </div>
          <div className='mx-2 md:mx-12 my-12 py-2
                        bg-[#FF5E19] rounded-xl
                          text-center text-xl md:text-[1.5rem] text-[#FFFFFF]
                          font-gilroy font-[600]'>
              SEND MESSAGE
          </div>
          </form>
      </div>


    </div>
  )
}

export default Contact