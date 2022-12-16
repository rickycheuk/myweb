"use client";

import { useEffect, useState } from "react";
import Tilt from "./tilt";
import * as Icon from "react-feather";
import { motion, useAnimation } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import * as rdd from "react-device-detect";

const Card = () => {
  const colors = [
    { value: "#B9B9B9" },
    { value: "#877900" },
    { value: "#81003E" },
    { value: "#003B80" },
  ];
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const selectors = ["element0", "element1", "element2", "element3"];

  const [initScale, setScale] = useState(1);
  const [isFlipped, setFlip] = useState(true);
  const flipCard = () => {
    setFlip(!isFlipped);
    // setScale(1);
  };

  const animationCard = useAnimation();
  const animationPic = useAnimation();
  const animationTitle = useAnimation();
  const animationSub = useAnimation();
  const animationLink = useAnimation();
  const animationColor = useAnimation();
  const animationForm = useAnimation();
  const animationDuration = 0.2;

  async function sequence() {
    await animationCard.start({
      y: 0,
      transition: {
        type: "spring",
        duration: 1.69,
      },
    });
    await flipCard();
    await animationForm.start({
      scale: 0,
      transition: {
        type: "spring",
        duration: 0.69,
      },
    });
    await animationForm.start({
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
      <div className="overflow-hidden">
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
                  className="w-6 h-6 rounded-full"
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

  const validateCode = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    const code = selectors
      .map((selector) => event.target.querySelector("#" + selector).value)
      .join("");
    if (code == "0524") {
      alert("BRRRAVO!!! You have exceeded my expectations :)");
    } else if (code == "") {
      alert("Input is empty");
    } else {
      alert(`${code} is not the right code`);
    }
  };

  return (
    // card wrapper
    <div className="flex flex-col w-screen justify-center h-screen items-center overflow-hidden">
      {/* card */}
      <motion.div
        animate={animationCard}
        initial={{ scale: 1, y: -1000 }}
        className="flex flex-col w-screen justify-center h-screen items-center overflow-hidden"
      >
        {rdd.isIOS ? (
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={flipCard}>
              <div className="abolute w-[290px] h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 px-[22px] py-[22px] cursor-grab">
                {cardFaces.front}
              </div>
            </div>

            <div onClick={flipCard}>
              <div className="abolute w-[290px] h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 cursor-grab">
                {cardFaces.back}
              </div>
            </div>
          </ReactCardFlip>
        ) : (
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={flipCard}>
              <Tilt
                options={{ glare: true, "max-glare": 0.42, perspective: 690 }}
                className="rounded-[22px]"
              >
                <div className="abolute w-[290px] h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 px-[22px] py-[22px] cursor-grab">
                  {cardFaces.front}
                </div>
              </Tilt>
            </div>

            <div onClick={flipCard}>
              <Tilt
                options={{ glare: true, "max-glare": 0.42, perspective: 690 }}
                className="rounded-[22px]"
              >
                <div className="abolute w-[290px] h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 cursor-grab">
                  {cardFaces.back}
                </div>
              </Tilt>
            </div>
          </ReactCardFlip>
        )}
        <motion.div animate={animationForm} initial={{ scale: 0 }}>
          <form onSubmit={validateCode}>
            <div className="flex flex-col w-full justify-center h-[69pn] items-center overflow-hidden">
              <label
                htmlFor="code"
                className="text-slate-400 font-semibold mt-5 mb-3 text-lg text-center"
              >
                Find the hidden code on the card
              </label>
              {/* <input
                type="number"
                id="code"
                name="code"
                autoComplete="off"
                maxlength="4"
                placeholder="4 digit code"
                className="appearance-none w-40 mb-3 text-center text-2xl font-bold rounded-[5px] bg-slate-700 border-slate-800 placeholder-slate-200 text-white focus:ring-blue-500 focus:border-slate-100 placeholder:text-slate-400 placeholder:font-semibold placeholder:text-lg"
              /> */}
              <div className="flex justify-content-between align-items-center gap-x-[10px]">
                {selectors.map((selector) => (
                  <select
                    key={selector}
                    id={selector}
                    className="appearance-none form-select w-8 text-center mb-3 text-2xl font-bold rounded-[5px] bg-slate-700 border-slate-800 placeholder-slate-200 text-white focus:ring-blue-500 focus:border-slate-100"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ))}
              </div>
              <button className="bg-slate-700 hover:bg-slate-800 text-white text-lg font-semibold py-2 px-4 rounded-[5px]">
                Submit
              </button>
            </div>
          </form>
        </motion.div>

        <div className="p-5"></div>
      </motion.div>
    </div>
  );
};

export default Card;
