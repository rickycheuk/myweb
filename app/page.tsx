import React from "react";

import Card from "./card";

function Home() {
  return (
    <div className="flex flex-col w-full h-[90vh] justify-center items-center overflow-hidden relative">
      <div className="overflow-hidden  relative z-0">
        <Card />
      </div>
    </div>
  );
}
  
export default Home;
