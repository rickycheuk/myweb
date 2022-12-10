'use client';

import React from 'react';
import Tilt from './tilt';
import * as Icon from 'react-feather';

const Card = () => {
  const colors = [
    { value: '#ffffff' },
    { value: '#f2c758' },
    { value: '#b6a179' },
    { value: '#6389cb' },
    { value: '#272425' },
    { value: '#000000' },
  ];

  return (
    // card wrapper
    <div className='object-scale-down'>
        {/* card */}
        <Tilt options={{ glare: true , "max-glare":0.3, perspective: 420}}  className="rounded-[22px] object-scale-down">
            <div className="abolute min-w-[70px] min-h-[115px] max-w-[275px] max-h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 px-[22px] py-[22px] cursor-grab" >
                {/* card image */} 
                <img className="w-full rounded-xl overflow-hidden mb-3 opacity-95" src="./ricky.jpg" alt='' draggable='false' />
                {/* card title */}
                <h1 className='text-2xl text-white mb-2 font-bold text-center'>Ricky Cheuk</h1>
                {/* card subtitle */}
                <p className='text-white mb-3 text-center'>- Software Engineer -</p>
                {/* button wrapper */}
                <div className='flex justify-center items-center gap-x-[15px] mb-3'> 
                    <a rel="preload" href="https://www.linkedin.com/in/rickycheuk/" className='bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg'>
                        <Icon.Linkedin />
                    </a>
                    <a href="https://github.com/rickycheuk/" className='bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg'>
                        <Icon.GitHub />
                    </a>
                    <a href="https://www.instagram.com/thlipperythnake/?hl=en" className='bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg'>
                        <Icon.Instagram />
                    </a>
                </div>
                {/* colors */}
                <ul className='flex justify-center items-center gap-x-[10px]'>
                {colors.map((color, index) => {
                    return (
                    <li
                        key={index} 
                        style={{ backgroundColor: color.value }}
                        className='w-6 h-6 rounded-full cursor-pointer'
                    ></li>
                    );
                })}
                </ul>
            </div>
        </Tilt>

        </div>
  );
};

export default Card;
