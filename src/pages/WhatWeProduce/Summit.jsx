import React from 'react'
import SummitCard from './SummitCard'
import {whatweproduce} from '../../constants/index.jsx'

const Summit = () => {
    const summitcard = whatweproduce.summitcards
    console.log(summitcard)


  return (
    <section className='min-h-screen'>

        <div className='text-center py-10 text-3xl md:text-5xl  lg:text-6xl font-extrabold text-blue-950'>OUR SUMMITS</div>
        <div className='md:p-20 py-10 px-3'>
            {summitcard.map((card,index) => (
           <SummitCard  img={card.img} intro={card.intro} impList={card.impList} objList={card.objectivelist} heading={card.heading} /> 
            ))}
        </div>
    </section>
  )
}

export default Summit