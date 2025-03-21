import React from "react";
import HomeText from "./HomeText";
import BoxContainer from "./BoxContainer";
import home3 from "../assets/home3.png";

const Data = [
  { title: "How It works?" },
  { heading: "Getting Started is easy" },
  { description: "How carboncrunch SAAS works" },
];
const GridData = [];

function Home3() {
  return (
    <div>
      <div className="bg-[#f5f6f1]  flex flex-col items-center">
        <div className="mt-20">
          {Data.map((item) => (
            <HomeText
              title={item.title}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
        <div className="mt-14 mb-20">
          <BoxContainer />
        </div>
        <div className="px-10">
          <div className="bg-gradient-to-b from-[#28B30F] to-white w-full p-10 md:p-14 pb-0 rounded-3xl rounded-b-none ">
            <img
              className="object-cover w-full h-[70vh] rounded-2xl"
              src={home3}
              alt=""
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-[#] to-white opacity-80"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3;
