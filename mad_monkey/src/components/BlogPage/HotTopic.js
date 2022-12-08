import React from 'react'
import emo1 from '../../assets/Emojis/image 111.png'
// import emo2 from '../../assets/Emojis/image 1367.png'
// import emo3 from '../../assets/Emojis/image 1382.png'


const HotTopic = () => {
  return (
    <div className='my-32 mx-6 md:mx-16 font-gilroy'>
        <div className='my-16 px-8 py-3 text-4xl text-white  font-[600] flex drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-fit rounded-full bg-black justify-around'>
            <img className='bg-transparent' src={emo1} alt='tired emoji'/>
            Hot Topic
        </div>
        <div className='block md:flex'>
            <div className='w-full md:w-4/5 md:w-1/2 aspect-[4/3] rounded-3xl bg-white '>

            </div>
            <div className=' md:ml-10 w-full md:w-1/2 text-white'>
                <div className='my-10 text-3xl md:text-[2.5rem] font-[600] '>
                How to add multiplication in history of deathnote by saiman says and dont know lets find out
                </div>
                <div className='text-xl md:text-2xl font-[500]'>
                How to add multiplication in history of deathnote by saiman says and dont know lets find out How to add multiplication in history of deathnote by saiman says and dont know lets find out
                </div>
                <button className='my-8 px-10 py-2 text-[#0D0D0D] text-[1.5rem] font-[600] rounded-full bg-[#FFFFFF] '>
                    Read More
                </button>
            </div>
        </div>


    </div>
  )
}

export default HotTopic