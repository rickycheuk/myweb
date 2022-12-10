import React from "react"

import Card from './card';

function Home() { 
    return (
        <div className="flex flex-col w-full h-full items-center overflow-x-hidden">
          <div className='object-contain w-full h-[90vh] flex items-center justify-center'>
                  <Card />
          </div>
        </div>
        
    )
}
 
export default Home