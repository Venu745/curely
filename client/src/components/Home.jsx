
import React from 'react'
import Navbar from './Navbar'
import Hero from '../pages/Hero'
import Services from '../pages/Services'
import Faq from '../pages/Faq'
import Footer from '../pages/Footer'
import Client from '../pages/Client'


const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero />
       <Services/>
       <Client/>
       <Faq/>
       <Footer/>
    </div>
  )
}

export default Home
