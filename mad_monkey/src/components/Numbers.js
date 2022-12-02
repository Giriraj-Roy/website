import React from 'react'

const Numbers = () => {
  return (
    <div className='my-40 w-full block bg-[#08BA64] font-gilroy text-[#FFFFFF] '>
        <div className='bg-inherit w-full'>
            <div className='bg-inherit m-auto text-5xl  font-[800] '>
                Some numbers that matter
            </div>
            <div className='bg-inherit text-lg font-[400]'>
                Our achievement in the journey depicted in numbers
            </div>
        </div>
        <div className='bg-inherit divide-x-4 grid-cols'>
            <div className='bg-inherit block justify-around'>
                <div className='bg-inherit text-5xl font-[800]  '>
                    50+
                </div>
                <div className='bg-inherit'>
                    Happy Clients
                </div>

            </div>
            <hr className='border-white '/>
            <div className='bg-inherit block '>
                <div className='bg-inherit text-5xl font-extrabold  '>
                    25K+
                </div>
                <div className='bg-inherit'>
                    Reviews Posted
                </div>
            </div>
            <hr/>
            <div className='bg-inherit block '>
                <div className='bg-inherit text-5xl font-[800]  '>
                    21
                </div>
                <div className='bg-inherit'>
                    Dedicated Members
                </div>
            </div>
            <hr/>
            <div className='bg-inherit block '>
                <div className='bg-inherit text-5xl font-[800]  '>
                    2
                </div>
                <div className='bg-inherit'>
                    Years of Journey
                </div>
            </div>
        </div>
    </div>
)
}

export default Numbers