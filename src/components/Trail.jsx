import React from "react";
import Spline from "@splinetool/react-spline";
import Button from "./Button";
function Trail() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <Spline
        className="absolute top-0 left-0 h-full w-full"
        scene="https://prod.spline.design/drqtJo5AHtj065ER/scene.splinecode"
      />
      <div className="relative z-10\ text-center text-black px-6  bg-opacity-70 p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          GHG Accounting
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
          Scope 1, Scope 2, Scope 3
        </h1>
        <p className="text-lg md:text-xl font-medium">
          Track, minimize, offset, and report your carbon emissions effortlessly
          to drive faster decarbonization progress.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Trail;
