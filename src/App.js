import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExcerciseDetail'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App