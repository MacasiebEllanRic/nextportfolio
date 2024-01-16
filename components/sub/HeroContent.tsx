"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col cs:flex-row items-center justify-center px-20 mt-20 cs:mt-40 w-[400px] cs:w-full relative right-[40px] sm:static z-[20] "
    >
      {" "}
      <div className="cs:hidden py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px] mb-[10px] p-2">
        Ellan Macasieb
      </div>
      <div className="h-full w-full flex flex-col gap-1  cs:gap-5 justify-center m-auto text-start relative">
        <motion.div
          variants={slideInFromTop}
          className="sm: Welcome-box cs:w-fit  md:pr-10 py-[8px] px-[1px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 3xl:" />
          <h1 className="Welcome-text text-[13px] 3xl:text-[30px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] 3xl:max-width-[1200px] w-auto 3xl:w-[1200px] h-auto 3xl:whitespace-nowrap "
        >
          <span className="text-base sm:text-lg md:text-xl cs:text-2xl xl:text-3xl 3xl:text-7xl">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm 3xl:text-5xl text-gray-400 my-5 max-w-[600px] 3xl:max-w-[2300px] "
        >
          Hey there! I am Ellan, a Web Developer on a
          mission to elevate digital experiences. In the world of coding, I
          specialize in turning ideas into functional, sleek, and user-friendly
          solutions.
        </motion.p>
        <motion.a
          href="#projects"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-xs text-white cursor-pointer rounded-lg max-w-[200px] 3xl:max-w-[600px] 3xl:w-[300px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
