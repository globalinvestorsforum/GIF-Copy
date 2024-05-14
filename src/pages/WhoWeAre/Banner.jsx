import React from 'react'
import { whoweare } from '../../constants'
const Banner = () => {
  return (
    <section className='bg-yellow-300 text-blue-950'>
            <div className='flex justify-center items-center  min-h-[400px]'>
                <div className='md:w-4/5 p-5 py-10 md:py-0'>
                    <h1 className='text-2xl md:text-5xl font-bold tracking-wide'>{whoweare.banner.heading}</h1>
                    <p className='text-lg md:text-xl pt-5'>
                        {whoweare.banner.para}
                    </p>
                </div>
            </div>
    </section>
  )
}

export default Banner