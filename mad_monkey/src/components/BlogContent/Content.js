import React from 'react'

const Content = () => {
    return (
        <div className='flex'>
            <div>
                <div>
                    Title
                </div>
                <div className='relative w-[50%] aspect-square'>
                    Image
                </div>
                <div>
                    description
                </div>
            </div>
            <div className='bg-transparent block'>
                <div className='block
                                absolute top-50 right-20
                                w-1/5
                                bg-white
                                '>
                    <div className='bg-transparent'>
                        Featured Blogs
                    </div>
                    <div className='flex'>
                        <div>Image</div>
                        <div>Title</div>
                    </div>
                    <div className='flex'>
                        <div>Image</div>
                        <div>Title</div>
                    </div>
                    <div className='flex'>
                        <div>Image</div>
                        <div>Title</div>
                    </div>
                </div>
                <div className='block
                                absolute top-96 right-20
                                w-1/5
                                bg-white
                                '>
                    <div>
                        Follow Us
                    </div>
                    <div>
                        <div>Image</div>
                        <div>Instagram</div>
                    </div>
                    <div>
                        <div>Image</div>
                        <div>Linkedin</div>
                    </div>
                    <div>
                        <div>Image</div>
                        <div>Facebook</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content