import React from "react";
import { motion } from "framer-motion";


function ExperienceCard({project_name , project_summary , project_link , project_img }) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mb-6 mt-3 w-[270px] h-[650px] md:w-[350px] xl:w-[350px] snap-center bg-[hsl(0,0%,16%)] p-4 hover:opacity-100 opacity-80  transition-opacity duration-200 overflo overflow-hidden  ">
      <motion.img
        onClick={() => {
          window.open(`${project_link}`);
        }}
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-[340px] h-[150px]  xl:w-[400px] xl:h-[160px]  object-center cursor-pointer object-cover rounded-md"
        src={project_img}
        alt=""
      />
      <div className="">
        <h4 className="text-3xl font-bold mb-5 ">{project_name}</h4>
        <p className="font-light text-lg mt-1">{project_summary}</p>
        
      </div>
    </article>
  );
}

export default ExperienceCard;
