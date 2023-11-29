import React from "react";
import ProjectCard from "../sub/ProjectCard";
import LinkButton from "./LinkButton";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div  className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/GameHub.png"
          title="GameHub with RawgIO"
          description="My 1st React Project where I used the RawgIO API to fetch data on video games. I built using React, ChakraUI and Typescript. Will Continue to add more Functionality"
          link="https://game-hub-gilt-phi.vercel.app/"
        />
        
        <ProjectCard
          src="/Ecommerce.png"
          title="Online Store"
          description="I built an Ecommerce Store using Next.js, React, and Typescript. It utilizes a Prisma database, uses Stripe to handle transaction, and Cloudinary to render images. (still under development)"
          link="https://online-store-1-eight.vercel.app/"
       />
       
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website Portfolio"
          description="My Portfolio that you are currently on. I created this portofolio using Nextjs, React, Tailwind, Framer-motion, and Threejs. "
          link=""
       />
       
       
        
      </div>
    </div>
  );
};

export default Projects;