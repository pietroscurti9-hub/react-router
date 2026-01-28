import { useState } from 'react'
import Homepage from './Pages/Homepage'
import Prodotti from "./Pages/Prodotti"
import ChiSiamo from './Pages/Chisiamo'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/Prodotti' element={<Prodotti />} />
          <Route path='/ChiSiamo' element={<ChiSiamo />} />



        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
