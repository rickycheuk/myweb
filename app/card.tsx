"use client";

import { useEffect, useState } from "react";
import Tilt from "./tilt";
import * as Icon from "react-feather";
import { motion, useAnimation } from "framer-motion";
import ReactCardFlip from "react-card-flip";

const Card = () => {
  const colors = [
    { value: "#B9B9B9" },
    { value: "#877900" },
    { value: "#81003E" },
    { value: "#003B80" },
  ];

  const [initScale, setScale] = useState(0);
  const [isFlipped, setFlip] = useState(true);
  const flipCard = () => {
    setFlip(!isFlipped);
    setScale(1);
  };

  const animationCard = useAnimation();
  const animationPic = useAnimation();
  const animationTitle = useAnimation();
  const animationSub = useAnimation();
  const animationLink = useAnimation();
  const animationColor = useAnimation();
  const animationDuration = 0.2;

  async function sequence() {
    await animationCard.start({
      y: 0,
      transition: {
        type: "spring",
        duration: 2,
      },
    });
    await flipCard();
    await animationPic.start({
      scale: 0,
      transition: {
        type: "spring",
        duration: 1,
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

  const cardFaces = {
    front: (
      <div className="h-full w-full overflow-hidden">
        {/* card image */}
        <motion.div
          animate={animationPic}
          initial={{ scale: initScale }}
          className="overflow-hidden"
        >
          <img
            className="w-full rounded-xl overflow-hidden mb-3 opacity-95"
            src="/ricky.jpg"
            alt=""
            draggable="false"
          />
        </motion.div>
        <motion.div animate={animationTitle} initial={{ scale: initScale }}>
          {/* card title */}
          <h1 className="text-2xl text-white mb-2 font-bold text-center">
            Ricky Cheuk
          </h1>
        </motion.div>
        <motion.div animate={animationSub} initial={{ scale: initScale }}>
          {/* card subtitle */}
          <p className="text-white mb-3 text-center">- Software Engineer -</p>
        </motion.div>
        <motion.div animate={animationLink} initial={{ scale: initScale }}>
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
        <motion.div animate={animationColor} initial={{ scale: initScale }}>
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
    ),
    back: (
      <div className="h-full	w-full flex justify-center items-center object-fill">
        <img
          className="h-full	w-full rounded-[22px] opacity-50 "
          src="/card_back.png"
          alt=""
          draggable="false"
        />
      </div>
    ),
  };

  return (
    // card wrapper
    <div className="flex flex-col w-screen justify-center h-screen items-center overflow-hidden">
      {/* card */}
      <motion.div
        animate={animationCard}
        initial={{ scale: 1, y: -1000 }}
        className="h-full	w-full overflow-hidden"
      >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div>
            <Tilt
              options={{ glare: true, "max-glare": 0.42, perspective: 420 }}
              className="rounded-[22px]"
              onClick={flipCard}
            >
              <div className="abolute w-[290px] h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 px-[22px] py-[22px] cursor-grab">
                {cardFaces.front}
              </div>
            </Tilt>
          </div>

          <div>
            <Tilt
              options={{ glare: true, "max-glare": 0.42, perspective: 420 }}
              className="rounded-[22px]"
              onClick={flipCard}
            >
              <div className="abolute w-[290px] h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 cursor-grab">
                {cardFaces.back}
              </div>
            </Tilt>
          </div>
        </ReactCardFlip>
      </motion.div>
    </div>
  );
};

export default Card;
