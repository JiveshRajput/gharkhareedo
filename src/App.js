import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Layouts/Navbar/Navbar'
import Footer from './Layouts/Footer/Footer'
import HomePage from './Pages/Home/HomePage'
import FavPage from './Pages/Favourite/FavouritePage'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourite' element={<FavPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
