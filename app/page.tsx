import React from "react"
import Image from 'next/image'

import Card from './Card2';

function Home() { 
    return (
        // <div className="flex flex-col h-screen justify-center items-center">
        //     <div className="w-full" style={{ position: "relative", width: "40%",}}>
        //         <Image src="/ricky.jpg" alt="me" width="0" height="0" sizes="100vw" className="w-full h-auto" />
        //     </div>
        //     <div className="w-full text-white text-center">Ricky Cheuk</div> 
        // </div>
        <div className="flex flex-col w-full h-full items-center overflow-x-hidden">
          <div className='object-contain w-full h-screen bg-black flex items-center justify-center'>
                  <Card />
          </div>
        </div>
        
    )
}
 
export default Home