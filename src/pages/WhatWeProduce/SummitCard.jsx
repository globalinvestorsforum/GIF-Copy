import React from 'react'

const SummitCard = ({intro, img, objList, impList , heading}) => {
  return (
    <div className='min-h-[600px] '>
        <div className='w-full  flex justify-center items-center  '>
            <img src={img} className='w-[100%] md:w-[90%] rounded-3xl h-[400px] object-cover relative'  alt="" />
            <h1 className='absolute text-3xl md:text-5xl  text-white left-24 md:left-44  font-bold '>{heading}</h1>
        </div>
        <div className='md:px-32 md:py-14 px-2 py-5'>
            <div className='pt-10 '>
                <h3 className='text-blue-950 font-bold text-3xl pb-5'>INTRODUCTION</h3>
                <p className='md:text-lg'>{intro}</p>
            </div>
            <div className=' flex pt-10'>
                <div className=' w-1/2'>
                <h3 className='text-blue-950 font-bold text-2xl md:text-3xl  md:p-3'>OBJECTIVE</h3>
                <ul className='list-disc px-3 pt-2 md:pt-0 md:px-8'>
                {objList.map((list, index) => (
                    <li key={index}>{list.content}</li>
                ))}
                </ul>
                
                </div>
                <div className='w-1/2'>
                <h3 className='text-blue-950 font-bold text-2xl md:text-3xl  md:p-3'>IMPACT</h3>
                <ul className='list-disc px-3 pt-2 md:pt-0  md:px-8 '>
                {impList.map((list, index) => (
                    <li key={index}>{list.content}</li>
                ))}
                </ul>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default SummitCard