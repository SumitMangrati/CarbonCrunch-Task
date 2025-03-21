import React from 'react'
import ExpandableBox from './ExpandableBox'

const BoxData = [
    {number: "01", title: "Track and manage your Net Zero Pathway", description: "Set decarbonization targets, obtain insights on the amount of emissions to be emitted by the target year, and track progress over time."},
    {number: "02", title: "Identify and prioritize decarbonization opportunities", description: "Identify and prioritize decarbonization opportunities based on their potential to reduce emissions, cost, and feasibility."},
    {number: "03", title: "Collaborate with your team", description: "Invite team members to collaborate on the platform, assign tasks, and track progress."},
]

function BoxContainer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 px-10 pt-2 max-w-6xl md:max-w-[90vw]'>
        {BoxData.map((item , index) => (
            <ExpandableBox key = {index} number = {item.number} title = {item.title} description = {item.description} />
        ))}
    </div>
  )
}

export default BoxContainer