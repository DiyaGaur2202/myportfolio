import React from "react";
import { motion } from "framer-motion";

// type Props = {
//   directionLeft?: boolean;
//   imgSrc: string;
//   skillPercent: Int16Array;
// };

function Skill({ directionLeft, imgSrc, skillPercent }) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={imgSrc}
        className="rounded-full border border-gray-500 object-cover w-[55px] h-[55px] xl:w-21 xl:h-21 filter  md:w-28 md:h-28 group-hover:grayscale transition duration-300 ease-in-out"
      ></motion.img>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[60px] h-[60px] md:w-28 md:h-28 xl:w-21 xl:h-21 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {skillPercent}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
