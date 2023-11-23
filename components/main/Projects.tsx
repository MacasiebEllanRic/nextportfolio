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
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1296369449916363451"
        />
        
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1296369449916363451"
       />
       
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1296369449916363451"
       />
       
       
        
      </div>
    </div>
  );
};

export default Projects;