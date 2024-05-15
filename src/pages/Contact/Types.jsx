import React from 'react'
import { contactus } from '../../constants'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Types = () => {
  return (
    <section className="bg-white text-neutral-900">
      <div className="md:p-20 p-10">
        <h1 className="text-4xl md:text-6xl font-extrabold">Contact Us</h1>
      </div>
      <div class="grid grid-cols-1 divide-y gap-3 divide-neutral-950">
        <div></div>
        {contactus.map((item, index) => (
          <div
            key={index}
            className="flex-wrap md:flex justify-around items-center p-5"
          >
            <h3 className="text-2xl font-bold w-72">{item.name}</h3>
            <p className="md:w-96 text-lg">{item.desc}</p>
              <Link
                to={item.link}
                className=" w-52  md:w-64 mt-5 flex justify-center items-center border border-black p-2   hover:text-white hover:bg-black"
              >
                <span className="flex justify-center gap-3 items-center ">
                  {item.buttonName} <FaArrowDown />
                </span>
              </Link>
          </div>
        ))}
        <div></div>
      </div>
    </section>
  )
}

export default Types