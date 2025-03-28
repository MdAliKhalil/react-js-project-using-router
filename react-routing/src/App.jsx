import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import Contact from './pages/contact'
import Map from './pages/contact/Map'

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/contact' element={<Contact />}>
            <Route path='map' element={<Map />}></Route>
          </Route>
        </Routes>
      </Layout>

    </div>
  )
}

export default App