import { FaLeaf, FaCloud, FaBolt, FaWater } from "react-icons/fa"; // Import Icons
import GridBox from "./GridBox"; // Import Reusable Component

export default function GridContainer() {
  // Data for Grid Items
  const gridData = [
    { icon: FaLeaf, title: "Regulatory Compliance and Reporting", description: "Promoting eco-friendly solutions for a better tomorrow." },
    { icon: FaCloud, title: "Meeting Sustainability Goals and Net-Zero Targets", description: "Understanding and mitigating climate change impacts." },
    { icon: FaBolt, title: "Cost Savings and Operationa Efficency", description: "Harnessing renewable energy sources efficiently." },
    { icon: FaWater, title: "Investor and Consumer Expectations", description: "Ensuring clean and accessible water for all." },
    { icon: FaWater, title: "Climate Risk Management", description: "Ensuring clean and accessible water for all." },
    { icon: FaWater, title: "Strengthening Brand Reputation and Market", description: "Ensuring clean and accessible water for all." },


  ];

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pt-2 max-w-6xl md:max-w-[90vw]  ">
        {gridData.map((item, index) => (
          <GridBox key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}
