'use client';

import React from 'react';
import Tilt from './tilt'


const Card = () => {
  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
    { value: '#000000' },
  ];

  return (
    // card wrapper
    <div className='object-scale-down'>
        {/* card */}
        <Tilt options={{ glare: true , "max-glare":0.3}}  className="rounded-[30px] object-scale-down">
            <div className="abolute min-w-[70px] min-h-[115px] max-w-[335px] max-h-[580px] bg-stone-900 rounded-[30px] border-[2px] border-stone-700 px-[30px] py-[30px] cursor-grab" >
                {/* card image */} 
                <img className="w-full rounded-xl overflow-hidden mb-6" src="./ricky.jpg" alt='' draggable='false' />
                {/* card title */}
                <h1 className='text-3xl text-white mb-3 font-bold text-center'>Ricky Cheuk</h1>
                {/* card subtitle */}
                <p className='text-white mb-6 text-center'>- Software Engineer -</p>
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
        </Tilt>

        </div>
  );
};

export default Card;
