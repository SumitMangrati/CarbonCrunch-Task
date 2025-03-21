import React from "react";
import Navbar from "../components/Navbar";
import HomeMap from "../components/HomeMap";
import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import HomeTest from "../components/HomeTest";

function Home() {
  return (
    <>
      <div className="bg-[#f5f6f1]">
        <Navbar />
        <HomeMap />
        <Home2 />
        <Home3 />
        {/* <HomeTest/> */}
      </div>
      {/* <div><HomeMap/></div> */}
    </>
  );
}

export default Home;
