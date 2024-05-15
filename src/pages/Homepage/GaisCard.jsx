import React from 'react'
import { Link } from 'react-router-dom'
const GaisCard = () => {
  return (
    <section className='h-[550px] bg-cover bg-center flex-wrap ' 
    style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/GIF%2FHomepage%2FImg7.jpg?alt=media&token=c1eb8567-fd6c-4c0f-9d2b-d82d703648d9)`,
      }}
    >

      <div className='px-10 md:px-20 pt-28'>
        <h1 className='w-20 text-4xl md:text-5xl text-blue-950 font-extrabold '>GLOBAL ARTIFICIAL INTELLIGENCE SUMMIT.</h1>
        <p className='pt-5 text-xl text-blue-950 font-bold'>BE A PART OF WORLDS'S LARGEST AI SUMMIT.</p>
        <div className="pt-10  ">
                <Link className="border border-blue-950 bg-transparent p-3 text-blue-950 font-bold hover:bg-neutral-600">EXPLORE MORE</Link>
        </div>
      </div>
    </section>
  )
}

export default GaisCard