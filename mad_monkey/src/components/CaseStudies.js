import React from 'react'
import HorizontalScroll from 'react-horizontal-scrolling'

const CaseStudies = () => {
  return (
    <div className='ml-16'>
        <div className='font-gilroy text-[#FFFF00] text-xl my-5'>
            CASE STUDIES ---
        </div>
        <div className='font-gilroy font-bold text-5xl'>
            Some of our finest works
        </div>
        <div className='w-full'>
            <HorizontalScroll>
            
            <div className='w-[90%]'>
                <div>
                    Lorem
                </div>
                <div>
                    kjc
                </div>

            </div>
            <div className='w-[90%]'>
                <div>
                    Lorem
                </div>
                <div>

                </div>

            </div>
            <div className='w-[90%]'>
                <div>
                    Lorem
                </div>
                <div>

                </div>

            </div>
            </HorizontalScroll>
        </div>
    </div>
  )
}

export default CaseStudies