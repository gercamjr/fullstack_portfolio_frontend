import ReactGa from 'react-ga'

import React from 'react'

import RouteChangeTracker from './components/RouteChangeTracker'

import { About, Footer, Header, Skills, Testimonials, Work } from './container'
import { Navbar } from './components'

import './App.scss'

const TRACKING_ID = 'G-J10WY67PXL'
ReactGa.initialize(TRACKING_ID)

const App = () => {
  return (
    <>
      <RouteChangeTracker />
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
