import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Footer from '../layouts/footer/Footer'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  )
}

export default Router
