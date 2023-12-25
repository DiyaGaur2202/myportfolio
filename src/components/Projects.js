import React from "react";
import { motion } from "framer-motion";

type Props = {};
function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex oveflow-hidden flex-col text-left md:flex-row
max-w-full justify-evenly mx-auto items-center z-0 ">
      
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2x1 xl:text-2xl">
        Projects
      </h3>
      
      <div
        className="relative top-10 w-full flex overflow-x-scroll overflow-y-hidden snap-x
snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]
">

        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -200,
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
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt=""
              className=" xl:w-[500px]"
            />
            <div className="space-y-3 px-0 md:px-10 max-w-4xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}: UPS clone
                </span>
              </h4>

              <p
                className="text-base text-center
               md:text-left"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                nobis modi repudiandae reprehenderit voluptas, consequuntur
                laborum deserunt cum atque aperiam, alias fuga voluptates
                eveniet doloribus dolorum provident temporibus ullam laboriosam
                delectus, inventore autem voluptate. Modi, exercitationem
                repudiandae officia illum accusantium alias ratione sequi hic
                reiciendis, sapiente mollitia excepturi facere voluptate!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px]
-skew-y-12"
      />
    </motion.div>
  );
}

export default Projects;
