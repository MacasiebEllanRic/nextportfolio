"use client"
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import useWindowSize from "@rehooks/window-size";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  // const { innerWidth: width } = useWindowSize();

  // const isSmallScreen = width < 450; 
  // const isBigScreen = width > 2400

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jaz2rlp",
        "template_ytsbzlq",
        // @ts-ignore
        formRef.current,
        "N8qlxDBaGVVGvFOed"
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
          // @ts-ignore
          formRef.current.reset();
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
  };

  return (
    <motion.div
      className="sm:text-blue relative flex flex-col h-screen w-full overflow-x-hidden 3xl:w-[2560px] 3xl:h-[1168px] "
      id="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="text-center h-screen flex flex-col cs:flex-row relative top-[120px] cs:top-[200px] 3xl:top-[200px]">
        <motion.div className="flex-1 flex flex-col text-white  gap-[4px] h-fit 3xl:h-full 3xl:gap-[20px]  "
         >
          <motion.h1 className="text-[50px] leading-[88px] text-[#2A0E61] 3xl:text-[130px] 3xl:mb-5">Contact Me</motion.h1>
          <motion.div className="3xl:gap-[10px]">
            <h2 className="3xl:text-[75px]">E-Mail</h2>
            <span className="font-extralight 3xl:text-[45px] ">ellanmacemail@gmail.com</span>
          </motion.div>
          <motion.div className="3xl:gap-[10px]item">
            <h2 className="3xl:text-[75px]">Address</h2>
            <span className="font-extralight 3xl:text-[45px] ">2105 Bella Casa St, Davis</span>
          </motion.div>
          <motion.div className="3xl:gap-[10px]">
            <h2 className="3xl:text-[75px]">Phone</h2>
            <span className="font-extralight 3xl:text-[45px] ">707-363-2216</span>
          </motion.div>
        </motion.div>

        <motion.div className="flex-1 relative ">
          <div className="svgContainer mysvg-container hidden cs:block">
            <motion.div
            initial={{ opacity: 1, scale:1}}
            whileInView={{ opacity: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
              className="relative right-[35px] bottom-[100px] sm:right-[20px] cs:bottom-[70px] 3xl:left-[350px] 3xl:top-[200px]"
            >
              <svg width="450px" height="450px" viewBox="0 0 1920 1920" fill="#2A0E61">
                <motion.path
                  strokeWidth={0.2}
                  initial={{ pathLength: 0 }}
                  transition={{ duration: 3 }}
                  d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                />
              </svg>
            </motion.div>
          </div>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          // @ts-ignore
            ref={formRef}
            onSubmit={sendEmail}
            className="flex w-[75%] flex-nowrap absolute top-0 z-[50] flex-col gap-[20px] cs:px-0 left-10 3xl:gap-[30px] 3xl:h-[600px] 3xl:top-[200px]"
          >
            <input type="text" className="bg-transparent border-[#2A0E61] border-2 3xl:text-[30px] " required placeholder="Name" name="name" />
            <input type="email" className="bg-transparent border-[#2A0E61] border-2 3xl:text-[30px]" required placeholder="Email" name="email" />
            <textarea rows={4} placeholder="Message" className="bg-transparent border-[#2A0E61] border-2 text-white 3xl:text-[30px]" name="message" />
            <button className="bg-transparent w-full self-center cursor-pointer text-white justify-left border-[#2A0E61] border-2 3xl:text-[30px]" >
              Submit
            </button>
            {error && <div className="text-white">Error</div>}
            {success && <div className="text-white">Success</div>}
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
