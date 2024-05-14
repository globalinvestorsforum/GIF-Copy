import { React, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Numbers = () => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <section>
      <ScrollTrigger
        onEnter={() => setcounterOn(true)}
        onExit={() => setcounterOn(false)}
      >
        <div className="min-h-[500px]  bg-white text-blue-950">
          <div className="p-5 pt-20 md:mx-52 ">
            <div className="md:flex flex-wrap  w-full ">
              <div className="md:w-1/2  font-bold md:text-7xl text-5xl">
                {counterOn && <CountUp start={0} end={45} duration={2} />}%
                <hr className="w-full h-[2.5px] my-1 border-[1px] border-black md:hidden" />
                <p className="text-xl  md:text-2xl ">C-SUITE ATTENDANCE.</p>
              </div>
              <div className="md:w-1/2 pt-10 md:p-0 font-bold md:text-7xl text-5xl">
                {counterOn && <CountUp start={0} end={90} duration={2} />}+
                <hr className="w-full h-[2.5px] my-1 border-[1px] border-black md:hidden" />
                <p className="text-xl  md:text-2xl ">
                  PLATFORM THAT CONNECTS THE WORLD
                </p>
              </div>
            </div>
            <div className="md:flex flex-wrap  w-full md:pt-24 pt-10  ">
              <div className="md:w-1/2 font-bold md:text-7xl text-5xl">
                {counterOn && <CountUp start={0} end={1} duration={2} />}
                <hr className="w-full h-[2.5px] my-1 border-[1px] border-black md:hidden" />
                <p className="text-xl  md:text-2xl ">
                  CITIES WITH GLOBAL PRESENCE.
                </p>
              </div>
              <div className="md:w-1/2 md:py-0 py-10 font-bold  md:text-7xl text-5xl">
                {counterOn && <CountUp start={0} end={40} duration={3} />}+
                <hr className="w-full h-[2.5px] my-1 border-[1px] border-black md:hidden" />
                <p className="text-xl  md:text-2xl ">
                  INDUSTRIES BEING FACILITATED.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Numbers;
