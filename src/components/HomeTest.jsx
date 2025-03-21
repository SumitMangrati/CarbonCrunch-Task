import React from "react";
import HomeText from "./HomeText";
import GridContainer from './GridContainer'
import ExpandableBox from "./ExpandableBox";

const Data = [
  { title: "How It works?" },
  { heading: "Getting Started is easy" },
  { description: "How carboncrunch SAAS works" },
];
const GridData = [];


function HomeTest() {
  return (
    <div className="min-h-screen flex  gap-4 justify-center items-center bg-gray-100 p-10">
      <ExpandableBox 
        number="01" 
        title="Expandable Section" 
        description="This is a long paragraph that is initially hidden. Clicking on the box will expand it to show the full content. This ensures a neat UI where text remains compact until needed."
      />
      <ExpandableBox 
        number="02" 
        title="Another Section" 
        description="Another example of an expandable box. This keeps the UI clean while allowing users to reveal more content dynamically when needed."
      />
    </div>
  );
}

export default HomeTest;
