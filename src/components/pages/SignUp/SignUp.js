import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import Footer from '../Footer/Footer'
import {homeObjOne} from './Data'

function Services() {
  return (
    <>
      <Pricing/>
      <HeroSection {...homeObjOne}/>
      <Footer/>
      </>
  )
}

export default Services
