import React from 'react'
import { whoweare } from '../../constants'

const Hero = () => {
    const para = whoweare.hero.desc;
  return (
    <section className='min-h-screen bg-white text-neutral-800'>
        <div className='md:p-20 p-5 pt-10 md:pt:0'>
            <h1 className='text-3xl md:text-5xl font-bold text-blue-950'>{whoweare.hero.heading}</h1>
            <h3 className='text-lg md:text-xl pt-5 text-blue-950'>{whoweare.hero.subheading}</h3>
            <div className='md:p-5 flex-wrap md:flex'>
                <div className='lg:w-2/5'>
                    <img src={whoweare.hero.imgURL} alt="" />
                </div >
                <div className='lg:w-3/5 flex items-center  text-lg justify-center'>
                    <div>
                    {para.map((para, index) => (
                        <p className='pt-5' key={index}>{para.p}</p>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero