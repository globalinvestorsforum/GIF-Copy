import React from 'react'

const OddCard = ({img, lists}) => {
  return (
    <section className='bg-white'>
        <div className={` flex-wrap md:flex justify-center items-center`}>
           
          
            <div className={`md:w-1/2   md:order-last `}>
                <img src={img} className='w-[100%]  order-2 ' alt="" />
            </div>
            <div className='p-5 md:p-14 md:w-1/2 text-neutral-900 '>
                {lists.map((list, index) => (
                     <p className='pb-4 md:text-xl'>
                    <span className='font-bold md:text-2xl text-xl '>{list.title}:</span> {list.content}
                 </p>
                ))} 
            </div>
        </div>
    </section>
  )
}

export default OddCard