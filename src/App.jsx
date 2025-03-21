import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Trail from './components/Trail'
import Home2d from './pages/Home2d'
function App() {


  return (
    < BrowserRouter>
      < Routes>
        < Route path='/' element={< Home />} />
        < Route path='/2d' element={<Home2d />} />
        {/* < Route path='/' element={< Notes />} /> */}
      </ Routes>
    </ BrowserRouter>
  )
}

export default App
