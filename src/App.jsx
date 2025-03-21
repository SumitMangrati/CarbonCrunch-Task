import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import LoginRegister from './pages/LoginRegister'
import Notes from './pages/Notes'
import Home from './pages/Home'
function App() {


  return (
    < BrowserRouter>
      < Routes>
        < Route path='/' element={< Home />} />
        {/* < Route path='/' element={< Notes />} /> */}
      </ Routes>
    </ BrowserRouter>
  )
}

export default App
