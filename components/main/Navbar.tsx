import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50  sm:text-rose-600 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden lg:block text-gray-300 ">
            Ellan Macasieb
          </span>
        </a>

        <div className=" mb-[10px] h-full flex items-center justify-center ">
          <div className="lg:flex items-center justify-center h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="mr-[20px] whitespace-nowrap text-xs cursor-pointer ">
              About me
            </a>
            <a href="#skills" className="mr-[20px] text-xs cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="mr-[20px] text-xs cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="mr-[20px] text-xs cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 sm:hidden lg:block lg:flex lg:flex-row lg:gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;