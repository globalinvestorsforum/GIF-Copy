import React from 'react'
import { Reveal } from "../../utils/Reveal";

const Mission = () => {
  return (
    <section>
        <div
      className="relative border-b border-neutral-800 min-h-[450px] bg-cover "
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/GIF%2FHomepage%2Fmissionimg.png?alt=media&token=d3edbfb8-dd4e-40d6-9341-ed9515b7abf0')`,
      }}
    >
      <div className=" absolute pt-20 ps-8 md:pt-28 md:ps-28  flex-wrap justify-center items-center    rounded-xl w-full h-full   backdrop-blur-[2px] backdrop-brightness-50">
        <Reveal width="">
          <h3 className="ps-3  max-w-xxl text-3xl md:text-5xl lg:text-6xl  tracking-wide font-bold ">
            OUR MISSION
          </h3>
        </Reveal>
        <Reveal width="">
          <p className="mt-2  md:w-3/4 sm:w-full p-3 md:text-[18px] text-neutral-200 ">
          We are the architects of meaningful connections, curating transformative summits that bring together the world's brightest minds and leading figures. From groundbreaking AI innovations to strategic investment opportunities, and cutting-edge technologies to global residency solutions, we fuel the dialogue that shapes our future. Our mission is to:
          </p>
        </Reveal>
      </div>
    </div>
    </section>
  )
}

export default Mission