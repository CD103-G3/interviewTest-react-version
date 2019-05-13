import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navBar'
import Footer from './components/footer'
import Index from './components/Index'
import Product from './components/Product'

export default () => {

  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={ Index } />
      <Route path='/product/' component={ Product } />
      <Footer />
    </Router>
  )
}