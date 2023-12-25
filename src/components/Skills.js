import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    className="xl:h-[700px] md:h-[700px] h-[450px] flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10  justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        {" "}
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-[15px] md:gap-5 xl:gap-5 place-items-center absolute top-[250px]">
        <Skill imgSrc="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" skillPercent={95} ></Skill>
        <Skill imgSrc="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" skillPercent={98}></Skill>
        <Skill imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" skillPercent={90} ></Skill>
        <Skill imgSrc="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png" skillPercent={85}></Skill>
        <Skill imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7R02gao3i5Sbv2zLoqeS1NaX52bnLaCqtRpA_Il8U&s" skillPercent={80} ></Skill>
        <Skill imgSrc="https://img.freepik.com/free-icon/snakes_318-368381.jpg" skillPercent={90} ></Skill>
        <Skill imgSrc="https://www.devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg" skillPercent={95}></Skill>
        <Skill imgSrc="https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ" skillPercent={70} ></Skill>
        <Skill imgSrc="https://i.postimg.cc/Nfy7HNXf/mongodb.png" skillPercent={70} ></Skill>
        <Skill imgSrc="https://i.postimg.cc/k5C4749P/express.png" skillPercent={70} ></Skill>
        <Skill imgSrc="https://i.postimg.cc/d3ZkLxxb/nodejs.jpg" skillPercent={70} ></Skill>
        
      </div>
    </motion.div> 
  );
}

export default Skills;
