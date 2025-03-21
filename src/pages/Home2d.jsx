import React from "react";
import Navbar from "../components/Navbar";
import HomeMap from "../components/HomeMap";
import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import Trail from "../components/Trail";
import "./styles.scss"

function Home2d() {
  return (
    <div className="bg-[#f5f6f1] font-league">
        <Navbar />
        {/* <Trail /> */}
        <HomeMap />
        <Home2 />
        <Home3 />
        {/* <HomeTest/> */}
      </div>
  )
}

export default Home2d