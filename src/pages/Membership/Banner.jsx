import React from 'react'
import { membership } from "../../constants";
import { memebershipBanner } from '../../constants';

const Banner = () => {
    const boldp1 = membership[3].boldp1;
    const p2 = membership[4].p2;
  return (
    <section className='bg-yellow-300 text-neutral-900'>
    <div className='flex justify-center items-center  min-h-[400px]'>
        <div className='md:w-4/5 p-5 py-10 md:py-0'>
            <h1 className='text-xl md:text-3xl font-bold tracking-wide'>{boldp1}</h1>
            <ul className='pt-5'>
                {memebershipBanner.map((list,index) => (
                    <li key={index}><b>{list.head}:</b> {list.desc}</li>
                ))}
            </ul>
        </div>
    </div>
</section>
  )
}

export default Banner