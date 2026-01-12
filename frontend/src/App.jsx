// import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import { Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
      </div>
      <main>
        <Route path="/" element={<Home />}></Route>
      </main>

    </Router>
  )
}

export default App
