import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function WorkExperience() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
      }}
      className="xl:h-[2500px] h-[7000px] md:h-[2800px]  flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 text-center uppercase xl:tracking-[20px] text-gray-500 xl:text-2xl tracking-[15px] md:text-2xl">
        Developed Projects
      </h3>
      <div className="absolute top-[100px] grid xl:grid-cols-3 md:grid-cols-2 grid-col-1 place-items-center w-full space-x-5  p-10 snap-x ">
        <ExperienceCard
          project_name="Event websites"
          project_summary="I developed a Tech event website using HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL. Developing a full-stack website was a great learning experience for me. The website includes a form submission feature for students who are interested in participating in the event."
          project_img="https://i.postimg.cc/d17mTpdc/Event-Website.png"
          project_link="https://techno23.netlify.app/"
        ></ExperienceCard>
        <ExperienceCard
          project_name="JS Password Generator"
          project_summary="I developed a password generator using JavaScript. This website is helpful in creating strong passwords for your digital accounts. Developing this type of website was a great experience for me, as it helped me to learn core concepts of JavaScript."
          project_img="https://i.postimg.cc/xdL9TTxw/Password-Gen.jpg"
          project_link="https://frabjous-mandazi-34591d.netlify.app/"
        ></ExperienceCard>
        <ExperienceCard
          project_name="JS Tic-Tac-Toe Game"
          project_summary="I developed a tic-tac-toe game using JS. It was an exciting experience for me to bring the classic game online for my classmates to play. The game is now hosted and playable by anyone. Try it out and let me know your thoughts."
          project_link="https://tictactoe-camtech.netlify.app"
          project_img="https://i.postimg.cc/52cG95ht/tictactoe.jpg"
        ></ExperienceCard>
        <ExperienceCard
          project_name="React Netflix Clone"
          project_summary="I have developed a Netflix frontend clone using React.js, Firebase, and the TMDB API. This project helped me learn some core concepts of React.js and working with APIs. You can check out the website, which is hosted on Firebase."
          project_link="https://lnkd.in/d6vzBxFB"
          project_img="https://i.postimg.cc/MKz59PJV/netflix.png"
        ></ExperienceCard>
        <ExperienceCard
          project_name="React Instagram Clone"
          project_summary="Currently developing an Instagram Clone using React JS , Fully Functional that is enabled to post and delete posts and reacting to the posts. 
        "
          project_img="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/instagram-dm-1586589278.jpg"
          project_link=""
        ></ExperienceCard>
        <ExperienceCard
          project_name="Tinder Clone"
          project_summary="Currently, I am working on developing a Tinder clone using React JS. This Tinder clone will include swipe effects, profile finder, messaging section, and more features are being added. The project demonstrates my ability to develop complex web applications using React JS."
          project_img="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/8fd96a4b-d18d-4886-9766-ddf7430e57aa/2602949349/tinder-online-tinder.png"
        ></ExperienceCard>
        <ExperienceCard
          project_name="React Youtube Clone"
          project_summary="While learning React JS, I developed a YouTube clone that includes a homepage and a search bar. Even though it was a beginner project, it helped me to grasp the core concepts of React and understand how it works. "
          project_img="https://i.postimg.cc/hjS82vHg/youtube.jpg"
        ></ExperienceCard>
        <ExperienceCard
          project_name="GitHub Profile Finder"
          project_summary="Created this git hub profile finder using JS and Git Hub user API.
        This Application provides the specific info about the profile like no. of Followers / Following , Name and their repos."
          project_link="https://githubprofilefinder01.netlify.app/"
          project_img="https://i.postimg.cc/FH4xYTD7/github.png"
        ></ExperienceCard>
        <ExperienceCard
          project_img="https://i.postimg.cc/GppGDVYh/notfound.png"
          project_link="https://page-not-found-cam.netlify.app/"
          project_name="page not found"
          project_summary="I developed a 404 page not found using HTML and CSS for practice purposes when I was a beginner and still learning. Although these projects may seem minor, they helped me learn core concepts of design and website structure. As I progressed, I continued to challenge myself with more complex projects to further enhance my skills.
        "
        ></ExperienceCard>
        <ExperienceCard
          project_name="Dev challenges clone"
          project_summary="I developed a Dev Challenges clone using HTML and CSS for practice purposes when I was a beginner and still learning. Although these projects may seem minor, they helped me learn core concepts of design and website structure. As I progressed, I continued to challenge myself with more complex projects to further enhance my skills."
          project_link="https://dev-challenges-clone.netlify.app/"
          project_img="https://i.postimg.cc/zvpqTtT8/devchallenges.png"
        ></ExperienceCard>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
