import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
// import Link  from "next/link";

function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center p-5" >
      
      <motion.div

       initial = {{
        x: -500,
        opacity: 0,
        scale :0.5
      }}

      animate={{
        x:0,
        opacity:1,
        scale :1 

      }}
      transition={{duration:1.5}}
       className="flex flex-row items-start "
       
       >
        {/* Social Icons */}

        <SocialIcon
          className=""
          url="https://www.linkedin.com/in/diya-gaur-b5787b288</motion.div>"
          fgColor="gray"
          bgColor="transparent">

          </SocialIcon>
        {/* <SocialIcon
          url="https://www.youtube.com/watch?v=urgi2iz9P6U"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>

        <SocialIcon
          url="https://www.youtube.com/watch?v=urgi2iz9P6U"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon> */}

       
    </motion.div>
    <a href="#ContactMe" >
    
      <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{x:0,
        opacity:1,
            scale:1
    }}
    transition={{duration:1.5}}
      className="flex flex-row items-center text-gray-300 cursor-pointer"  >
        <SocialIcon
        //   url="https://mail.google.com"
        network="email"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">Get in Touch</p>
      </motion.div>
    </a>
    </header>
  );
}

export default Header;
