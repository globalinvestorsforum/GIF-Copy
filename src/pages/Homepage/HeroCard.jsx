import React from 'react'
import { Reveal } from '../../utils/Reveal';
const HeroCard = () => {
  return (
    <section className="border-y border-neutral-500">
    <div className="w-full h-[320px] bg-yellow-300">
      <div className=" flex-col text-center   content-center  w-full h-full ">
        <Reveal>
        <p className="mt-2  bg-transparent md:w-2/3 sm:w-full mx-auto p-3 md:text-xl text-blue-950 font-bold ">
        Welcome to Global Investors Forum, where innovation meets collaboration. We specialize in orchestrating impactful corporate events, conferences, exhibitions, and business summits that transcend expectations. Elevate your business presence and connect with global leaders in a dynamic environment crafted for success. Join us in shaping the future of corporate engagement.
        </p>
        </Reveal>
      </div>
    </div>
  </section>
  )
}

export default HeroCard