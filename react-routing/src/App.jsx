import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import Contact from './pages/contact'
import Map from './pages/contact/Map'
import JobsLayout from './layouts/JobsLayout'
import Jobs, { jobData } from './pages/jobs'
import NotFound from './components/NotFound'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='contact' element={<Contact />}>
          <Route path='map' element={<Map />} />
        </Route>
        <Route path='jobs' element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobData} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={routes} />

      {/* <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='contact' element={<Contact />}>
            <Route path='map' element={<Map />}></Route>
          </Route>
          <Route path='jobs' element={<JobsLayout />}>
            <Route index element={<Jobs />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes> */}
    </div >
  )
}

export default App