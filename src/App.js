// import Image from "next/image";
// import { Inter } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// const inter = Inter({ subsets: ["latin"] });
// import Link from "next/link";
// import { LinkHTMLAttributes } from "react";

export default function Home() {
  return (
    <main
      className=" bg-[rgb(36,36,36)] text-white h-screen  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]

    
    "
    >
      {/*  
      header 
      hero  
      About 
      Experience 
      skills
      projects
      contact me
   */}

      <Header />

      <section id="hero" className="">
        <Hero></Hero>
      </section>
      <section id="#about" className="">
        <About></About>
      </section>
      <section id="#WorkExperience" className="">
        <WorkExperience></WorkExperience>
      </section>
      <section id="Skills">
        <Skills></Skills>
      </section>
      {/* <section id="Project">
        <Projects></Projects>
      </section> */}
      <section id="ContactMe">
        <ContactMe></ContactMe>
      </section>

      <a href="#hero">
        <footer className="sticky xl:visible xl:bottom-10 sm:hidden w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
              alt=""
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-contain "
            />
          </div>
        </footer>
      </a>

      {/* <Route path="/WorkExperience">
  <About />
</Route> */}

    </main>
  );
}
