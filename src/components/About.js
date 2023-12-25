import React from "react";
import { motion } from "framer-motion";

function About() {


  return (
    <motion.div
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:2.5
    }}

    className="h-[600px] flex flex-col relative text-center md:text-left md:flex-row max-w-7xl  my-auto px-10 justify-evenly mx-auto items-center ] ">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      
      <div className="  flex flex-col absolute top-[115px] md:flex-row  items-center md:px-20 lg:items-start lg:flex-row  lg:justify-between lg:mt-5 lg:px-20">
        <motion.img
          className="w-40 h-40 rounded-full object-cover mb-10 md:w-[200px] md:h-[270px] md:rounded-lg md:mt-20 lg:w-[200px] lg:h-[350px] lg:rounded-lg  lg:object-cover lg:mt-0
         "
          // className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] lg:mt:40 "

          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          src="https://i.postimg.cc/Znm5RNbP/IMG-20230430-WA0005.jpg"
        />

        <div className="space-y-3 px-0 md:px-10 flex xl:justify-center flex-col  ">
          <h4 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Hello! I'm{" "}
            <span className="underline decoration-[#f7ab0a]/50">Diya Gaur</span>{" "}
            
          </h4>
          <p className="text-sm text-start px-10 lg:text-xl lg:px-0 md:px-0 md:text-sm  ">
            As a final year student with a deep passion for web development, I have honed my skills to become a versatile Full Stack MERN (MongoDB, Express.js, React, Node.js)developer. I'm excited about creating end-to-end web applications that combine seamless functionality with a sleek user interface. I have developed several website clones that have helped me understand the core concepts of web development and the behavior of websites. Thank you for taking the time to read about my experience!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
