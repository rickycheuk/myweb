'use client';

import React from 'react';

// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-10, 10], [30, -30]);
  const rotateY = useTransform(x, [-10, 10], [-30, 30]);
  const rotateX2 = useTransform(y, [-9, 9], [29, -29]);
  const rotateY2 = useTransform(x, [-9, 9], [-29, 29]);

  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
  ];
 
  return (
    // card wrapper
    <div>
        <div  className='relative' style={{ perspective: 2000 }}>
        {/* card */}
        <motion.div
            style={{ x, y, rotateX, rotateY, z: 1 }}
            drag
            dragElastic={0.1}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className=' relative group'
        > 
            <div className="absolute inset-2 bg-sky-300 rounded-lg blur-xl opacity-0.20 group-hover:blur-3xl group-active:blur-3xl"></div>
            
            <motion.div
                style={{ x, y, rotateX, rotateY, z: 1 }}
                className="relative w-full mb-6"
            >
                <div className="absolute w-[426px] min-h-[700px] bg-black rounded-[30px] px-[40px] py-[24px] cursor-grab" ></div>

                <motion.div
                    style={{ x, y, rotateX2, rotateY2, z: 1 }}
                    className=" w-full rounded-lg overflow-hidden mb-6"
                >
                    <div className="w-[426px] min-h-[700px] bg-black rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative" >
                    {/* card image */}
                    <img className="w-full rounded-lg overflow-hidden mb-6" src="/ricky.jpg" alt='' draggable='false' />
                    {/* <motion.div
                    style={{ x, y, rotateX, rotateY, z: 200 }}
                    className="w-full rounded-lg overflow-hidden mb-6"
                    >
                    <img src="/ricky.jpg" alt='' draggable='false' />
                    </motion.div>  */}

                    {/* card title */}
                    <h1 className='text-3xl text-white mb-6 font-bold text-center'>Ricky Cheuk</h1>
                    {/* card subtitle */}
                    <p className='text-white mb-6 text-center'>- Description -</p>
                    {/* button wrapper */}
                    <div className='flex justify-center items-center gap-x-[20px] mb-6'> 
                    <button className='bg-[#2d2b2c] text-white text-base font-medium py-[20px] px-[20px] rounded-lg'>
                        Link1
                    </button>
                    <button className='bg-[#2d2b2c] text-white text-base font-medium py-[20px] px-[20px] rounded-lg'>
                        Link2
                    </button>
                    <button className='bg-[#2d2b2c] text-white text-base font-medium py-[20px] px-[20px] rounded-lg'>
                        Link3
                    </button>
                    </div>
                    {/* colors */}
                    <ul className='flex justify-center items-center gap-x-[10px]'>
                    {colors.map((color, index) => {
                        return (
                        <li
                            key={index} 
                            style={{ backgroundColor: color.value }}
                            className='w-8 h-8 rounded-full cursor-pointer'
                        ></li>
                        );
                    })}
                    </ul>
                </div>
                </motion.div>
 
            </motion.div>
            
           
        </motion.div>
        </div>
    </div>
  );
};

export default Card;