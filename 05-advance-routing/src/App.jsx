import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='/product' element={<Product/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App