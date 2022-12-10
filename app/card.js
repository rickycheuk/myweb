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
    <div className='flex flex-col w-full justify-center h-[90vh] items-center overflow-hidden'>
        {/* card */}
        <Tilt options={{ glare: true , "max-glare":0.42, perspective: 420}}  className="rounded-[22px]">
            <div className="abolute min-w-[70px] min-h-[115px] max-w-[275px] max-h-[460px] bg-zinc-900/[.95] rounded-[22px] border-[2px] border-zinc-700 px-[22px] py-[22px] cursor-grab" >
                {/* card image */} 
                <img className="w-full rounded-xl overflow-hidden mb-3 opacity-95" src="./ricky.jpg" alt='' draggable='false' />
                {/* card title */}
                <h1 className='text-2xl text-white mb-2 font-bold text-center'>Ricky Cheuk</h1>
                {/* card subtitle */}
                <p className='text-white mb-3 text-center'>- Software Engineer -</p>
                {/* button wrapper */}
                <div className='flex justify-center items-center gap-x-[15px] mb-3'> 
                    <a href="https://www.linkedin.com/in/rickycheuk/" className='group bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg opacity-60 hover:opacity-100'>
                        <Icon.Linkedin className="group-hover:scale-125"/>
                    </a>  
                    <a href="https://github.com/rickycheuk/" className='group bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg opacity-60 hover:opacity-100'>
                        <Icon.GitHub className="group-hover:scale-125"/>
                    </a>
                    <a href="https://www.instagram.com/thlipperythnake/?hl=en" className='group bg-transparent text-white text-2xl py-[10px] px-[10px] rounded-lg opacity-60 hover:opacity-100'>
                        <Icon.Instagram className="group-hover:scale-125"/>
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
