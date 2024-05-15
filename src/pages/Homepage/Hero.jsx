import React from 'react'
import { homepage } from "../../constants";
import { Reveal } from '../../utils/Reveal';
const Hero = () => {
  return (
    <section
    className="h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/GIF%2FHomepage%2Fimg1_home.png?alt=media&token=c8768038-0f1e-40be-b354-26c595480657)`,
    }}
  >
    <h2 className="md:p-24 p-5 pt-24 md-pt-0 text-3xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-10  w-1/2">IT'S A PLATFORM WHERE BUSINESS GETS DONE NOT JUST DISCUSSED.</h2>
  </section>
  )
}

export default Hero