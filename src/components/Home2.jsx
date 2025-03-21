import React from 'react'
import HomeMap from './HomeMap'
import GridContainer from './GridContainer'
function Home2() {
  return (
    
    <div className='bg-[#f5f6f1]'>
        <div className='flex flex-col items-center pt-10'>
            <h2 
            className='bg-white text-[#28B30F] bg-font-bold text-sm font-medium px-3 py-1 rounded-md my-10'>
            Why Carboncrunch</h2>
            <h1 className='text-4xl font-bold mb-4 text-center'>Leading Sustainability with Carboncrunch</h1>
            <div className='text-center text-gray-500 mb-0'>
                <p>GHG (Greenhouse Gas) Accounting is a framework used to measure and</p>
                <p>report greenhouse gas emissions.</p>
            </div>
        </div>
        <div>
            <GridContainer />
        </div>
    </div>
  )
}

export default Home2