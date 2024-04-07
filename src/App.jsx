import React from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Places from './pages/Places'
import Footer from './components/Footer/Footer'
import up from './assets/up-arrow.png'
import Book from './pages/Book'
import Detail from './pages/Detail'

function App() {
  const scrolltop = () => {
    window.scrollTo({top:0, behaviour:'smooth'})
  }
  return (
   <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/places' element={<Places /> }/>
          <Route path='/detail' element={<Detail/> }>
            <Route path=':detailId' element={<Detail /> } />
          </Route>
          <Route path='/booknow' element={<Book /> } />
        </Routes>
        <Footer />
        <div className="upper-arrow" onClick={scrolltop}>
          <img src={up} alt="" />
        </div>
      </BrowserRouter>
   </div>
  )
}

export default App
