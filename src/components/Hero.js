import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import {Link} from react-router-dom
// import { useHistory } from 'react-router-dom';

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
// import devPic from "../public/dev_pic.jpeg";
// import Link from "next/link";
import About from "./About";
import WorkExperience from "./WorkExperience";

function Hero() {


  // let hello = "cam"
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Developer Sounds Diya Gaur `,
      "<Girl who codes Future/>",
      "< whoes dreams become websites />",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 70,
  });
  

  
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center z-10">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover xl:max-w-10 "
        src="https://i.postimg.cc/9fNSgmKM/IMG-20230427-WA0005.jpg"
        alt="devPic"
      />
      <div className="z-20 flex flex-col justify-center text-center ">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] justify-center text-center ">
          Web Developer
        </h2>

        <h1 className="text-5xl lg:text-5xl font-semibold px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
