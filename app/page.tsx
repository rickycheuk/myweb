import React from "react"
import Image from 'next/image'

import Card from './card2';

function Home() { 
    return (
        <div className="flex flex-col w-full h-full items-center overflow-x-hidden">
          <div className='object-contain w-full h-[70vh] bg-black flex items-center justify-center'>
                  <Card />
          </div>
        </div>
        
    )
}
 
export default Home