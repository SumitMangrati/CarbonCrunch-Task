import React from "react";
import HomeMap from "./HomeMap";
import GridContainer from "./GridContainer";
import HomeText from "./HomeText";

const Data = [
    { title: "Why Carboncrunch" },
    { heading: "Leading Sustainability with Carboncrunch" },
    { description: "GHG (Greenhouse Gas) Accounting is a framework used to measure and report greenhouse gas emissions." },
]
function Home2() {
  return (
    <div className="bg-[#f5f6f1]">

      <div>
        <div className="mt-20">
          {Data.map((item) => (
            <HomeText
              title={item.title}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div>
        <GridContainer />
      </div>
    </div>
  );
}

export default Home2;
