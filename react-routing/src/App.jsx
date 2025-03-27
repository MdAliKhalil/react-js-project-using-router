import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import Contact from './pages/contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App