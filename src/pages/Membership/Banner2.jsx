import React from "react";
import { membership } from "../../constants";
import { Link } from "react-router-dom";

const Banner2 = () => {
  const p3 = membership[5].p3;
  const p4 = membership[6].p4;
  return (
    <div className="min-h-[300px] flex justify-center items-center">
        <div className="w-[87%] md:w-[80%] flex-wrap justify-center items-center py-10 ">
          <p className="pt-5 md:text-lg">{p3}</p>
          <div className="pt-10 md:text-lg">
            <Link className=" border border-yellow-400 bg-transparent p-3 text-white font-bold hover:bg-neutral-600">
              COMING SOON
            </Link>
          </div>
          <p className="pt-10 md:text-lg">{p4}</p>
      </div>
    </div>
  );
};

export default Banner2;
