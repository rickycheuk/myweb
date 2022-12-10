"use client";

import { React, useEffect } from "react";
import Tilt from "./tilt";
import * as Icon from "react-feather";
import { motion, useAnimation } from "framer-motion";

const Card = () => {
  const colors = [
    { value: "#ffffff" },
    { value: "#f2c758" },
    { value: "#b6a179" },
    { value: "#6389cb" },
    { value: "#272425" },
    { value: "#000000" },
  ];
  const animationCard = useAnimation();
  const animationPic = useAnimation();
  const animationTitle = useAnimation();
  const animationSub = useAnimation();
  const animationLink = useAnimation();
  const animationColor = useAnimation();
  const animationDuration = 0.2;

  async function sequence() {
    await animationCard.start({
      scale: 1,
      transition: {
        type: "spring",
        duration: animationDuration,
      },
    });
    await animationPic.start({
      scale: 1,
      transition: {
        type: "spring",
        duration: animationDuration,
      },
    });
    await animationTitle.start({
      scale: 1,
      transition: {
        type: "spring",
        duration: animationDuration,
      },
    });
    await animationSub.start({
      scale: 1,
      transition: {
        type: "spring",
        duration: animationDuration,
      },
    });
    await animationLink.start({
      scale: 1,
      transition: {
        type: "spring",
        duration: animationDuration,
      },
    });
    await animationColor.start({
      scale: 1,
      transition: {
        type: "spring",
        duration: animationDuration,
      },
    });
  }

  useEffect(() => {
    sequence();
  }, []);

  return (
    // card wrapper
    <div
      id="crd"
      className="flex flex-col w-full justify-center h-[90vh] items-center overflow-hidden"
    >
      <motion.div animate={animationCard} initial={{ scale: 0 }}>
        {/* card */}
        <Tilt
          options={{ glare: true, "max-glare": 0.42, perspective: 420 }}
          className="rounded-[22px]"
        >
          <div className="abolute min-w-[70px] min-h-[115px] max-w-[275px] max-h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 px-[22px] py-[22px] cursor-grab">
            {/* card image */}
            <motion.div animate={animationPic} initial={{ scale: 0 }}>
              <img
                className="w-full rounded-xl overflow-hidden mb-3 opacity-95"
                src="./ricky.jpg"
                alt=""
                draggable="false"
              />
            </motion.div>
            <motion.div animate={animationTitle} initial={{ scale: 0 }}>
              {/* card title */}
              <h1 className="text-2xl text-white mb-2 font-bold text-center">
                Ricky Cheuk
              </h1>
            </motion.div>
            <motion.div animate={animationSub} initial={{ scale: 0 }}>
              {/* card subtitle */}
              <p className="text-white mb-3 text-center">
                - Software Engineer -
              </p>
            </motion.div>
            <motion.div animate={animationLink} initial={{ scale: 0 }}>
              {/* button wrapper */}
              <div className="flex justify-center items-center gap-x-[15px] mb-3">
                <a
                  href="https://www.linkedin.com/in/rickycheuk/"
                  className="group bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg opacity-60 hover:opacity-100"
                >
                  <Icon.Linkedin className="group-hover:scale-125" />
                </a>
                <a
                  href="https://github.com/rickycheuk/"
                  className="group bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg opacity-60 hover:opacity-100"
                >
                  <Icon.GitHub className="group-hover:scale-125" />
                </a>
                <a
                  href="https://www.instagram.com/thlipperythnake/?hl=en"
                  className="group bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg opacity-60 hover:opacity-100"
                >
                  <Icon.Instagram className="group-hover:scale-125" />
                </a>
              </div>
            </motion.div>
            <motion.div animate={animationColor} initial={{ scale: 0 }}>
              {/* colors */}
              <ul className="flex justify-center items-center gap-x-[10px]">
                {colors.map((color, index) => {
                  return (
                    <li
                      key={index}
                      style={{ backgroundColor: color.value }}
                      className="w-6 h-6 rounded-full cursor-pointer"
                    ></li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Card;
